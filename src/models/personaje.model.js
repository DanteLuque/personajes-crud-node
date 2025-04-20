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
  }
  
  export default Personaje;