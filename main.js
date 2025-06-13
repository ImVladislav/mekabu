// This file is intentionally left blank.

// Animate BUY button and show meme alert
const buyBtn = document.getElementById('buyBtn');
if (buyBtn) {
    buyBtn.addEventListener('click', () => {
        buyBtn.classList.add('clicked');
        setTimeout(() => buyBtn.classList.remove('clicked'), 300);
        alert('🐸 $MEKABU bought! Welcome to the frog army!');
    });
    buyBtn.addEventListener('mouseover', () => {
        buyBtn.style.animation = 'bounce 0.7s';
    });
    buyBtn.addEventListener('animationend', () => {
        buyBtn.style.animation = '';
    });
}

// Setup continuous gallery scrolling
function setupGallery() {
    const galleryRows = document.querySelectorAll('.gallery-row');
    
    galleryRows.forEach(row => {
        const items = row.querySelector('.gallery-items');
        if (!items) return;
        
        // Clone all images for seamless scrolling
        const images = Array.from(items.querySelectorAll('img'));
        images.forEach(img => {
            const clone = img.cloneNode(true);
            items.appendChild(clone);
        });
    });
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', setupGallery);

// Animate all gallery items on hover
const galleryItems = document.querySelectorAll('.gallery-item img');
galleryItems.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = `scale(1.08) rotate(${Math.random() * 8 - 4}deg)`;
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = '';
    });
});

// Ensure marquees are always full width and infinite
function restartMarquee(marquee) {
    marquee.style.animation = 'none';
    // Force reflow
    void marquee.offsetWidth;
    marquee.style.animation = '';
}
['marquee1','marquee2','marquee3'].forEach(id => {
    const marquee = document.getElementById(id);
    if (marquee) {
        marquee.addEventListener('animationiteration', () => restartMarquee(marquee));
    }
});

// Copy contract to clipboard and show modal
const contractBlock = document.getElementById('contractBlock');
const modalCopy = document.getElementById('modalCopy');
if (contractBlock && modalCopy) {
    contractBlock.addEventListener('click', () => {
        const contract = contractBlock.textContent.trim();
        navigator.clipboard.writeText(contract).then(() => {
            modalCopy.style.display = 'block';
            setTimeout(() => {
                modalCopy.style.display = 'none';
            }, 2000);
        });
    });
}

// Show loading GIF for 10 seconds on site load, then remove it

// document.addEventListener('DOMContentLoaded', function() {
//     const loadingGif = document.getElementById('loadingGif');
    
//     // Hide the loading gif after 10 seconds
//     setTimeout(function() {
//         loadingGif.classList.add('hide');
        
       
//         setTimeout(function() {
//             loadingGif.style.display = 'none';
//         }, 500);
//     }, 3000); // 10 seconds
// });

// Якщо потрібно додати ще інтерактивності, можна тут