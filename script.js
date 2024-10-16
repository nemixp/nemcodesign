document.addEventListener('DOMContentLoaded', () => {
    // Create the button element
    const talkToUsButton = document.createElement('button');
    if (navigator.userAgent.includes('Huawei') || navigator.userAgent.includes('HUAWEI')) {
        document.body.classList.add('huawei-device');
    }

    // Set the button's text content
    talkToUsButton.textContent = 'Talk to Us';

    // Set the button's ID
    talkToUsButton.id = 'talkToUsButton';

    // Append the button to the body
    document.body.appendChild(talkToUsButton);

    // Style the button
    Object.assign(talkToUsButton.style, {
        position: 'fixed',
        bottom: '10%',
        right: '20px',
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    });

    // Add hover effect (Optional)
    talkToUsButton.addEventListener('mouseover', () => {
        talkToUsButton.style.backgroundColor = '#0056b3';
    });
    talkToUsButton.addEventListener('mouseout', () => {
        talkToUsButton.style.backgroundColor = '#007BFF';
    });

    // Scroll functionality
    talkToUsButton.addEventListener('click', () => {
        window.scrollTo({ 
            top: document.body.scrollHeight, 
            behavior: 'smooth' 
        });
    });

    // Hamburger Menu Functionality
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburgerMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active'); // Add or remove the active class
    });

    // Intersection Observer for image visibility
    const images = document.querySelectorAll('.image-item2');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the image is visible
            }
        });
    }, observerOptions);

    images.forEach(image => {
        observer.observe(image);
    });
});