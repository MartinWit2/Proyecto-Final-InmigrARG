import "./FormVivienda.css";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function FormVivienda() {

   
  return (
<form action="upload.php" method="post" enctype="multipart/form-data">
    <label for="input1">Direccion</label>
    <input type="text" id="input1" name="input1" required></input>

    <label for="input2">desc</label>
    <input type="text" id="input2" name="input2" required></input>

    <label for="input3">m2</label>
    <input type="text" id="input3" name="input3" required></input>

    <label for="input4">cocheras</label>
    <input type="text" id="input4" name="input4" required></input>

    <label for="input5">ambientes</label>
    <input type="text" id="input5" name="input5" required></input>

    <label for="input6">Input 6:</label>
    <input type="text" id="input6" name="input6" required></input>

    <label for="input7">Input 7:</label>
    <input type="text" id="input7" name="input7" required></input>

    <label for="input8">Input 8:</label>
    <input type="text" id="input8" name="input8" required></input>

    <label for="imageInput">Subir Imagen:</label>
    <input type="file" id="imageInput" name="imageInput" accept="image/*" required></input>

    <button type="submit">Enviar</button>
  </form>
  );
};

export default FormVivienda;

