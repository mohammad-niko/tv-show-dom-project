import { shortenTitle } from "./Filter.js";
const main = document.querySelector("main");

export function renderHomeView() {
  const img = document.createElement("img");
  img.classList.add("img-main", "responsive");
  img.src = "./images/Assassins-Creed-Games.jpg";
  img.alt = "Assassins-Creed";
  main.insertAdjacentElement("afterbegin", img);

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
  const sectionParent = document.querySelector(".render-ipsodes ");

  img.style.display = "none";
  div.style.display = "none";

  clearEpisodes();

  episodes.forEach((data) => renderEpisodes(data, sectionParent));
}

export function renderEpisodes(data, elemnt) {
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
  // divBody.classList.add("");
  divBody.style.paddingBottom = "5px";
  divCard.appendChild(divBody);

  const pRank = document.createElement("p");
  pRank.classList.add("show-rand");
  pRank.textContent = `S0${data.season}-E${data.number} | ${data.name}`;
  pRank.style.color = "#fff";
  pRank.style.margin = 0;
  divBody.appendChild(pRank);

  const parentOfIcon = document.createElement("div");
  parentOfIcon.classList.add("parent-icon-play");
  divCard.appendChild(parentOfIcon);

  const iconOfplay = document.createElement("i");
  iconOfplay.classList.add("bi", "bi-play-fill", "play-icon");
  parentOfIcon.appendChild(iconOfplay);
}

export function renderSkeletonCards(elemnt, display) {
  const divLoding = document.createElement("div");
  divLoding.classList.add("div-card-loading");
  elemnt.appendChild(divLoding);

  divLoding.style.display = display;
}

export function showError(error) {
  const divOfError = document.createElement("div");
  divOfError.classList.add("div-of-error");
  main.appendChild(divOfError);

  const p = document.createElement("p");
  p.classList.add("p-Of-error");
  p.textContent = error;
  p.style.fontSize = "1.3rem";
  divOfError.appendChild(p);

  const parentOfBtns = document.createElement("div");
  parentOfBtns.classList.add("parent-of-btns");
  divOfError.appendChild(parentOfBtns);

  const btnTry = document.createElement("button");
  btnTry.classList.add("btn", "btn-try","btn-errors");
  btnTry.textContent = "Try Agin";
  parentOfBtns.appendChild(btnTry);

  btnTry.addEventListener("click",()=>{
   location.reload()
  })

  const btnOk = document.createElement("button");
  btnOk.classList.add("btn", "btn-ok","btn-errors");
  btnOk.textContent = "OK";
  parentOfBtns.appendChild(btnOk);

  btnOk.addEventListener("click",()=>{
    divOfError.remove()
  })
}



 
