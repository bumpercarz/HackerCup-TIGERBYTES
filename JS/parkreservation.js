// Enhanced establishments with map linking data and updated pricing
const establishments = [
    {
        id: 1,
        name: "The Manila Hotel",
        type: "Hotel",
        location: "Ermita, Manila",
        address: "One Rizal Park, Ermita, Manila, 0913 Metro Manila, Philippines",
        totalSpots: 100,
        availableSpots: 25,
        pricePerHour: 80, // Premium hotel parking
        mapId: "the-manila-hotel-manila",
        lat: 14.5831972,
        lng: 120.9742972,
        phone: "+63-2 8527 0011"
    },
    {
        id: 2,
        name: "Okada Manila",
        type: "Integrated Resort",
        location: "Entertainment City, Parañaque",
        address: "New Seaside Drive, Entertainment City, Parañaque City, 1701, Metro Manila, Philippines",
        totalSpots: 800,
        availableSpots: 245,
        pricePerHour: 100, // Luxury resort parking
        mapId: "okada-manila-entertainment-city",
        lat: 14.5151576,
        lng: 120.9814988,
        phone: "+632-8888-0777"
    },
    {
        id: 3,
        name: "The Bayleaf Intramuros",
        type: "Hotel",
        location: "Intramuros, Manila",
        address: "Muralla Corner Victoria Streets, Intramuros, Manila, 1002, Metro Manila, Philippines",
        totalSpots: 40,
        availableSpots: 8,
        pricePerHour: 60, // Boutique hotel parking
        mapId: "the-bayleaf-intramuros",
        lat: 14.5900,
        lng: 120.9740,
        phone: "+63 (2) 5318-5000"
    },
    {
        id: 4,
        name: "Diamond Hotel Philippines",
        type: "Hotel",
        location: "Manila Bay",
        address: "Roxas Boulevard corner Dr. J. Quintos Street, Manila, Philippines 1000",
        totalSpots: 200,
        availableSpots: 45,
        pricePerHour: 75, // 5-star hotel parking
        mapId: "diamond-hotel-philippines",
        lat: 14.5726,
        lng: 120.9821,
        phone: "(632) 528-3000"
    },
    {
        id: 5,
        name: "Solaire Resort Entertainment City",
        type: "Integrated Resort",
        location: "Entertainment City, Parañaque",
        address: "1 Aseana Avenue, Entertainment City, Tambo, Parañaque City 1701, Metro Manila, Philippines",
        totalSpots: 1000,
        availableSpots: 156,
        pricePerHour: 120, // Premium integrated resort parking
        mapId: "solaire-resort-entertainment-city",
        lat: 14.523166,
        lng: 120.981260,
        phone: "+632 8888-8888"
    },
    {
        id: 6,
        name: "Professional Regulation Commission",
        type: "Government Building",
        location: "Sampaloc, Manila",
        address: "JX3Q+W9X, P. Paredes, Nicanor Reyes St, Sampaloc, Manila, 1008 Metro Manila",
        totalSpots: 45,
        availableSpots: "NaN",
        pricePerHour: 0, // Free government parking
        mapId: "prc",
        lat: 14.604666720206733,
        lng: 120.98808379421557,
        phone: "23100026"
    },
    {
        id: 7,
        name: "Moret St. Pay Parking",
        type: "Parking Lot",
        location: "Manila",
        address: "JX4R+PG3 Manila, Metro Manila",
        totalSpots: 31,
        availableSpots: "NaN",
        pricePerHour: 25, // Standard street parking
        mapId: "moret",
        lat: 14.606773,
        lng: 120.991303,
        phone: "N/A"
    },
    {
        id: 8,
        name: "Green Court Parking",
        type: "Parking Lot",
        location: "Malate, Manila",
        address: "HX8R+PW2, Fidel A.Reyes, Malate, Manila, 1004 Metro Manila",
        totalSpots: 30,
        availableSpots: "NaN",
        pricePerHour: 30, // Commercial area parking
        mapId: "greencourt",
        lat: 14.566794569616917,
        lng: 120.99226404436467,
        phone: "N/A"
    },
    {
        id: 9,
        name: "Intramuros Administration Parking Lot",
        type: "Parking Lot",
        location: "Intramuros, Manila",
        address: "HXRF+G67, Postigo St, Intramuros, Manila, 1002 Metro Manila",
        totalSpots: 50,
        availableSpots: "NaN",
        pricePerHour: 20, // Tourist area parking
        mapId: "intramuros",
        lat: 14.591311334277902,
        lng: 120.9730436600574,
        phone: "N/A"
    }
];

