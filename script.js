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

  setTimeout(showSlides, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
  slides = document.querySelectorAll(".slide");
  if (slides.length > 0) {
    slides[0].classList.add("active");
    setTimeout(showSlides, 5000);
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
document.addEventListener("DOMContentLoaded", function () {
  const isIndex =
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/" ||
    window.location.pathname === "/index";
  const isResep = window.location.pathname.includes("resep.html");

  // Di halaman index.html
  if (isIndex) {
    const kategoriItems = document.querySelectorAll(".kategori-item");
    kategoriItems.forEach((item) => {
      item.addEventListener("click", function () {
        const category = item.getAttribute("data-category");
        window.location.href = `html/resep.html?category=${category}`;
      });
    });
  }

  // Di halaman resep.html
  if (isResep) {
    const filterTabs = document.querySelectorAll(".tab");
    const recipeCards = document.querySelectorAll(".resep-card");
    const params = new URLSearchParams(window.location.search);
    const selectedCategory = params.get("category");

    function filterResep(category) {
      filterTabs.forEach((tab) => {
        tab.classList.remove("active");
        if (tab.getAttribute("data-category") === category) {
          tab.classList.add("active");
        }
      });

      recipeCards.forEach((card) => {
        if (
          category === "all" ||
          card.getAttribute("data-category") === category
        ) {
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 100);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(20px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        }
      });
    }

    // Jalankan filter saat halaman dimuat
    if (selectedCategory) {
      filterResep(selectedCategory);
    }

    // Jika user klik tab manual
    filterTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const category = tab.getAttribute("data-category");
        filterResep(category);
      });
    });
  }
});

// ======================SECOND VIEW================
// home
function openFormModal() {
  const modal = document.getElementById("unggahModal");
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeFormModal() {
  const modal = document.getElementById("unggahModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Optional: klik luar modal untuk menutup
window.addEventListener("click", function (e) {
  const modal = document.getElementById("unggahModal");
  if (e.target === modal) {
    closeFormModal();
  }
});

// resep
function openModal(id) {
  const modal = document.getElementById("resepModal");
  const modalContent = document.getElementById("modalContent");

  modal.style.display = "block";

  modal.querySelectorAll(".resep-detail").forEach((el) => {
    el.style.display = "none";
  });

  const selected = document.getElementById(id);
  if (selected) {
    selected.style.display = "block";
  }

  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("resepModal");
  modal.style.display = "none";
  document.body.style.overflow = "";
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
document.getElementById("cerita-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const judul = document.getElementById("judul").value;
  const isi = document.getElementById("isi").value;

  alert(
    `Terima kasih, ${nama}! Cerita/resep "${judul}" Anda telah diterima. Kami akan segera memproses dan menghubungi Anda melalui email ${email}.`
  );

  this.reset();
});
