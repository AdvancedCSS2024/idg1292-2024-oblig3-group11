/*gsap.set("#frog", {xPercent: -50, yPercent: -50});
gsap.to("#frog", {scale: 0.6667, scrollTrigger: {
  trigger: ".section1__frame3",
  pin: ".section1__frame3",
  scrub: true
}})*/ 

// Alexis code 
const sectionEls = document.querySelectorAll("[data-hidden]");

const options = {
	rootMargin: "-20%",
};

const observer = new IntersectionObserver(entries=>{
	entries.forEach(entry=>{
		if(entry.isIntersecting){
			entry.target.classList.remove(entry.target.dataset.hidden);
		}else{
			entry.target.classList.add(entry.target.dataset.hidden);
		}
	});
}, options);

sectionEls.forEach(el=>observer.observe(el));


