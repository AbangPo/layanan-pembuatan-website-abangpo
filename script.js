const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {

    //Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

//close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click ());

//close menu when nasv link button is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click ());
})

/*Initialize Swiper*/
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grapCursor: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //responsive breakpons 
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        568: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
  });



  // Optional: Add custom animation or interactivity here
document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('mouseenter', () => {
      member.style.backgroundColor = '#f0f8ff';
    });
    member.addEventListener('mouseleave', () => {
      member.style.backgroundColor = '#fff';
    });
  });



  // Ganti favicon saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    const favicon = document.querySelector("link[rel='icon']");
    setTimeout(() => {
        // Ganti favicon setelah 3 detik
        favicon.href = "favicon-new.ico"; // Ganti dengan URL favicon baru
    }, 3000);
});



