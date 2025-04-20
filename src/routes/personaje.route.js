
import express from 'express';
import upload from '../middlewares/upload.js';
import {
  getAllPersonajes,
  showCreateForm,
  viewPersonaje,
  savePersonaje
} from '../controllers/personaje.controller.js';

const personajeRouter = express.Router();
personajeRouter.get('/personajes', getAllPersonajes);
personajeRouter.get('/personajes/create', showCreateForm);
personajeRouter.post('/personajes/create', upload.single('image'), savePersonaje);
personajeRouter.get('/personajes/view/:id', viewPersonaje);

export default personajeRouter;