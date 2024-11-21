const burger = document.getElementById('burger');
        const navbarMenu = document.getElementById('navbar-menu');

        burger.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
        });


        // SCROLL Profil

        document.getElementById('scrollProfil').addEventListener('click', function() {
            document.getElementById('profil').scrollIntoView({ behavior: 'smooth' });
        });
                

        // SCROLL COMPETENCES
        document.getElementById('scrollCompetence').addEventListener('click', function() {
            document.getElementById('competence').scrollIntoView({ behavior: 'smooth' });
        });

        // SCROLL PROJET
        document.getElementById('scrollProjet').addEventListener('click', function() {
            document.getElementById('projet').scrollIntoView({ behavior: 'smooth' });
        });
                
