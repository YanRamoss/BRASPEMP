const instaClick = document.getElementById('insta');
const dev = document.getElementById('dev');
const logo = document.getElementById('logo_wrapper');
const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
const colorSwitch = document.getElementById('colorSwitch');
var a = document.getElementById('a');

var namesAndSocialMedias = ['Yan Ramos - @yanrmss\n', 'Vitor Carvalho - -/-\n', 'Daniel Alvarenga - -/-\n', 'Sofia Araújo - @sofi4_barros_\n', 'Artur Dizela - @mvp.dizela\n', 'Gustavo Belchior - @gxt_andrade\n', 'Pedro Henrique - @eu_pedro.13\n', 'Vinycius Wigner - @vinycius_wigner'];
var devs = ['---\nYan Ramos - @yanrmss\n', 'Vitor Carvalho - -/-\n---'];

instaClick.addEventListener('click', () =>{
    alert(namesAndSocialMedias.join(''));
})

dev.addEventListener('click', () =>{
    alert(devs.join(''));
})

if( prefersColorScheme.matches ) {
  // logo.innerHTML = "<img src='./img/logo_dark.png' alt='' id='logo'>";
  logo.innerHTML = "<img src='./img/logo.png' alt='' id='logo'>"; 
console.log('dark');
} else {
  logo.innerHTML = "<img src='./img/logo.png' alt='' id='logo'>"; 
console.log('ligh');
}

colorSwitch.addEventListener('click', () =>{
  
})