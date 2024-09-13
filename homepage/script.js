document.querySelector('.dropdown').addEventListener('mouseover', function() {
    const dropdownMenu = this.querySelector('.dropdown-menu');
    dropdownMenu.classList.add('show');
});

document.querySelector('.dropdown').addEventListener('mouseleave', function() {
    const dropdownMenu = this.querySelector('.dropdown-menu');
    dropdownMenu.classList.remove('show');
});

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter-num');

    const startCounter = (counter) => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = target / 200; // Adjust the speed of the counter

            if (count < target) {
                counter.innerText = `${Math.ceil(count + increment)}`;
                setTimeout(updateCounter, 10); // Adjust the speed of the update
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                startCounter(counter);
                observer.unobserve(counter); // Stop observing once the counter has started
            }
        });
    }, {
        threshold: 0.5 // Adjust as needed
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});
