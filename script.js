const burger = document.getElementById('burger');
        const navbarMenu = document.getElementById('navbar-menu');

        burger.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
        });