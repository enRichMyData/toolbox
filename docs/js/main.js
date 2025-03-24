document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  
  // Function to adjust main padding based on header height
  function adjustMainPadding() {
    if (header && main) {
      const headerHeight = header.offsetHeight;
      main.style.paddingTop = (headerHeight + 20) + 'px'; // Add a small buffer
    }
  }
  
  // Initial adjustment
  adjustMainPadding();
  
  // Re-adjust on window resize
  window.addEventListener('resize', adjustMainPadding);
  
  // Re-adjust after page fully loads (for images etc.)
  window.addEventListener('load', adjustMainPadding);
  
  // If we have a compact header transition, adjust on scroll too
  window.addEventListener('scroll', function() {
    // Delay the adjustment slightly to let transitions complete
    setTimeout(adjustMainPadding, 300);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Header scroll handler
  const header = document.querySelector('header');
  const mainContent = document.querySelector('main');
  const overviewSection = document.getElementById('overview');
  
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const overviewOffset = overviewSection ? overviewSection.offsetTop : 300;
    
    if (scrollPosition > overviewOffset - 100) {
      header.classList.add('header-compact');
      document.body.classList.add('header-is-compact'); // Fallback for browsers without :has support
    } else {
      header.classList.remove('header-compact');
      document.body.classList.remove('header-is-compact');
    }
  });
  
  // Fix any hash link jumps that might hide content
  if (window.location.hash) {
    setTimeout(function() {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 120,
          behavior: 'smooth'
        });
      }
    }, 100);
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const headerTop = document.querySelector('.header-top');
  const headerLogo = document.querySelector('.logo');
  const headerTitle = document.querySelector('header h1');
  const logoContainer = document.querySelector('.logo-container');
  const overviewSection = document.getElementById('overview');
  
  // Mobile menu functionality
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const closeMenuButton = document.querySelector('.close-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
  
  if (mobileMenuButton && mobileMenu && closeMenuButton) {
    // Open mobile menu
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
    
    // Close mobile menu
    closeMenuButton.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
    });
    
    // Close menu when clicking a link
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
      });
    });
  }
  
  // Add scroll event listener for header transformation
  if (header && overviewSection) {
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      const overviewOffset = overviewSection.offsetTop;
      
      // When user scrolls past overview section, transform header
      if (scrollPosition > overviewOffset - 100) {
        header.classList.add('header-compact');
      } else {
        header.classList.remove('header-compact');
      }
    });
  }
});
// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const closeMenuButton = document.querySelector('.close-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
  
  if (mobileMenuButton && mobileMenu && closeMenuButton) {
    // Open mobile menu
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
    
    // Close mobile menu
    closeMenuButton.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
    });
    
    // Close menu when clicking a link
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
    // Add TRL level tooltips
    const trlBadges = document.querySelectorAll('.trl-badge');
    trlBadges.forEach(badge => {
      badge.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://euraxess.ec.europa.eu/career-development/researchers/manual-scientific-entrepreneurship/major-steps/trl', '_blank');
      });
      badge.style.cursor = 'pointer';
      badge.title = 'Click for Technology Readiness Level (TRL) information';
    });
    
    // Add license tooltips
    const licenseBadges = document.querySelectorAll('.license-badge');
    licenseBadges.forEach(badge => {
      let url = '';
      if (badge.classList.contains('gpl3')) {
        url = 'https://opensource.org/licenses/GPL-3.0';
        badge.title = 'GNU General Public License v3.0';
      } else if (badge.classList.contains('apache2')) {
        url = 'https://opensource.org/licenses/Apache-2.0';
        badge.title = 'Apache License 2.0';
      } else if (badge.classList.contains('mit')) {
        url = 'https://opensource.org/licenses/MIT';
        badge.title = 'MIT License';
      } else if (badge.classList.contains('proprietary')) {
        badge.title = 'Proprietary License';
      }
      
      if (url) {
        badge.addEventListener('click', function(e) {
          e.preventDefault();
          window.open(url, '_blank');
        });
        badge.style.cursor = 'pointer';
      }
    });
  });


document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Optional: Add filter functionality for tools
  const filterButtons = document.querySelectorAll('.filter-btn');
  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Show/hide cards based on filter
        document.querySelectorAll('.tool-card').forEach(card => {
          if (filter === 'all' || card.classList.contains(filter)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
});