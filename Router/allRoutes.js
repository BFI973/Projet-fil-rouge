import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html", []),
  new Route("/galerie", "Galerie", "/pages/galerie.html", []),
  new Route(
    "/signin",
    "Connexion",
    "/pages/auth/signin.html",
    ["disconnected"],
    "js/auth/signin.js"
  ),
  new Route(
    "/signup",
    "Inscription",
    "/pages/auth/signup.html",
    ["disconnected"],
    "js/auth/signup.js"
  ),
  new Route("/account", "Mon compte", "/pages/auth/account.html", ["admin", "client"]),
  new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html", [
    "admin",
    "client",
  ]),
  new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html", ["client"]),
  new Route("/reserver", "Ma réservations", "/pages/reservations/reserver.html", ["client"]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";

/*

[] -> Tout le monde peut y accéder

["disconnected"] -> Réserver aux utilisateurs déconnecté 

["client"] -> Réserver aux utilisateurs avec le rôle client 

["admin"] -> Réserver aux utilisateurs avec le rôle admin 

["admin", "client"] -> Réserver aux utilisateurs avec le rôle client OU admin

*/
