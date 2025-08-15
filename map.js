const map = L.map('map').setView([14.6760, 121.0437], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    let markers = [];
    let currentFilter = 'all';

    // Create markers
    function createMarkers() {
      // Clear existing markers
      markers.forEach(marker => map.removeLayer(marker));
      markers = [];

      establishments.forEach(establishment => {
        // Skip if filtered out
        if (currentFilter !== 'all' && establishment.parkingType !== currentFilter) {
          return;
        }

        const customIcon = L.divIcon({
          className: `custom-pin ${establishment.parkingType === 'reserved' ? 'reserved' : ''}`,
          iconSize: [30, 30],
          iconAnchor: [15, 30]
        });

        const marker = L.marker([establishment.lat, establishment.lng], {
          icon: customIcon
        }).addTo(map);

        marker.on('click', () => openModal(establishment));
        markers.push(marker);
      });
    }

    // Initial marker creation
    createMarkers();

    // Search functionality
    const searchForm = document.getElementById('searchForm');
    const searchBar = document.getElementById('searchBar');
    const itemList = document.getElementById('itemList');

    searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchText = searchBar.value.trim().toLowerCase();
    itemList.innerHTML = '';

    // Filter based on search and current filter
    const matches = establishments.filter(est => {
      const matchesText = est.name.toLowerCase().includes(searchText) ||
                          est.address.toLowerCase().includes(searchText);
      const matchesFilter = currentFilter === 'all' || est.parkingType === currentFilter;
      return matchesText && matchesFilter;
    });

    // Regenerate pins for search results
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];
    matches.forEach(est => {
      const customIcon = L.divIcon({
        className: `custom-pin ${est.parkingType === 'reserved' ? 'reserved' : ''}`,
        iconSize: [30, 30],
        iconAnchor: [15, 30]
      });
      const marker = L.marker([est.lat, est.lng], { icon: customIcon }).addTo(map);
      marker.on('click', () => openModal(est));
      markers.push(marker);
    });

    // Populate results list
    matches.forEach(est => {
      const li = document.createElement('li');
      li.textContent = est.name;
      li.setAttribute('data-establishment', est.id);
      li.classList.add('search-result');
      li.addEventListener('click', () => {
        map.setView([est.lat, est.lng], 16);
        openModal(est);
      });
      itemList.appendChild(li);
    });

    if (matches.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'No results found';
      li.classList.add('no-results');
      itemList.appendChild(li);
    }
  });



    // Attach one click handler to the parent <ul>
    itemList.addEventListener('click', (e) => {
      const item = e.target.closest('li[data-establishment]');
      if (!item) return; // clicked outside a list item

      const establishmentId = item.getAttribute('data-establishment');
      const establishment = establishments.find(est => est.id === establishmentId);
      if (establishment) {
        map.setView([est.lat, est.lng], 16);
        openModal(est);
      }
    });


    // Button functionality
    const generalBtn = document.getElementById('generalBtn');
    const reservedBtn = document.getElementById('reservedBtn');

    generalBtn.addEventListener('click', () => {
      currentFilter = currentFilter === 'general' ? 'all' : 'general';
      generalBtn.textContent = currentFilter === 'general' ? 'Show All' : 'General Parking';
      reservedBtn.textContent = 'Reserved Parking';
      if (currentFilter !== 'general') reservedBtn.classList.remove('btn-warning');
      generalBtn.classList.toggle('btn-warning', currentFilter === 'general');
      createMarkers();
    });

    reservedBtn.addEventListener('click', () => {
      currentFilter = currentFilter === 'reserved' ? 'all' : 'reserved';
      reservedBtn.textContent = currentFilter === 'reserved' ? 'Show All' : 'Reserved Parking';
      generalBtn.textContent = 'General Parking';
      if (currentFilter !== 'reserved') generalBtn.classList.remove('btn-warning');
      reservedBtn.classList.toggle('btn-warning', currentFilter === 'reserved');
      createMarkers();
    });

    // Modal functionality
    const modalOverlay = document.getElementById('modalOverlay');
    const modalContent = document.getElementById('modalContent');
    const modalHeader = document.getElementById('modalHeader');
    const closeBtn = document.getElementById('closeBtn');
    let isDragging = false;
    let startY = 0;
    let startBottom = 0;

    function openModal(establishment) {
      // Update modal styling based on parking type
      if (establishment.parkingType === 'reserved') {
        modalHeader.classList.add('reserved');
      } else {
        modalHeader.classList.remove('reserved');
      }

      // Populate modal content
      document.getElementById('modalTitle').textContent = establishment.name;
      document.getElementById('modalType').textContent = establishment.type;
      
      const modalBody = document.getElementById('modalBody');
      modalBody.innerHTML = `
        <img src="${establishment.image}" alt="${establishment.name}" class="establishment-image">
        
        <div class="detail-section">
          <div class="detail-label">Address</div>
          <div class="detail-value">${establishment.address}</div>
        </div>
        
        <div class="detail-section">
          <div class="detail-label">Phone</div>
          <div class="detail-value">${establishment.phone}</div>
        </div>
        
        <div class="detail-section">
          <div class="detail-label">Hours</div>
          <div class="detail-value">${establishment.hours}</div>
        </div>
        
        <div class="detail-section">
          <div class="detail-label">About</div>
          <div class="detail-value">${establishment.description}</div>
        </div>
        
        <div class="detail-section">
          <div class="detail-label">Amenities</div>
          <div class="amenities">
            ${establishment.amenities.map(amenity => 
              `<span class="amenity-tag">${amenity}</span>`
            ).join('')}
          </div>
        </div>
        
        <div class="detail-section">
          <div class="detail-label">Parking Information</div>
          <div class="parking-info ${establishment.parkingType === 'reserved' ? 'reserved' : ''}">
            <img src="${establishment.parking.image}" alt="Parking area" class="establishment-image">
            <div class="detail-value">
              <strong>Available:</strong> ${establishment.parking.available ? 'Yes' : 'No'}<br>
              <strong>Spaces:</strong> ${establishment.parking.spaces} spots<br>
              <strong>Type:</strong> ${establishment.parking.type}<br>
              <strong>Category:</strong> ${establishment.parkingType === 'reserved' ? 'Reserved' : 'General'} Parking
            </div>
          </div>
        </div>
      `;
      
      modalOverlay.classList.add('active');
    }

    function closeModal() {
      modalOverlay.classList.remove('active');
    }

    // Event listeners
    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });

    // Drag functionality
    modalHeader.addEventListener('mousedown', startDrag);
    modalHeader.addEventListener('touchstart', startDrag);

    function startDrag(e) {
      isDragging = true;
      startY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;
      startBottom = 0;
      
      document.addEventListener('mousemove', drag);
      document.addEventListener('touchmove', drag);
      document.addEventListener('mouseup', endDrag);
      document.addEventListener('touchend', endDrag);
    }

    function drag(e) {
      if (!isDragging) return;
      
      const currentY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;
      const deltaY = currentY - startY;
      const newBottom = Math.max(-window.innerHeight * 0.8, startBottom - deltaY);
      
      modalContent.style.bottom = `${newBottom}px`;
      
      if (newBottom < -200) {
        closeModal();
      }
    }

    function endDrag() {
      if (!isDragging) return;
      
      isDragging = false;
      modalContent.style.bottom = '0';
      
      document.removeEventListener('mousemove', drag);
      document.removeEventListener('touchmove', drag);
      document.removeEventListener('mouseup', endDrag);
      document.removeEventListener('touchend', endDrag);
    }

    // Keyboard accessibility
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
      }
    });