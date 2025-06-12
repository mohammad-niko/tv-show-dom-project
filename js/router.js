import { renderHomeView, clearEpisodes, renderEpisodesView } from "./ui.js";
import { getEpisodesApi } from "./api.js";
import { setIsHomeView } from "./app.js";

window.addEventListener("hashchange", handleRoute);


export async function handleRoute() {
  const hash = location.hash || "#/";
  clearEpisodes();

  if (hash === "#/" || hash === "") {
    renderHomeView();
    setIsHomeView(true);
  } else if (hash.startsWith("#/show/")) {
    const id = hash.split("/")[2];
    const episodes = await getEpisodesApi(id);
    renderEpisodesView(episodes);
    setIsHomeView(false);
  }
}