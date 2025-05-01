document.addEventListener("DOMContentLoaded", initialise);

function initialise() {
    console.log("This is working");
}

// Simple particle animation on About.html
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `rgba(255,255,255,${Math.random() * 0.5})`;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

const particles = [];

for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

animate();


//About.html
//Form validation

function validateForm() {
    let x = document.forms["contactUs"]["fname", "femail"].value;
    if (x == "") {
        alert("Input must be filled out");
        return false;
    }
}




//Shop2.html sorting function

//Start with all on page upon load
function filterPlants() {
    const filterElements = document.querySelectorAll('.filterDiv');
    filterElements.forEach(el => {
        el.style.display = '';
    });
    console.log("plants are here");
}

//Categories: Dried- Plant, Flower; Silk - Plant, Flower


function filterBy(category) {
    const filterElements = document.querySelectorAll('.filterDiv');
    filterElements.forEach(el => {
        if (el.classList.contains(category)) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    });
    console.log(`${category} sorted`);
}


//Two catagory sorting 
function filterByCategories(categories) {
    const filterElements = document.querySelectorAll('.filterDiv');
    filterElements.forEach(el => {
        const matches = categories.some(category => el.classList.contains(category));
        el.style.display = matches ? 'block' : 'none';
    });
    console.log(`Filtered by: ${categories.join(', ')}`);
}

//Show all of them
function showAll() {
    const filterElements = document.querySelectorAll('.filterDiv');
    filterElements.forEach(el => {
        el.style.display = 'block';
    });
    console.log("All items shown");
}
