document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');

    // Store one valid account (permanent unless cleared from browser)
    if (!localStorage.getItem("validEmail") || !localStorage.getItem("validPassword")) {
        localStorage.setItem("validEmail", "john.doe@gmail.com");
        localStorage.setItem("validPassword", "123456"); // plain text for demo
    }

    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        this.textContent = type === 'password' ? '👁️' : '🙈';
    });

    // Form submission - Validate credentials
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }

        const validEmail = localStorage.getItem("validEmail");
        const validPassword = localStorage.getItem("validPassword");

        if (email === validEmail && password === validPassword) {
            alert("✅ Login successful!");
            window.location.href = 'hometab.html';
        } else {
            alert("❌ Invalid email or password");
        }
    });

    // Add smooth hover effects for interactive elements
    document.querySelectorAll('.form-input, .login-button, .forgot-password, .register-link a')
        .forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.3s ease';
            });
        });

    // Add focus effects for form inputs
    document.querySelectorAll('.form-input').forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.transition = 'transform 0.3s ease';
        });

        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
});
