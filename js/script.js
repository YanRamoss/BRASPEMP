const logo = document.getElementById("logo__wrapper");
const figure = document.getElementById("figure");
const prefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)");
const devButton = document.getElementById("devs");
const membersButton = document.getElementById("members");
var members = [
  "Yan Ramos - @yan_rmss\n",
  "Vitor Carvalho - -/-\n",
  "Daniel Alvarenga - -/-\n",
  "Sofia Araújo - @sofi4_barros_\n",
  "Artur Dizela - @mvp.dizela\n",
  "Gustavo Belchior - @gxt_andrade\n",
  "Pedro Henrique - @eu_pedro.13\n",
  "Vinycius Wigner - @vinycius_wigner",
];
var devs = ["---\nYan Ramos - @yan_rmss\n---"];
const switcher = document.getElementById("switcher");

if (prefersColorScheme.matches) {
  logo.innerHTML = "<img src='./img/logo_dark.png' alt='' id='braspemp'>";
  figure.innerHTML = "<img src='./img/planta_dark.png' alt='' id='planta'>";
  switcher.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Sunny</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"/><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>';
  document.body.classList.toggle("dark__theme");
  console.log("dark");
} else {
  logo.innerHTML = "<img src='./img/logo.png' alt='' id='braspemp'>";
  figure.innerHTML = "<img src='./img/planta.png' alt='' id='planta'>";
  switcher.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Moon</title><path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>';
  document.body.classList.toggle("ligh__theme");
  console.log("ligh");
}

devButton.addEventListener("click", () => {
  alert(devs.join(""));
});
membersButton.addEventListener("click", () => {
  alert(members.join(""));
});

switcher.addEventListener("click", () => {
  alter();
  document.body.classList.toggle("dark__theme");
});

const alter = () => {
  if (document.body.classList.contains("dark__theme")) {
    figure.innerHTML = "<img src='./img/planta.png' alt='' id='planta'>";
    logo.innerHTML = "<img src='./img/logo.png' alt='' id='braspemp'>";
    switcher.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Moon</title><path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>';
  } else if ((document.body.classList = "light__theme")) {
    figure.innerHTML = "<img src='./img/planta_dark.png' alt='' id='planta'>";
    logo.innerHTML = "<img src='./img/logo_dark.png' alt='' id='braspemp'>";
    switcher.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Sunny</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"/><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>';
  }
};
