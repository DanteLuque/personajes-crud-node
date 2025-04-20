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

export const showCreateForm = (req, res) => {
  res.render('personajes/create');
};

export const savePersonaje = async (req, res) => {
  try {
    const { nombre, especie, genero, edad, descripcion, habilidades, territorio } = req.body;
    const image_url = req.file ? `/images/${req.file.filename}` : null;

    const personaje = new Personaje(
      null,
      nombre,
      especie,
      genero,
      parseInt(edad),
      descripcion,
      habilidades,
      territorio,
      image_url
    );

    await personaje.create(conexion);
    res.redirect('/personajes');
  } catch (error) {
    console.error('Error al guardar personaje:', error);
    res.status(500).send('Error al guardar el personaje');
  }
};