import "reflect-metadata"

import express from "express"

import database from "./config/database";

import TaskRoutes from "./tasks/task.routes"

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:false}));

database.initialize()
    .then(() => console.log("Database connected"))
    .catch(console.error)

app.use('/api', TaskRoutes)

app.listen(3030, ()=>{
    console.log("App execute in port: 3030")
});

