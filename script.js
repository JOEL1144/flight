
//cards
const container = document.getElementById('slide');
    container.innerHTML += container.innerHTML;

    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
      isDown = false;
    });

    container.addEventListener('mouseup', () => {
      isDown = false;
    });

    container.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
      checkLoop();
    });

    container.addEventListener('scroll', checkLoop);

    function checkLoop() {
      const scrollWidth = container.scrollWidth / 2;
      if (container.scrollLeft >= scrollWidth) {
        container.scrollLeft -= scrollWidth;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += scrollWidth;
      }
    }

    
    let touchStartX = 0;
    
    let touchScrollLeft = 0;

    container.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].pageX;
      touchScrollLeft = container.scrollLeft;
    });

    container.addEventListener('touchmove', (e) => {
      const x = e.touches[0].pageX;
      const walk = (x - touchStartX) * 2;
      container.scrollLeft = touchScrollLeft - walk;
      checkLoop();
    });
//menu-icon
 const menuIcon = document.querySelector(".menu-icon");
 
const mobileMenu = document.querySelector(".mobile-menu");

if (menuIcon && mobileMenu) {
  menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    
    menuIcon.classList.toggle("open");

    
    if (menuIcon.classList.contains("open")) {
      menuIcon.textContent = "✖"; 
    } else {
      menuIcon.textContent = "☰"; 
    }
  });
}
