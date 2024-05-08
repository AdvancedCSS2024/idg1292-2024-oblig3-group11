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

// .animate-on-scroll-heading, .animate-on-scroll-road, .animate-on-scroll-pond, .animate-on-scroll-leaf, .animate-on-scroll-frog'

// KAJA



// Add event listener for scroll events
window.addEventListener('scroll', handleScroll);

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll events
function handleScroll() {
    const elements = document.querySelectorAll('.section2__frame1, .section2__frame2');
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('animate');
        }
    });
}

// Initial check on page load
handleScroll();

// FRAME 1

const section2Frame1 = document.querySelector('.section2__frame1');
const animatedElements1 = section2Frame1.querySelectorAll('.animate-on-scroll-heading1, .animate-on-scroll-leaf, .animate-on-scroll-road, .animate-on-scroll-frog1, .animate-on-scroll-frog1, .animate-on-scroll-building2, .animate-on-scroll-building3, .animate-on-scroll-building4, #mouth--s2f1')

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animatedElements1.forEach((el) => {
                el.classList.add('animate');
            });

        } else {
            animatedElements1.forEach((el) => {
                el.classList.remove('animate');
            });
        }
    })
}, {
    threshold: 0.5,
    rootMargin: '0px 0px -100%'
});

// FRAME 2

const section2Frame2 = document.querySelector('.section2__frame2');
const animatedElements2 = section2Frame2.querySelectorAll('.animate-on-scroll-heading2, .animate-on-scroll-frog2, .animate-on-scroll-car, .animate-on-scroll-pollution');

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animatedElements2.forEach((el) => {
                el.classList.add('animate');
            });

        } else {
            animatedElements2.forEach((el) => {
                el.classList.remove('animate');
            });
        }
    })
}, {
    threshold: 0.5,
    rootMargin: '0px 0px -100%'
});

// FRAME 3

// const section2Frame3 = document.querySelector('.section2__frame3');
// const animatedElements3 = section2Frame3.querySelectorAll('.animate-on-scroll-heading3, .animate-on-scroll-frog3, .animate-on-scroll-frog-sick1, .animate-on-scroll-frog-sick2');

// const observer3 = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             animatedElements3.forEach((el) => {
//                 el.classList.add('animate');
//             });
//         } else {
//             animatedElements3.forEach((el) => {
//                 el.classList.remove('animate');
//             });
//         }
//     })
// }, {
//     threshold: 1.0
//     // rootMargin: '50px'
// });

// const section2Frame4 = document.querySelector('.section2__frame4');
// const animatedElements4 = section2Frame4.querySelectorAll('.animate-on-scroll-heading4, #apocalypse-background, #apocalypse-headline');

// const observer4 = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             animatedElements4.forEach((el) => {
//                 el.classList.add('animate');
//             });
//         } else {
//             animatedElements4.forEach((el) => {
//                 el.classList.remove('animate');
//             });
//             console.log(section2Frame1);
//             console.log(animatedElements1);
//         }
//     })
// }, {
//     threshold: 0,
//     // rootMargin: '50px'
// });

observer1.observe(section2Frame1);
observer2.observe(section2Frame2);
// observer3.observe(section2Frame3);
// observer4.observe(section2Frame4);


// TORIL
// Text boxes
// document.addEventListener("DOMContentLoaded", function () {
//     window.addEventListener("scroll", function () {
//         const scrollTop = window.scrollY;

//         // Values according to scroll position
//         const thresholdStart = 500; //Change to correct placement

//         const grass = document.querySelector(".grass-container");

//         if (scrollTop >= thresholdStart && window.scrollY > 100) { //Change to correct placement
//             // Color change when scrolling within the threshold
//             grass.style.backgroundColor = "green";
//             scrollGrass.classList.add("show");
//         } else {
//             // Reset to initial color when scrolling outside the threshold
//             grass.style.backgroundColor = "rgb(129, 127, 8)";
//             scrollGrass.classList.remove("show")
//         }


//     });
// });

// //Action button
// window.addEventListener("scroll", function () {
//     const scrollButton = document.querySelector(".action-button");
//     if (window.scrollY > 3000 && window.scrollY < 3200) {
//         scrollButton.classList.add("show");
//     } else {
//         scrollButton.classList.remove("show");
//     }
// });

// //Function to add image elements to the grass box
// function addImagesToGrass() {
//     // Define the coordinates for the images
//     const image1Coordinates = { x: 800, y: 250 }; // Adjust as needed
//     const image2Coordinates = { x: 1000, y: 5 }; // Adjust as needed
//     const image3Coordinates = { x: 300, y: -300 };

//     const grassContainer = document.querySelector(".section3__grass-container");

//     // Create image elements
//     let image1 = document.createElement("img");
//     let image2 = document.createElement("img");
//     let image3 = document.createElement("img");

//     // Set image sources
//     image1.src = "assets/SVG/leafs.svg";
//     image2.src = "assets/SVG/pond.svg";
//     image3.src = "assets/SVG/tree.svg";

//     // Set size attributes (width and height)
//     image1.height = 100; // Adjust as needed

//     image2.height = 300; // Adjust as needed

//     image3.height = 500; // Adjust as needed

//     // Set the position of the images within the grass container
//     image1.style.position = "absolute";
//     image1.style.left = `${image1Coordinates.x}px`;
//     image1.style.top = `${image1Coordinates.y}px`;

//     image2.style.position = "absolute";
//     image2.style.left = `${image2Coordinates.x}px`;
//     image2.style.top = `${image2Coordinates.y}px`;

//     image3.style.position = "absolute";
//     image3.style.left = `${image3Coordinates.x}px`;
//     image3.style.top = `${image3Coordinates.y}px`;

//     // Append images to the grass container
//     grassContainer.appendChild(image1);
//     grassContainer.appendChild(image2);
//     grassContainer.appendChild(image3);
// }

//TORIL 