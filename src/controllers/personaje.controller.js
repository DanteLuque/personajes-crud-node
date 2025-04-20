import conexion from '../config/mysql.js';
import Personaje from '../models/personaje.model.js';

export const getAllPersonajes = async (req, res) => {
  try {
    const personajes = await Personaje.getAll(conexion);
    res.render('personajes/index', { personajes });
  } catch (error) {
    console.error('Error al obtener personajes:', error);
    res.status(500).send('Error al cargar los personajes');
  }
};

export const viewPersonaje = async (req, res) => {
  try {
    const id = req.params.id;
    const personaje = await Personaje.getById(conexion, id);

    if (!personaje) {
      return res.status(404).send('Personaje no encontrado');
    }

    res.render('personajes/view', { personaje });
  } catch (error) {
    console.error('Error al obtener detalles del personaje:', error);
    res.status(500).send('Error al cargar los detalles del personaje');
  }
};