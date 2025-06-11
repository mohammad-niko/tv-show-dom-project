import { apiSearch } from "./api.js";
import { renderSearchEpisodes } from "./ui.js";
import { getDataAtApiFile } from "./app.js";
import { clearEpisodes } from "./ui.js";

export async function searchLive(e) {
  const query = e.target.value.trim().toLowerCase();
  console.log(query);
  if (query.length === 0) {
    getDataAtApiFile();
    clearEpisodes();
    return;
  }
    clearEpisodes();
  const result = await apiSearch(query);
  result.forEach(({ show }) => renderSearchEpisodes(show));

  result.forEach(({ show }) => console.log(show.image.medium));
}
