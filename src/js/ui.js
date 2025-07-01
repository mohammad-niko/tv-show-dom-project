import { shortenTitle } from "./Filter.js";
const main = document.querySelector("main");

export function renderHomeView() {
  main.innerHTML = "";

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

export function renderCard(data, elemnt) {
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

export function clearHome() {
  const img = document.querySelector(".img-main");
  const div = document.querySelector(".movies-side");

  if (img) img.remove();
  if (div) div.remove();

  const sectionParent = document.querySelector(".render-ipsodes");
  if (sectionParent) sectionParent.innerHTML = "";
}

export function renderSearchEpisodes(episodes) {
  const sectionParent = document.querySelector(".render-ipsodes");
  renderCard(episodes, sectionParent);
}

export function renderEpisodes(data, elemnt) {
  const divParent = document.createElement("div");
  divParent.classList.add("div-card-parent");
  elemnt.appendChild(divParent);

  const divCard = document.createElement("div");
  divCard.classList.add("card", "card-episode");
  divCard.style.backgroundImage = `url(${
    data.image?.original || data.image?.medium || "./images/default.jpg"
  })`;
  divCard.style.backgroundSize = "cover";
  divCard.style.backgroundPosition = "center";
  divCard.style.backgroundRepeat = "no-repeat";

  divCard.setAttribute("id", `${data.id}`);

  divParent.appendChild(divCard);

  const divBody = document.createElement("div");
  divBody.classList.add("episode-card-body");
  divBody.style.paddingBottom = "5px";
  divCard.appendChild(divBody);

  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.textContent = `${data.summary.replace(/<\/?p>/g, "")}`;
  divBody.appendChild(tooltip);

  const pRank = document.createElement("p");
  pRank.classList.add("show-rand");
  pRank.textContent = `S0${data.season}-E${data.number} | ${
    data.name.slice(0, 10) + "..."
  }`;
  pRank.style.color = "#fff";
  pRank.style.margin = 0;
  divBody.appendChild(pRank);

  const boxIcon = document.createElement("div");
  boxIcon.classList.add("box-icon");
  divBody.appendChild(boxIcon);

  const parentOfIcon = document.createElement("div");
  parentOfIcon.classList.add("parent-icon-play");
  boxIcon.appendChild(parentOfIcon);

parentOfIcon.addEventListener("click",()=>{
  window.open(data.url, "_blank");
})

  const iconOfplay = document.createElement("i");
  iconOfplay.classList.add("bi", "bi-play", "play-episode-icon");
  parentOfIcon.appendChild(iconOfplay);
}

export function renderSkeletonCards(elemnt, display) {
  const divLoding = document.createElement("div");
  divLoding.classList.add("div-card-loading");
  elemnt.appendChild(divLoding);

  divLoding.style.display = display;
}

export function showError(error) {
  const oldError = document.querySelector(".div-of-error");
  if (oldError) oldError.remove();

  const overlay = document.createElement("div");
  overlay.classList.add("error-overlay");
  document.body.appendChild(overlay);

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
  btnTry.classList.add("btn", "btn-try", "btn-errors");
  btnTry.textContent = "Try Again";
  parentOfBtns.appendChild(btnTry);

  btnTry.addEventListener("click", () => {
    overlay.remove();
    location.reload();
  });

  const btnOk = document.createElement("button");
  btnOk.classList.add("btn", "btn-ok", "btn-errors");
  btnOk.textContent = "OK";
  parentOfBtns.appendChild(btnOk);

  btnOk.addEventListener("click", () => {
    overlay.remove();
    divOfError.remove();
  });
}