let currentEstablishment = null;
let reservations = [];
let reservationModal;

// Initialize Bootstrap modal and button event listeners
document.addEventListener('DOMContentLoaded', function() {
    reservationModal = new bootstrap.Modal(document.getElementById('reservationModal'));
    renderEstablishments();
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('arrivalDate').min = today;
    document.getElementById('arrivalDate').value = today;
    
    // Add event listeners for parking filter buttons
    document.getElementById('generalBtn').addEventListener('click', function() {
        setParkingFilter('general');
    });
    
    document.getElementById('reservedBtn').addEventListener('click', function() {
        setParkingFilter('reserved');
    });
});

// Function to navigate to map with specific establishment
function navigateToMap(establishmentId) {
    const establishment = establishments.find(e => e.id === establishmentId);
    if (establishment && establishment.mapId) {
        // Store the establishment data for the map page
        localStorage.setItem('selectedEstablishment', JSON.stringify({
            mapId: establishment.mapId,
            name: establishment.name,
            lat: establishment.lat,
            lng: establishment.lng
        }));
        
        // Navigate to the map page
        window.location.href = `maptab.html?establishment=${establishment.mapId}`;
    }
}

// Function to initiate contact (call)
function contactEstablishment(establishmentId) {
    const establishment = establishments.find(e => e.id === establishmentId);
    if (establishment && establishment.phone && establishment.phone !== "N/A") {
        // For mobile devices, this will open the phone dialer
        window.location.href = `tel:${establishment.phone}`;
    } else {
        alert('Contact information not available for this establishment.');
    }
}

// Filter buttons logic
let currentFilter = 'all';

function applyFilter(filterType) {
    currentFilter = filterType;
    let filteredList = establishments;

    if (filterType === 'general') {
        filteredList = establishments.filter(e =>
            e.type === 'Parking Lot' || e.type === 'Government Building'
        );
    } else if (filterType === 'reserved') {
        filteredList = establishments.filter(e =>
            e.type !== 'Parking Lot' && e.type !== 'Government Building'
        );
    }

    renderEstablishments(filteredList);
}

// Attach to buttons
document.getElementById('generalBtn').addEventListener('click', () => applyFilter('general'));
document.getElementById('reservedBtn').addEventListener('click', () => applyFilter('reserved'));

