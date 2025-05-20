document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector('.filter input[type="text"]');
    const categorySelect = document.querySelector('.filter select:nth-of-type(1)');
    const levelSelect = document.querySelector('.filter select:nth-of-type(2)');
    const courseCards = document.querySelectorAll(".course-card");
  
    function filterCourses() {
      const searchText = searchInput.value.toLowerCase();
      const category = categorySelect.value.toLowerCase();
      const level = levelSelect.value.toLowerCase();
  
      courseCards.forEach(card => {
        const title = card.dataset.title.toLowerCase();
        const cardCategory = card.dataset.category.toLowerCase();
        const cardLevel = card.dataset.level.toLowerCase();
  
        const matchesSearch = title.includes(searchText);
        const matchesCategory = !category || cardCategory === category;
        const matchesLevel = !level || cardLevel === level;
  
        if (matchesSearch && matchesCategory && matchesLevel) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }
  
    searchInput.addEventListener("input", filterCourses);
    categorySelect.addEventListener("change", filterCourses);
    levelSelect.addEventListener("change", filterCourses);
  });

  const modal = document.getElementById("courseModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const closeBtn = document.querySelector(".modal .close");

  document.querySelectorAll(".more-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      modalTitle.textContent = btn.dataset.title;
      modalDescription.textContent = btn.dataset.description;
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });


  const burger = document.getElementById('burger');
const nav = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active'); // для анимации бургера
});
