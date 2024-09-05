const express = require("express");
const cors = require("cors"); // Importando cors para habilitar las peticiones entre servidores

const app = express();
const port = 8000;
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors()); 


app.listen(port, () => {
    console.log(`El servidor está activo en el puerto ${port}`);
});