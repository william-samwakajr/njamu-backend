import express from "express";
import compression from "compression"
import { config } from "dotenv";

config()


const app = express()
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(express.static('public'));


app.listen(PORT,()=>{
    console.log(`listening at http://localhost:${PORT}`)
})