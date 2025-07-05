import { apiSearch } from "./api.js";
import { renderSearchEpisodes } from "./ui.js";
import { clearEpisodes, renderSkeletonCards } from "./ui.js";
import { setIsHomeView ,} from "./app.js";


export function debounce( delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      searchLive.apply(this, args);
    }, delay);
  };
}


export async function searchLive(e) {
  try {
    const query = e.target.value.trim().toLowerCase();
    clearEpisodes();
    const sectionParent = document.querySelector(".render-ipsodes");
    for (let i = 0; i < 8; i++) renderSkeletonCards(sectionParent, "inline");
    if (query.length === 0) {
      location.reload();
      setIsHomeView(true);
      return;
    }
    setIsHomeView(false)
    const result = await apiSearch(query);
    result.forEach(({ show }) => renderSearchEpisodes(show));

    const resultCount = document.querySelector(".result-count");
    resultCount.style.display="inline";
    resultCount.textContent=`Result=${result.length}`
  } catch (error) {
    console.log(error);
  } finally {
    const skeletons = document.querySelectorAll(".div-card-loading");
    skeletons.forEach((el) => el.remove());
  }
}


