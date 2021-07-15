//Modules
const express = require("express");
const morgan = require("morgan");
const server = express();
//Port
const port =3000;
//Database 
require("./database.js");
//Middleware
server.use(express.json());
server.use(morgan("dev"));
server.use(express.urlencoded({extended: false}));
//Routes
const equipos = require("./routes/components");
server.use("/equipos", equipos);
//Route Root
server.get("/", (req, res) => {
    res.send("Servidor con Base de Datos")
})
//Middleware error 404
server.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/public/error404.html")
});
//Listen - server 
server.listen(port, () => console.log("Server is Online, in port ", port));