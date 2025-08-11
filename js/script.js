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

    document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const newsCards = document.querySelectorAll(".news-card");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach(button => button.classList.remove("active"));
      // Add active class to clicked button
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      newsCards.forEach(card => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
