
---

## 💡 Funcionalidades

✅ **Abas interativas** — Cada gênero musical tem sua própria aba (Rock, Pop, Hip Hop, Sertanejo, Eletrônica).  
✅ **Perfis no Spotify** — Cada artista tem link direto para seu perfil oficial no Spotify.  
✅ **Músicas tocáveis** — São incorporados players do Spotify com 5 faixas por artista.  
✅ **Design responsivo** — Adaptado para telas de celular, tablet e desktop.  
✅ **Paleta personalizada** — Fundo escuro com contrastes em laranja e branco.  

---

## 🎧 Gêneros Musicais Incluídos

O site contém (ou pode conter) os seguintes gêneros musicais, cada um com **26 artistas** (total de 130 artistas no site):

1. 🎸 **Rock**  
   - The Beatles  
   - Queen  
   - Nirvana  
   - Guns N' Roses  
   - Foo Fighters  
   - Linkin Park  
   - ... *(e mais 20 artistas)*  

2. 🎤 **Pop**  
   - Ariana Grande  
   - Dua Lipa  
   - Taylor Swift  
   - The Weeknd  
   - Harry Styles  
   - ... *(e mais 21 artistas)*  

3. 🎧 **Hip Hop**  
   - Kendrick Lamar  
   - Travis Scott  
   - Drake  
   - Eminem  
   - Kanye West  
   - ... *(e mais 21 artistas)*  

4. 🤠 **Sertanejo**  
   - Jorge & Mateus  
   - Marília Mendonça  
   - Gusttavo Lima  
   - Henrique & Juliano  
   - Maiara & Maraisa  
   - ... *(e mais 21 artistas)*  

5. 🎹 **Eletrônica**  
   - Martin Garrix  
   - Alok  
   - David Guetta  
   - Calvin Harris  
   - Tiësto  
   - ... *(e mais 21 artistas)*  

---

## 🧠 Como Executar o Projeto

1. **Baixe** todos os arquivos (`index.html`, `style.css`, `script.js` e `README.md`).
2. **Abra** o arquivo `index.html` em qualquer navegador (Chrome, Edge, Firefox, etc.).
3. **Navegue** entre as abas para explorar os gêneros musicais.
4. **Clique** nos nomes dos artistas para ir ao perfil deles no Spotify.
5. **Toque** as músicas diretamente pelo player incorporado no site.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** → Estrutura e conteúdo das páginas  
- **CSS3** → Estilização e responsividade  
- **JavaScript (ES6)** → Alternância de abas e interatividade  
- **Spotify Embeds** → Players musicais integrados  

---

## 🧩 Estrutura de Código (Resumo)

### `index.html`
- Contém o layout principal.
- Cada seção (`section`) representa um gênero musical.
- Cada artista é um `<div>` com:
  - Nome e link para o perfil do Spotify.
  - 5 iframes de músicas (embeds do Spotify).

### `style.css`
- Define a paleta laranja, preto e branco.
- Ajusta espaçamentos, botões e disposição dos players.
- Torna o design responsivo.

### `script.js`
- Faz as abas funcionarem.
- Mostra apenas a aba ativa e oculta as demais.

---

## 🔗 Exemplo de Estrutura de Artista

```html
<div class="artist">
  <h3><a href="https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2" target="_blank">The Beatles</a></h3>
  <div class="songs">
    <iframe src="https://open.spotify.com/embed/track/3Am0IbOxmvlSXro7N5iSfZ" width="300" height="80"></iframe>
    <iframe src="https://open.spotify.com/embed/track/7pbDxGE6nQSZVfiFdq9lOL" width="300" height="80"></iframe>
    <iframe src="https://open.spotify.com/embed/track/6dGnYIeXmHdcikdzNNDMm2" width="300" height="80"></iframe>
    <iframe src="https://open.spotify.com/embed/track/3BQHpFgAp4l80e1XslIjNI" width="300" height="80"></iframe>
    <iframe src="https://open.spotify.com/embed/track/4pbJqGIASGPr0ZpGpnWkDn" width="300" height="80"></iframe>
  </div>
</div>
