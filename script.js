// =========================SLIDESHOW=================
let slideIndex = 0;
let slides;

function showSlides() {
  slides = document.querySelectorAll(".slide");

  slides.forEach((slide, index) => {
    slide.classList.remove("active");
  });

  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");

  setTimeout(showSlides, 4000);
}

document.addEventListener("DOMContentLoaded", () => {
  slides = document.querySelectorAll(".slide");
  if (slides.length > 0) {
    slides[0].classList.add("active");
    setTimeout(showSlides, 4000);
  }
});

// =======================NAVBAR=======================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-link");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.innerWidth <= 768) return;

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// ======================PARALAX EFEK================
window.addEventListener("scroll", () => {
  document.querySelectorAll(".slide img").forEach((img) => {
    const offset = window.scrollY * 0.2;
    img.style.transform = `translateY(${offset}px) scale(1.05)`;
  });
});

window.addEventListener("scroll", function () {
  const hero = document.getElementById("parallaxHero");
  const scrollY = window.scrollY;
  hero.style.transform = `translateY(${scrollY * 0.4}px)`; 
});

// =======================FILTER TAB=================
const filterTabs = document.querySelectorAll('.tab');
const recipeCards = document.querySelectorAll('.resep-card');

filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const category = tab.getAttribute('data-category');

        recipeCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ======================SECOND VIEW================

function openModal(id) {
  const modal = document.getElementById('resepModal');
  const modalContent = document.getElementById('modalContent');

  modal.style.display = 'block';

  modal.querySelectorAll('.resep-detail').forEach(el => {
    el.style.display = 'none';
  });

  const selected = document.getElementById(id);
  if (selected) {
    selected.style.display = 'block';
  }

  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('resepModal');
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

// ================READ MORE==============================
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (id) {
  const artikel = document.getElementById(id);
  if (artikel) {
    artikel.classList.add("active");
  }
}

// ==================FORM KIRIM CERITA===========================
document.getElementById('cerita-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const judul = document.getElementById('judul').value;
  const isi = document.getElementById('isi').value;
  
  alert(`Terima kasih, ${nama}! Cerita/resep "${judul}" Anda telah diterima. Kami akan segera memproses dan menghubungi Anda melalui email ${email}.`);
  
  this.reset();
});

