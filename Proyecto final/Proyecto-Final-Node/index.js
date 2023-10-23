import express from "express";
import Vivienda from "./models/Vivienda.js";
import ViviendaServices from "./services/ViviendaServices.js";
import UsuarioServices from "./services/UsuarioServices.js"
import cors from "cors";

const app = express();
const port = 5000;

// Configuración de CORS
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// GET ALL
app.get("/Vivienda", async (req, res) => {
  console.log("Llegue a /vivienda");
  let viviendas = await ViviendaServices.getAll();
  res.status(200).send(viviendas);
});

// GET BY ID
/*
app.get("/Vivienda/:id", async (req, res) => {
  console.log(req.params.id);
  let vivienda = await ViviendaServices.getById(req.params.id);
  res.status(200).send(vivienda);
});
*/
app.get("/Vivienda/:id", async (req, res) => {
  console.log(req.params.id);
  let vivienda = await ViviendaServices.getByIdUsuario(req.params.id);
  res.status(200).send(vivienda);
});

// INSERT
app.post("/Vivienda", async (req, res) => {
  console.log("En post, req:", req.body);
  try {
    console.log("entra viviendas Insert (index!)");
    await ViviendaServices.insert(req.body);
    res.status(200).json({ message: "Vivienda creada" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Fallo el insert" });
  }
});

// UPDATE
app.put("/Vivienda/:id", async (req, res) => {
  console.log("En update, req:", req.body);
  try {
    await ViviendaServices.update(req.params.id, req.body);
    res.status(200).json({ message: "Vivienda actualizada" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Fallo el Update" });
  }
});

// DELETE
app.delete("/Vivienda/:id", async (req, res) => {
  console.log("En delete, req:", req.params.id);
  try {
    await ViviendaServices.deleteById(req.params.id);
    res.status(200).json({ message: "Vivienda eliminada" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Fallo el Delete" });
  }
});

//Usuarioooooo

app.get("/Usuario/", async (req, res) => {
  console.log("llega al back",req.body.Mail);
  let Usuario = await UsuarioServices.getById(req.body.Mail);
  res.status(200).send(Usuario);
});



app.listen(port, () => {
  console.log(`Escuchando puerto ${port}`);
});
