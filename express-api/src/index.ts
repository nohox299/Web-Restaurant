import "reflect-metadata"

import express from "express"

import database from "./config/database";

import UsuariosRoutes from "./tasks/usuarios.routes";
import ProductosRoutes from "./tasks/productos.routes"
import ProductosEnPromocionRoutes from "./tasks/productosenpromocion.routes";
import ComprasRoutes from "./tasks/compras.routes"
import DetalladoCompraRoutes from "./tasks/detalladocompra.routes";



const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:false}));

database.initialize()
    .then(() => console.log("Database connected"))
    .catch(console.error)

app.use('/api', UsuariosRoutes);
app.use('/api', ProductosRoutes);
app.use('/api', ProductosEnPromocionRoutes);
app.use('/api', ComprasRoutes);
app.use('/api', DetalladoCompraRoutes);

app.listen(3030, ()=>{
    console.log("App execute in port: 3030")
});

