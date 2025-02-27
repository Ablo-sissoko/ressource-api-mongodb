// validators/resourceValidator.js
const { body } = require('express-validator');

const validateResource = [
  body('nom').notEmpty().withMessage('Le nom est requis'),
  body('prenom').notEmpty().withMessage('Le prenom est requis'),
  body('classe').notEmpty().withMessage('La claase est requis'),

];

module.exports = validateResource;