// Render function (with your reserve button logic)
function renderEstablishments(establishmentsToRender = establishments) {
    const container = document.getElementById('establishmentsContainer');
    const noResults = document.getElementById('noResults');

    if (!establishmentsToRender || establishmentsToRender.length === 0) {
        container.style.display = 'none';
        noResults.style.display = 'block';
        container.innerHTML = '';
        return;
    }

    container.style.display = 'flex';
    noResults.style.display = 'none';

    container.innerHTML = establishmentsToRender.map(establishment => {
        const availableNum = Number(establishment.availableSpots);
        const hasKnownAvailability = !isNaN(availableNum);
        const displayAvailable = hasKnownAvailability ? availableNum : 'N/A';
        const occupiedSpots = hasKnownAvailability ? (establishment.totalSpots - availableNum) : 'N/A';

        const isFullyBooked = hasKnownAvailability ? (availableNum === 0) : false;
        const isLimited = hasKnownAvailability ? (availableNum <= 10 && availableNum > 0) : false;

        const isGeneralParking = establishment.type === 'Parking Lot' || establishment.type === 'Government Building';
        const reserveDisabled = isFullyBooked || isGeneralParking;
        const reserveButtonText = isFullyBooked
            ? 'No Spots Available'
            : (isGeneralParking ? 'Reservation Not Available' : 'Reserve Spot');

        let badgeClass = 'bg-success';
        let badgeText = 'Available';
        if (isFullyBooked) {
            badgeClass = 'bg-danger';
            badgeText = 'Full';
        } else if (isLimited) {
            badgeClass = 'bg-warning';
            badgeText = 'Limited';
        }

        const priceDisplay = establishment.pricePerHour === 0 ? 'Free' : `₱${establishment.pricePerHour}/hour`;
        const hasContact = establishment.phone && establishment.phone !== "N/A";

        return `
            <div class="col-lg-6 col-xl-4">
                <div class="card h-100 establishment-card">
                    <div class="card-top-border"></div>
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex justify-content-between align-items-start mb-3">
                            <div>
                                <h5 class="card-title mb-1">${establishment.name}</h5>
                                <span class="badge bg-primary">${establishment.type}</span>
                            </div>
                            <span class="badge ${badgeClass}">${badgeText}</span>
                        </div>
                        
                        <div class="mb-3">
                            <div class="text-muted">
                                <i class="bi bi-geo-alt me-2"></i>
                                ${establishment.address}
                            </div>
                            ${hasContact ? `
                                <div class="text-muted mt-1">
                                    <i class="bi bi-telephone me-2"></i>
                                    ${establishment.phone}
                                </div>
                            ` : ''}
                        </div>
                        
                        <div class="parking-stats mb-3">
                            <div class="row text-center">
                                <div class="col-6">
                                    <span class="stat-number text-available">${displayAvailable}</span>
                                    <small class="text-muted d-block">Available</small>
                                </div>
                                <div class="col-6">
                                    <span class="stat-number text-occupied">${occupiedSpots}</span>
                                    <small class="text-muted d-block">Occupied</small>
                                </div>
                            </div>
                            <hr class="my-2">
                            <div class="text-center price-display">
                                ${priceDisplay}
                            </div>
                        </div>
                        
                        <div class="mt-auto">
                            <div class="d-flex gap-2 mb-2">
                                <button class="btn btn-outline-primary flex-fill" 
                                        onclick="navigateToMap(${establishment.id})"
                                        title="View on map">
                                    <i class="bi bi-map me-1"></i>
                                    Navigate
                                </button>
                                ${hasContact ? `
                                    <button class="btn btn-outline-success flex-fill" 
                                            onclick="contactEstablishment(${establishment.id})"
                                            title="Call ${establishment.name}">
                                        <i class="bi bi-telephone me-1"></i>
                                        Contact
                                    </button>
                                ` : `
                                    <button class="btn btn-outline-secondary flex-fill" 
                                            disabled
                                            title="Contact not available">
                                        <i class="bi bi-telephone me-1"></i>
                                        Contact
                                    </button>
                                `}
                            </div>

                            <button class="btn gradient-btn text-white w-100 ${reserveDisabled ? 'disabled' : ''}"
                                    ${reserveDisabled ? 'disabled' : ''}
                                    ${reserveDisabled ? '' : `onclick="openReservationModal(${establishment.id})"`}>
                                <i class="bi bi-calendar-plus me-2"></i>
                                ${reserveButtonText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}



// Global filter state
let currentParkingFilter = 'all'; // 'all', 'general', 'reserved'

// Function to set parking filter
function setParkingFilter(filterType) {
    currentParkingFilter = filterType;
    
    // Update button states
    const generalBtn = document.getElementById('generalBtn');
    const reservedBtn = document.getElementById('reservedBtn');
    
    // Remove active classes
    generalBtn.classList.remove('btn-primary');
    generalBtn.classList.add('btn-outline-primary');
    reservedBtn.classList.remove('btn-primary');
    reservedBtn.classList.add('btn-outline-primary');
    
    // Add active class to selected button
    if (filterType === 'general') {
        generalBtn.classList.remove('btn-outline-primary');
        generalBtn.classList.add('btn-primary');
    } else if (filterType === 'reserved') {
        reservedBtn.classList.remove('btn-outline-primary');
        reservedBtn.classList.add('btn-primary');
    }
    
    // Apply filters
    filterEstablishments();
}

function filterEstablishments() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const availabilityFilter = document.getElementById('availabilityFilter').value;

    const filtered = establishments.filter(establishment => {
        const matchesSearch = establishment.name.toLowerCase().includes(searchTerm) ||
                            establishment.address.toLowerCase().includes(searchTerm) ||
                            establishment.location.toLowerCase().includes(searchTerm);
        
        let matchesAvailability = true;
        if (availabilityFilter === 'available') {
            matchesAvailability = establishment.availableSpots > 10;
        } else if (availabilityFilter === 'limited') {
            matchesAvailability = establishment.availableSpots > 0 && establishment.availableSpots <= 10;
        }

        // Parking type filter
        let matchesParkingType = true;
        if (currentParkingFilter === 'general') {
            // General parking: Parking lots and government buildings
            matchesParkingType = establishment.type === 'Parking Lot' || establishment.type === 'Government Building';
        } else if (currentParkingFilter === 'reserved') {
            // Reserved parking: Hotels and Integrated Resorts
            matchesParkingType = establishment.type === 'Hotel' || establishment.type === 'Integrated Resort';
        }

        return matchesSearch && matchesAvailability && matchesParkingType;
    });

    renderEstablishments(filtered);
}

function openReservationModal(establishmentId) {
    currentEstablishment = establishments.find(e => e.id === establishmentId);
    document.getElementById('modalEstablishmentName').textContent = currentEstablishment.name;
    reservationModal.show();
}

let chargesModal = null;

document.addEventListener('DOMContentLoaded', function() {
    reservationModal = new bootstrap.Modal(document.getElementById('reservationModal'));
    chargesModal = new bootstrap.Modal(document.getElementById('chargesModal'));
    renderEstablishments();
    
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('arrivalDate').min = today;
    document.getElementById('arrivalDate').value = today;

    document.getElementById('generalBtn').addEventListener('click', function() {
        setParkingFilter('general');
    });
    document.getElementById('reservedBtn').addEventListener('click', function() {
        setParkingFilter('reserved');
    });
});

let tempReservationData = {};

function confirmReservation() {
    const form = document.getElementById('reservationForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    tempReservationData = {
        customerName: document.getElementById('customerName').value,
        customerEmail: document.getElementById('customerEmail').value,
        customerPhone: document.getElementById('customerPhone').value,
        vehiclePlate: document.getElementById('vehiclePlate').value,
        arrivalDate: document.getElementById('arrivalDate').value,
        arrivalTime: document.getElementById('arrivalTime').value,
        duration: parseInt(document.getElementById('duration').value)
    };

    const duration = tempReservationData.duration;
    const parkingFee = currentEstablishment.pricePerHour * duration;
    const roomFee = currentEstablishment.pricePerHour * 25;
    const serviceFee = (parkingFee+roomFee) * 0.10;
    const total = parkingFee + serviceFee + roomFee;

    document.getElementById('chargesEstablishment').textContent = currentEstablishment.name;
    document.getElementById('chargesDuration').textContent = duration;
    document.getElementById('parkingFee').textContent = parkingFee.toFixed(2);
    document.getElementById('roomFee').textContent = roomFee.toFixed(2);
    document.getElementById('serviceFee').textContent = serviceFee.toFixed(2);
    document.getElementById('totalCharges').textContent = total.toFixed(2);

    reservationModal.hide();
    chargesModal.show();
}

function finalizeReservation() {
    const reservation = {
        id: Date.now(),
        establishmentId: currentEstablishment.id,
        establishmentName: currentEstablishment.name,
        ...tempReservationData,
        totalCost: parseFloat(document.getElementById('totalCharges').textContent),
        reservationDate: new Date().toISOString(),
        status: 'confirmed'
    };

    reservations.push(reservation);
    currentEstablishment.availableSpots = Math.max(0, currentEstablishment.availableSpots - 1);

    const alertHtml = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <h4 class="alert-heading"><i class="bi bi-check-circle me-2"></i>Reservation Confirmed!</h4>
            <p class="mb-0">
                <strong>Establishment:</strong> ${reservation.establishmentName}<br>
                <strong>Date:</strong> ${reservation.arrivalDate} at ${reservation.arrivalTime}<br>
                <strong>Duration:</strong> ${reservation.duration} hours<br>
                <strong>Total Cost:</strong> ₱${reservation.totalCost.toFixed(2)}<br>
                <strong>Reservation ID:</strong> #${reservation.id}
            </p>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;

    document.querySelector('.container').insertAdjacentHTML('afterbegin', alertHtml);

    chargesModal.hide();
    document.getElementById('reservationForm').reset();
    currentEstablishment = null;
    tempReservationData = {};
    renderEstablishments();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}



// Event listeners
document.getElementById('searchInput').addEventListener('input', filterEstablishments);
document.getElementById('availabilityFilter').addEventListener('change', filterEstablishments);

// Clear form when modal is hidden
document.getElementById('reservationModal').addEventListener('hidden.bs.modal', function() {
    document.getElementById('reservationForm').reset();
    //currentEstablishment = null;
});