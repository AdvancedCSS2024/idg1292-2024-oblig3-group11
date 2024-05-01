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