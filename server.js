const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const articleRoutes = require('./routes/articles');

app.use(cors());
app.use(bodyParser.json());

app.use('/api/articles', articleRoutes);

app.listen(3000, () => {
    console.log('Serveur lancé sur http://localhost:3000');
});