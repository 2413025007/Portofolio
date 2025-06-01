// Smooth scroll function
function scrollContainer(id, value) {
  const container = document.getElementById(id);
  container.scrollBy({ left: value, behavior: 'smooth' });
}

// Animate cards on scroll into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
});
