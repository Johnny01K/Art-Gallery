// About
document.body.style.backgroundColor = 'rgb(255, 255, 255)';
const changeTheme = document.getElementById('change-theme');

changeTheme.addEventListener('click', switchTheme);

function switchTheme() {
    (document.body.style.backgroundColor === 'rgb(255, 255, 255)') ? document.body.style.backgroundColor = 'rgb(0, 0, 0)': document.body.style.backgroundColor = 'rgb(255, 255, 255)';
}