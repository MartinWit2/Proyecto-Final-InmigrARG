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

app.get("/ViviendaById/:id", async (req, res) => {
  console.log(req.params.id);
  let vivienda = await ViviendaServices.getById(req.params.id);
  res.status(200).send(vivienda);
});

app.get("/Vivienda/:id", async (req, res) => {
  console.log("entramos a viviendo/Id")
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
    await ViviendaServices.update(req.body.Id, req.body);
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

app.post("/Usuario/login", async (req, res) => {
  let data = req.body;
  console.log("llega al back:"+ JSON.stringify(data))
  //console.log("llega al back",req.body.Mail);
  
  //let Usuario = await UsuarioServices.getById(req.body.Mail);
  let usuario = await UsuarioServices.tryLogin(req.body);
  /*
  if (Usuario)
    res.status(200).send(Usuario);
  */
    res.status(200).send(usuario);
  /*res.status(404).send()*/
});

app.post("/Usuario/:usuario", async (req, res) => {
  let data = req.body;
  console.log("llega al back:"+ JSON.stringify(data))
  //console.log("llega al back",req.body.Mail);
  
  //let Usuario = await UsuarioServices.getById(req.body.Mail);
  await UsuarioServices.create(req.body.params.nombre, req.body.params.apellido, req.body.params.email, req.body.params.password, req.body.params.numero, req.body.params.pais, req.body.params.ciudad);
  /*
  if (Usuario)
    res.status(200).send(Usuario);
  */
    res.status(200).send();
  /*res.status(404).send()*/
});

app.get("/Usuario/:email", async (req, res) => {
  let data = req.body;
  console.log("llega al back:"+ JSON.stringify(data))
  //console.log("llega al back",req.body.Mail);
  
  //let Usuario = await UsuarioServices.getById(req.body.Mail);
   let respuesta = await UsuarioServices.getById(req.params.email);
  /*
  if (Usuario)
    res.status(200).send(Usuario);
  */
    res.status(200).send(respuesta);
  /*res.status(404).send()*/
});





app.listen(port, () => {
  console.log(`Escuchando puerto ${port}`);
});
