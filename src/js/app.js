
const homeIcon = document.querySelector(".Home");

homeIcon.addEventListener("click",()=>{
  location.href="./index.html"
})

export let isHome = true;
export function setIsHomeView(value) {
  isHome = value;
}



