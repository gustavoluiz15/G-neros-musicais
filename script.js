// script.js — funcionalidade sem login
// Abreços: este script NÃO usa a API do Spotify. Ele:
// - renderiza lista de populares
// - filtra localmente por texto
// - aceita um link do Spotify (artist/track/album/playlist) e insere o embed apropriado
// - ao clicar em item popular, insere o embed do artista

const popularArtists = [
  {
    name: "Lana Del Rey",
    spotifyUrl: "https://open.spotify.com/artist/00FQb4jTyendYWaN8pK0wa",
    img: "https://i.scdn.co/image/ab6761610000e5eb3c9e0a4d0f8f6ff1b6a1b3d6"
  },
  {
    name: "Taylor Swift",
    spotifyUrl: "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02",
    img: "https://i.scdn.co/image/ab6761610000e5ebe22b8d4a1f6a1b6d1a4d5c2a"
  },
  {
    name: "Ariana Grande",
    spotifyUrl: "https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR",
    img: "https://i.scdn.co/image/ab6761610000e5ebc3c07f832b1b58f7a0e3a58b"
  },
  {
    name: "The Weeknd",
    spotifyUrl: "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ",
    img: "https://i.scdn.co/image/ab6761610000e5eb52a7cb0f0ed9a4216cfddf0d"
  },
  {
    name: "Daft Punk",
    spotifyUrl: "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi",
    img: "https://i.scdn.co/image/ab6761610000e5eb9412b6b0e546dc8b3dc95a39"
  },
  {
    name: "Coldplay",
    spotifyUrl: "https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU",
    img: "https://i.scdn.co/image/ab6761610000e5eb4b9a3f9f7d4b9b4d6b4f8c3a"
  }
];

// elementos
const popularListEl = document.getElementById('popularList');
const globalSearchEl = document.getElementById('globalSearch');
const resultsSection = document.getElementById('results');
const artistCardEl = document.getElementById('artistCard');
const embedAreaEl = document.getElementById('embedArea');
const spotifyUrlEl = document.getElementById('spotifyUrl');
const embedBtn = document.getElementById('embedBtn');
const openSpotifySearchBtn = document.getElementById('openSpotifySearch');

// render inicial
function renderPopular(list = popularArtists) {
  popularListEl.innerHTML = '';
  list.forEach(item => {
    const div = document.createElement('div');
    div.className = 'popular-item';
    div.innerHTML = `
      <div class="popular-thumb"><img src="${item.img}" alt="${escapeHtml(item.name)}"></div>
      <div class="popular-meta">
        <h4>${escapeHtml(item.name)}</h4>
        <p>Artista</p>
      </div>
    `;
    div.addEventListener('click', () => selectArtist(item));
    popularListEl.appendChild(div);
  });
}

function escapeHtml(s) {
  return s.replaceAll && typeof s.replaceAll === 'function' ? s.replaceAll('<','&lt;').replaceAll('>','&gt;') : s;
}

// seleciona artista popular
function selectArtist(item) {
  resultsSection.classList.remove('hidden');
  artistCardEl.innerHTML = `
    <img src="${item.img}" alt="${escapeHtml(item.name)}" />
    <div class="artist-info">
      <h2>${escapeHtml(item.name)}</h2>
      <p>Artista</p>
      <p><a href="${item.spotifyUrl}" target="_blank" rel="noopener">Abrir no Spotify</a></p>
    </div>
  `;
  // insere embed do artista
  embedSpotifyUrl(item.spotifyUrl);
  // limpa campo de url
  spotifyUrlEl.value = '';
}

// converte URL normal do Spotify para a versão /embed/...
function makeEmbedUrl(url) {
  if (!url) return null;
  try {
    // aceitar formatos com query params
    const u = new URL(url);
    // caminho: /artist/{id}, /track/{id}, /album/{id}, /playlist/{id}
    const parts = u.pathname.split('/').filter(Boolean);
    if (parts.length >= 2) {
      const type = parts[0];
      const id = parts[1].split('?')[0];
      if (['artist','track','album','playlist','show','episode'].includes(type)) {
        return `https://open.spotify.com/embed/${type}/${id}`;
      }
    }
    // também aceitar URLs tipo open.spotify.com/search/... -> não embutível
    return null;
  } catch(e) {
    return null;
  }
}

// inserir iframe no embedArea
function embedSpotifyUrl(url) {
  const embed = makeEmbedUrl(url);
  embedAreaEl.innerHTML = '';
  if (!embed) {
    embedAreaEl.innerHTML = `<div class="embed-placeholder">URL inválida ou não embutível. Tente colar o link direto do artista/track/album/playlist (ex: https://open.spotify.com/artist/{id}). Você também pode usar o botão \"Pesquisar no Spotify\".</div>`;
    return;
  }
  // criar iframe para o embed
  const iframe = document.createElement('iframe');
  iframe.src = embed;
  // altura mais alta para playlists; para artistas o player exibe top tracks, etc.
  iframe.height = (embed.includes('/playlist/') || embed.includes('/album/')) ? '380' : '152';
  iframe.setAttribute('allow', 'encrypted-media; clipboard-write; fullscreen; autoplay; picture-in-picture');
  embedAreaEl.appendChild(iframe);
}

// evento do botão embed / tecla Enter
embedBtn.addEventListener('click', () => {
  const url = spotifyUrlEl.value.trim();
  if (!url) return;
  // se for apenas um nome (sem https), abrir busca no spotify em nova aba
  if (!url.startsWith('http')) {
    window.open('https://open.spotify.com/search/' + encodeURIComponent(url), '_blank');
    return;
  }
  // se for URL, inserir embed
  resultsSection.classList.remove('hidden');
  artistCardEl.innerHTML = `<div class="artist-info"><h2>Embed</h2><p>Reproduzindo: ${escapeHtml(url)}</p></div>`;
  embedSpotifyUrl(url);
});

// permitir Enter no campo
spotifyUrlEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    embedBtn.click();
  }
});

// busca local entre populares
globalSearchEl.addEventListener('input', () => {
  const q = globalSearchEl.value.trim().toLowerCase();
  if (!q) {
    renderPopular();
    return;
  }
  const filtered = popularArtists.filter(p => p.name.toLowerCase().includes(q));
  renderPopular(filtered);
});

// ao clicar "Pesquisar no Spotify", abrir a busca no site do Spotify com o termo atual
openSpotifySearchBtn.addEventListener('click', () => {
  const q = globalSearchEl.value.trim();
  const term = q ? q : '';
  window.open('https://open.spotify.com/search/' + encodeURIComponent(term), '_blank');
});

// comportamento inicial
renderPopular();

// Se o usuário colar o link via menu do navegador sem clicar, também escutamos paste global (opcional)
spotifyUrlEl.addEventListener('paste', (e) => {
  // permitir comportamento normal; o Enter ou Embed fará o trabalho
});

// extra: detectar se a página foi aberta com um URL Spotify (por ex. ao arrastar/abrir), e auto-embed
(function autoEmbedFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const s = params.get('spotify');
  if (s) {
    spotifyUrlEl.value = s;
    embedBtn.click();
  }
})();
