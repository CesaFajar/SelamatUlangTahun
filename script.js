        
        document.querySelector('.envelope').addEventListener('click', function() {
            document.getElementById('greeting-card').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
        });

    
        const heartsContainer = document.getElementById('hearts');
        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            heart.style.animationDuration = 3 + Math.random() * 7 + 's';
            heart.style.animationDelay = Math.random() * 5 + 's';
            heartsContainer.appendChild(heart);
        }
        
        
        const confettiContainer = document.getElementById('confetti-container');
        const wishBtn = document.getElementById('wishBtn');
        
        wishBtn.addEventListener('click', function() {
            confettiContainer.style.display = 'block';
            
            
            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.classList.add('confetti');
                    confetti.style.left = Math.random() * 100 + 'vw';
                    confetti.style.backgroundColor = `hsl(${Math.random() * 60 + 320}, 100%, 70%)`;
                    confetti.style.animationDuration = 2 + Math.random() * 3 + 's';
                    confettiContainer.appendChild(confetti);
                    
                    
                    setTimeout(() => {
                        confetti.remove();
                    }, 5000);
                }, i * 20);
            }
            
            
            setTimeout(() => {
                alert("Happy 20th Birthday my love! ❤ Our journey together is the most beautiful adventure, and I can't wait for all the amazing years ahead with you. I love you more than words can say!");
            }, 1000);
            
            
            setTimeout(() => {
                confettiContainer.style.display = 'none';
                confettiContainer.innerHTML = '';
            }, 4000);
        });
        
        
        const photoFrame = document.querySelector('.photo-frame');
        
        setInterval(() => {
            photoFrame.style.transform = 'scale(1.01)';
            setTimeout(() => {
                photoFrame.style.transform = 'scale(1)';
            }, 300);
        }, 3000);