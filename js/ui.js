const sectionParent = document.querySelector(".render-ipsodes");

export function renderMovies(data) {
  const divParent = document.createElement("div");
  divParent.classList.add("div-card-parent");
  sectionParent.appendChild(divParent);

  const divCard = document.createElement("div");
  divCard.classList.add("card", "card-serial");
  divCard.style.backgroundImage = `url(${data.image.medium})`;
  divCard.style.backgroundSize = "cover";
  divCard.style.backgroundPosition = "center";
  divCard.style.height = "300px";
  divParent.appendChild(divCard);

  const divBody = document.createElement("div");
  divBody.classList.add("card-body");
  divBody.style.paddingBottom = "5px";
  divCard.appendChild(divBody);

  const h5 = document.createElement("h5");
  h5.classList.add("card-title");
  h5.textContent = `${data.name}`;
  h5.style.color = "#fff";
  divBody.appendChild(h5);

  const pGenres = document.createElement("p");
  pGenres.classList.add("card-text");
  pGenres.textContent = data.genres.join(" | ");
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
  sectionParent.innerHTML = "";
}


export function renderSearchEpisodes(episodes) {
renderMovies(episodes)
}
