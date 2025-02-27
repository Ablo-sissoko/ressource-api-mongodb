

const express = require('express');
const { getAllEtudiants,getEtudiantById,deleteEtudiant,updateEtudiant,addEtudiant} = require('../controller/etudiantController.js');
const router = express.Router();
const validateResource = require('../validators/resourceValidator.js');


router.get("/getEtudiantById/:id", getEtudiantById);
router.get("/getAllEtudiants", getAllEtudiants);
router.post("/addEtudiant", addEtudiant);
router.put("/updateEtudiant/:id", updateEtudiant);
router.delete("/deleteEtudiant/:id", deleteEtudiant);


module.exports = router;