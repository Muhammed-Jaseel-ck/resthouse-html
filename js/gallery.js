// Gallery Filtering and Lightbox Modal for Rest House Restaurant & Caterers

const GALLERY_PHOTOS = [
  { src: "assets/seafood.jpg", cat: "Seafood", alt: "Kerala seafood platter" },
  { src: "assets/rh-building.jpg", cat: "Restaurant Interior", alt: "Rest House Restaurant & Caterers building at night, Irumbuzhi" },
  { src: "assets/rh-biryani.jpg", cat: "Biryani", alt: "Rest House chicken biryani with raita" },
  { src: "assets/rh-biryani-spread.jpg", cat: "Biryani", alt: "Rest House biryani, grilled chicken and fried chicken" },
  { src: "assets/biryani.jpg", cat: "Biryani", alt: "Chicken biryani in copper handi" },
  { src: "assets/arabic.jpg", cat: "Arabic Cuisine", alt: "Al faham with mandi rice" },
  { src: "assets/kerala.jpg", cat: "Kerala Food", alt: "Kerala curry with porotta and appam" },
  { src: "assets/chinese.jpg", cat: "Chinese Food", alt: "Chilli chicken and fried rice" },
  { src: "assets/interior.jpg", cat: "Restaurant Interior", alt: "Restaurant dining area" },
  { src: "assets/party-hall.jpg", cat: "Party Hall", alt: "Party hall set for celebration" },
  { src: "assets/catering.jpg", cat: "Catering", alt: "Catering buffet" },
  { src: "assets/hero.jpg", cat: "Kerala Food", alt: "Rest House feast" },
  { src: "assets/tandoor.jpg", cat: "Arabic Cuisine", alt: "Tandoori and kebab platter" }
];

const CATEGORIES = [
  "All",
  "Seafood",
  "Biryani",
  "Arabic Cuisine",
  "Kerala Food",
  "Chinese Food",
  "Restaurant Interior",
  "Party Hall",
  "Catering"
];

document.addEventListener("DOMContentLoaded", () => {
  const tabsContainer = document.getElementById("gallery-tabs");
  const galleryGrid = document.getElementById("gallery-grid");
  const modal = document.getElementById("gallery-modal");
  const modalImg = document.getElementById("modal-image");
  const modalCat = document.getElementById("modal-cat");
  const closeBtn = document.getElementById("modal-close");
  const prevBtn = document.getElementById("modal-prev");
  const nextBtn = document.getElementById("modal-next");

  let activeCat = "All";
  let currentIndex = null;
  let currentFilteredList = [];

  function renderTabs() {
    if (!tabsContainer) return;
    tabsContainer.innerHTML = CATEGORIES.map(
      (c) => `
      <button
        class="gallery-tab shrink-0 rounded-full border px-4 py-2 text-xs tracking-wider transition ${
          activeCat === c
            ? "border-[#d4af37] bg-[#d4af37] text-[#171615] font-semibold"
            : "border-[rgba(212,175,55,0.18)] text-[rgba(245,243,239,0.8)] hover:border-[rgba(212,175,55,0.6)]"
        }"
        data-cat="${c}"
      >
        ${c}
      </button>
    `
    ).join("");

    tabsContainer.querySelectorAll(".gallery-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCat = btn.getAttribute("data-cat");
        renderTabs();
        renderGallery();
      });
    });
  }

  function renderGallery() {
    if (!galleryGrid) return;
    currentFilteredList = GALLERY_PHOTOS.filter(
      (p) => activeCat === "All" || p.cat === activeCat
    );

    galleryGrid.innerHTML = currentFilteredList
      .map(
        (p, i) => `
      <button
        type="button"
        class="gallery-item group relative block w-full overflow-hidden rounded-xl mb-4 text-left"
        data-index="${i}"
        aria-label="View ${p.alt}"
      >
        <img
          src="${p.src}"
          alt="${p.alt}"
          loading="lazy"
          class="w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
            i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
          }"
        />
        <span class="absolute inset-x-0 bottom-0 bg-hero-overlay p-3 text-left text-xs uppercase tracking-[0.25em] text-[#d4af37] opacity-0 transition group-hover:opacity-100">
          ${p.cat}
        </span>
      </button>
    `
      )
      .join("");

    galleryGrid.querySelectorAll(".gallery-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-index"), 10);
        openModal(idx);
      });
    });
  }

  function openModal(index) {
    if (!modal || index === null || !currentFilteredList[index]) return;
    currentIndex = index;
    const photo = currentFilteredList[currentIndex];
    modalImg.src = photo.src;
    modalImg.alt = photo.alt;
    modalCat.textContent = photo.cat;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("open");
    document.body.style.overflow = "";
    currentIndex = null;
  }

  function showNext() {
    if (currentIndex === null || currentFilteredList.length === 0) return;
    currentIndex = (currentIndex + 1) % currentFilteredList.length;
    openModal(currentIndex);
  }

  function showPrev() {
    if (currentIndex === null || currentFilteredList.length === 0) return;
    currentIndex = (currentIndex - 1 + currentFilteredList.length) % currentFilteredList.length;
    openModal(currentIndex);
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (nextBtn) nextBtn.addEventListener("click", (e) => { e.stopPropagation(); showNext(); });
  if (prevBtn) prevBtn.addEventListener("click", (e) => { e.stopPropagation(); showPrev(); });

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (!modal || !modal.classList.contains("open")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });

  renderTabs();
  renderGallery();
});
