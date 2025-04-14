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
