// script.js — gera a interface de gêneros, artistas e players via embeds do Spotify
// Sem login, sem API: usamos embeds (iframe) do Spotify para tocar artistas/álbuns/playlists.
// Nota: o Spotify pode pedir login dentro do próprio player para reproduzir certas faixas.

const data = {
  pop: {
    name: 'Pop',
    playlists: [
      { title: 'Top Pop', embed: 'https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M' }
    ],
    artists: [
      { name: 'Taylor Swift', id: '06HL4z0CvFAxyc27GXpf02', img: 'https://i.scdn.co/image/ab6761610000e5ebe22b8d4a1f6a1b6d1a4d5c2a' },
      { name: 'Ariana Grande', id: '66CXWjxzNUsdJxJ2JdwvnR', img: 'https://i.scdn.co/image/ab6761610000e5ebc3c07f832b1b58f7a0e3a58b' },
      { name: 'Lana Del Rey', id: '00FQb4jTyendYWaN8pK0wa', img: 'https://i.scdn.co/image/ab6761610000e5eb3c9e0a4d0f8f6ff1b6a1b3d6' },
      { name: 'Dua Lipa', id: '6M2wZ9GZgrQXHCFfjv46we', img: 'https://i.scdn.co/image/ab6761610000e5eb264f4a7f6f7e8b5a2d8c4a1b' }
    ]
  },

  indie: {
    name: 'Indie',
    playlists: [
      { title: 'Indie Chill', embed: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX2yc0sT7l6ZE' }
    ],
    artists: [
      { name: 'Arctic Monkeys', id: '7Ln80lUS6He07XvHI8qqHH', img: 'https://i.scdn.co/image/ab6761610000e5eb54a0e9ce54c9b6501d15d3c9' },
      { name: 'Tame Impala', id: '5INjqkS1o8h1imAzPqGZBb', img: 'https://i.scdn.co/image/ab6761610000e5eb8f7d0a5d4f7a2e8c9d4b6e8a' },
      { name: 'Lorde', id: '163tK9Wjr9P9DmM0AVK7lm', img: 'https://i.scdn.co/image/ab6761610000e5eb7bb0a42197e4d3d43efc9c7f' }
    ]
  },

  rnb: {
    name: 'R&B',
    playlists: [
      { title: 'R&B Vibes', embed: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX4SBhb3fqCJd' }
    ],
    artists: [
      { name: 'The Weeknd', id: '1Xyo4u8uXC1ZmMpatF05PJ', img: 'https://i.scdn.co/image/ab6761610000e5eb52a7cb0f0ed9a4216cfddf0d' },
      { name: 'SZA', id: '7tYKF4w9nC0nq9CsPZTHyP', img: 'https://i.scdn.co/image/ab6761610000e5ebd4c278eedbb2c31a7a59f8b1' },
      { name: 'Frank Ocean', id: '2higuqAWqEw46sH6Lx7a2r', img: 'https://i.scdn.co/image/ab6761610000e5ebf7dfe5d2f7a5b9c2a2d6f4e1' }
    ]
  },

  rock: {
    name: 'Rock',
    playlists: [
      { title: 'Rock Classics', embed: 'https://open.spotify.com/embed/playlist/37i9dQZF1DWXRqgorJj26U' }
    ],
    artists: [
      { name: 'Queen', id: '1dfeR4HaWDbWqFHLkxsg1d', img: 'https://i.scdn.co/image/ab6761610000e5eb56f0d8c4edaa59a9c0d7c1c2' },
      { name: 'Nirvana', id: '6olE6TJLqED3rqDCT0FyPh', img: 'https://i.scdn.co/image/ab6761610000e5eb3f7dd2c6b38b94b8cecd5b86' },
      { name: 'Foo Fighters', id: '7jy3rLJdDQY21OgRLCZ9sD', img: 'https://i.scdn.co/image/ab6761610000e5eb0b3c9f5d4a2b8c6e3f9a1a2b' }
    ]
  },

  electro: {
    name: 'Eletrônica',
    playlists: [
      { title: 'Electronic Hits', embed: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX4dyzvuaRJ0n' }
    ],
    artists: [
      { name: 'Daft Punk', id: '4tZwfgrHOc3mvqYlEYSvVi', img: 'https://i.scdn.co/image/ab6761610000e5eb9412b6b0e546dc8b3dc95a39' },
      { name: 'Calvin Harris', id: '7CajNmpbOovFoOoasH2HaY', img: 'https://i.scdn.co/image/ab6761610000e5eb198b8d8f7a4df1b5cf3dc9b2' },
      { name: 'Deadmau5', id: '2CIMQHirSU0MQqyYHq0eOx', img: 'https://i.scdn.co/image/ab6761610000e5eb5a5a6f3a5b8c9d2e3f4b5a6c' }
    ]
  },

  mpb: {
    name: 'MPB',
    playlists: [
      { title: 'Clássicos da MPB', embed: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX6ziVCJnEm59' }
    ],
    artists: [
      { name: 'Caetano Veloso', id: '3dRfiQpB1hQF2j3tX8l5YJ', img: 'https://i.scdn.co/image/ab6761610000e5eb0b8f4c6b6a2f6a2c3b4d5e6f' },
      { name: 'Marisa Monte', id: '6z4NLXyHPga8Ek3zrB2Xxy', img: 'https://i.scdn.co/image/ab6761610000e5eb2b3c4d5e6f7a8b9c0d1e2f3a' },
      { name: 'Gilberto Gil', id: '0i9YvU5x4TQu7v3b1q2X9L', img: 'https://i.scdn.co/image/ab6761610000e5eb7c8b9a1d2e3f4a5b6c7d8e9f' }
    ]
  }
};

// --- DOM references ---
const tabs = document.querySelectorAll('.tab');
const gridArea = document.getElementById('gridArea');
const featuredList = document.getElementById('featuredList');
const playerEmbed = document.getElementById('playerEmbed');
const playerTitle = document.getElementById('playerTitle');
const playerSub = document.getElementById('playerSub');
const playerThumb = document.getElementById('playerThumb');
const openOnSpotifyBtn = document.getElementById('openOnSpotify');
const genrePlaylists = document.getElementById('genrePlaylists');
const playerArea = document.getElementById('playerArea');

// --- helpers ---
function createArtistCard(artist, genreKey){
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="thumb"><img src="${artist.img}" alt="${escapeHtml(artist.name)}"></div>
    <h3>${escapeHtml(artist.name)}</h3>
    <p>${escapeHtml(data[genreKey].name)}</p>
  `;
  card.addEventListener('click', () => loadArtist(artist));
  return card;
}

function escapeHtml(s){
  return String(s).replaceAll && typeof s.replaceAll === 'function'
    ? s.replaceAll('<','&lt;').replaceAll('>','&gt;')
    : s;
}

function artistEmbedUrl(id){
  return `https://open.spotify.com/embed/artist/${id}`;
}

// load artists for a genre
function loadGenre(genreKey){
  const genre = data[genreKey];
  // preencher grid
  gridArea.innerHTML = '';
  genre.artists.forEach(art => {
    gridArea.appendChild(createArtistCard(art, genreKey));
  });

  // featured: os primeiros 3 artistas
  featuredList.innerHTML = '';
  genre.artists.slice(0,3).forEach(art => {
    const d = document.createElement('div');
    d.className = 'featured-item';
    d.innerHTML = `
      <div class="featured-thumb"><img src="${art.img}" alt="${escapeHtml(art.name)}"></div>
      <div class="featured-meta"><h4>${escapeHtml(art.name)}</h4><p>Artista</p></div>
    `;
    d.addEventListener('click', ()=> loadArtist(art));
    featuredList.appendChild(d);
  });

  // playlists do gênero
  genrePlaylists.innerHTML = '';
  genre.playlists.forEach(p => {
    const pl = document.createElement('div');
    pl.className = 'playlist-item';
    pl.innerHTML = `<div style="flex:1"><strong>${escapeHtml(p.title)}</strong></div>
                    <div><button class="btn-spotify" data-embed="${p.embed}">Ouvir</button></div>`;
    genrePlaylists.appendChild(pl);
    pl.querySelector('button').addEventListener('click', (e) => {
      const embed = e.currentTarget.dataset.embed;
      loadEmbedUrl(embed);
      playerTitle.innerText = p.title;
      playerSub.innerText = genre.name + ' • Playlist';
      playerThumb.innerHTML = ''; // sem thumb específico
      openOnSpotifyBtn.href = embed.replace('/embed','');
      openOnSpotifyBtn.classList.remove('hidden');
    });
  });
}

// carrega o artista no player (embed)
function loadArtist(artist){
  // preencher header
  playerTitle.innerText = artist.name;
  playerSub.innerText = 'Artista';
  playerThumb.innerHTML = `<img src="${artist.img}" alt="${escapeHtml(artist.name)}">`;
  openOnSpotifyBtn.href = `https://open.spotify.com/artist/${artist.id}`;
  openOnSpotifyBtn.classList.remove('hidden');

  // inserir iframe do artista
  const embed = artistEmbedUrl(artist.id);
  loadEmbedUrl(embed);
}

// insere iframe no playerEmbed
function loadEmbedUrl(embedUrl){
  playerEmbed.innerHTML = '';
  const iframe = document.createElement('iframe');
  iframe.src = embedUrl;
  // artistas usam altura pequena; playlists/álbuns maior
  iframe.width = '100%';
  iframe.height = embedUrl.includes('/playlist/') || embedUrl.includes('/album/') ? '380' : '152';
  iframe.allow = 'encrypted-media; clipboard-write; autoplay; fullscreen; picture-in-picture';
  playerEmbed.appendChild(iframe);
}

// inicialização: carregar gênero padrão
function init(){
  // ativar tabs
  tabs.forEach(t => {
    t.addEventListener('click', () => {
      tabs.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      const g = t.dataset.genre;
      loadGenre(g);
    });
  });

  // carregar pop inicialmente
  loadGenre('pop');

  // exibir alguns em destaque globais (os primeiros artistas de cada gênero)
  const featured = [];
  Object.keys(data).forEach(k => {
    if (data[k].artists && data[k].artists[0]) featured.push({...data[k].artists[0], genre: k});
  });
  // preencher featured global se não houver muitos no lado esquerdo
  // (já preenchido por loadGenre quando trocar gêneros; aqui deixamos uma visão inicial)
}

// start
init();
