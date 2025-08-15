const establishments = [
            {
                id: 1,
                name: "Grand Plaza Hotel",
                type: "Hotel",
                location: "Downtown",
                address: "123 Main Street, Downtown",
                totalSpots: 150,
                availableSpots: 42,
                pricePerHour: 8
            },
            {
                id: 2,
                name: "Skyline Conference Center",
                type: "Conference Center",
                location: "Business District",
                address: "456 Business Ave, Business District",
                totalSpots: 300,
                availableSpots: 87,
                pricePerHour: 6
            },
            {
                id: 3,
                name: "Oceanview Resort",
                type: "Hotel",
                location: "Waterfront",
                address: "789 Ocean Drive, Waterfront",
                totalSpots: 200,
                availableSpots: 5,
                pricePerHour: 12
            },
            {
                id: 4,
                name: "Metropolitan Event Hall",
                type: "Event Venue",
                location: "Downtown",
                address: "321 Event Plaza, Downtown",
                totalSpots: 180,
                availableSpots: 34,
                pricePerHour: 10
            },
            {
                id: 5,
                name: "Airport Suites Hotel",
                type: "Hotel",
                location: "Airport Area",
                address: "555 Airport Blvd, Airport Area",
                totalSpots: 120,
                availableSpots: 67,
                pricePerHour: 5
            },
            {
                id: 6,
                name: "Fine Dining Restaurant",
                type: "Restaurant",
                location: "Downtown",
                address: "888 Gourmet Street, Downtown",
                totalSpots: 50,
                availableSpots: 0,
                pricePerHour: 15
            },
            {
                id: 7,
                name: "Business Park Hotel",
                type: "Hotel",
                location: "Business District",
                address: "999 Corporate Way, Business District",
                totalSpots: 100,
                availableSpots: 23,
                pricePerHour: 7
            },
            {
                id: 8,
                name: "Celebration Banquet Hall",
                type: "Event Venue",
                location: "Waterfront",
                address: "777 Celebration Ave, Waterfront",
                totalSpots: 250,
                availableSpots: 156,
                pricePerHour: 9
            }
        ];

        let currentEstablishment = null;
        let reservations = [];
        let reservationModal;

        // Initialize Bootstrap modal
        document.addEventListener('DOMContentLoaded', function() {
            reservationModal = new bootstrap.Modal(document.getElementById('reservationModal'));
            renderEstablishments();
            
            // Set minimum date to today
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('arrivalDate').min = today;
            document.getElementById('arrivalDate').value = today;
        });

        function renderEstablishments(establishmentsToRender = establishments) {
            const container = document.getElementById('establishmentsContainer');
            const noResults = document.getElementById('noResults');
            
            if (establishmentsToRender.length === 0) {
                container.style.display = 'none';
                noResults.style.display = 'block';
                return;
            }
            
            container.style.display = 'flex';
            noResults.style.display = 'none';
            
            container.innerHTML = establishmentsToRender.map(establishment => {
                const occupiedSpots = establishment.totalSpots - establishment.availableSpots;
                const isFullyBooked = establishment.availableSpots === 0;
                const isLimited = establishment.availableSpots <= 10 && !isFullyBooked;
                
                let badgeClass = 'bg-success';
                let badgeText = 'Available';
                
                if (isFullyBooked) {
                    badgeClass = 'bg-danger';
                    badgeText = 'Full';
                } else if (isLimited) {
                    badgeClass = 'bg-warning';
                    badgeText = 'Limited';
                }
                
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
                                </div>
                                
                                <div class="parking-stats mb-3">
                                    <div class="row text-center">
                                        <div class="col-6">
                                            <span class="stat-number text-available">${establishment.availableSpots}</span>
                                            <small class="text-muted d-block">Available</small>
                                        </div>
                                        <div class="col-6">
                                            <span class="stat-number text-occupied">${occupiedSpots}</span>
                                            <small class="text-muted d-block">Occupied</small>
                                        </div>
                                    </div>
                                    <hr class="my-2">
                                    <div class="text-center price-display">
                                        $${establishment.pricePerHour}/hour
                                    </div>
                                </div>
                                
                                <div class="mt-auto">
                                    <button class="btn gradient-btn text-white w-100 ${isFullyBooked ? 'disabled' : ''}" 
                                            ${isFullyBooked ? 'disabled' : ''}
                                            onclick="openReservationModal(${establishment.id})">
                                        <i class="bi bi-calendar-plus me-2"></i>
                                        ${isFullyBooked ? 'No Spots Available' : 'Reserve Spot'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        function filterEstablishments() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const typeFilter = document.getElementById('typeFilter').value;
            const locationFilter = document.getElementById('locationFilter').value;
            const availabilityFilter = document.getElementById('availabilityFilter').value;

            const filtered = establishments.filter(establishment => {
                const matchesSearch = establishment.name.toLowerCase().includes(searchTerm) ||
                                    establishment.address.toLowerCase().includes(searchTerm) ||
                                    establishment.location.toLowerCase().includes(searchTerm);
                
                const matchesType = !typeFilter || establishment.type === typeFilter;
                const matchesLocation = !locationFilter || establishment.location === locationFilter;
                
                let matchesAvailability = true;
                if (availabilityFilter === 'available') {
                    matchesAvailability = establishment.availableSpots > 10;
                } else if (availabilityFilter === 'limited') {
                    matchesAvailability = establishment.availableSpots > 0 && establishment.availableSpots <= 10;
                }

                return matchesSearch && matchesType && matchesLocation && matchesAvailability;
            });

            renderEstablishments(filtered);
        }

        function openReservationModal(establishmentId) {
            currentEstablishment = establishments.find(e => e.id === establishmentId);
            document.getElementById('modalEstablishmentName').textContent = currentEstablishment.name;
            reservationModal.show();
        }

        function confirmReservation() {
            const form = document.getElementById('reservationForm');
            
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            const reservation = {
                id: Date.now(),
                establishmentId: currentEstablishment.id,
                establishmentName: currentEstablishment.name,
                customerName: document.getElementById('customerName').value,
                customerEmail: document.getElementById('customerEmail').value,
                customerPhone: document.getElementById('customerPhone').value,
                vehiclePlate: document.getElementById('vehiclePlate').value,
                arrivalDate: document.getElementById('arrivalDate').value,
                arrivalTime: document.getElementById('arrivalTime').value,
                duration: parseInt(document.getElementById('duration').value),
                totalCost: currentEstablishment.pricePerHour * parseInt(document.getElementById('duration').value),
                reservationDate: new Date().toISOString(),
                status: 'confirmed'
            };

            reservations.push(reservation);
            
            // Update available spots
            currentEstablishment.availableSpots = Math.max(0, currentEstablishment.availableSpots - 1);
            
            // Show success alert
            const alertHtml = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <h4 class="alert-heading"><i class="bi bi-check-circle me-2"></i>Reservation Confirmed!</h4>
                    <p class="mb-0">
                        <strong>Establishment:</strong> ${reservation.establishmentName}<br>
                        <strong>Date:</strong> ${reservation.arrivalDate} at ${reservation.arrivalTime}<br>
                        <strong>Duration:</strong> ${reservation.duration} hours<br>
                        <strong>Total Cost:</strong> $${reservation.totalCost}<br>
                        <strong>Reservation ID:</strong> #${reservation.id}
                    </p>
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            `;
            
            document.querySelector('.container').insertAdjacentHTML('afterbegin', alertHtml);
            
            reservationModal.hide();
            form.reset();
            renderEstablishments();
            
            // Scroll to top to show the alert
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Event listeners
        document.getElementById('searchInput').addEventListener('input', filterEstablishments);
        document.getElementById('typeFilter').addEventListener('change', filterEstablishments);
        document.getElementById('locationFilter').addEventListener('change', filterEstablishments);
        document.getElementById('availabilityFilter').addEventListener('change', filterEstablishments);

        // Clear form when modal is hidden
        document.getElementById('reservationModal').addEventListener('hidden.bs.modal', function() {
            document.getElementById('reservationForm').reset();
            currentEstablishment = null;
        });