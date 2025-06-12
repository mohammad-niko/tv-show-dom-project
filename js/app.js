import { getSerials } from "./api.js";
import { renderMovies, renderHomeView } from "./ui.js";
import { searchLive } from "./search.js";
import { getSerialEpisodes } from "./episodes.js";
import { handleScroll } from "./scroll.js";
import { handleRoute } from "./router.js";

export let isHome = true;
export function setIsHomeView(value) {
  isHome = value;
}
console.log( location.hash);


document.addEventListener("DOMContentLoaded", async () => {
  try {
    renderHomeView();
    const input = document.querySelector(".navbar-form-input");
    const sectionParent = document.querySelector(".render-ipsodes");
    const data = await getSerials();
    data.forEach((data) => renderMovies(data, sectionParent));
    input.addEventListener("input", searchLive);

    sectionParent.addEventListener("click", getSerialEpisodes);
    window.addEventListener("scroll", handleScroll);
  } catch (error) {
    console.log(error);
  }
});


