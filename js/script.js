const logo = document.getElementById('logo__wrapper');
const figure = document.getElementById('figure');
const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
const devButton = document.getElementById('devs');
const membersButton = document.getElementById('members');
var members = ['Yan Ramos - @yanrmss\n', 'Vitor Carvalho - -/-\n', 'Daniel Alvarenga - -/-\n', 'Sofia Araújo - @sofi4_barros_\n', 'Artur Dizela - @mvp.dizela\n', 'Gustavo Belchior - @gxt_andrade\n', 'Pedro Henrique - @eu_pedro.13\n', 'Vinycius Wigner - @vinycius_wigner'];
var devs = ['---\nYan Ramos - @yanrmss\n---'];
const switcher = document.getElementById('switcher');
const nav = document.getElementById('nav');

if( prefersColorScheme.matches ) {
    logo.innerHTML = "<img src='./img/logo_dark.png' alt='' id='braspemp'>";
    figure.innerHTML = "<img src='./img/planta_dark.png' alt='' id='planta'>";
    document.body.classList.toggle('dark__theme');
console.log('dark');
} else {
    logo.innerHTML = "<img src='./img/logo.png' alt='' id='braspemp'>"; 
    figure.innerHTML = "<img src='./img/planta.png' alt='' id='planta'>";
    document.body.classList.toggle('ligh__theme');
console.log('ligh');
}

devButton.addEventListener('click', ()=>{
    alert(devs.join(''));
})
membersButton.addEventListener('click', ()=>{
    alert(members.join(''));
})

switcher.addEventListener('click', () =>{
    alter();
    document.body.classList.toggle('light__theme');
    document.body.classList.toggle('dark__theme');
})

const alter = () =>{
    if(document.body.classList.contains('dark__theme')){
        console.log('1');
        figure.innerHTML = "<img src='./img/planta.png' alt='' id='planta'>";
        logo.innerHTML = "<img src='./img/logo.png' alt='' id='braspemp'>";
        console.log('Alterado para o tema claro');
    } else if(document.body.classList='light__theme'){
        console.log('2');
        figure.innerHTML = "<img src='./img/planta_dark.png' alt='' id='planta'>";
        logo.innerHTML = "<img src='./img/logo_dark.png' alt='' id='braspemp'>";
        console.log('Alterado para o tema escuro');
    }
}