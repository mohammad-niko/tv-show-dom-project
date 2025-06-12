import { shortenTitle } from "./Filter.js";
const main = document.querySelector("main");

export function renderHomeView() {
  const img = document.createElement("img");
  img.classList.add("img-main", "responsive");
  img.src = "./images/Assassins-Creed-Games.jpg";
  img.alt = "Assassins-Creed";
  main.appendChild(img);

  const div = document.createElement("div");
  div.classList.add("movies-side", "responsive");
  div.textContent = "MOVIES";
  main.appendChild(div);

  const section = document.createElement("section");
  section.classList.add("render-ipsodes", "responsive");
  main.appendChild(section);
}

export function renderMovies(data, elemnt) {
  const divParent = document.createElement("div");
  divParent.classList.add("div-card-parent");
  elemnt.appendChild(divParent);

  const divCard = document.createElement("div");
  divCard.classList.add("card", "card-serial");
  divCard.style.backgroundImage = `url(${
    data.image?.medium || "./images/default.jpg"
  })`;
  divCard.style.backgroundSize = "cover";
  divCard.style.backgroundPosition = "center";
  divCard.style.height = "300px";
  divCard.setAttribute("id", `${data.id}`);
  divParent.appendChild(divCard);

  const divBody = document.createElement("div");
  divBody.classList.add("card-body");
  divBody.style.paddingBottom = "5px";
  divCard.appendChild(divBody);

  const h5 = document.createElement("h5");
  h5.classList.add("card-title");
  h5.textContent = `${shortenTitle(data.name)}`;
  h5.style.color = "#fff";
  divBody.appendChild(h5);

  const pGenres = document.createElement("p");
  pGenres.classList.add("card-text");
  pGenres.textContent = Array.isArray(data.genres)
    ? data.genres.join(" | ")
    : "No genre";
  pGenres.style.color = "#fff";
  pGenres.style.fontSize = "0.8rem";
  divBody.appendChild(pGenres);

  const pRank = document.createElement("p");
  pRank.classList.add("show-rand");
  pRank.textContent = data.rating.average;
  pRank.style.color = "#fff";
  pRank.style.margin = 0;
  divBody.appendChild(pRank);
}

export function clearEpisodes() {
  const sectionParent = document.querySelector(".render-ipsodes");
  sectionParent.innerHTML = "";
}

export function renderSearchEpisodes(episodes) {
  const sectionParent = document.querySelector(".render-ipsodes");
  renderMovies(episodes, sectionParent);
}

export function renderEpisodesView(episodes) {
  const img = document.querySelector(".img-main");
  const div = document.querySelector(".movies-side");
  const sectionParent = document.querySelector(".render-ipsodes");

  img.style.display = "none";
  div.style.display = "none";

  clearEpisodes();
  episodes.forEach((data) => renderMovies(data, sectionParent));
}
