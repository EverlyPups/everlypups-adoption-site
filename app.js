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

    const isFiltered = Boolean(
      state.filters.search !== '' ||
      state.filters.breeds.length > 0 ||
      state.filters.genders.length > 0 ||
      state.filters.maxPrice < 3500 ||
      state.filters.sortBy !== 'recommended'
    );

    const displayList = isFiltered ? state.filteredPuppies : state.filteredPuppies.slice(0, 8);

    catalogGrid.innerHTML = displayList.map(p => {
      const isFav = state.favorites.includes(p.id);

      return `
        <a href="puppy-details.html?id=${p.id}&breed=${encodeURIComponent(p.breed)}" class="available-puppy-card" style="text-decoration: none; color: inherit; display: block; cursor: pointer;">
          <div class="available-puppy-media">
            <img src="${p.image}" alt="${p.name}" class="available-puppy-img" loading="lazy" />

            ${(p.hasVideo || p.videoUrl) ? `
              <div class="puppy-video-badge" title="Live Video Available">
                <i class="fa-solid fa-video"></i>
              </div>
            ` : ''}
          </div>

          <div class="available-puppy-info">
            <div class="puppy-card-breed-label">${p.breed}</div>
            <h3 class="puppy-card-name-label">${p.name}</h3>
            <div class="puppy-card-specs-label">${p.gender} · ${p.age}</div>
            <div class="puppy-card-status-label">${p.status || 'Ready to go home'}</div>
            <div style="font-size:1.3rem; font-weight:900; color:#00B67A; margin-top:0.4rem;">$${(p.price || 1450).toLocaleString()}</div>
            <span class="btn-card-reserve" style="margin-top: 0.8rem; width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.5rem; border: none; font-family: 'Nunito', sans-serif;">
              View Details <i class="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </a>
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

  if (inlineSearch) {
    inlineSearch.addEventListener('input', () => {
      state.filters.search = inlineSearch.value.trim();
      applyFilters();
    });
    inlineSearch.addEventListener('keyup', (e) => {
      if (e.key === 'Enter' && btnInlineSearch) {
        btnInlineSearch.click();
      }
    });
  }

  if (inlineBreed) {
    inlineBreed.addEventListener('change', () => {
      state.filters.breeds = inlineBreed.value ? [inlineBreed.value] : [];
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
    window.location.href = `puppy-details.html?id=${id}`;
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
