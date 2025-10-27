const genres = {
  pop: [
    {
      name: "Anitta",
      profile: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Anitta_2019.jpg/800px-Anitta_2019.jpg",
      spotify: "https://open.spotify.com/embed/artist/2YZyLoL8N0Wb9xBt1NhZWg"
    },
    {
      name: "Taylor Swift",
      profile: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Taylor_Swift_2021.png/800px-Taylor_Swift_2021.png",
      spotify: "https://open.spotify.com/embed/artist/06HL4z0CvFAxyc27GXpf02"
    }
  ],
  funk: [
    {
      name: "Ludmilla",
      profile: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Ludmilla_2019.jpg/800px-Ludmilla_2019.jpg",
      spotify: "https://open.spotify.com/embed/artist/4VMYDCV2IEDYJArk749S6m"
    },
    {
      name: "MC Kevin o Chris",
      profile: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/MC_Kevin_o_Chris.jpg/800px-MC_Kevin_o_Chris.jpg",
      spotify: "https://open.spotify.com/embed/artist/5WUlDfRSoLAfcVSX1WnrxN"
    }
  ],
  internacional: [
    {
      name: "Ed Sheeran",
      profile: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Ed_Sheeran-6880_%28cropped%29.jpg/800px-Ed_Sheeran-6880_%28cropped%29.jpg",
      spotify: "https://open.spotify.com/embed/artist/6eUKZXaKkcviH0Ku9w2n3V"
    },
    {
      name: "Dua Lipa",
      profile: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Dua_Lipa_2021.png/800px-Dua_Lipa_2021.png",
      spotify: "https://open.spotify.com/embed/artist/6M2wZ9GZgrQXHCFfjv46we"
    }
  ]
};

const container = document.getElementById('genre-container');
const buttons = document.querySelectorAll('.genre-btn');

function loadGenre(genre) {
  container.innerHTML = '';
  genres[genre].forEach(artist => {
    const card = document.createElement('div');
    card.className = 'artist-card';
    card.innerHTML = `
      <img src="${artist.profile}" alt="${artist.name}">
      <h3>${artist.name}</h3>
      <iframe src="${artist.spotify}" width="280" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `;
    container.appendChild(card);
  });
}

// Inicializa com Pop
loadGenre('pop');

// Botões de navegação
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    loadGenre(btn.dataset.genre);
  });
});
