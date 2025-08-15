document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');

    navItems.forEach(item => {
        if (item.dataset.page === currentPage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});
  
// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const demoText = document.querySelector('.demo-text h1');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Update demo text based on selected page
            const page = this.dataset.page;
            const pageNames = {
                'home': 'Home Page',
                'map': 'Map & Location',
                'booking': 'Booking & Reservations',
                'profile': 'User Profile'
            };
            
            demoText.textContent = pageNames[page] || 'Mobile Footer Navigation';
            
            // Add some visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Simulate page change (you can replace this with actual routing)
            console.log(`Navigating to ${page} page`);
        });
    });
    
    // Add touch feedback for mobile devices
    navItems.forEach(item => {
        item.addEventListener('touchstart', function() {
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        });
        
        item.addEventListener('touchend', function() {
            setTimeout(() => {
                if (!this.classList.contains('active')) {
                    this.style.backgroundColor = '';
                }
            }, 200);
        });
    });
});

// Add scroll detection to hide/show footer on scroll
let lastScrollTop = 0;
const footer = document.querySelector('.footer-nav');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        footer.style.transform = 'translateY(100%)';
    } else {
        // Scrolling up
        footer.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
}, false);