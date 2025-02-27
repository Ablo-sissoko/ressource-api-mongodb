const mongoose = require("mongoose");

const etudiantSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    classe: { type: String, required: true },
    ecole: { type: String, required: true }
});

const Etudiant = mongoose.model("Etudiant", etudiantSchema);
module.exports = Etudiant;
