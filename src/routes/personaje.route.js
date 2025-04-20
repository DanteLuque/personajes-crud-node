
import express from 'express';
import {
  getAllPersonajes,
  viewPersonaje,
} from '../controllers/personaje.controller.js';

const personajeRouter = express.Router();
personajeRouter.get('/personajes', getAllPersonajes);
personajeRouter.get('/personajes/view/:id', viewPersonaje);

export default personajeRouter;