
# Booking flight

## Description du site 

- Site web de réservation de vols avec le meilleur prix.

Ce service de réservation de vols en ligne garantit les tarifs les plus compétitifs, offrant aux utilisateurs la possibilité de sélectionner leurs vols et de visualiser les prix associés, tout en incluant des fonctionnalités supplémentaires telles que la sélection du nombre de passagers et la définition d'un prix maximum.

## Fonctionnalités Principales

 1. Recherche de Vols : 
Utilisez notre moteur de recherche intuitif pour trouver des vols correspondant à vos critères de voyage, tels que la ville de départ et la destination.

 2. Visualisation des Détails des Vols : 
Consultez les détails des vols disponibles, y compris les horaires de départ et d'arrivée, la compagnie aérienne, le nombre de sièges disponibles et le prix du billet, et surtout le prix de vols. En entrant les option de nombre de passager et et la date de départ.

 3. Réservation de Billets avec confirmation de billets et booking de billets : 
Réservez vos billets rapidement et facilement en fournissant les informations nécessaires, telles que les noms des passagers et les coordonnées de contact.


## Ressource

- Ce projet utilise l'API Amadeus pour rechercher des informations sur les villes, les aéroports et les vols. Amadeus est une société leader dans le domaine des solutions de voyage et fournit des données de voyage précises et à jour.

- L'API Amadeus offre une gamme de fonctionnalités, notamment la recherche de vols, la recherche de destinations, la récupération des informations sur les aéroports, les compagnies aériennes, les tarifs des vols et bien plus encore.

- Pour utiliser l'API Amadeus dans ce projet, assurez-vous de disposer d'une clé API valide et configurez-la dans les variables d'environnement appropriées.

## Installations

- Installations des packages avec la commande: 
```npm install express nodemon cors amadeus body-parser express-rate-limit helmet mongoose passport passport-jwt passport-local```
- Lancement du servers avec la commande : ```npm run start```
- Le port local est configuré à 3000

## Utilisation de Postman avec des paramètre changeable 
- https://localhost:3000/city-and-airport-search/:parametre  ```rechercher les aéroports en fonction des villes ou code aéroport que vous devez passé dans l'url en paramètre```
- https://localhost:3000/flight-search ```rechercher les vol en fonction du départ, de l'arriver, date de départ et en fixant un prix maximum pour le billet  ```
- https://localhost:3000/flight-confirmation ```confirmer le vol avec les derniers informations trouver dans flight-search```
- https://localhost:3000/flight-booking  ```réserver le vol avec les derniers informations trouver dans flight-confirmation et ajouter les coordonnées de la personne```
- https://localhost:3000/auth/signup ```s'inscrire avec un adresse email et un mot de passe```
- https://localhost:3000/auth/login   ``` se connecter avec l'adresse email et mot de passe ```


## Base de donnés

- Utilisation de Mongo DB pour stoker les données d'authentification(adresse email,mot de passe) et les données lié à la réservation de vol
- Utilisation de Mongoose qui est une bibliothèque JavaScript pour Node.js qui facilite l'interaction avec MongoDB
- Visualisation de la base de donné avec MongoDB Compass

## Outils et Logciels utilisées

- NodeJS
- Express
- MongoDB
- Postman
- Visual Studio Code
- GitLab

## Requis demandée (Sécurité)

- HTTPS
- PassportJS local
- Cors
- Helmet
- Rate Limiting


## Licence

Copyrights : 

- MISTRY Darshan
- HANI REKIK
