// Menu Data and Interactivity for Rest House Restaurant & Caterers

const MENU_DATA = [
  {
    id: "tandoor",
    title: "Tandoor Items",
    image: "assets/tandoor.jpg",
    items: [
      { name: "Hariyali Chicken Tikka" },
      { name: "Fish and Prawns" },
      { name: "Joojeh Kebab Chicken" },
      { name: "Murgh Malai Kebab" },
      { name: "Mushroom Tikka" },
      { name: "Paneer Tikka" },
      { name: "Chicken Seekh Kebab" },
      { name: "Tandoori Chicken" }
    ]
  },
  {
    id: "rice",
    title: "Rice & Biryani",
    image: "assets/biryani.jpg",
    items: [
      { name: "Kuttan Biryani" },
      { name: "Chicken Biryani" },
      { name: "65 Biryani" },
      { name: "Fish Biryani" },
      { name: "Prawns Biryani" },
      { name: "Chicken Fried Rice" },
      { name: "Spinach Rice" },
      { name: "Chicken Noodles" },
      { name: "Egg Fried Rice" },
      { name: "Egg Noodles" },
      { name: "Biryani Rice" },
      { name: "Ghee Rice" },
      { name: "Jeera Rice" },
      { name: "Lemon Rice" },
      { name: "Mixed Fried Rice" },
      { name: "Mixed Noodles" },
      { name: "Veg Fried Rice" },
      { name: "Veg Noodles" },
      { name: "Szechwan Fried Rice" },
      { name: "Afghani Rice" },
      { name: "Bell Pepper Rice" },
      { name: "Kabsa Rice" },
      { name: "Kashmiri Pulao" },
      { name: "Afghani Pulao" },
      { name: "Prawns Fried Rice" },
      { name: "Malaysian Rice" },
      { name: "Malaysian Mixed Rice" },
      { name: "Mandi Rice" },
      { name: "Veg Pulao" },
      { name: "Veg Biryani" },
      { name: "Plain Rice" }
    ]
  },
  {
    id: "soups",
    title: "Soups",
    image: "assets/chinese.jpg",
    items: [
      { name: "Chicken Clear Soup" },
      { name: "Cream of Chicken" },
      { name: "Cream of Veg & Mushroom" },
      { name: "Hot & Sour Veg" },
      { name: "Sweet Corn Chicken" },
      { name: "Sweet Corn Veg" },
      { name: "Veg Clear Soup" },
      { name: "Seafood Chowder" }
    ]
  },
  {
    id: "salads",
    title: "Salads",
    image: "assets/tandoor.jpg",
    items: [
      { name: "Cauliflower Salt & Pepper" },
      { name: "Crispy Veg Salad" },
      { name: "Green Salad" },
      { name: "Rest House Special Salad" },
      { name: "Spots Salad" },
      { name: "Summer Salad" }
    ]
  },
  {
    id: "starters",
    title: "Starters",
    image: "assets/chinese.jpg",
    items: [
      { name: "Crispy Chilli Potato" },
      { name: "French Fries" },
      { name: "Sesame Meatballs" },
      { name: "Sesame Cauliflower" },
      { name: "Mushroom Pepper Salt" },
      { name: "Squid Rings" }
    ]
  },
  {
    id: "south-indian",
    title: "South Indian",
    image: "assets/kerala.jpg",
    items: [
      { name: "Beef Dry Fry" },
      { name: "Beef Roast" },
      { name: "Beef Fry" },
      { name: "Beef Kondattam" },
      { name: "Beef Pepper" },
      { name: "Chicken 65" },
      { name: "Chettinadu Chicken" },
      { name: "Chicken Kondattam" },
      { name: "Chicken Kuruma" },
      { name: "Chicken Pepper Fry" },
      { name: "Chicken Roast" },
      { name: "Kozhi Varutharacha Curry" },
      { name: "Malabar Chicken Curry" },
      { name: "Nadan Chicken Curry" },
      { name: "Fish Mango Curry" },
      { name: "Fish Pollichathu" },
      { name: "Prawns Chuttathu" },
      { name: "Prawns Dry Fry" },
      { name: "Prawns Masala" },
      { name: "Prawns Pepper Fry" },
      { name: "Prawns Roast" },
      { name: "Squid Dry Fry" },
      { name: "Squid Masala" },
      { name: "Squid Pepper Fry" },
      { name: "Squid Roast" },
      { name: "Tawa Fried Fish" }
    ]
  },
  {
    id: "chinese",
    title: "Chinese",
    image: "assets/chinese.jpg",
    items: [
      { name: "Beef Chilli" },
      { name: "Beef Ginger" },
      { name: "Beef Garlic" },
      { name: "Beef Manchurian" },
      { name: "Beef Szechwan" },
      { name: "Chilli Chicken" },
      { name: "Dragon Chicken" },
      { name: "Garlic Chicken" },
      { name: "Ginger Chicken" },
      { name: "Chicken Manchurian" },
      { name: "Szechwan Chicken" },
      { name: "White Chilli Chicken" },
      { name: "Garlic Gobi" },
      { name: "Garlic Mushroom" },
      { name: "Garlic Paneer" },
      { name: "Ginger Gobi" },
      { name: "Ginger Mushroom" },
      { name: "Ginger Paneer" },
      { name: "Gobi Manchurian" },
      { name: "Mushroom Manchurian" },
      { name: "Paneer Manchurian" },
      { name: "Szechwan Gobi" },
      { name: "Szechwan Mushroom" },
      { name: "Szechwan Paneer" },
      { name: "Chilli Gobi" },
      { name: "Chilli Mushroom" },
      { name: "Chilli Paneer" }
    ]
  },
  {
    id: "arabian",
    title: "Arabian",
    image: "assets/arabic.jpg",
    items: [
      { name: "Al Faham" },
      { name: "Broast" },
      { name: "Fish Al Faham With Rice" },
      { name: "Peri Peri Chicken" },
      { name: "Shawaya Chicken" },
      { name: "Butter Spicy Grill" },
      { name: "Lemon Grill" },
      { name: "Mexican Al Faham" },
      { name: "Mughlai Al Faham" }
    ]
  },
  {
    id: "north-indian",
    title: "North Indian",
    image: "assets/north-indian.jpg",
    items: [
      { name: "Kadai Chicken" },
      { name: "Kadai Mushroom" },
      { name: "Kadai Veg" },
      { name: "Kadai Paneer" },
      { name: "Mushroom Butter Masala" },
      { name: "Mushroom Masala" },
      { name: "Mix Veg Curry" },
      { name: "Veg Kurma" },
      { name: "Butter Chicken" },
      { name: "Chicken Kolhapuri" },
      { name: "Hyderabadi Chicken" },
      { name: "Chicken Hot Pepper" },
      { name: "Mutton Saagwala" },
      { name: "Palak Gosht" },
      { name: "Paneer Butter Masala" },
      { name: "Patiala Chicken" },
      { name: "Veg Kolhapuri" },
      { name: "Veg Lasooni" }
    ]
  },
  {
    id: "breads",
    title: "Breads",
    image: "assets/kerala.jpg",
    items: [
      { name: "Kubz" },
      { name: "Nice Pathiri" },
      { name: "Palaappam" },
      { name: "Plain Naan" },
      { name: "Tandoori Roti" },
      { name: "Vellaappam" },
      { name: "Wheat Porotta" },
      { name: "Butter Naan" },
      { name: "Butter Kulcha" },
      { name: "Chapathi" },
      { name: "Kulcha" },
      { name: "Kerala Porotta" },
      { name: "Coin Porotta" },
      { name: "Tawa Porotta" }
    ]
  },
  {
    id: "juices",
    title: "Juices & Beverages",
    image: "assets/drinks.jpg",
    items: [
      { name: "Apple Juice" },
      { name: "Anar Juice" },
      { name: "Chikku Juice" },
      { name: "Fresh Lime" },
      { name: "Fresh Lime Soda" },
      { name: "Grape Juice" },
      { name: "Ginger Lime" },
      { name: "Mango Juice" },
      { name: "Mosambi Juice" },
      { name: "Mint Lime" },
      { name: "Mango Shake" },
      { name: "Chikku Shake" },
      { name: "Orange Juice" },
      { name: "Pineapple Juice" },
      { name: "Salt Lime" }
    ]
  },
  {
    id: "tea-coffee",
    title: "Tea & Coffee",
    image: "assets/drinks.jpg",
    items: [
      { name: "Tea" },
      { name: "Black Tea" },
      { name: "Green Tea" },
      { name: "Lemon Tea" },
      { name: "Coffee" },
      { name: "Boost" },
      { name: "Horlicks" },
      { name: "Milk" }
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("menu-search");
  const clearBtn = document.getElementById("clear-search");
  const tabsContainer = document.getElementById("category-tabs");
  const menuContainer = document.getElementById("menu-container");
  const emptyState = document.getElementById("menu-empty");
  const emptyQueryText = document.getElementById("empty-query");

  let activeCategory = "all";
  let searchQuery = "";

  // Check URL hash for category deep linking (e.g. menu.html#tandoor)
  if (window.location.hash) {
    const hash = window.location.hash.replace("#", "");
    if (MENU_DATA.some(c => c.id === hash)) {
      activeCategory = hash;
    }
  }

  // Render Tabs
  function renderTabs() {
    if (!tabsContainer) return;
    const categories = [{ id: "all", title: "All" }, ...MENU_DATA];
    tabsContainer.innerHTML = categories
      .map(
        (c) => `
        <button
          class="category-tab shrink-0 rounded-full border px-4 py-2 text-xs tracking-wider transition ${
            activeCategory === c.id
              ? "border-[#d4af37] bg-[#d4af37] text-[#171615] font-semibold"
              : "border-[rgba(212,175,55,0.18)] text-[rgba(245,243,239,0.8)] hover:border-[rgba(212,175,55,0.6)]"
          }"
          data-category="${c.id}"
        >
          ${c.title}
        </button>
      `
      )
      .join("");

    tabsContainer.querySelectorAll(".category-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.getAttribute("data-category");
        renderTabs();
        renderMenu();
        const navBarHeight = 120;
        window.scrollTo({ top: 380, behavior: "smooth" });
      });
    });
  }

  // Render Menu Sections and Items
  function renderMenu() {
    if (!menuContainer) return;
    const q = searchQuery.trim().toLowerCase();

    const filtered = MENU_DATA.filter((c) => activeCategory === "all" || c.id === activeCategory)
      .map((c) => ({
        ...c,
        items: q ? c.items.filter((i) => i.name.toLowerCase().includes(q)) : c.items,
      }))
      .filter((c) => c.items.length > 0);

    const total = filtered.reduce((sum, c) => sum + c.items.length, 0);

    if (total === 0) {
      menuContainer.innerHTML = "";
      if (emptyState) {
        emptyState.classList.remove("hidden");
        if (emptyQueryText) emptyQueryText.textContent = searchQuery;
      }
      return;
    }

    if (emptyState) emptyState.classList.add("hidden");

    menuContainer.innerHTML = filtered
      .map(
        (cat) => `
      <section id="${cat.id}" class="scroll-mt-48 mb-20" aria-labelledby="h-${cat.id}">
        <div class="mb-8 flex items-center gap-5">
          <img
            src="${cat.image}"
            alt=""
            loading="lazy"
            class="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover ring-2 ring-[rgba(212,175,55,0.6)]"
          />
          <div>
            <p class="eyebrow">${cat.items.length} dishes</p>
            <h2 id="h-${cat.id}" class="text-3xl md:text-4xl font-semibold text-[#f5f3ef]">${cat.title}</h2>
          </div>
        </div>
        <ul class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          ${cat.items
            .map(
              (item) => `
            <li class="group flex items-center gap-4 rounded-xl border border-[rgba(212,175,55,0.18)] bg-[#232220] p-3 transition hover:border-[rgba(212,175,55,0.6)] hover:bg-[#2e2a22]">
              <img
                src="${cat.image}"
                alt=""
                loading="lazy"
                class="h-14 w-14 shrink-0 rounded-lg object-cover transition group-hover:scale-105"
              />
              <div class="min-w-0 flex-1">
                <p class="font-medium text-[#f5f3ef]">${item.name}</p>
                ${item.description ? `<p class="text-xs text-[#a6a29a]">${item.description}</p>` : ""}
              </div>
              ${item.price ? `<span class="font-display text-lg text-[#d4af37]">${item.price}</span>` : ""}
            </li>
          `
            )
            .join("")}
        </ul>
      </section>
    `
      )
      .join("");
  }

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (clearBtn) {
        if (searchQuery.length > 0) {
          clearBtn.classList.remove("hidden");
        } else {
          clearBtn.classList.add("hidden");
        }
      }
      renderMenu();
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchQuery = "";
      clearBtn.classList.add("hidden");
      renderMenu();
    });
  }

  renderTabs();
  renderMenu();
});
