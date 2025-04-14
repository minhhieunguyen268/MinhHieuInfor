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
function checkVisibility() {
    const elements = document.querySelectorAll('section, .skill-category, .timeline-item, .project-card, .education-item, .contact-info, .social-links');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        // If element is in viewport
        if (elementTop < windowHeight * 0.8 && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

// Initial check
document.addEventListener('DOMContentLoaded', () => {
    checkVisibility();
});

// Check on scroll
window.addEventListener('scroll', () => {
    checkVisibility();
});
