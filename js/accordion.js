/* ============================================
   ACCORDION — Nexus Food Intelligence
   FAQ toggle functionality
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    if (!faqItems.length) return;

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            faqItems.forEach(other => {
                if (other !== item) {
                    other.classList.remove('active');
                    const q = other.querySelector('.faq-question');
                    if (q) q.setAttribute('aria-expanded', 'false');
                }
            });

            if (isActive) {
                item.classList.remove('active');
                question.setAttribute('aria-expanded', 'false');
            } else {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });
});
