var instaClick = document.getElementById('insta');
var dev = document.getElementById('dev');
var logo = document.getElementById('logo_wrapper');

var namesAndSocialMedias = ['Yan Ramos - @yanrmss\n', 'Vitor Carvalho - -/-\n', 'Daniel Alvarenga - -/-\n', 'Sofia Araújo - @sofi4_barros_\n', 'Artur Dizela - @mvp.dizela\n', 'Gustavo Belchior - @gxt_andrade\n', 'Pedro Henrique - @eu_pedro.13\n', 'Vinycius Wigner - @vinycius_wigner'];
var devs = ['---\nYan Ramos - @yanrmss\n', 'Vitor Carvalho - -/-\n---'];

instaClick.addEventListener('click', () =>{
    alert(namesAndSocialMedias.join(''));
})

dev.addEventListener('click', () =>{
    alert(devs.join(''));
})

const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

if( prefersColorScheme.matches ) {
  // O tema é o dark
  logo.innerHTML = "<img src='./img/logo_dark.png' alt='' id='logo'>";
console.log('dark');
} else {
  // O tema é o light
  logo.innerHTML = "<img src='./img/logo.png' alt='' id='logo'>"; 
console.log('ligh');
}