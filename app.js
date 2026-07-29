/* ==========================================================================
   PawHaven - High-End Editorial JavaScript Application Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const state = {
    puppies: SITE_DATA.puppies || [],
    filteredPuppies: [],
    favorites: JSON.parse(localStorage.getItem('pawhaven_favs')) || [],
    filters: {
      search: '',
      breeds: [],
      genders: [],
      maxPrice: 3500,
      sortBy: 'recommended'
    }
  };

  state.filteredPuppies = [...state.puppies];

  // DOM Elements
  const inlineSearch = document.getElementById('inline-search');
  const inlineBreed = document.getElementById('inline-breed');
  const inlinePrice = document.getElementById('inline-price');
  const btnInlineSearch = document.getElementById('btn-inline-search');

  const filterTriggerBtn = document.getElementById('filter-trigger-btn');
  const filterModal = document.getElementById('filter-modal');
  const filterModalClose = document.getElementById('filter-modal-close');
  
  const filterModalBreedChips = document.getElementById('filter-modal-breed-chips');

  const genderOptAll = document.getElementById('gender-opt-all');
  const genderOptFemale = document.getElementById('gender-opt-female');
  const genderOptMale = document.getElementById('gender-opt-male');

  const modalPriceSelect = document.getElementById('modal-price-select');
  const modalCountBadge = document.getElementById('modal-count-badge');
  const btnApplyModalFilters = document.getElementById('btn-apply-modal-filters');

  const sortTriggerBtn = document.getElementById('sort-trigger-btn');
  const sortMenu = document.getElementById('sort-menu');
  const currentSortLabel = document.getElementById('current-sort-label');

  const filterFemaleBtn = document.getElementById('filter-female-btn');
  const filterMaleBtn = document.getElementById('filter-male-btn');
  
  const breedGallery = document.getElementById('editorial-breed-gallery');
  const breedPrevBtn = document.getElementById('breed-prev-btn');
  const breedNextBtn = document.getElementById('breed-next-btn');

  const puppyReviewsTrack = document.getElementById('puppy-reviews-track');
  const reviewsPrevBtn = document.getElementById('reviews-prev-btn');
  const reviewsNextBtn = document.getElementById('reviews-next-btn');

  const catalogGrid = document.getElementById('editorial-catalog-grid');
  const faqList = document.getElementById('faq-list');

  const detailModal = document.getElementById('detail-modal');
  const modalClose = document.getElementById('modal-close');
  const modalBody = document.getElementById('modal-body');

  const reserveModal = document.getElementById('reserve-modal');
  const reserveClose = document.getElementById('reserve-close');
  const reserveForm = document.getElementById('reserve-form');

  // ------------------------------------------------------------------------
  // 1. Mega Dropdown Tab Switcher
  // ------------------------------------------------------------------------
  function initMegaDropdown() {
    const tabItems = document.querySelectorAll('.mega-tab-item');
    const panels = document.querySelectorAll('.mega-panel');

    tabItems.forEach(tab => {
      const activateTab = () => {
        const targetTab = tab.getAttribute('data-tab');
        
        tabItems.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        const targetPanel = document.getElementById(`panel-${targetTab}`);
        if (targetPanel) targetPanel.classList.add('active');
      };

      tab.addEventListener('mouseenter', activateTab);
      tab.addEventListener('click', activateTab);
    });
  }

  // ------------------------------------------------------------------------
  // 2. Reviews Track Arrow Navigation (Prev & Next Toggles)
  // ------------------------------------------------------------------------
  if (reviewsPrevBtn && puppyReviewsTrack) {
    reviewsPrevBtn.addEventListener('click', () => {
      puppyReviewsTrack.scrollBy({ left: -365, behavior: 'smooth' });
    });
  }

  if (reviewsNextBtn && puppyReviewsTrack) {
    reviewsNextBtn.addEventListener('click', () => {
      puppyReviewsTrack.scrollBy({ left: 365, behavior: 'smooth' });
    });
  }

  // ------------------------------------------------------------------------
  // 3. Populate Dropdowns & Render Breed Multi-Select Chips
  // ------------------------------------------------------------------------
  function populateFilters() {
    const allBreeds = SITE_DATA.allFilterBreeds || [];

    if (inlineBreed) {
      inlineBreed.innerHTML = `<option value="">All Breeds</option>` +
        allBreeds.map(b => `<option value="${b}">${b}</option>`).join('');
    }

    if (filterModalBreedChips) {
      filterModalBreedChips.innerHTML = allBreeds.map(name => {
        const isSelected = state.filters.breeds.includes(name);
        return `<div class="breed-chip ${isSelected ? 'active' : ''}" data-breed="${name}">${name}</div>`;
      }).join('');

      // Attach click listeners
      filterModalBreedChips.querySelectorAll('.breed-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          const breed = chip.getAttribute('data-breed');
          const idx = state.filters.breeds.indexOf(breed);
          if (idx > -1) {
            state.filters.breeds.splice(idx, 1);
            chip.classList.remove('active');
          } else {
            state.filters.breeds.push(breed);
            chip.classList.add('active');
          }
          updateLiveCountBadge();
        });
      });
    }
  }

  function updateLiveCountBadge() {
    const matches = getFilteredList();
    if (modalCountBadge) {
      modalCountBadge.textContent = matches.length;
    }
  }

  // ------------------------------------------------------------------------
  // 4. Render Favorite Breeds Horizontal Carousel Slider
  // ------------------------------------------------------------------------
  function renderFavoriteBreeds() {
    if (!breedGallery) return;
    const favBreeds = SITE_DATA.favoriteBreeds || [];

    breedGallery.innerHTML = favBreeds.map(b => `
      <div class="favorite-breed-card" onclick="filterByBreed('${b.name}')">
        <div class="breed-blob-wrapper">
          <img src="${b.mainImg}" alt="${b.name}" class="breed-blob-img" loading="lazy" />
          <div class="breed-inset-badge">
            <img src="${b.insetImg}" alt="${b.name}" class="breed-inset-img" loading="lazy" />
          </div>
        </div>
        <div class="favorite-breed-name">${b.name}</div>
      </div>
    `).join('');

    if (breedPrevBtn) {
      breedPrevBtn.addEventListener('click', () => {
        breedGallery.scrollBy({ left: -354, behavior: 'smooth' });
      });
    }

    if (breedNextBtn) {
      breedNextBtn.addEventListener('click', () => {
        breedGallery.scrollBy({ left: 354, behavior: 'smooth' });
      });
    }
  }

  // ------------------------------------------------------------------------
  // 5. Render Available Puppies Catalog Grid
  // ------------------------------------------------------------------------
  function renderCatalog() {
    if (!catalogGrid) return;

    if (state.filteredPuppies.length === 0) {
      catalogGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align:center; padding: 4rem 2rem;">
          <h3 style="font-size:1.5rem; margin-bottom:0.5rem;">No Puppies Matched</h3>
          <p style="color:var(--text-secondary);">Try clearing your search terms or filters.</p>
          <button class="btn-primary" style="margin-top:1.5rem;" onclick="resetFilters()">Reset All Filters</button>
        </div>
      `;
      return;
    }

    catalogGrid.innerHTML = state.filteredPuppies.map(p => {
      const isFav = state.favorites.includes(p.id);

      return `
        <div class="available-puppy-card" onclick="openDetail(${p.id})" style="cursor: pointer;">
          <div class="available-puppy-media">
            <img src="${p.image}" alt="${p.name}" class="available-puppy-img" loading="lazy" />
            
            <button class="puppy-fav-badge ${isFav ? 'active' : ''}" onclick="toggleFav(event, ${p.id})" title="Save">
              <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
            </button>

            <div class="puppy-video-badge" title="Live Video Available">
              <i class="fa-solid fa-video"></i>
            </div>
          </div>

          <div class="available-puppy-info">
            <div class="puppy-card-breed-label">${p.breed}</div>
            <h3 class="puppy-card-name-label">${p.name}</h3>
            <div class="puppy-card-specs-label">${p.gender} · ${p.age}</div>
            <div class="puppy-card-status-label">${p.status || 'Ready to go home'}</div>
            <button class="btn-card-reserve" style="margin-top: 0.8rem; width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.5rem; border: none; font-family: 'Nunito', sans-serif;">
              View Details <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // ------------------------------------------------------------------------
  // 6. Render FAQs
  // ------------------------------------------------------------------------
  function renderFAQs() {
    if (!faqList) return;
    const faqs = (SITE_DATA && SITE_DATA.faqs && SITE_DATA.faqs.length >= 7) ? SITE_DATA.faqs : [
      {
        question: "How does PawHaven vet breeders?",
        answer: "Every breeder in our network undergoes rigorous background checks, facility evaluations, and unannounced USDA compliance audits."
      },
      {
        question: "What is included with the 10-Year Health Guarantee?",
        answer: "Our 10-Year Health Guarantee covers congenital and hereditary conditions to give your family long-term peace of mind."
      },
      {
        question: "How does flight chaperone travel work?",
        answer: "A dedicated puppy chaperone accompanies your puppy in-cabin during travel directly to your nearest major airport."
      },
      {
        question: "Are there local puppy sales near me?",
        answer: "Yes, we offer nationwide delivery, so no matter where you are, you can get a puppy from Premier Pups."
      },
      {
        question: "What should I expect when ordering a puppy from our nationwide \"puppy sales near me\" service?",
        answer: "Expect a simple ordering process, timely nationwide delivery, and the peace of mind of a 10-year health guarantee on your new puppy."
      },
      {
        question: "What steps do we take to ensure the health and well-being of our puppies?",
        answer: "We work closely with dedicated, professional dog breeders who utilize premium quality health screening practices. Each puppy is guaranteed a 10-year health plan that underscores our commitment to their longevity."
      },
      {
        question: "What type of veterinary care do the puppies receive before sale?",
        answer: "Prior to sale, our puppies receive comprehensive veterinary care including vaccinations, de-worming, and thorough nose-to-tail health checks to ensure they are in perfect health when they arrive at their new homes."
      }
    ];

    faqList.innerHTML = faqs.map((f, i) => `
      <div class="faq-row ${i === 0 ? 'active' : ''}" onclick="toggleFAQ(this)">
        <div class="faq-row-header">
          <span>${f.question}</span>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div class="faq-row-content">
          <p>${f.answer}</p>
        </div>
      </div>
    `).join('');
  }

  window.toggleFAQ = function(el) {
    el.classList.toggle('active');
  };

  // ------------------------------------------------------------------------
  // 7. Filter Engine & Sort
  // ------------------------------------------------------------------------
  function getFilteredList() {
    let result = state.puppies.filter(p => {
      if (state.filters.search) {
        const q = state.filters.search.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchBreed = p.breed.toLowerCase().includes(q);
        if (!matchName && !matchBreed) return false;
      }

      if (state.filters.breeds.length > 0) {
        if (!state.filters.breeds.includes(p.breed)) return false;
      }

      if (state.filters.genders.length > 0) {
        if (!state.filters.genders.includes(p.gender)) return false;
      }

      if (p.price > state.filters.maxPrice) return false;

      return true;
    });

    // Sort Handler
    if (state.filters.sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (state.filters.sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (state.filters.sortBy === 'age-youngest') {
      result.sort((a, b) => parseInt(a.age) - parseInt(b.age));
    } else if (state.filters.sortBy === 'age-oldest') {
      result.sort((a, b) => parseInt(b.age) - parseInt(a.age));
    }

    return result;
  }

  function applyFilters() {
    state.filteredPuppies = getFilteredList();
    renderCatalog();
    updateLiveCountBadge();
  }

  window.filterByBreed = function(breedName) {
    state.filters.breeds = [breedName];
    populateFilters();
    applyFilters();
    document.getElementById('catalog-section').scrollIntoView({ behavior: 'smooth' });
  };

  window.resetFilters = function() {
    state.filters = { search: '', breeds: [], genders: [], maxPrice: 3500, sortBy: 'recommended' };
    if (inlineSearch) inlineSearch.value = '';
    if (inlineBreed) inlineBreed.value = '';
    if (inlinePrice) inlinePrice.value = '3500';
    if (filterFemaleBtn) filterFemaleBtn.classList.remove('active');
    if (filterMaleBtn) filterMaleBtn.classList.remove('active');
    if (modalPriceSelect) modalPriceSelect.value = '3500';
    if (currentSortLabel) currentSortLabel.textContent = 'Recommended';
    
    [genderOptAll, genderOptFemale, genderOptMale].forEach(btn => {
      if (btn) btn.classList.remove('active');
    });
    if (genderOptAll) genderOptAll.classList.add('active');

    populateFilters();
    applyFilters();
  };

  // Inline Search Trigger
  if (btnInlineSearch) {
    btnInlineSearch.addEventListener('click', () => {
      state.filters.search = inlineSearch ? inlineSearch.value.trim() : '';
      state.filters.maxPrice = inlinePrice ? parseInt(inlinePrice.value) : 3500;
      if (inlineBreed && inlineBreed.value) {
        state.filters.breeds = [inlineBreed.value];
      } else {
        state.filters.breeds = [];
      }
      populateFilters();
      applyFilters();
      document.getElementById('catalog-section').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // ------------------------------------------------------------------------
  // 8. Interactive Filter Modal Controls
  // ------------------------------------------------------------------------
  if (filterTriggerBtn && filterModal) {
    filterTriggerBtn.addEventListener('click', () => {
      filterModal.classList.add('active');
      updateLiveCountBadge();
    });
  }

  if (filterModalClose && filterModal) {
    filterModalClose.addEventListener('click', () => {
      filterModal.classList.remove('active');
    });
  }

  if (btnApplyModalFilters && filterModal) {
    btnApplyModalFilters.addEventListener('click', () => {
      applyFilters();
      filterModal.classList.remove('active');
    });
  }

  // Gender Option Buttons in Filter Modal
  [genderOptAll, genderOptFemale, genderOptMale].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        [genderOptAll, genderOptFemale, genderOptMale].forEach(b => b && b.classList.remove('active'));
        btn.classList.add('active');
        const g = btn.getAttribute('data-gender');
        if (g === 'all') {
          state.filters.genders = [];
          if (filterFemaleBtn) filterFemaleBtn.classList.remove('active');
          if (filterMaleBtn) filterMaleBtn.classList.remove('active');
        } else {
          state.filters.genders = [g];
          if (g === 'Female') {
            if (filterFemaleBtn) filterFemaleBtn.classList.add('active');
            if (filterMaleBtn) filterMaleBtn.classList.remove('active');
          } else {
            if (filterMaleBtn) filterMaleBtn.classList.add('active');
            if (filterFemaleBtn) filterFemaleBtn.classList.remove('active');
          }
        }
        updateLiveCountBadge();
      });
    }
  });

  if (modalPriceSelect) {
    modalPriceSelect.addEventListener('change', () => {
      state.filters.maxPrice = parseInt(modalPriceSelect.value);
      updateLiveCountBadge();
    });
  }

  // ------------------------------------------------------------------------
  // 9. Sort Dropdown Controls
  // ------------------------------------------------------------------------
  if (sortTriggerBtn && sortMenu) {
    sortTriggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sortMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!sortTriggerBtn.contains(e.target) && !sortMenu.contains(e.target)) {
        sortMenu.classList.remove('active');
      }
    });

    sortMenu.querySelectorAll('.sort-menu-item').forEach(item => {
      item.addEventListener('click', () => {
        sortMenu.querySelectorAll('.sort-menu-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const sortVal = item.getAttribute('data-sort');
        state.filters.sortBy = sortVal;
        if (currentSortLabel) currentSortLabel.textContent = item.textContent.replace('Sort: ', '');
        sortMenu.classList.remove('active');
        applyFilters();
      });
    });
  }

  // ------------------------------------------------------------------------
  // 10. Quick Gender Filter Pills
  // ------------------------------------------------------------------------
  if (filterFemaleBtn) {
    filterFemaleBtn.addEventListener('click', () => {
      filterFemaleBtn.classList.toggle('active');
      if (filterFemaleBtn.classList.contains('active')) {
        state.filters.genders = ['Female'];
        if (filterMaleBtn) filterMaleBtn.classList.remove('active');
        if (genderOptFemale) {
          [genderOptAll, genderOptFemale, genderOptMale].forEach(b => b && b.classList.remove('active'));
          genderOptFemale.classList.add('active');
        }
      } else {
        state.filters.genders = [];
        if (genderOptAll) {
          [genderOptAll, genderOptFemale, genderOptMale].forEach(b => b && b.classList.remove('active'));
          genderOptAll.classList.add('active');
        }
      }
      applyFilters();
    });
  }

  if (filterMaleBtn) {
    filterMaleBtn.addEventListener('click', () => {
      filterMaleBtn.classList.toggle('active');
      if (filterMaleBtn.classList.contains('active')) {
        state.filters.genders = ['Male'];
        if (filterFemaleBtn) filterFemaleBtn.classList.remove('active');
        if (genderOptFemale) {
          [genderOptAll, genderOptFemale, genderOptMale].forEach(b => b && b.classList.remove('active'));
          genderOptMale.classList.add('active');
        }
      } else {
        state.filters.genders = [];
        if (genderOptAll) {
          [genderOptAll, genderOptFemale, genderOptMale].forEach(b => b && b.classList.remove('active'));
          genderOptAll.classList.add('active');
        }
      }
      applyFilters();
    });
  }

  // ------------------------------------------------------------------------
  // 11. Favorites & Modals
  // ------------------------------------------------------------------------
  window.toggleFav = function(e, id) {
    e.stopPropagation();
    const idx = state.favorites.indexOf(id);
    if (idx > -1) {
      state.favorites.splice(idx, 1);
    } else {
      state.favorites.push(id);
    }
    localStorage.setItem('pawhaven_favs', JSON.stringify(state.favorites));
    renderCatalog();
  };

  window.openDetail = function(id) {
    const puppy = state.puppies.find(p => p.id === id);
    if (!puppy) return;

    const gallery = puppy.gallery || [puppy.image];

    modalBody.innerHTML = `
      <div class="modal-puppy-data-page" style="font-family: 'Nunito', sans-serif;">
        <!-- Header & Badges -->
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1.5rem; border-bottom:1px solid rgba(0,0,0,0.06); padding-bottom:1rem;">
          <div>
            <span style="background:rgba(0,182,122,0.1); color:#00B67A; font-size:0.82rem; font-weight:800; padding:0.35rem 0.9rem; border-radius:50px; text-transform:uppercase; letter-spacing:0.04em;">${puppy.breed} ${puppy.variety ? '• ' + puppy.variety : ''}</span>
            <h2 style="font-size:2.5rem; font-weight:900; color:#012B3A; margin:0.4rem 0 0.2rem 0; line-height:1.1;">${puppy.name}</h2>
            <div style="font-size:0.95rem; color:#666; font-weight:600;"><i class="fa-solid fa-location-dot" style="color:#00B67A;"></i> ${puppy.location} • ${puppy.gender} • ${puppy.age}</div>
          </div>
          <div style="text-align:right;">
            <span style="display:inline-block; background:rgba(1,43,58,0.08); color:#012B3A; font-size:0.8rem; font-weight:800; padding:0.4rem 0.9rem; border-radius:50px;">${puppy.status || 'Ready to go home'}</span>
            <div style="font-size:0.82rem; color:#F59E0B; font-weight:800; margin-top:0.4rem;"><i class="fa-solid fa-fire"></i> 4 families viewing</div>
          </div>
        </div>

        <!-- 2 Column Hero Grid -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:2.2rem; align-items:start; margin-bottom:1.8rem;">
          
          <!-- Left Column: Gallery -->
          <div>
            <div style="width:100%; height:320px; border-radius:20px; overflow:hidden; background:#F5F5F5; margin-bottom:0.8rem; border:1px solid rgba(0,0,0,0.06); box-shadow:0 8px 24px rgba(0,0,0,0.06);">
              <img id="modal-main-puppy-img" src="${puppy.image}" alt="${puppy.name}" style="width:100%; height:100%; object-fit:cover; transition:transform 0.3s ease;" />
            </div>
            <div style="display:flex; gap:0.6rem; overflow-x:auto;">
              ${gallery.map((g, idx) => `
                <img src="${g}" style="width:75px; height:65px; object-fit:cover; border-radius:12px; cursor:pointer; border:2px solid ${idx === 0 ? '#00B67A' : 'transparent'}; transition:all 0.2s ease;" onclick="document.getElementById('modal-main-puppy-img').src='${g}'; document.querySelectorAll('.modal-thumb').forEach(t => t.style.borderColor='transparent'); this.style.borderColor='#00B67A';" class="modal-thumb" />
              `).join('')}
            </div>

            <!-- Health Guarantee Badges -->
            <div style="display:flex; justify-content:space-between; margin-top:1.2rem; background:#FAF9F6; padding:0.85rem 1.1rem; border-radius:16px; font-size:0.82rem; font-weight:800; color:#012B3A;">
              <span><i class="fa-solid fa-shield-halved" style="color:#00B67A;"></i> 10-Yr Guarantee</span>
              <span><i class="fa-solid fa-microchip" style="color:#00B67A;"></i> Microchipped</span>
              <span><i class="fa-solid fa-plane-arrival" style="color:#00B67A;"></i> Flight Travel</span>
            </div>
          </div>

          <!-- Right Column: Price & Key Specs -->
          <div style="display:flex; flex-direction:column; gap:1.2rem;">
            
            <!-- Price Box -->
            <div style="background:#FAF9F6; padding:1.2rem 1.5rem; border-radius:20px; border:1px solid rgba(0,0,0,0.05); display:flex; align-items:center; justify-content:space-between;">
              <div>
                <span style="font-size:0.75rem; font-weight:800; text-transform:uppercase; color:#828282; letter-spacing:0.04em;">Bring Home Fee</span>
                <div style="font-size:2rem; font-weight:900; color:#00B67A; line-height:1.1; margin-top:0.1rem;">$${puppy.price.toLocaleString()}</div>
              </div>
              <button class="btn-primary" style="padding:0.85rem 1.5rem; font-size:0.95rem; font-weight:800; border-radius:50px; box-shadow:0 6px 18px rgba(0,182,122,0.3);" onclick="openReserve(${puppy.id})">
                Reserve ${puppy.name} <i class="fa-solid fa-arrow-right" style="margin-left:0.4rem;"></i>
              </button>
            </div>

            <!-- 6 Key Specs Grid -->
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:0.7rem;">
              <div style="background:#F7F9F8; padding:0.8rem; border-radius:14px; border:1px solid rgba(0,0,0,0.04);">
                <span style="display:block; font-size:0.68rem; font-weight:800; color:#828282; text-transform:uppercase;">Gender</span>
                <span style="display:block; font-size:0.9rem; font-weight:800; color:#012B3A; margin-top:0.2rem;">${puppy.gender}</span>
              </div>
              <div style="background:#F7F9F8; padding:0.8rem; border-radius:14px; border:1px solid rgba(0,0,0,0.04);">
                <span style="display:block; font-size:0.68rem; font-weight:800; color:#828282; text-transform:uppercase;">Age</span>
                <span style="display:block; font-size:0.9rem; font-weight:800; color:#012B3A; margin-top:0.2rem;">${puppy.age}</span>
              </div>
              <div style="background:#F7F9F8; padding:0.8rem; border-radius:14px; border:1px solid rgba(0,0,0,0.04);">
                <span style="display:block; font-size:0.68rem; font-weight:800; color:#828282; text-transform:uppercase;">Birthday</span>
                <span style="display:block; font-size:0.9rem; font-weight:800; color:#012B3A; margin-top:0.2rem;">${puppy.birthday || 'May 2026'}</span>
              </div>
              <div style="background:#F7F9F8; padding:0.8rem; border-radius:14px; border:1px solid rgba(0,0,0,0.04);">
                <span style="display:block; font-size:0.68rem; font-weight:800; color:#828282; text-transform:uppercase;">Color</span>
                <span style="display:block; font-size:0.9rem; font-weight:800; color:#012B3A; margin-top:0.2rem;">${puppy.color || 'Classic'}</span>
              </div>
              <div style="background:#F7F9F8; padding:0.8rem; border-radius:14px; border:1px solid rgba(0,0,0,0.04);">
                <span style="display:block; font-size:0.68rem; font-weight:800; color:#828282; text-transform:uppercase;">Weight</span>
                <span style="display:block; font-size:0.9rem; font-weight:800; color:#012B3A; margin-top:0.2rem;">${puppy.weight}</span>
              </div>
              <div style="background:#F7F9F8; padding:0.8rem; border-radius:14px; border:1px solid rgba(0,0,0,0.04);">
                <span style="display:block; font-size:0.68rem; font-weight:800; color:#828282; text-transform:uppercase;">Est. Adult</span>
                <span style="display:block; font-size:0.9rem; font-weight:800; color:#012B3A; margin-top:0.2rem;">${puppy.estAdultWeight || '8 - 14 lbs'}</span>
              </div>
            </div>

            <!-- Breeder Card -->
            <div style="background:#FFFFFF; padding:1.1rem 1.3rem; border-radius:16px; border:1px solid rgba(0,0,0,0.06); box-shadow:0 4px 12px rgba(0,0,0,0.03);">
              <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:0.75rem;">
                <div style="width:36px; height:36px; background:rgba(0,182,122,0.12); color:#00B67A; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:1.1rem;"><i class="fa-solid fa-award"></i></div>
                <div>
                  <h4 style="font-size:0.95rem; font-weight:800; color:#012B3A; margin:0;">USDA Star Breeder Verified</h4>
                  <p style="font-size:0.82rem; color:#666; margin:0; font-weight:600;">${puppy.breeder || 'Partner Breeder Network'}</p>
                </div>
              </div>
              <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:0.5rem; font-size:0.78rem; border-top:1px solid rgba(0,0,0,0.06); padding-top:0.6rem;">
                <div><strong style="color:#828282; text-transform:uppercase; font-size:0.68rem; display:block;">Dam (Mom)</strong> <span style="color:#012B3A; font-weight:700;">${puppy.momBreed || puppy.breed}</span></div>
                <div><strong style="color:#828282; text-transform:uppercase; font-size:0.68rem; display:block;">Sire (Dad)</strong> <span style="color:#012B3A; font-weight:700;">${puppy.dadBreed || puppy.breed}</span></div>
                <div><strong style="color:#828282; text-transform:uppercase; font-size:0.68rem; display:block;">Microchip ID</strong> <span style="color:#012B3A; font-weight:700;">${puppy.microchip || '98514100' + puppy.id}</span></div>
              </div>
            </div>

          </div>

        </div>

        <!-- Biography & Included Checklist -->
        <div style="display:grid; grid-template-columns:1.2fr 1fr; gap:2rem; border-top:1px solid rgba(0,0,0,0.06); padding-top:1.4rem;">
          <div>
            <h3 style="font-size:1.2rem; font-weight:900; color:#012B3A; margin:0 0 0.6rem 0;"><i class="fa-solid fa-heart" style="color:#EF4444;"></i> About ${puppy.name}</h3>
            <p style="font-size:0.95rem; line-height:1.65; color:#4F4F4F; margin:0; font-weight:500;">${puppy.description}</p>
          </div>
          <div>
            <h3 style="font-size:1.2rem; font-weight:900; color:#012B3A; margin:0 0 0.6rem 0;"><i class="fa-solid fa-gift" style="color:#00B67A;"></i> What's Included</h3>
            <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:0.45rem; font-size:0.88rem; font-weight:700; color:#012B3A;">
              <li><i class="fa-solid fa-check" style="color:#00B67A; margin-right:0.4rem;"></i> 10-Year Health Commitment &amp; Guarantee</li>
              <li><i class="fa-solid fa-check" style="color:#00B67A; margin-right:0.4rem;"></i> Official Nose-to-Tail Vet Records</li>
              <li><i class="fa-solid fa-check" style="color:#00B67A; margin-right:0.4rem;"></i> Microchipped for Lifetime Safety</li>
              <li><i class="fa-solid fa-check" style="color:#00B67A; margin-right:0.4rem;"></i> Vaccinations &amp; Deworming Up-to-date</li>
              <li><i class="fa-solid fa-check" style="color:#00B67A; margin-right:0.4rem;"></i> Flight Chaperone Travel Options</li>
            </ul>
          </div>
        </div>

      </div>
    `;

    detailModal.classList.add('active');
  };

  window.openReserve = function(id) {
    const puppy = state.puppies.find(p => p.id === id);
    if (!puppy) return;

    detailModal.classList.remove('active');
    document.getElementById('reserve-desc').innerHTML = `Reserving <strong>${puppy.name} (${puppy.breed})</strong> for $${puppy.price.toLocaleString()}.`;
    reserveModal.classList.add('active');
  };

  window.openContactModal = function(e) {
    if (e) e.preventDefault();
    if (document.getElementById('reserve-desc')) {
      document.getElementById('reserve-desc').innerHTML = `Get in touch with a PawHaven Puppy Concierge regarding adoption &amp; standards.`;
    }
    if (reserveModal) reserveModal.classList.add('active');
  };

  [modalClose, reserveClose].forEach(btn => {
    if (btn) btn.addEventListener('click', () => {
      detailModal.classList.remove('active');
      reserveModal.classList.remove('active');
    });
  });

  if (reserveForm) {
    reserveForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your adoption application! Our PawHaven Specialist will reach out to you within 2 hours.');
      reserveModal.classList.remove('active');
      reserveForm.reset();
    });
  }

  // Initial Bootstrap
  initMegaDropdown();
  populateFilters();
  renderFavoriteBreeds();
  renderCatalog();
  renderFAQs();
});
