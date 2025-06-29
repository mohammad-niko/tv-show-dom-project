import { getSerials } from "./api.js";
import { renderMovies, renderHomeView, renderSkeletonCards } from "./ui.js";
import { searchLive } from "./search.js";
import { getSerialEpisodes } from "./episodes.js";
import { handleScroll } from "./scroll.js";
const HomeIcon = document.querySelector(".Home")

export let isHome = true;
export function setIsHomeView(value) {
  isHome = value;
}

document.addEventListener("DOMContentLoaded", async () => {
  renderHomeView();
  const input = document.querySelector(".navbar-form-input");
  const sectionParent = document.querySelector(".render-ipsodes");
for(let i = 0 ; i < 8 ; i++) renderSkeletonCards(sectionParent,"inline")
  try {
    const data = await getSerials();
    data.forEach((data) => renderMovies(data, sectionParent));
    input.addEventListener("input", searchLive);

    sectionParent.addEventListener("click", getSerialEpisodes);
    window.addEventListener("scroll", handleScroll);
  } catch (error) {
    console.log(error);
  } finally {
  const skeletons = document.querySelectorAll(".div-card-loading");
  skeletons.forEach((el) => el.remove());
  }
});

HomeIcon.addEventListener("click",function(){
  location.href= "index.html"
})