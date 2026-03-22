##  Description

Ce projet consiste à développer une API backend permettant de gérer les articles d’un blog.  
L’API offre des fonctionnalités de création, lecture, modification, suppression et recherche d’articles.


## Technologies utilisées

- Node.js
- Express.js
- SQLite
- Postman (tests API)



##  Installation


1. Cloner le projet :

```bash
git clone https://github.com/claudiadami66-marker/blog-api.git

2. Accéder au dossier :
         
         Bash
cd blog-api

3. Installer les dépendances :

         Bash
npm install

4. Lancer le serveur :
       
       Bash
node server.js


 * URL de base
 
 http://localhost:3000⁠�


 ## Endpoints

➤ Créer un article

POST /api/articles

Exemple :

JSON
{
  "titre": "Article test",
  "contenu": "Contenu test",
  "auteur": "Claudia",
  "date": "2026-03-21",
  "categorie": "Tech",
  "tags": "nodejs"
}

➤ Lire tous les articles

GET /api/articles

➤ Lire un article par ID

GET /api/articles/{id}

➤ Modifier un article

PUT /api/articles/{id}

➤ Supprimer un article

DELETE /api/articles/{id}

➤ Rechercher un article

GET /api/articles/search?query=texte

➤ Filtrer les articles (optionnel)

GET /api/articles?categorie=Tech&date=2026-03-21

## Tests

Les tests ont été réalisés avec Postman :

Création d’un article ✔
Récupération des articles ✔
Modification ✔
Suppression ✔
Recherche ✔

 Bonnes pratiques respectées

Validation des données (champs obligatoires)

Utilisation des codes HTTP :
200 OK
201 Created
400 Bad Request
404 Not Found
500 Internal Server Error
Architecture MVC (routes, contrôleurs)

 ## Auteur

Nom : TCHATCHOUA DAMI CLAUDIA
Filière : Informatique
UE : INF222
