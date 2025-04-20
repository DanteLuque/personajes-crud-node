import express from 'express';
import dotenv from "dotenv";
import personajeRouter from './src/routes/personaje.route.js';
dotenv.config();
const PORT=process.env.PORT;

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.urlencoded({extended: false}));
app.use(express(express.json));
app.use(personajeRouter);

app.listen(PORT, ()=>{
  console.log(`I'M ALIVE => PORT: ${PORT}`);
})