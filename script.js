//SANNA  
// Get all text elements with the class 'text-fade'
const textElements = document.querySelectorAll('.text-fade');
// Get the frog element
const frog = document.querySelector('.frog');
// Get the circle element
const circle = document.querySelector('.circle');

// Function to check if an element is within the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Function to handle scroll event
function handleScroll() {
    textElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('fade-in');
        } else {
            element.classList.remove('fade-in');
        }
    });

    // Check if the frog is in viewport
    if (isInViewport(frog)) {
        circle.classList.add('show-circle');
        // Position the circle around the frog here
        // You can calculate the position based on the frog's position
    } else {
        circle.classList.remove('show-circle');
    }
}

// Scroll event listener
window.addEventListener('scroll', handleScroll);





//frog 
// Create the observer
/*const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('frog-animation');
        return;
      }
  
      entry.target.classList.remove('frog-animation');
    });
  });
  
  // Get multiple elements instead of a single one using "querySelectorAll"
  const squares = document.querySelectorAll('.frog');
  
  // Loop over the elements and add each one to the observer
  squares.forEach((element) => observer.observe(element));*/


//algae disappear 
// Get the elements
const elements = document.querySelectorAll('.algae1, .algae2');

// Function to trigger disappearance after a delay
function disappearAfterDelay(delay) {
  setTimeout(() => {
    elements.forEach(element => {
      element.classList.add('disappear');
    });
  }, delay);
}

disappearAfterDelay(3000); // Disappears after 3 seconds (3000 milliseconds)


//SANNA


// KAJA

/*const animatedElements = document.querySelectorAll('.animate-on-scroll-heading, .animate-on-scroll-road, .animate-on-scroll-pond, .animate-on-scroll-leaf');

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
});*/


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