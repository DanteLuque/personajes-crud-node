class Personaje {
  constructor(
    id = null,
    nombre,
    especie,
    genero,
    edad,
    descripcion,
    habilidades = null,
    territorio = null,
    image_url = null,
    created_at = null,
    updated_at = null,
    deleted_at = null
  ) {
    this.id = id;
    this.nombre = nombre;
    this.especie = especie;
    this.genero = genero;
    this.edad = edad;
    this.descripcion = descripcion;
    this.habilidades = habilidades;
    this.territorio = territorio;
    this.image_url = image_url;
    this.created_at = created_at || new Date();
    this.updated_at = updated_at || new Date();
    this.deleted_at = deleted_at;
  }

  static getAll(conexion) {
    return new Promise((resolve, reject) => {
      conexion.query(
        "SELECT * FROM PERSONAJES WHERE deleted_at IS NULL",
        (error, result) => {
          if (error) return reject(error);
          return resolve(result);
        }
      );
    });
  }

  static getById(conexion, id) {
    return new Promise((resolve, reject) => {
      conexion.query(
        "SELECT * FROM PERSONAJES WHERE ID = ? AND deleted_at IS NULL",
        [id],
        (error, result) => {
          if (error) return reject(error);
          return resolve(result[0]);
        }
      );
    });
  }

  static delete(conexion, id) {
    return new Promise((resolve, reject) => {
      const now = new Date();
      conexion.query(
        "UPDATE PERSONAJES SET deleted_at = ? WHERE ID = ? AND deleted_at IS NULL",
        [now, id],
        (error, result) => {
          if (error) return reject(error);
          return resolve(result);
        }
      );
    });
  }

  static hardDelete(conexion, id) {
    return new Promise((resolve, reject) => {
      conexion.query(
        "DELETE FROM PERSONAJES WHERE ID = ?",
        [id],
        (error, result) => {
          if (error) return reject(error);
          return resolve(result);
        }
      );
    });
  }

  create(conexion) {
    return new Promise((resolve, reject) => {
      const now = new Date();
      this.created_at = now;
      this.updated_at = now;

      conexion.query(
        `INSERT INTO PERSONAJES (NOMBRE, ESPECIE, GENERO, EDAD, DESCRIPCION, HABILIDADES, TERRITORIO, IMAGE_URL, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          this.nombre,
          this.especie,
          this.genero,
          this.edad,
          this.descripcion,
          this.habilidades,
          this.territorio,
          this.image_url,
          this.created_at,
          this.updated_at,
        ],
        (error, result) => {
          if (error) return reject(error);
          this.id = result.insertId;
          return resolve(result);
        }
      );
    });
  }

  update(conexion) {
    return new Promise((resolve, reject) => {
      this.updated_at = new Date();

      conexion.query(
        `UPDATE PERSONAJES SET NOMBRE = ?, ESPECIE = ?, GENERO = ?, EDAD = ?, DESCRIPCION = ?, HABILIDADES = ?, TERRITORIO = ?, IMAGE_URL = ?, updated_at = ?
        WHERE ID = ? AND deleted_at IS NULL`,
        [
          this.nombre,
          this.especie,
          this.genero,
          this.edad,
          this.descripcion,
          this.habilidades,
          this.territorio,
          this.image_url,
          this.updated_at,
          this.id
        ],
        (error, result) => {
          if (error) return reject(error);
          return resolve(result);
        }
      );
    });
  }

}


export default Personaje;