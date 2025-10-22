// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active navigation link highlighting
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simplified scroll animations - just fade in
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);

    // Observe elements for simple fade-in
    const animateElements = document.querySelectorAll('.timeline-item, .project-card, .skill-category, .stat');
    animateElements.forEach(el => {
        el.style.opacity = '0.8';
        observer.observe(el);
    });

    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission (replace with actual form handling)
            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
            this.reset();
        });
    }

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
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
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;
        
        // Add notification styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 1rem;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;
        
        // Add close button styles
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            line-height: 1;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove after 5 seconds
        const timeoutId = setTimeout(() => {
            removeNotification(notification);
        }, 5000);
        
        // Close button functionality
        closeBtn.addEventListener('click', () => {
            clearTimeout(timeoutId);
            removeNotification(notification);
        });
    }
    
    function removeNotification(notification) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    // Removed typing animation and parallax effects for cleaner look

    // Removed fancy animations for cleaner design

    // Fix hero title display - prevent any JavaScript interference
    const heroTitle = document.getElementById('main-title');
    if (heroTitle) {
        // Restore original HTML content if it got mangled
        if (heroTitle.innerHTML.includes('&lt;') || heroTitle.innerHTML.includes('&gt;')) {
            heroTitle.innerHTML = 'Hi, I\'m <span class="highlight">Zhanqiu (Summer) Hu</span>';
        }
        heroTitle.style.opacity = '1';
        heroTitle.style.visibility = 'visible';
    }

    // Initialize all animations on page load
    setTimeout(() => {
        updateActiveNavLink();
    }, 500);
    
    // Initialize projects - expand first one only
    const projectDetails = document.querySelectorAll('.project-details');
    projectDetails.forEach((detail, index) => {
        if (index === 0) {
            // First project (FlashDLM) starts expanded
            detail.classList.remove('collapsed');
            detail.style.maxHeight = 'none';
            detail.style.overflow = 'visible';
            detail.style.display = 'block';
        } else {
            // Other projects start collapsed
            detail.classList.add('collapsed');
            detail.style.maxHeight = '0';
        }
    });
    
    // Set dropdown icons based on project position
    const dropdownIcons = document.querySelectorAll('.dropdown-icon');
    dropdownIcons.forEach((icon, index) => {
        if (index === 0) {
            // First project starts with expanded icon
            icon.classList.add('rotated');
        } else {
            // Other projects start with collapsed icon
            icon.classList.remove('rotated');
        }
    });
});

// Utility function to debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimized scroll handler
const optimizedScrollHandler = debounce(function() {
    // Add any scroll-based functionality here
}, 10);

// Toggle project dropdown
function toggleProject(projectId) {
    const projectDetails = document.getElementById(projectId);
    const projectContent = projectDetails.parentElement;
    const dropdownIcon = projectContent.querySelector('.dropdown-icon');
    
    if (projectDetails.classList.contains('collapsed')) {
        // Expand
        projectDetails.classList.remove('collapsed');
        dropdownIcon.classList.add('rotated');
        
        // Force a reflow and measure the natural height
        projectDetails.style.maxHeight = 'none';
        projectDetails.offsetHeight; // Force reflow
        const naturalHeight = projectDetails.scrollHeight;
        projectDetails.style.maxHeight = '0';
        
        // Start the animation
        setTimeout(() => {
            projectDetails.style.maxHeight = naturalHeight + 'px';
            // Remove the fixed height after animation completes to allow natural flow
            setTimeout(() => {
                projectDetails.style.maxHeight = 'none';
            }, 300);
        }, 10);
    } else {
        // Collapse
        projectDetails.classList.add('collapsed');
        projectDetails.style.maxHeight = '0';
        dropdownIcon.classList.remove('rotated');
    }
}
