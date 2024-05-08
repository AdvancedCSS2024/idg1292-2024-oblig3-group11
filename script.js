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

//Action button
window.addEventListener("scroll", function() {
    const scrollButton = document.querySelector(".section3__frame2__container__action-button");
    if (window.scrollY > 3000 && window.scrollY < 3300) {
        scrollButton.classList.add("show");
    } else {
        scrollButton.classList.remove("show");
    }
});

//Function to add image elements to the grass box MAKE SO THEY DISSAPEAR WHEN OUT OF THE VIEW
function addImagesToGrass() {
    // Define the coordinates for the images
    const image1Coordinates = { x: 800, y: 250 }; // Adjust as needed
    const image2Coordinates = { x: 1000, y: 5 }; // Adjust as needed
    const image3Coordinates = { x: 300, y: -300 };

    const grassContainer = document.querySelector(".section3__frame2");
    
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
    
    // Setup Intersection Observer to remove images when they are not visible
    const removeImagesFromGrass = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                entry.target.remove(); // Remove the image element from the DOM
            }
        });
    });
    
    // Observe each image element
    removeImagesFromGrass.observe(image1);
    removeImagesFromGrass.observe(image2);
    removeImagesFromGrass.observe(image3);
}

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

// Frog animation
const observeFrog = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      const frog = entry.target.querySelector('.section3__frame1__container__frog');

      if (entry.isIntersecting) {
          frog.classList.add('jump-in');
      } else {
          frog.classList.remove('jump-in');
      }
  });
}, { threshold: 0.5 }); // Adjust threshold as needed

observeFrog.observe(document.querySelector('.section3__frame1__container'));


//cat animation
const observeCat = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const catwalk = entry.target.querySelector('section3__frame3__container__cat--walk');
  
      if (entry.isIntersecting) {
        catwalk.classList.add('move-cat, fade-out');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      catwalk.classList.remove('move-cat, fade-out');
    });
  });

  observeCat.observe(document.querySelector('.section3__frame3__container'));


  //DEV example https://dev.to/ingosteinke/movement-and-visibility-detection-with-css-and-js-53m7
  let animatingClassName = 'animate__animated';

let observerOptions = {
  root: null,
  /** @type {String} */
  rootMargin: '0px',
  /** @type {Number} */
  threshold: 0.2
};

function intersectionCallback(intersectingEntries) {
  for (let j = 0; j < intersectingEntries.length; j++) {
    if (intersectingEntries[j].isIntersecting && intersectingEntries[j].intersectionRatio > observerOptions.threshold) {
      if (intersectingEntries[j].target && intersectingEntries[j].target.classList) {
        let animationClassName = intersectingEntries[j].target.dataset.animationclass;
        intersectingEntries[j].target.classList.add(animatingClassName, animationClassName);
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  let observer = new IntersectionObserver(intersectionCallback, observerOptions);
  let elementsAnimatedOnVisibility = document.getElementsByClassName('animate--on-visibility');
  for (let i = 0; i < elementsAnimatedOnVisibility.length; i++) {
    observer.observe(elementsAnimatedOnVisibility[i]);
  }
});

//TORIL