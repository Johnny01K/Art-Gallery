// Contact
document.body.style.backgroundColor = 'rgb(255, 255, 255)';
const changeTheme = document.getElementById('change-theme');

changeTheme.addEventListener('click', switchTheme);

function switchTheme() {
    (document.body.style.backgroundColor === 'rgb(255, 255, 255)') ? document.body.style.backgroundColor = 'rgb(0, 0, 0)': document.body.style.backgroundColor = 'rgb(255, 255, 255)';
}

// Checkboxes
const allCheckbox = document.querySelectorAll('input[type="checkbox"]');
const infoCheckbox = document.querySelectorAll('.info-checkbox');
const infoFormat1 = document.getElementById('info-format1');
const infoFormat2 = document.getElementById('info-format2');
const infoFormat1b = document.getElementById('info-format1b');
const infoFormat2b = document.getElementById('info-format2b');

for (let i = 0; i < allCheckbox.length; i++) {
    let allBox = allCheckbox[i];
    allBox.addEventListener('click', userCheckbox);
}

function userCheckbox() {
    let allInfoCheckbox;

    for (let i = 0; i < infoCheckbox.length; i++) {
        allInfoCheckbox = infoCheckbox[i];
    }

    if (this.checked === true) {
        if (this.getAttribute('id') === 'format1') {
            infoFormat1.innerHTML = `Price = 20$`;
        }
        if (this.getAttribute('id') === 'format2') {
            infoFormat2.innerHTML = `Price = 25$`;
        }
        if (this.getAttribute('id') === 'format1b') {
            infoFormat1b.innerHTML = `Price = 25$`;
        }
        if (this.getAttribute('id') === 'format2b') {
            infoFormat2b.innerHTML = `Price = 30$`;
        }
    } else if (this.checked === false) {
        if (this.getAttribute('id') === 'format1') {
            infoFormat1.innerHTML = ``;
        }
        if (this.getAttribute('id') === 'format2') {
            infoFormat2.innerHTML = ``;
        }
        if (this.getAttribute('id') === 'format1b') {
            infoFormat1b.innerHTML = ``;
        }
        if (this.getAttribute('id') === 'format2b') {
            infoFormat2b.innerHTML = ``;
        }
    }
}
// Input - medium
const inputMedium = document.getElementById('input-medium');
const infoMedium = document.getElementsByClassName('info-medium')[0];
const inputBtn = document.getElementById('inputBtn');

const answer = {
    answer1: "400 Series Recycled: Best quality recycled paper contains 30% post-consumer fiber that is rated Grade A for cleanliness. Strathmore supports environmental solutions that don't compromise paper performance, appearance, or price. Superior sheet formation, harder surfaces and varying textures work with a wider variety of media and styles.",
    answer2: "This economical, heavy weight student-grade paper is best suited for beginning watercolorists or for experimentation and perfecting techniques. This paper has two distinct surfaces: the felt (top) side is cold press the most popular surface for most watercolor work, while the other side is smoother and is ideal for detailed work.",
    answer3: "This Fabriano Artistico Watercolor Block is gluebound on all four sides, ideal for painting on the go, outside or without a surface to spread out on. This block features Fabriano Artistico watercolor paper, which ideal for watercolor, tempera, gouache, acrylic, ink, charcoal, graphite and drawing. The paper is sized both internally and externally, making it both absorbent and resilient. This traditional white paper is made without optical brighteners."
}

inputBtn.addEventListener('click', check);

function check() {
    let userAnswer = inputMedium.value;
    console.log(userAnswer);
    if (userAnswer === 'Strathmore400' || userAnswer === 'strathmore400') {
        infoMedium.innerHTML = answer.answer1;
    } else if (userAnswer === '300Watercolor' || userAnswer === '300watercolor') {
        infoMedium.innerHTML = answer.answer2;
    } else if (userAnswer === 'Fabriano' || userAnswer === 'fabriano') {
        infoMedium.innerHTML = answer.answer3;
    } else {
        infoMedium.innerHTML = `Incorrect word`;
    }
}