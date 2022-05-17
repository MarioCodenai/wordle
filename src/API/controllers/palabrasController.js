const express = require('express');
const router = express.Router();
var cron = require('node-cron');

const palabrasModel = require('../models/palabrasModel');


router.get('/', async function(req, res,next){
    palabrasModel.obtener()
    .then(palabras => {
        //arreglo final de 5 palabras nomas
        const fiveWords = [ ]
        //arreglo que va a traer todas las palabras de 5 letras nomas
        let wordSize5 = [];
        const rows = 5;
        
        palabras.forEach(data => {
            if(data.palabra.length === 5){
                //agrego todas las palabras de 5 letras al arreglo
                wordSize5.push(data.palabra);     
            }
        });
        //recorro 5 veces algo ya que solo sera un arreglo de 5 valores
        for(i = 0; i < rows; i++){
            //saco el index random de el arreglo y se agrega al fiveWords
            const random = Math.floor(Math.random() * wordSize5.length);
            if(!fiveWords.includes(wordSize5[random])){
                fiveWords.push(wordSize5[random]);
            }
        }
        
        res.status(200).json({ "success": true,  "data": fiveWords });
    })
    .catch(err =>{
        console.log(err);
        return res.status(500).send('Error al traer las palabras');
    });
});

module.exports = router;