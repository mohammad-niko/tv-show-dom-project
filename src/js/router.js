import {
  renderHomeView,
  renderCard,
  renderSkeletonCards,
  renderEpisodes,
  clearHome,
  createSearchInput,
  createEpisodesInput,
  renderLiOfInputEpisodes,
} from "./ui.js";
import { getEpisodesApi, getSerials } from "./api.js";
import { setIsHomeView } from "./app.js";

import { searchLive } from "./search.js";
import { getSerialEpisodes } from "./episodes.js";
import { handleScroll } from "./scroll.js";

window.addEventListener("DOMContentLoaded", handleRoute);
window.addEventListener("hashchange", handleRoute);
// window.addEventListener("popstate", handleRoute);

export async function handleRoute() {
  try {
    const hash = location.hash || "#/";
    //HOME VIEW:
    if (hash === "#/" || hash === "") {
      setIsHomeView(true);
      renderHomeView();
      createSearchInput();

      const sectionParent = document.querySelector(".render-ipsodes");
      for (let i = 0; i < 8; i++) renderSkeletonCards(sectionParent, "inline");

      const data = await getSerials();
      data.forEach((data) => renderCard(data, sectionParent));

      const input = document.querySelector(".navbar-form-input");
      input.addEventListener("input", searchLive);

      window.addEventListener("scroll", handleScroll);
      sectionParent.addEventListener("click", getSerialEpisodes);
    } else if (hash.startsWith("#/show/")) {
      //Episodes Viwe
      setIsHomeView(false);
      clearHome();

      const inputParent = document.querySelector(".navbar-form");
      inputParent.innerHTML = "";
      createEpisodesInput();
      const sectionParent = document.querySelector(".render-ipsodes");
      for (let i = 0; i < 8; i++) renderSkeletonCards(sectionParent, "inline");

      sectionParent.removeEventListener("click", getSerialEpisodes);

      const id = hash.split("/")[2];
      const episodes = await getEpisodesApi(id);
      episodes.forEach((data) => renderEpisodes(data, sectionParent));
      renderLiOfInputEpisodes(episodes)
    }
  } catch (error) {
    console.log(error);
  } finally {
    const skeletons = document.querySelectorAll(".div-card-loading");
    skeletons.forEach((el) => el.remove());
  }
}
