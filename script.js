// KAJA

const animatedElements = document.querySelectorAll('.animate-on-scroll-heading, .animate-on-scroll-road, .animate-on-scroll-pond, .animate-on-scroll-leaf');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }

        else {
            entry.target.classList.remove('animate'); // remove animation class
        }
    })
}, {
    threshold: 1
});

animatedElements.forEach((el) => {
    observer.observe(el);
});


//TORIL
//Text boxes
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        const scrollTop = window.scrollY;

        // Values according to scroll position
        const thresholdStart = 500; //Change to correct placement

        const grass = document.querySelector(".grass-container");

        if (scrollTop >= thresholdStart && window.scrollY > 100) { //Change to correct placement
            // Color change when scrolling within the threshold
            grass.style.backgroundColor = "green";
            scrollGrass.classList.add("show");
        } else {
            // Reset to initial color when scrolling outside the threshold
            grass.style.backgroundColor = "rgb(129, 127, 8)";
            scrollGrass.classList.remove("show")
        }

        
    });
});

window.addEventListener("scroll", function() {
const scrollFrog = document.querySelector(".section3__frog"); //Change to correct placement
        if (window.scrollY < 500) {
            scrollFrog.classList.add("show");
        } else {
            scrollFrog.classList.remove("show");
        }

});

//Action button
window.addEventListener("scroll", function() {
    const scrollButton = document.querySelector(".action-button");
    if (window.scrollY > 500 && window.scrollY < 1000) {
        scrollButton.classList.add("show");
    } else {
        scrollButton.classList.remove("show");
    }
});

//Function to add image elements to the grass box
function addImagesToGrass() {
    //Define the coordinates for the images
    const image1Coordinates = { x: 100, y: 200 }; // Adjust as needed
    const image2Coordinates = { x: 300, y: 400 }; // Adjust as needed
    const image3Coordinates = { x: 600, y: 800 };

    const grassContainer = document.querySelector(".grass-container");
    const grassBox = grassContainer.querySelector("svg");
    
    //Create image elements
    let image1 = document.createElement("img");
    let image2 = document.createElement("img");
    let image3 = document.createElement("img");
    
    //Set image sources
    image1.src = "assets/SVG/leafs.svg";
    image2.src = "assets/SVG/pond.svg";
    image3.src = "assets/SVG/tree.svg";
    
    //Set the position of the images within the SVG
    image1.setAttribute("x", image1Coordinates.x);
    image1.setAttribute("y", image1Coordinates.y);
    
    image2.setAttribute("x", image2Coordinates.x);
    image2.setAttribute("y", image2Coordinates.y);

    image3.setAttribute("x", image3Coordinates.x);
    image3.setAttribute("y", image3Coordinates.y);
    
    //Append images to the grass box
    grassBox.appendChild(image1);
    grassBox.appendChild(image2);
    grassBox.appendChild(image3);
}
//TORIL