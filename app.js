import express from 'express';
import dotenv from "dotenv";
dotenv.config();
const PORT=process.env.PORT;

const app = express();
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.urlencoded({extended: false}));
app.use(express(express.json));

app.listen(PORT, ()=>{
  console.log(`I'M ALIVE => PORT: ${PORT}`);
})