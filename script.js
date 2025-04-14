// Khi trang đã tải xong, ẩn màn hình loading và hiển thị nội dung
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".loading-screen").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }, 3000);
});

// Trigger animation on hover
document.querySelector('.large').addEventListener('mouseenter', () => {
    anime({
        targets: '.large span',
        translateY: [
            { value: '-2.75rem', duration: 600, easing: 'easeOutExpo' },
            { value: '0rem', duration: 800, easing: 'easeOutBounce', delay: 100 }
        ],
        rotate: {
            value: '-1turn',
            easing: 'easeInOutCirc',
            duration: 1400,
        },
        delay: anime.stagger(50),
        loop: false,
    });
});

// Scroll Animation
let lastScrollTop = 0;
const scrollThreshold = 50; // Minimum scroll distance to trigger animation

function checkVisibility() {
    const elements = document.querySelectorAll('section, .skill-category, .timeline-item, .project-card, .education-item, .contact-info, .social-links');
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDirection = currentScrollTop > lastScrollTop ? 'down' : 'up';
    const viewportHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // If element is in viewport
        if (elementTop < viewportHeight && elementBottom > 0) {
            // Always show elements that are in viewport
            element.classList.add('visible');
            element.classList.remove('hidden');
        } else {
            // Elements outside viewport
            if (elementTop < 0) {
                // Elements above viewport - always keep visible
                element.classList.add('visible');
                element.classList.remove('hidden');
            } else {
                // Elements below viewport
                if (scrollDirection === 'up' && elementTop > viewportHeight * 0.2) {
                    // Hide elements that are well below the viewport when scrolling up
                    element.classList.add('hidden');
                    element.classList.remove('visible');
                } else {
                    element.classList.remove('visible', 'hidden');
                }
            }
        }
    });
    
    lastScrollTop = currentScrollTop;
}

// Initial check
document.addEventListener('DOMContentLoaded', () => {
    checkVisibility();
});

// Check on scroll with debounce
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        checkVisibility();
    }, 50); // Debounce time in milliseconds
});
