// Select the elements to animate
const slideInLeft = document.querySelector('.ourinventory h1');
const fadeIn = document.querySelector('.ourinventory p');

// Use Intersection Observer to detect when the element is in view
const observerOptions = {
  threshold: 0.5, // Trigger when 50% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add active class to start animation
      entry.target.classList.add('active');
    } else {
      // Remove active class to reset animation
      entry.target.classList.remove('active');
    }
  });
}, observerOptions);

// Observe the elements
observer.observe(slideInLeft);
observer.observe(fadeIn);


