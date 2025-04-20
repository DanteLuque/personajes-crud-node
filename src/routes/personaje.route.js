
import express from 'express';
import {
  getAllPersonajes,
} from '../controllers/personaje.controller.js';

const personajeRouter = express.Router();
personajeRouter.get('/personajes', getAllPersonajes);

export default personajeRouter;