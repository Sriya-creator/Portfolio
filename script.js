 // Function to switch between the landing page and the main portfolio
        function showPage(pageId) {
            const landingPage = document.getElementById('landing-page');
            const mainPortfolio = document.getElementById('main-portfolio');

            if (pageId === 'landing-page') {
                landingPage.style.display = 'flex';
                mainPortfolio.style.display = 'none';
                // Reset scroll position on landing page
                window.scrollTo(0, 0); 
            } else if (pageId === 'main-portfolio') {
                // Ensure landing page is hidden and main portfolio is shown
                landingPage.style.display = 'none';
                mainPortfolio.style.display = 'block';
                // Scroll to the top when the main portfolio is opened
                window.scrollTo(0, 0);
            }
        }

        // Function to toggle the mobile menu visibility
        function toggleMenu() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('open');
        }

        // Initialize to show the landing page and set up smooth scrolling
        document.addEventListener('DOMContentLoaded', function() {
            // Start on the landing page
            showPage('landing-page');
            
            // Handle smooth scrolling for navigation links
            document.querySelectorAll('.nav-link').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    // Scrolls to the element
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start' 
                    });

                    // Close the mobile menu after clicking a link
                    const navMenu = document.querySelector('.nav-menu');
                    if (navMenu.classList.contains('open')) {
                        navMenu.classList.remove('open');
                    }
                });
            });
        });