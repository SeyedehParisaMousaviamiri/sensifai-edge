// Toggle mobile menu
  document.getElementById("hamburger").addEventListener("click", function() {
    document.getElementById("navLinks").classList.toggle("show");
  });

  // Toggle bio visibility when clicking Bio buttons
    document.querySelectorAll('.bio-btn').forEach(button => {
      button.addEventListener('click', () => {
        const bioId = button.getAttribute('aria-controls');
        const bio = document.getElementById(bioId);
        const isActive = bio.classList.toggle('active');

        // Update aria-expanded for accessibility
        button.setAttribute('aria-expanded', isActive);
      });
    });