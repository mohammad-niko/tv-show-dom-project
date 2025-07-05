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

  const resultCount= document.createElement("div");
  resultCount.classList.add("result-count");
  resultCount.style.display="none";
  div.appendChild(resultCount)

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
  if (data.summary) {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.textContent = `${data.summary.replace(/<\/?p>/g, "")}`;
    divBody.appendChild(tooltip);
  }

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

  parentOfIcon.addEventListener("click", () => {
    window.open(data.url, "_blank");
  });

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

  const btnOk = document.createElement("button");
  btnOk.classList.add("btn", "btn-ok", "btn-errors");
  btnOk.textContent = "OK";
  parentOfBtns.appendChild(btnOk);

  btnOk.addEventListener("click", () => {
    overlay.remove();
    divOfError.remove();
  });
}

export function createSearchInput() {
  const inputParent = document.querySelector(".navbar-form");

  const searchInput = document.createElement("input");
  searchInput.classList.add("navbar-form-input");
  searchInput.type = "search";
  searchInput.placeholder = "Search movie";
  searchInput.setAttribute("aria-label", "Search");
  inputParent.appendChild(searchInput);

  const iconSearch = document.createElement("i");
  iconSearch.classList.add("bi", "bi-search", "search-icon");
  inputParent.appendChild(iconSearch);
}

export function createEpisodesInput() {
  const inputParent = document.querySelector(".navbar-form");

  const divParent = document.createElement("div");
  divParent.classList.add("custom-select");
  inputParent.appendChild(divParent);

  const selectedDiv = document.createElement("div");
  selectedDiv.classList.add("selected");
  selectedDiv.textContent = "All Episodes";
  divParent.appendChild(selectedDiv);

  const ul = document.createElement("ul");
  ul.classList.add("option");
  ul.style.display = "none";
  divParent.appendChild(ul);

  divParent.addEventListener("click", () => {
    ul.classList.toggle("active");
    if (ul.classList.contains("active")) {
      ul.style.display = "block";
    } else {
      ul.style.display = "none";
    }
  });

  const allEpisodes = document.createElement("li");
  allEpisodes.classList.add("options");
  allEpisodes.textContent = "All Episodes";
  ul.appendChild(allEpisodes);

  const iconSelect = document.createElement("i");
  iconSelect.classList.add("bi", "bi-chevron-down", "icon-select");
  inputParent.appendChild(iconSelect);
}

export function renderLiOfInputEpisodes(data) {
  const ul = document.querySelector(".option");

  data.forEach((ep) => {
    if (!ep) return;
    const others = document.createElement("li");
    others.setAttribute("id", `${ep.id}`);
    others.classList.add("options");
    others.textContent = `S0${ep.season}-E${ep.number} | ${
      ep.name.slice(0, 10) + "..."
    }`;
    ul.appendChild(others);
  });

  ul.addEventListener("click", (e) => {
    const sectionParent = document.querySelector(".render-ipsodes");
    const selectedDiv = document.querySelector(".selected");

    if (e.target.textContent === "All Episodes") {
      sectionParent.innerHTML = "";
      selectedDiv.textContent = "All Episodes";
      data.forEach((data) => renderEpisodes(data, sectionParent));
    } else if (e.target.textContent.includes("S0")) {
      console.dir(e.target.id);
      const sectionParent = document.querySelector(".render-ipsodes");
      const findEp = data.find((ep) => ep.id.toString() === e.target.id);
      if (!findEp) return;
      sectionParent.innerHTML = "";
      selectedDiv.textContent = e.target.textContent;
      renderEpisodes(findEp, sectionParent);
    }
  });
}
