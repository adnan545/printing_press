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
    { src: 'images/letter head2.png', alt: 'Letterhead Sample 1' },
    { src: 'images/letter head6.webp', alt: 'Letterhead Sample 2' },
    { src: 'images/letter head3.webp', alt: 'Letterhead Sample 3' },
    { src: 'images/letter head5.webp', alt: 'Letterhead Sample 4' },
    { src: 'images/letter head7.jpg', alt: 'Letterhead Sample 5' },
    { src: 'images/letter head7.png', alt: 'Letterhead Sample 6' }
  ],
  'business-cards': [
    { src: 'images/business card 2.png', alt: 'business card' },
    { src: 'images/business-card 3.png', alt: 'business card' },
    { src: 'images/Bussnes Card.png', alt: 'business card' },
    { src: 'images/business card 1.png', alt: 'business card' },
    { src: 'images/Bussness card (1).png', alt: 'business card' },
    { src: 'images/bussness card.png', alt: 'business card' }
  ],
  'wedding-cards': [
    { src: 'images/wedding card4.jpg', alt: 'wedding card' },
    { src: 'images/wedding card3.jpg', alt: 'wedding card' },
    { src: 'images/wedding card7.webp', alt: 'wedding card' },
    { src: 'images/wedding card6.webp', alt: 'wedding card' },
    { src: 'images/wedding card5.jpg', alt: 'wedding card' },
    { src: 'images/wedding card1.png', alt: 'wedding card' }
  ],
  'posters': [
    { src: 'images/poster3.webp', alt: 'posters' },
    { src: 'images/vegetable pamphalate.jpg', alt: 'posters' },
    { src: 'images/poster1.jpg', alt: 'posters' },
    { src: 'images/poster2.jpg', alt: 'posters' },
    { src: 'images/poster4.avif', alt: 'posters' },
    { src: 'images/Pamphalate.png', alt: 'posters' }
  ],
  'stamp': [
    { src: 'images/rubber stamp2.avif', alt: 'Letterhead Sample 1' },
    { src: 'images/rubber stamp3.webp', alt: 'Letterhead Sample 2' },
    { src: 'images/rubber stamp4.webp', alt: 'Letterhead Sample 3' }
  ],
  'diary-book': [
    { src: 'images/diary sample.png', alt: 'posters' },
    { src: 'images/diary sample3.webp', alt: 'posters' },
    { src: 'images/diary sample4.webp', alt: 'posters' }
  ],
  'bill-book': [
    { src: 'images/HB Polish 2.png', alt: 'Letterhead Sample 1' },
    { src: 'images/bill book1.jpg', alt: 'Letterhead Sample 2' },
    { src: 'images/bill book3.png', alt: 'Letterhead Sample 3' }
  ],
  'id-cards': [
    { src: 'images/id card.png', alt: 'posters' },
    { src: 'images/id card1.jpg', alt: 'posters' },
    { src: 'images/id card2.jpg', alt: 'posters' }
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
      <img src="${image.src}" alt="${image.alt}" loading="lazy" style="width:220px;height:150px;object-fit:cover;display:block;margin:0 auto;">
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
    // Set fixed size for zoomed image
    zoomImage.style.width = '700px';
    zoomImage.style.height = '450px';
    zoomImage.style.objectFit = 'cover';
    zoomImage.style.display = 'block';
    zoomImage.style.margin = '0 auto';
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
