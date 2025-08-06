// Disable right-click (Context Menu)
document.addEventListener('contextmenu', function (e) {
  e.preventDefault(); // This prevents the right-click menu
});

// Disable F12 (Developer Tools) and Ctrl + Shift + I (Inspector)
document.addEventListener('keydown', function (e) {
  // Disable F12 key (DevTools)
  if (e.key === "F12" || 
     (e.ctrlKey && e.shiftKey && e.key === "I") || 
     (e.ctrlKey && e.shiftKey && e.key === "J")) {
    e.preventDefault(); // Prevent the default behavior
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav');
const menuIcon = document.getElementById('menu-icon');

if (mobileMenuBtn && mobileNav && menuIcon) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    const isOpen = mobileNav.classList.contains('active');
    menuIcon.classList = isOpen ? 'fas fa-times' : 'fas fa-bars';
  });
}

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

if (themeToggle && mobileThemeToggle) {
  const themeIcon = themeToggle.querySelector('i');
  const mobileThemeIcon = mobileThemeToggle.querySelector('i');

  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem('printcraft-theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark-mode');
    if (themeIcon) themeIcon.classList = 'fas fa-sun';
    if (mobileThemeIcon) mobileThemeIcon.classList = 'fas fa-sun';
  }

  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    
    // Update icons
    if (themeIcon) themeIcon.classList = isDark ? 'fas fa-sun' : 'fas fa-moon';
    if (mobileThemeIcon) mobileThemeIcon.classList = isDark ? 'fas fa-sun' : 'fas fa-moon';
    
    // Save preference
    localStorage.setItem('printcraft-theme', isDark ? 'dark' : 'light');
  }

  themeToggle.addEventListener('click', toggleTheme);
  mobileThemeToggle.addEventListener('click', toggleTheme);
}

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.name || !data.email || !data.subject || !data.message) {
      showNotification('Please fill in all required fields.', 'error');
      return;
    }
    
    // Simulate form submission
    showNotification('Message sent successfully! We\'ll get back to you within 24 hours.', 'success');
    
    // Reset form
    contactForm.reset();
  });
}

// Notification system
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notification => notification.remove());
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
      <span>${message}</span>
      <button class="notification-close">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `;
  
  // Add to page
  document.body.appendChild(notification);
  
  // Show notification
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 300);
  }, 5000);
  
  // Close button functionality
  const closeBtn = notification.querySelector('.notification-close');
  closeBtn.addEventListener('click', () => {
    notification.classList.remove('show');
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 300);
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
