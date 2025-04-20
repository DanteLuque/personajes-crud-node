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