// utils/scrollUtils.js

// This function helps with smooth scrolling to page sections
// utils/scrollUtils.js

export const scrollToSection = (sectionId) => {
    if (typeof window === 'undefined') return;

    const target = document.getElementById(sectionId);
    if (!target) return;

    const startY = window.scrollY;
    const targetY = target.getBoundingClientRect().top + startY - 100; // offset
    const distance = targetY - startY;
    const duration = 800; // ms
    const startTime = performance.now();

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutCubic(progress);
        window.scrollTo(0, startY + distance * easedProgress);

        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    };

    requestAnimationFrame(animateScroll);
};

// This function initializes scroll handling for page load with hash
export const initScrollToHashElement = () => {
    // Make sure we're on the client side
    if (typeof window === 'undefined') return;

    // Check if there's a hash in the URL
    if (window.location.hash) {
        // Get the target element ID from the hash
        const id = window.location.hash.substring(1);

        // Small delay to ensure DOM is fully loaded
        setTimeout(() => {
            scrollToSection(id);
        }, 300);
    }
};