document.addEventListener('DOMContentLoaded', () => {
    // Modal functionality

    const modal = document.getElementById("signupModal");
    const btns = document.querySelectorAll(".button1, .button2");
    const closeButton = document.querySelector(".close-button");

    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            modal.style.display = "block";
        });
    });

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', function(event) {
        const email = document.getElementById('email').value;
        
        const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
            return;
        }

        modal.style.display = "none";
    });


    // Dynamic quotes functionality

    const quotes = [
        "In a world full of hustle and bustle, the bear reminds us to pause and enjoy the sweet moments.",
        "The bear teaches us to tread gently, to savor the honeyed moments, and to always wear our hearts on our furry sleeves.",
        "A bear's playful antics light up our imagination and remind us of the innocence and wonder of childhood.",
        "A bear may not be a knight in shining armor, but in their soft, cuddly way, they rescue us from the villains of daily stress."
    ];

    let currentQuoteIndex = 0;
    const quoteText = document.getElementById('quoteText');
    let isFirstLoad = true;

    function updateQuote() {
        if (isFirstLoad) {
            // Directly update the quote without fading on first load
            quoteText.textContent = quotes[currentQuoteIndex];
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
            isFirstLoad = false; // Update the flag
        } else {
            // Fade out the current quote
            quoteText.classList.add('quote-fade-out');

            // Wait for the fade-out animation to finish
            setTimeout(() => {
                // Update the quote
                quoteText.textContent = quotes[currentQuoteIndex];
                currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;

                // Fade in the new quote
                quoteText.classList.remove('quote-fade-out');
                quoteText.classList.add('quote-fade-in');

                // Remove the fade-in class after it's complete to allow for future fade-ins
                setTimeout(() => {
                    quoteText.classList.remove('quote-fade-in');
                }, 1000);
            }, 1000);
        }
    }

    setInterval(updateQuote, 4000);

    updateQuote();


    // Footer year update functionality

    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
});