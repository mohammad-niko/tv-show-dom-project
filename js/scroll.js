import { getSerials } from "./api.js";
import { renderMovies } from "./ui.js";
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

let counterPage = 0;
let isGeveData = false;
export async function loadMoreMovies() {
  if (isGeveData) return;
  isGeveData = true;
  counterPage++;
  try {
    const sectionParent = document.querySelector(".render-ipsodes");
    const dataApi = await getSerials(counterPage);
    dataApi.forEach((data) => renderMovies(data, sectionParent));
  } catch (error) {
    console.log(error);
  } finally {
    isGeveData = false;
  }
}
