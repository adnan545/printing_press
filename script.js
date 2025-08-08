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

// Sample images data
const sampleImages = {
  'letterhead': [
    { src: 'https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=Letterhead+Sample+1', alt: 'Letterhead Sample 1' },
    { src: 'https://via.placeholder.com/400x300/7C3AED/FFFFFF?text=Letterhead+Sample+2', alt: 'Letterhead Sample 2' },
    { src: 'https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Letterhead+Sample+3', alt: 'Letterhead Sample 3' },
    { src: 'https://via.placeholder.com/400x300/059669/FFFFFF?text=Letterhead+Sample+4', alt: 'Letterhead Sample 4' },
    { src: 'https://via.placeholder.com/400x300/D97706/FFFFFF?text=Letterhead+Sample+5', alt: 'Letterhead Sample 5' },
    { src: 'https://via.placeholder.com/400x300/BE185D/FFFFFF?text=Letterhead+Sample+6', alt: 'Letterhead Sample 6' }
  ],
  'business-cards': [
    { src: 'https://via.placeholder.com/400x300/1E40AF/FFFFFF?text=Business+Card+1', alt: 'Business Card Sample 1' },
    { src: 'https://via.placeholder.com/400x300/7C2D12/FFFFFF?text=Business+Card+2', alt: 'Business Card Sample 2' },
    { src: 'https://via.placeholder.com/400x300/166534/FFFFFF?text=Business+Card+3', alt: 'Business Card Sample 3' },
    { src: 'https://via.placeholder.com/400x300/92400E/FFFFFF?text=Business+Card+4', alt: 'Business Card Sample 4' },
    { src: 'https://via.placeholder.com/400x300/9333EA/FFFFFF?text=Business+Card+5', alt: 'Business Card Sample 5' },
    { src: 'https://via.placeholder.com/400x300/BE123C/FFFFFF?text=Business+Card+6', alt: 'Business Card Sample 6' }
  ],
  'wedding-cards': [
    { src: 'https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Wedding+Card+1', alt: 'Wedding Card Sample 1' },
    { src: 'https://via.placeholder.com/400x300/EF4444/FFFFFF?text=Wedding+Card+2', alt: 'Wedding Card Sample 2' },
    { src: 'https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Wedding+Card+3', alt: 'Wedding Card Sample 3' },
    { src: 'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Wedding+Card+4', alt: 'Wedding Card Sample 4' },
    { src: 'https://via.placeholder.com/400x300/F97316/FFFFFF?text=Wedding+Card+5', alt: 'Wedding Card Sample 5' },
    { src: 'https://via.placeholder.com/400x300/EC4899/FFFFFF?text=Wedding+Card+6', alt: 'Wedding Card Sample 6' }
  ],
  'posters': [
    { src: 'https://via.placeholder.com/400x300/6366F1/FFFFFF?text=Poster+Sample+1', alt: 'Poster Sample 1' },
    { src: 'https://via.placeholder.com/400x300/EF4444/FFFFFF?text=Poster+Sample+2', alt: 'Poster Sample 2' },
    { src: 'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Poster+Sample+3', alt: 'Poster Sample 3' },
    { src: 'https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Poster+Sample+4', alt: 'Poster Sample 4' },
    { src: 'https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Poster+Sample+5', alt: 'Poster Sample 5' },
    { src: 'https://via.placeholder.com/400x300/EC4899/FFFFFF?text=Poster+Sample+6', alt: 'Poster Sample 6' }
  ],
  'offset-printing': [
    { src: 'https://via.placeholder.com/400x300/1F2937/FFFFFF?text=Offset+Print+1', alt: 'Offset Printing Sample 1' },
    { src: 'https://via.placeholder.com/400x300/374151/FFFFFF?text=Offset+Print+2', alt: 'Offset Printing Sample 2' },
    { src: 'https://via.placeholder.com/400x300/4B5563/FFFFFF?text=Offset+Print+3', alt: 'Offset Printing Sample 3' },
    { src: 'https://via.placeholder.com/400x300/6B7280/FFFFFF?text=Offset+Print+4', alt: 'Offset Printing Sample 4' },
    { src: 'https://via.placeholder.com/400x300/9CA3AF/FFFFFF?text=Offset+Print+5', alt: 'Offset Printing Sample 5' },
    { src: 'https://via.placeholder.com/400x300/D1D5DB/000000?text=Offset+Print+6', alt: 'Offset Printing Sample 6' }
  ],
  'digital-printing': [
    { src: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Digital+Print+1', alt: 'Digital Printing Sample 1' },
    { src: 'https://via.placeholder.com/400x300/1D4ED8/FFFFFF?text=Digital+Print+2', alt: 'Digital Printing Sample 2' },
    { src: 'https://via.placeholder.com/400x300/1E40AF/FFFFFF?text=Digital+Print+3', alt: 'Digital Printing Sample 3' },
    { src: 'https://via.placeholder.com/400x300/1E3A8A/FFFFFF?text=Digital+Print+4', alt: 'Digital Printing Sample 4' },
    { src: 'https://via.placeholder.com/400x300/312E81/FFFFFF?text=Digital+Print+5', alt: 'Digital Printing Sample 5' },
    { src: 'https://via.placeholder.com/400x300/3730A3/FFFFFF?text=Digital+Print+6', alt: 'Digital Printing Sample 6' }
  ],
  'large-format': [
    { src: 'https://via.placeholder.com/400x300/059669/FFFFFF?text=Large+Format+1', alt: 'Large Format Sample 1' },
    { src: 'https://via.placeholder.com/400x300/047857/FFFFFF?text=Large+Format+2', alt: 'Large Format Sample 2' },
    { src: 'https://via.placeholder.com/400x300/065F46/FFFFFF?text=Large+Format+3', alt: 'Large Format Sample 3' },
    { src: 'https://via.placeholder.com/400x300/064E3B/FFFFFF?text=Large+Format+4', alt: 'Large Format Sample 4' },
    { src: 'https://via.placeholder.com/400x300/134E4A/FFFFFF?text=Large+Format+5', alt: 'Large Format Sample 5' },
    { src: 'https://via.placeholder.com/400x300/155E63/FFFFFF?text=Large+Format+6', alt: 'Large Format Sample 6' }
  ],
  'custom-products': [
    { src: 'https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Custom+Product+1', alt: 'Custom Product Sample 1' },
    { src: 'https://via.placeholder.com/400x300/B91C1C/FFFFFF?text=Custom+Product+2', alt: 'Custom Product Sample 2' },
    { src: 'https://via.placeholder.com/400x300/991B1B/FFFFFF?text=Custom+Product+3', alt: 'Custom Product Sample 3' },
    { src: 'https://via.placeholder.com/400x300/7F1D1D/FFFFFF?text=Custom+Product+4', alt: 'Custom Product Sample 4' },
    { src: 'https://via.placeholder.com/400x300/7C2D12/FFFFFF?text=Custom+Product+5', alt: 'Custom Product Sample 5' },
    { src: 'https://via.placeholder.com/400x300/92400E/FFFFFF?text=Custom+Product+6', alt: 'Custom Product Sample 6' }
  ]
};

// Popup functionality
let currentImages = [];
let currentImageIndex = 0;

// Get popup elements
const samplesPopup = document.getElementById('samples-popup');
const popupTitle = document.getElementById('popup-title');
const samplesGrid = document.getElementById('samples-grid');
const popupClose = document.getElementById('popup-close');
const zoomModal = document.getElementById('zoom-modal');
const zoomImage = document.getElementById('zoom-image');
const zoomClose = document.getElementById('zoom-close');
const zoomPrev = document.getElementById('zoom-prev');
const zoomNext = document.getElementById('zoom-next');

// Add event listeners for view samples buttons
document.addEventListener('DOMContentLoaded', function() {
  const viewSamplesBtns = document.querySelectorAll('.view-samples-btn');
  
  viewSamplesBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const serviceCard = this.closest('[data-service]');
      const serviceType = serviceCard.getAttribute('data-service');
      openSamplesPopup(serviceType);
    });
  });
});

