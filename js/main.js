// Home 
//photo-swap
document.body.style.backgroundColor = 'rgb(255, 255, 255)';
const digitalImg = document.getElementById('digital');
const classicImg = document.getElementById('classic');
const changeTheme = document.getElementById('change-theme');
const allDigital = ["art10.jpg", "art19.png", "art8.png", "art21.jpg", "art28.png"];
const allClassic = ["art5.png", "art9.jpg", "art1.jpg", "art11.png", "art3.png"];
let i = 1;
let k = 1;

changeTheme.addEventListener('click', switchTheme);
digitalImg.addEventListener('click', photoSwap);
classicImg.addEventListener('click', photoSwap2);

function photoSwap() {
    let allDig = allDigital[i];
    digitalImg.setAttribute('src', `img/vertical/${allDig}`);
    (i === allDigital.length - 1) ? i = 0: i++;
}

function photoSwap2() {
    let allClass = allClassic[k];
    classicImg.setAttribute('src', `img/vertical/${allClass}`);
    (k === allClassic.length - 1) ? k = 0: k++;
}

function switchTheme() {
    (document.body.style.backgroundColor === 'rgb(255, 255, 255)') ? document.body.style.backgroundColor = 'rgb(0, 0, 0)': document.body.style.backgroundColor = 'rgb(255, 255, 255)';
}