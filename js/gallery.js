// Gallery 
//photo-enlarging
document.body.style.backgroundColor = 'rgb(255, 255, 255)';
const changeTheme = document.getElementById('change-theme');
const modal = document.getElementById('myModal');
const myImg = document.getElementsByClassName('myimg');
const modalImg = document.getElementById('img01');
const captionText = document.getElementById('caption');

changeTheme.addEventListener('click', switchTheme);

for (let i = 0; i < myImg.length; i++) {
    const allImg = myImg[i];
    allImg.addEventListener('click', imgClick);
}
//myImg.addEventListener('click', imgClick);

function imgClick() {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
const span = document.getElementsByClassName('close')[0];

span.onclick = function () {
    modal.style.display = 'none';
}

function switchTheme() {
    (document.body.style.backgroundColor === 'rgb(255, 255, 255)') ? document.body.style.backgroundColor = 'rgb(0, 0, 0)': document.body.style.backgroundColor = 'rgb(255, 255, 255)';
}