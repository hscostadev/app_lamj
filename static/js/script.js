// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    console.log('Lar do Amparo Menino Jesus - Em Construção');
    
    // Add subtle parallax effect to background
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrolled = window.pageYOffset;
                const background = document.body;
                
                if (background) {
                    background.style.backgroundPositionY = -(scrolled * 0.3) + 'px';
                }
                
                ticking = false;
            });
            
            ticking = true;
        }
    });
    
    // Add smooth fade-in animation for content
    const contentCard = document.querySelector('.content-card');
    if (contentCard) {
        setTimeout(() => {
            contentCard.style.opacity = '1';
        }, 100);
    }
    
    // Add hover effect enhancement for logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.05)';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.filter = 'brightness(1)';
        });
    }
});