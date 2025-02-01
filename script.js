document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const playMusicButton = document.getElementById('playMusic');
    let currentPage = 0;
    const audio = new Audio('song.mp3');

    // Initialize pages
    updatePages();

    function updatePages() {
        pages.forEach((page, index) => {
            page.style.display = 'none';
            page.classList.remove('flipped');
            if (index === currentPage) {
                page.style.display = 'block';
                page.classList.add('active');
            }
        });

        // Show/hide navigation buttons
        prevPageButton.style.display = currentPage === 0 ? 'none' : 'inline-block';
        nextPageButton.style.display = currentPage === pages.length - 1 ? 'none' : 'inline-block';

        // Show/hide proposal buttons on last page
        if (currentPage === pages.length - 1) {
            yesButton.style.display = 'inline-block';
            noButton.style.display = 'inline-block';
        } else {
            yesButton.style.display = 'none';
            noButton.style.display = 'none';
        }
    }

    nextPageButton.addEventListener('click', function() {
        if (currentPage < pages.length - 1) {
            pages[currentPage].classList.add('flipped');
            setTimeout(() => {
                currentPage++;
                updatePages();
            }, 500);
        }
    });

    prevPageButton.addEventListener('click', function() {
        if (currentPage > 0) {
            pages[currentPage].classList.remove('flipped');
            currentPage--;
            updatePages();
        }
    });

    playMusicButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playMusicButton.textContent = '⏸️ Pause Our Song';
        } else {
            audio.pause();
            playMusicButton.textContent = '🎶 Play Our Song';
        }
    });

});


function createConfetti() {
    const colors = ['#ff1493', '#ff69b4', '#add8e6', '#87ceeb', '#ffffff'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
}

function createFloatingHearts() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = '💖';
            heart.style.left = Math.random() * 100 + 'vw';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 4000);
        }, i * 200);
    }
}

function playSuccessSound() {
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAAABmYWN0BAAAAAAAAABkYXRhAAAAAA==');
    audio.play().catch(e => console.log('Audio play failed:', e));
}

let noButtonCount = 0;
const maxDistance = 100;

yesButton.addEventListener('click', function() {
    // Disable both buttons
    yesButton.disabled = true;
    noButton.style.display = 'none';
    
    // Start celebrations
    createConfetti();
    createFloatingHearts();
    playSuccessSound();
    
    // Animate the yes button
    yesButton.style.animation = 'dance 1s infinite';
    
    // Change page content
    const pageContent = document.querySelector('.page.active .page-content');
    pageContent.innerHTML = `
        <h2 class="page-heading" style="font-size: 32px; color: #ff1493;">💝 She Said YES! 💝</h2>
        <img src="/api/placeholder/240/320" alt="Celebration" class="page-image">
        <div class="note" style="font-size: 24px;">
            🎉 Let's make every day as special as today! 🎉
        </div>
    `;
    
    // Change background with heart animation
    document.body.style.background = 'linear-gradient(45deg, #ff1493, #ff69b4)';
    
    // Remove the navigation buttons
    document.querySelector('.navigation-buttons').style.display = 'none';
});

noButton.addEventListener('click', function(e) {
    noButtonCount++;
    
    if (noButtonCount <= 3) {
        // Make the button dodge the cursor
        const newX = Math.random() * maxDistance * (Math.random() > 0.5 ? 1 : -1);
        const newY = Math.random() * maxDistance * (Math.random() > 0.5 ? 1 : -1);
        
        noButton.style.transform = `translate(${newX}px, ${newY}px)`;
        noButton.style.animation = 'shake 0.5s';
        
        // Change button text based on attempts
        const messages = [
            "Are you sure? 😢",
            "Think again! 🥺",
            "Last chance! 💝"
        ];
        noButton.textContent = messages[noButtonCount - 1];
        
        // Make Yes button more attractive
        yesButton.style.transform = 'scale(1.2)';
        yesButton.style.boxShadow = '0 0 20px #ff1493';
        
    } else {
        // If they really insist on clicking no
        alert("Sorry, 'No' is not an option today! 💝");
        noButton.style.display = 'none';
        yesButton.style.transform = 'scale(1.5)';
    }
});

// Add hover effects
yesButton.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
    this.style.boxShadow = '0 0 15px #ff1493';
});

yesButton.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = '0.1em 0.1em';
});


yesButton.addEventListener('click', function() {
    // Disable both buttons
    yesButton.disabled = true;
    noButton.style.display = 'none';
    
    // Start celebrations
    createConfetti();
    createFloatingHearts();
    playSuccessSound();
});


document.getElementById('switch').addEventListener('change', function() {
    // Add a small delay to show the toggle animation
    setTimeout(() => {
        // Replace 'your-url-here' with the URL you want to redirect to
        window.location.href = 'poem.html';
    }, 500); // 500ms delay to show the toggle animation
});