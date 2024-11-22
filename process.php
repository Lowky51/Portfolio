<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "formulaire_contact";

// Créer une connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Récupérer les données du formulaire
$nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$email = $_POST['email'];
$message = $_POST['message'];

// Échapper les entrées utilisateur
$nom = $conn->real_escape_string($nom);
$prenom = $conn->real_escape_string($prenom);
$email = $conn->real_escape_string($email);
$message = $conn->real_escape_string($message);

// Préparer et exécuter la requête SQL
$sql = "INSERT INTO contacts (nom, prenom, email, message) VALUES ('$nom', '$prenom', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Fermer la connexion
$conn->close();
?>
