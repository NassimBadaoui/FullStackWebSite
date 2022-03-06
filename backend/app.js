const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Requête recu');
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next();
});


app.use((req, res, next) => {
    res.json({message : "Votre requête a bien été recu"});
});

app.use((req, res, next) => {
    console.log('Requête envoyé avec succès !');
    next();

});


module.exports = app;