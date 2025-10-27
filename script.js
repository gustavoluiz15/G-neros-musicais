// Dados simples por gênero (você pode expandir)
const genres = [
  {
    genre: "Pop",
    artists: [
      {
        name: "Dua Lipa",
        profile: "https://open.spotify.com/artist/6M2wZ9GZgrQXHCFfjv46we",
        track: "463CkQjx2Zk1yXoBuierM9"
      },
      {
        name: "Shawn Mendes",
        profile: "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
        track: "2QjOHCTQ1Jl3zawyYOpxh6"
      },
      {
        name: "Ed Sheeran",
        profile: "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V",
        track: "3e9HZxeyfWwjeyPAMmWSSQ"
      }
    ]
  },
  {
    genre: "R&B",
    artists: [
      {
        name: "SZA",
        profile: "https://open.spotify.com/artist/7tYKF4w9nC0nq9CsPZTHyP",
        track: "1RyvyyTE3xzB2ZywiAwp0i"
      },
      {
        name: "Khalid",
        profile: "https://open.spotify.com/artist/6LuN9FCkKOj5PcnpouEgny",
        track: "3e9HZxeyfWwjeyPAMmWSSQ"
      }
    ]
  },
  {
    genre: "Indie",
    artists: [
      {
        name: "Arctic Monkeys",
        profile: "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
        track: "3ZFTkvIE7kyPt6Nu3PEa7V"
      },
      {
        name: "Tame Impala",
        profile: "https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb",
        track: "4LLpKhyESsyAXpc4laK94U"
      }
    ]
  }
];

function el(tag, className, text) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (text) e.textContent = text;
  return e;
}

function createArtistCard(artist) {
  const card = el("div", "artist-card");
  const icon = el("div");
  icon.innerHTML = "🎧";
  const name = el("h3", null, artist.name);
  const link = el("a", "spotify-btn", "Perfil Spotify");
  link.href = artist.profile;
  link.target = "_blank";
  const player = document.createElement("iframe");
  player.src = `https://open.spotify.com/embed/track/${artist.track}`;
  player.height = "80";
  player.allow = "encrypted-media";

  card.append(name, link, player);
  return card;
}

function loadGenres() {
  const container = document.getElementById("genres");
  genres.forEach((g) => {
    const section = el("section");
    const title = el("h2", "section-title", g.genre);
    section.appendChild(title);

    const grid = el("div", "artist-grid");
    g.artists.forEach((a) => {
      grid.appendChild(createArtistCard(a));
    });
    section.appendChild(grid);
    container.appendChild(section);
  });
}

document.addEventListener("DOMContentLoaded", loadGenres);
