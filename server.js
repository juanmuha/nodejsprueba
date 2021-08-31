const { request } = require('express');
const express = require('express');

const app=express();

function getArtista(require, request)
{
    const artista = 
    {
        id:require.params["id"],
        nombre:"artista 1",
        album:"bocanada",
        cancion:"amarillo"
    };
    request.json(artista);
}

app.listen("3000", (require, request)=>
{
    console.log("servidor corriendo en el puerto 3000");
});

app.get("/getArtista/:id", getArtista);

app.get('/', (require, request)=>
{
    request.send("<h1> jalo esta madre </h1>");
});

app.get('/home/:id', (require, request, next)=>
{      
    console.log(require.params["id"]);
    
    let a = 
    {
        nombre:"juan",
        apellido:"murrieta",
        edad:36
    };

    request.json(a);
    //next();    
},
(require, request)=>
{        
    console.log(require.params["id"]+1);
}
);

console.log("hola mundo");