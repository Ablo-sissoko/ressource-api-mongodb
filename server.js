const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/database");
const router = require("./routes/etudiantRoute.js");

dotenv.config();

const app = express();
app.use(express.json()); 
app.use(cors()); // pour autoriser les requêtes de l'extérieur


connectDB();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});


app.use("/api", router);
