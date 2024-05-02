/*gsap.set("#frog", {xPercent: -50, yPercent: -50});
gsap.to("#frog", {scale: 0.6667, scrollTrigger: {
  trigger: ".section1__frame3",
  pin: ".section1__frame3",
  scrub: true
}})*/ 

// Alexis code 
// const sectionEls = document.querySelectorAll("[data-hidden]");

// const options = {
// 	rootMargin: "-20%",
// };

// const observer = new IntersectionObserver(entries=>{
// 	entries.forEach(entry=>{
// 		if(entry.isIntersecting){
// 			entry.target.classList.remove(entry.target.dataset.hidden);
// 		}else{
// 			entry.target.classList.add(entry.target.dataset.hidden);
// 		}
// 	});
// }, options);

// sectionEls.forEach(el=>observer.observe(el));



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

//Action button
window.addEventListener("scroll", function() {
    const scrollButton = document.querySelector(".action-button");
    if (window.scrollY > 3000 && window.scrollY < 3200) {
        scrollButton.classList.add("show");
    } else {
        scrollButton.classList.remove("show");
    }
});

//Function to add image elements to the grass box
function addImagesToGrass() {
    // Define the coordinates for the images
    const image1Coordinates = { x: 800, y: 250 }; // Adjust as needed
    const image2Coordinates = { x: 1000, y: 5 }; // Adjust as needed
    const image3Coordinates = { x: 300, y: -300 };

    const grassContainer = document.querySelector(".section3__grass-container");
    
    // Create image elements
    let image1 = document.createElement("img");
    let image2 = document.createElement("img");
    let image3 = document.createElement("img");
    
    // Set image sources
    image1.src = "assets/SVG/leafs.svg";
    image2.src = "assets/SVG/pond.svg";
    image3.src = "assets/SVG/tree.svg";

    // Set size attributes (width and height)
    image1.height = 100; // Adjust as needed
    
    image2.height = 300; // Adjust as needed
    
    image3.height = 500; // Adjust as needed

    // Set the position of the images within the grass container
    image1.style.position = "absolute";
    image1.style.left = `${image1Coordinates.x}px`;
    image1.style.top = `${image1Coordinates.y}px`;

    image2.style.position = "absolute";
    image2.style.left = `${image2Coordinates.x}px`;
    image2.style.top = `${image2Coordinates.y}px`;

    image3.style.position = "absolute";
    image3.style.left = `${image3Coordinates.x}px`;
    image3.style.top = `${image3Coordinates.y}px`;
    
    // Append images to the grass container
    grassContainer.appendChild(image1);
    grassContainer.appendChild(image2);
    grassContainer.appendChild(image3);
}

//TORIL