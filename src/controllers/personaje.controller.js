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
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).send('La imagen es demasiado grande, el tamaño máximo permitido es 2MB');
    }
    console.error('Error al guardar personaje:', error);
    res.status(500).send('Error al guardar el personaje');
  }
};

export const showEditForm = async (req, res) => {
  try {
    const id = req.params.id;
    const personaje = await Personaje.getById(conexion, id);
    if (!personaje) {
      return res.status(404).send("Personaje no encontrado");
    }
    res.render("personajes/edit", { personaje });
  } catch (error) {
    console.error("Error al obtener personaje:", error);
    res.status(500).send("Error al obtener personaje");
  }
};

export const updatePersonaje = async (req, res) => {
  try {
    const id = req.params.id;
    const { nombre, especie, genero, edad, descripcion, habilidades, territorio, current_image_url } = req.body;

    let image_url = current_image_url;
    if (req.file) {
      image_url = `/images/${req.file.filename}`;
    }

    const personaje = new Personaje(
      id,
      nombre,
      especie,
      genero,
      parseInt(edad),
      descripcion,
      habilidades,
      territorio,
      image_url
    );

    await personaje.update(conexion);
    res.redirect("/personajes");
  } catch (error) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).send('La imagen es demasiado grande, el tamaño máximo permitido es 2MB');
    }
    console.error("Error al actualizar personaje:", error);
    res.status(500).send("Error al actualizar personaje");
  }
};

export const deletePersonaje = async (req, res) => {
  try {
    const id = req.params.id;
    await Personaje.delete(conexion, id);
    res.redirect('/personajes');
  } catch (error) {
    console.error('Error al eliminar personaje:', error);
    res.status(500).send('Error al eliminar el personaje');
  }
};
