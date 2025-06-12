import { apiSearch } from "./api.js";
import { renderSearchEpisodes } from "./ui.js";
import { clearEpisodes } from "./ui.js";
const sectionParent = document.querySelector(".render-ipsodes");
export async function searchLive(e) {
  try {
    const query = e.target.value.trim().toLowerCase();
    clearEpisodes();
    if (query.length === 0) {
       location.reload();
       setIsHomeView(true)
      return;
    }
    const result = await apiSearch(query);
    result.forEach(({ show }) => renderSearchEpisodes(show));
    // result.forEach(({ show }) => console.log(show.image.medium));
  } catch (error) {
    console.log(error);
  }
}
