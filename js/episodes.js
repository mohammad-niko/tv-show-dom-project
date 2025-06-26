import { getEpisodesApi } from "./api.js";
import { renderEpisodesView ,renderSkeletonCards} from "./ui.js";
import { setIsHomeView } from "./app.js";

export async function getSerialEpisodes(e) {
  const card = e.target.closest(".card-serial");
  if (!card) return;

  const episodeId = card.id;
  if (!episodeId) return;

  location.hash = `#/show/${episodeId}`; 
}
