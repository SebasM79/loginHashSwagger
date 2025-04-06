import express from "express";

import swaggerUi from "swagger-ui-express";

// fs=file system, sirve para trabajar con archivos, y lo usamos para leer el archivo swagger.json
//que definira la documentacion de la APi
import fs from "fs";

const app = express();

//cargar el archivo swagger.json
const swaggerDocument = JSON.parse(
    fs.readFileSync("./swagger.json", "utf8")
) 

//Esta línea configura Swagger UI en Express para que puedas ver la documentación en el navegador.
//Cuando alguien visite http://localhost:3000/api-docs, se mostrará la documentación de Swagger.
//Configuramos Swagger UI para ver la documentación en el navegador.
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/home", (req, res) => {
    res.send("hola soy una app");
});

export  {app} ;