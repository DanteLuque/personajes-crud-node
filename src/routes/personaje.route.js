
import express from 'express';
import upload from '../middlewares/upload.js';
import {
  getAllPersonajes,
  showCreateForm,
  savePersonaje,
  showEditForm,
  updatePersonaje,
  viewPersonaje,
  deletePersonaje,
} from '../controllers/personaje.controller.js';

const personajeRouter = express.Router();
personajeRouter.get('/personajes', getAllPersonajes);
personajeRouter.get('/personajes/create', showCreateForm);
personajeRouter.post('/personajes/create', upload.single('image'), savePersonaje);
personajeRouter.get('/personajes/edit/:id', showEditForm);
personajeRouter.post('/personajes/edit/:id', upload.single('image'), updatePersonaje);
personajeRouter.get('/personajes/delete/:id', deletePersonaje);
personajeRouter.get('/personajes/view/:id', viewPersonaje);

export default personajeRouter;