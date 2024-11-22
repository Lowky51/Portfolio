const burger = document.getElementById('burger');
const navbarMenu = document.getElementById('navbar-menu');

burger.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});


// SCROLL Profil

document.getElementById('scrollProfil').addEventListener('click', function () {
    document.getElementById('profil').scrollIntoView({ behavior: 'smooth' });
});


// SCROLL COMPETENCES
document.getElementById('scrollCompetence').addEventListener('click', function () {
    document.getElementById('competence').scrollIntoView({ behavior: 'smooth' });
});

// SCROLL PROJET
document.getElementById('scrollProjet').addEventListener('click', function () {
    document.getElementById('projet').scrollIntoView({ behavior: 'smooth' });
});

// SCROLL CONTACT
document.getElementById('scrollContact').addEventListener('click', function () {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});



////////////FORMULAIRE//////////// 


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire

    var formData = new FormData(this);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'process.php', true);

    xhr.onload = function() {
      if (xhr.status === 200) {
        document.getElementById('popup').style.display = 'block';
      } else {
        alert('Erreur lors de l\'envoi du formulaire.');
      }
    };

    xhr.send(formData);
  });

  // Fermer le pop-up lorsque l'utilisateur clique sur le bouton de fermeture
  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
  });

  // Fermer le pop-up lorsque l'utilisateur clique en dehors du contenu du pop-up
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('popup')) {
      document.getElementById('popup').style.display = 'none';
    }
  });
