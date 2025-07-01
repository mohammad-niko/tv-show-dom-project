import { getSerials } from "./api.js";
import { renderCard, renderSkeletonCards } from "./ui.js";
import { isHome } from "./app.js";
export function handleScroll() {
  if (!isHome) return;
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.scrollHeight;

  if (scrollTop + windowHeight >= fullHeight - 0.5) {
    loadMoreMovies();
  }
}

export let counterPage = 0;
let isGeveData = false;
export async function loadMoreMovies() {
  if (isGeveData) return;
  isGeveData = true;
  counterPage++;
  try {
    const sectionParent = document.querySelector(".render-ipsodes");
    for (let i = 0; i < 8; i++) renderSkeletonCards(sectionParent, "inline");
    const dataApi = await getSerials(counterPage);
    dataApi.forEach((data) => renderCard(data, sectionParent));
  } catch (error) {
    console.log(error);
  } finally {
    isGeveData = false;
    const skeletons = document.querySelectorAll(".div-card-loading");
    skeletons.forEach((el) => el.remove());
  }
}
