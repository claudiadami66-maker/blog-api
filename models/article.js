const db = require('../database');

// Modèle de l'article
const Article = {
  titre: String,
  contenu: String,
  auteur: String,
  date: String,
  categorie: String,
  tags: String
};

module.exports = Article;