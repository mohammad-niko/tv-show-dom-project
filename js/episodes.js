import { getEpisodesApi } from "./api.js";
import { renderEpisodesView } from "./ui.js";
import { setIsHomeView } from "./app.js";
export async function getSerialEpisodes(e) {
  const card = e.target.closest(".card-serial");
  if (!card) return;

  const episodeId = card.id;
  if (!episodeId) return;

  if (e.target.className.includes("card card-serial")) {
    const arrayOfEpisodes = await getEpisodesApi(episodeId);
    renderEpisodesView(arrayOfEpisodes);
    setIsHomeView(false);
    location.hash = `#/show/${episodeId}`;
  }
}

