// SANNA 

//const sectionElintroduction = document.querySelector("#introduction");
//const sectionElimportant = document.querySelector("#important");
//const sectionElecosystem = document.querySelector("#ecosystem");

// KAJA

//const sectionElhabitatLoss = document.querySelector('.habitat-loss');
// const pollution = document.querySelector('#pollution');
// const diseases = document.querySelector('#diseases');
// const apocalypse = document.querySelector('#apocalypse'); 

// TORIL

// const notTouchFrog = document.querySelector('#not-touch-frog');
// const goodHabitat = document.querySelector('#good-habitat');
// const noCats = document.querySelector('#no-cats');
// const sustainabilityGoal = document.querySelector('#sustainability-goal')

// const animateStructure = {
//     section: sectionElJumpging,
//     el1toanimate: ""
// }

// Options for the IntersectionObserver
const options = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.5 // When 100% of the element is visible
  };
  
  // Callback function when intersection occurs
  const callback = (entries, observer) => {
    entries.forEach(entry => {
        const els2animate = entry.target.querySelectorAll("[to-be-animated]");
        // const el2animate = entry.target.querySelectorAll("[data-class-to-toggle]");
        // const class2include = el2animate.dataset.classToToggle;
      if (entry.isIntersecting) {
        // If the element is in view, add animation class
        // els2animate.forEach(el=>el.classList.remove('animation-pause'));
        els2animate.forEach(el=>el.style["animation-play-state"] = "running");
        els2animate.forEach(el=>el.style["border"] = "1px red solid");
        console.log(entry.target.id, "is intersecting");
      } else {
        // If the element is out of view, remove animation class
        // els2animate.forEach(el=>el.classList.add('animation-pause'));
        els2animate.forEach(el=>el.style["animation-play-state"] = "paused");
        els2animate.forEach(el=>el.style["border"] = "unset");
        console.log(entry.target.id, "is nnot intersecting");
      }
    });
  };
  
  // Create an IntersectionObserver instance with the callback function and options
  const observer = new IntersectionObserver(callback, options);
  
  // Loop through each element in section 1 and section 2 and observe them


document.querySelectorAll(".introduction, .important, .ecosystem, .habitat-loss, .pollution, .touch-frog, .frog-habitat, .cat-walk, .unsg").forEach(sectionEl=>observer.observe(sectionEl));


//TORIL

//Action button
window.addEventListener("scroll", function() {
  const scrollButton = document.querySelector(".frog-habitat__action-button");
  if (window.scrollY > 9500 && window.scrollY < 9800) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
});

// // Function to add image elements to the grass box
function addImagesToGrass() {
  const image1Coordinates = { x: 800, y: 250 };
  const image2Coordinates = { x: 1000, y: 5 };
  const image3Coordinates = { x: 300, y: -300 };

  const grassContainer = document.querySelector(".frog-habitat");

  let image1 = document.createElement("img");
  let image2 = document.createElement("img");
  let image3 = document.createElement("img");

  image1.src = "assets/SVG/leafs.svg";
  image2.src = "assets/SVG/pond.svg";
  image3.src = "assets/SVG/tree.svg";

  image1.height = 100;
  image2.height = 300;
  image3.height = 500;

  image1.style.position = "absolute";
  image1.style.left = `${image1Coordinates.x}px`;
  image1.style.top = `${image1Coordinates.y}px`;

  image2.style.position = "absolute";
  image2.style.left = `${image2Coordinates.x}px`;
  image2.style.top = `${image2Coordinates.y}px`;

  image3.style.position = "absolute";
  image3.style.left = `${image3Coordinates.x}px`;
  image3.style.top = `${image3Coordinates.y}px`;

  grassContainer.appendChild(image1);
  grassContainer.appendChild(image2);
  grassContainer.appendChild(image3);

  const removeImagesFromGrass = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        entry.target.remove();
      }
    });
  }, {});

  removeImagesFromGrass.observe(image1);
  removeImagesFromGrass.observe(image2);
  removeImagesFromGrass.observe(image3);
}

// // Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}