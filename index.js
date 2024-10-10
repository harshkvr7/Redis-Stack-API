import express from "express";

import { router as personRouter } from './routers/person-router.js'
import { router as searchRouter } from './routers/search-router.js'
import { router as locationRouter } from './routers/location-router.js'

const port = 3000;
const app = new express();

app.use(express.json());

app.use('/person', personRouter, locationRouter)
app.use('/persons', searchRouter)

app.get("/", (req, res) => {
    res.send("hi");
})

app.listen(port, () => {
    console.log("Server running on http://localhost:3000/")
})