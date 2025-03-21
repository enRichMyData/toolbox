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