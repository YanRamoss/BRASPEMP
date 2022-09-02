var instaClick = document.getElementById('insta');
var dev = document.getElementById('dev');

var namesAndSocialMedias = ['Yan Ramos - @yanrmss\n', 'Vitor Carvalho - -/-\n', 'Daniel Rocha - -/-\n', 'Sofia Araújo - @sofi4_barros_\n', 'Artur Dizela - @mvp.dizela\n', 'Gustavo Andrade - @gxt_andrade\n', 'Pedro Henrique - @eu_pedro.13\n', 'Vinycius Wigner - @vinycius_wigner'];
var devs = ['---\nYan Ramos - @yanrmss\n', 'Vitor Carvalho - -/-\n---'];

instaClick.addEventListener('click', () =>{
    alert(namesAndSocialMedias.join(''));
})

dev.addEventListener('click', () =>{
    alert(devs.join(''));
})