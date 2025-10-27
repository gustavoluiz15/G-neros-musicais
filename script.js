const data = [
  {
    genre: 'Pop',
    artists: [
      { name: 'Anitta', spotifyProfile: 'https://open.spotify.com/artist/7FNnA9vBm6EKceENgCGRMb' },
      { name: 'Dua Lipa', spotifyProfile: 'https://open.spotify.com/artist/6M2wZ9GZgrQXHCFfjv46we' },
      { name: 'Harry Styles', spotifyProfile: 'https://open.spotify.com/artist/6KImCVD70vtIoJWnq6nGn3' }
    ],
    songs: [
      { title: 'Levitating', spotifyEmbedId: '463CkQjx2Zk1yXoBuierM9' },
      { title: 'Watermelon Sugar', spotifyEmbedId: '6UelLqGlWMcVH1E5c4H7lY' },
      { title: 'Envolver', spotifyEmbedId: '6B4FZKRBgsbCjK1fQpc0hO' },
      { title: 'Dance The Night', spotifyEmbedId: '5CtI0qwDJkDQGwXD1H1cLb' },
      { title: 'As It Was', spotifyEmbedId: '4LRPiXqCikLlN15c3yImP7' }
    ]
  },
  {
    genre: 'Funk',
    artists: [
      { name: 'MC Kevin o Chris', spotifyProfile: 'https://open.spotify.com/artist/1oMiDFfKDbviT9xk2GBFcm' },
      { name: 'Ludmilla', spotifyProfile: 'https://open.spotify.com/artist/5S2YsoJvTWXHb5bB1Jz3xj' }
    ],
    songs: [
      { title: 'Evoluiu', spotifyEmbedId: '3ZRM3IzFBO2YwGc4xLmf2A' },
      { title: 'Verdinha', spotifyEmbedId: '1fxUwsOBEl7tIMq41bFdpZ' },
      { title: 'Tipo Gin', spotifyEmbedId: '2oxf8vvC4oWnE6jZcQ0C3J' },
      { title: 'Tá Tum Tum', spotifyEmbedId: '3sU6HBszf7bRrSx6h1MXIr' },
      { title: 'Vamos Pra Gaiola', spotifyEmbedId: '1v9DqE8cFvjJ5jUMb1xB3Z' }
    ]
  }
];

function el(tag, className, text) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (text) e.textContent = text;
  return e;
}

function buildSite() {
  const root = document.getElementById('root');
  data.forEach(section => {
    const sectionEl = el('section', 'genre-section');
    const header = el('h2', 'genre-title', section.genre);
    sectionEl.appendChild(header);

    const artistsRow = el('div', 'artists-row');
    section.artists.forEach(artist => {
      const card = el('div', 'artist-card');
      const img = el('div', 'artist-image', '🎤');
      card.appendChild(img);

      const name = el('h3', 'artist-name', artist.name);
      card.appendChild(name);

      const link = el('a', 'spotify-btn', 'Spotify');
      link.href = artist.spotifyProfile;
      link.target = '_blank';
      card.appendChild(link);

      artistsRow.appendChild(card);
    });
    sectionEl.appendChild(artistsRow);

    const songsWrap = el('div', 'songs-wrap');
    const songsTitle = el('h4', 'songs-title', 'Top 5 músicas');
    songsWrap.appendChild(songsTitle);

    section.songs.forEach(song => {
      const songEl = el('div', 'song-item');
      const title = el('div', 'song-title', song.title);
      songEl.appendChild(title);
      const iframe = document.createElement('iframe');
      iframe.src = `https://open.spotify.com/embed/track/${song.spotifyEmbedId}`;
      iframe.width = '300';
      iframe.height = '80';
      iframe.allow = 'encrypted-media';
      songEl.appendChild(iframe);
      songsWrap.appendChild(songEl);
    });

    sectionEl.appendChild(songsWrap);
    root.appendChild(sectionEl);
  });
}

document.addEventListener('DOMContentLoaded', buildSite);

