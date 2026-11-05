// Main JavaScript for Rest House Restaurant & Caterers

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Header Scroll Effect
  const header = document.querySelector(".site-header");
  const handleScroll = () => {
    if (!header) return;
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // 3. Mobile Navigation Menu Toggle
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileNav.classList.contains("open");
      if (isOpen) {
        mobileNav.classList.remove("open");
        document.body.style.overflow = "";
        if (menuIcon) menuIcon.classList.remove("hidden");
        if (closeIcon) closeIcon.classList.add("hidden");
        menuToggle.setAttribute("aria-expanded", "false");
      } else {
        mobileNav.classList.add("open");
        document.body.style.overflow = "hidden";
        if (menuIcon) menuIcon.classList.add("hidden");
        if (closeIcon) closeIcon.classList.remove("hidden");
        menuToggle.setAttribute("aria-expanded", "true");
      }
    });

    // Close mobile nav when clicking a link
    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        document.body.style.overflow = "";
        if (menuIcon) menuIcon.classList.remove("hidden");
        if (closeIcon) closeIcon.classList.add("hidden");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 4. Scroll Reveal Animations
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  // 5. Active Link Highlighting
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link, .mobile-nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html") || (currentPath === "index.html" && href === "./")) {
      link.classList.add("active");
    }
  });
});
