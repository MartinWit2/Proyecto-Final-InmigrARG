import express from "express";
import Vivienda from "./models/Vivienda.js";
import ViviendaServices from "./services/ViviendaServices.js";

const app = express();
const port = 3000;
app.use(express.json());
app.get('/', (req,res) => {
    res.send('Hello World bro');
})

app.listen (port, () =>{
    console.log(`Escuchando puerto ${port}`);
})
//GET ALL
app.get('/Vivienda', async (req,res) => {
    let Vivienda = await ViviendaServices.getAll();
    res.status(200).send(Vivienda)
})
// GET BY ID
app.get('/Vivienda/:id', async (req,res) => {
    console.log(req.params.id)
    let Vivienda = await ViviendaServices.getById(req.params.id);
    res.status(200).send(Vivienda)
})
// INSERT
app.post('/Vivienda', async(req,res) =>{

    console.log("En post, req:", req)
    try{
        console.log("entra viviendas Insert (index!)")
        await ViviendaServices.insert(req.body)
        res.status(200).json({message : 'Vivienda creada'});
    } catch (error){
        console.error(error);
        res.status(500).json({error:'Fallo el insert browli'});
    }
})
//UPDATE
app.put('/Vivienda/:id',async (req,res) => {
    console.log("En update, req:", req)
    try{
        await ViviendaServices.update(req.params.id, req.body)
        res.status(200).json({message : 'Vivienda actualizada'});
    } catch (error){
        console.error(error);
        res.status(500).json({error:'Fallo el Update browli'});
    }
})
//
app.delete ('/Vivienda/:id',async (req,res) => {
    console.log("En delete, req:", req)
    try{
        await ViviendaServices.deleteById(req.params.id)
        res.status(200).json({message : 'Vivienda eliminada'});
    } catch (error){
        console.error(error);
        res.status(500).json({error:'Fallo el Delete browli'});
    }
})


 