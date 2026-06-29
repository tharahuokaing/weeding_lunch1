// =====================================================================
// Evening Banquet Core Interface Logic (script.js)
// =====================================================================

/**
 * បើក ឬ បិទបង្ហាញផ្ទាំងកម្មវិធីពិសាភោជនាហារពេលល្ងាច (Timeline View Container)
 */
function toggleProgram() {
    const timeline = document.getElementById('weddingTimeline');
    if (timeline.classList.contains('collapsed')) {
        timeline.classList.remove('collapsed');
    } else {
        timeline.classList.add('collapsed');
    }
}

/**
 * បើកផែនទី Google Maps ទៅកាន់ទីតាំងភោជនីយដ្ឋាន
 */
function openMap() {
    // ទីតាំងតំណភ្ជាប់ទៅកាន់ផែនទីភោជនីយដ្ឋាន
    window.open('https://tharahuokaing.github.io/restaurant1/', '_blank');
}

/**
 * ដំណើរការរំកិលអេក្រង់ឡើងទៅផ្នែកខាងលើបង្អស់ (Scroll Back to Top)
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * តាមដានការ Scroll របស់រមូរអេក្រង់ដើម្បីលាក់/បង្ហាញប៊ូតុង "ត្រឡប់ទៅកំពូល"
 */
window.onscroll = function() {
    const topButton = document.getElementById("scrollTopBtn");
    if (topButton) {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    }
};
