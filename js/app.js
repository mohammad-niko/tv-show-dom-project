import { apiSearch, getSerials } from "./api.js";
import { renderMovies, renderSearchEpisodes, clearEpisodes } from "./ui.js";
import { searchLive } from "./search.js";
const input = document.querySelector(".navbar-form-input");

export async function getDataAtApiFile() {
  try {
    const data = await getSerials();
    const arr = [];
    for (let i = 0; i < 30; i++) {
      // console.log(data[i]);
      arr.push(data[i]);
    }
    arr.forEach((data) => renderMovies(data));
  } catch (error) {
    console.log(error);
  }
}
document.addEventListener("DOMContentLoaded", getDataAtApiFile);

input.addEventListener("input", searchLive);
