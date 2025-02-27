const mongoose = require("mongoose");
const Etudiant = require("../models/etudiantModel");

const getAllEtudiants = async (req, res) => {
    try {
        return res.json({ message: "Liste de toutes les etudiants", data: await Etudiant.find() });
    } catch (error) {
        res.status(404).json({ message: "pas d'etudiant trouver" });
    }
}

const getEtudiantById = async (req, res) => {
    try {
        const etudiant = await Etudiant.findById(req.params.id);
        if (!etudiant) {
            return res.status(404).json({ message: "etudiant non trouver" });
        }
        res.status(200).json({
            message: "etudiant trouver", data: etudiant
        })

    } catch (error) {
        res.status(404).json({ message: "etudiant non trouver" });
    }
}

const addEtudiant = async (req, res) => {
    try {
        const { nom, prenom, classe, ecole } = req.body;
        const newEtudiant = new Etudiant({ nom, prenom, classe, ecole });
        newEtudiant.save();
        res.status(201).json({ message: "Etudiant ajouter", data: newEtudiant });
    } catch (error) {
        res.status(409).json({ message: "Erreur lors de l'ajout de l'etudiant" });
    }
}

/*
const updateEtudiant = async (req, res) => {
    const updateId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(deleteId)) {
        return res.status(400).json({ message: "ID non valide" });
    }
    const { nom, prenom, classe, ecole } = req.body;
    const etudiant = await Etudiant.findById(updateId);
    if (!etudiant) {
        return res.status(404).json({ message: "etudiant non trouver" });
    }
    etudiant.nom = nom;
    etudiant.prenom = prenom;
    etudiant.classe = classe;
    etudiant.ecole = ecole;
    etudiant.save();
    res.status(200).json({ message: "etudiant modifier", data: etudiant });
}
*/
const updateEtudiant = async (req, res) => {
    try {
        const updateId = req.params.id;
        const updateData = req.body; // Les nouvelles données envoyées dans le corps de la requête

        // Vérifie si l'ID est valide
        if (!mongoose.Types.ObjectId.isValid(updateId)) {
            return res.status(400).json({ message: "ID non valide" });
        }

        // Met à jour l'étudiant par son ID
        const etudiant = await Etudiant.findByIdAndUpdate(updateId, updateData, { new: true });

        // Si l'étudiant n'a pas été trouvé
        if (!etudiant) {
            return res.status(404).json({ message: "Étudiant non trouvé" });
        }

        // Réponse en cas de mise à jour réussie
        res.status(200).json({ message: "Étudiant mis à jour", etudiant });
    } catch (error) {
        res.status(500).json({ message: "Erreur du serveur", error });
    }
}


const deleteEtudiant = async (req, res) => {
    const deleteId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(deleteId)) {
        return res.status(400).json({ message: "ID non valide" });
    }
    const etudiant = await Etudiant.findById(deleteId);

    if (!etudiant) {
        return res.status(404).json({ message: "etudiant non trouver" });
    }
    await etudiant.deleteOne();
    res.status(200).json({ message: "Étudiant supprimé" });
}
module.exports = { getAllEtudiants, getEtudiantById, addEtudiant, updateEtudiant, deleteEtudiant };