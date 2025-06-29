import {
  renderHomeView,
  clearEpisodes,
  renderEpisodesView,
  renderMovies,
  renderSkeletonCards,
} from "./ui.js";
import { getEpisodesApi, getSerials } from "./api.js";
import { setIsHomeView } from "./app.js";

window.addEventListener("hashchange", handleRoute);

export async function handleRoute() {
  try {
    const hash = location.hash || "#/";
    const dataSerials = await getSerials();
    const sectionParent = document.querySelector(".render-ipsodes");
    for (let i = 0; i < 8; i++) renderSkeletonCards(sectionParent, "inline");

    clearEpisodes();
    console.log("Hash changed to:", location.hash);

    if (hash === "#/" || hash === "") {
      renderHomeView();
      setIsHomeView(true);
      dataSerials.forEach((data) => renderMovies(data, sectionParent));
    } else if (hash.startsWith("#/show/")) {
      const id = hash.split("/")[2];
      const episodes = await getEpisodesApi(id);
      renderEpisodesView(episodes);
      setIsHomeView(false);
    }
  } catch (error) {
    console.log(error);
  } finally {
    const skeletons = document.querySelectorAll(".div-card-loading");
    skeletons.forEach((el) => el.remove());
  }
}