// Open samples popup
function openSamplesPopup(serviceType) {
  const images = sampleImages[serviceType] || [];
  currentImages = images;
  
  // Set popup title
  const serviceName = serviceType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  popupTitle.textContent = `${serviceName} Samples`;
  
  // Clear and populate samples grid
  samplesGrid.innerHTML = '';
  
  images.forEach((image, index) => {
    const sampleItem = document.createElement('div');
    sampleItem.className = 'sample-item';
    sampleItem.innerHTML = `
      <img src="${image.src}" alt="${image.alt}" loading="lazy">
      <div class="sample-overlay">
        <i class="fas fa-search-plus zoom-icon"></i>
      </div>
    `;
    
    sampleItem.addEventListener('click', () => openZoomModal(index));
    samplesGrid.appendChild(sampleItem);
  });
  
  // Show popup
  samplesPopup.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close samples popup
function closeSamplesPopup() {
  samplesPopup.classList.remove('active');
  document.body.style.overflow = '';
}

// Open zoom modal
function openZoomModal(imageIndex) {
  currentImageIndex = imageIndex;
  updateZoomImage();
  zoomModal.classList.add('active');
}

// Close zoom modal
function closeZoomModal() {
  zoomModal.classList.remove('active');
}

// Update zoom image
function updateZoomImage() {
  if (currentImages[currentImageIndex]) {
    zoomImage.src = currentImages[currentImageIndex].src;
    zoomImage.alt = currentImages[currentImageIndex].alt;
  }
  
  // Update navigation buttons
  zoomPrev.disabled = currentImageIndex === 0;
  zoomNext.disabled = currentImageIndex === currentImages.length - 1;
}

// Navigate zoom images
function navigateZoom(direction) {
  if (direction === 'prev' && currentImageIndex > 0) {
    currentImageIndex--;
  } else if (direction === 'next' && currentImageIndex < currentImages.length - 1) {
    currentImageIndex++;
  }
  updateZoomImage();
}

// Event listeners for popup controls
if (popupClose) {
  popupClose.addEventListener('click', closeSamplesPopup);
}

if (samplesPopup) {
  samplesPopup.addEventListener('click', function(e) {
    if (e.target.classList.contains('popup-overlay')) {
      closeSamplesPopup();
    }
  });
}

if (zoomClose) {
  zoomClose.addEventListener('click', closeZoomModal);
}

if (zoomModal) {
  zoomModal.addEventListener('click', function(e) {
    if (e.target.classList.contains('zoom-overlay')) {
      closeZoomModal();
    }
  });
}

if (zoomPrev) {
  zoomPrev.addEventListener('click', () => navigateZoom('prev'));
}

if (zoomNext) {
  zoomNext.addEventListener('click', () => navigateZoom('next'));
}

// Keyboard navigation for zoom modal
document.addEventListener('keydown', function(e) {
  if (zoomModal.classList.contains('active')) {
    switch(e.key) {
      case 'Escape':
        closeZoomModal();
        break;
      case 'ArrowLeft':
        navigateZoom('prev');
        break;
      case 'ArrowRight':
        navigateZoom('next');
        break;
    }
  }
  
  if (samplesPopup.classList.contains('active') && e.key === 'Escape') {
    closeSamplesPopup();
  }
});
