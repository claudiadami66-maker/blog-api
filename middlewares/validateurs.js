[08:47, 22/03/2026] C-Laud💜: // Validation pour la création d'un article
exports.validerArticle = (req, res, next) => {
  const { titre, contenu, auteur, categorie } = req.body;

  if (!titre || titre.trim() === '') {
    return res.status(400).json({ message: 'Le titre est obligatoire' });
  }

  if (!contenu || contenu.trim() === '') {
    return res.status(400).json({ message: 'Le contenu est obligatoire' });
  }

  if (!auteur || auteur.trim() === '') {
    return res.status(400).json({ message: 'L auteur est obligatoire' });
  }

  if (!categorie || categorie.trim() === '') {
    return res.status(400).json({ message: 'La categorie est obligatoire' });
  }

  next();
};

// Validation de l'ID
exports.validerID = (req, res, next) => {
  const id = parseInt(req.params.id);

  if (isNaN(id) || id <= 0) {
    return res.status(400).json({ message: 'ID invalide' });
  }

  next();
};