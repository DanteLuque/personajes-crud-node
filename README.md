# CRUD de Personajes - Node.js

Un sistema CRUD (Create, Read, Update, Delete) de personajes desarrollado con Node.js, Express, MySQL y EJS.

## Características

-   **Gestión completa de personajes**: Crear, visualizar, editar y eliminar personajes.
-   **Búsqueda**: Búsqueda de personajes por nombre, especie o territorio.
-   **Carga de imágenes**: Subir y almacenar imágenes para cada personaje.
-   **Cambio de temas**: Seleccionar entre múltiples temas de Bootswatch.

## Requisitos previos

-   Node.js (v14 o superior)
-   MySQL (v5.7 o superior)
-   npm (incluido con Node.js)

## Instalación

1.  Clona este repositorio:

```bash
git https://github.com/DanteLuque/personajes-crud-node.git
```

2.  Instala las dependencias:

```bash
npm install
```

3.  Crea un archivo `.env` en la raíz del proyecto basado en `.env.example`:

```bash
# SERVER
PORT=3000

# DATABASE
HOST=localhost
USER=tu_usuario_mysql
PASSWORD=tu_contraseña_mysql
DB=DBPRUEBA

```

4.  Configura la base de datos:
    
    -   Crea la base de datos y las tablas necesarias ejecutando el script SQL ubicado en `src/config/database/mysql-base.sql`
    -   Crea registros de prueba ejecutando el script SQL ubicado en `src/config/database/mysql-insert.sql`


## Ejecución

### Modo desarrollo (con recarga automática)

```bash
npm run dev
```

### Modo producción

```bash
npm start
```

Una vez iniciado, la aplicación estará disponible en:

-   URL: `http://localhost:3000/personajes` (o el puerto que hayas configurado en el archivo `.env`)

## Estructura del proyecto

```
danteluque-personajes-crud-node/
├── app.js                  # Punto de entrada de la aplicación
├── package.json            # Dependencias y scripts
├── .env.example            # Plantilla para configuración
├── public/                 # Archivos estáticos
│   ├── images/             # Imágenes de personajes
│   └── js/                 # JavaScript del cliente
└── src/
    ├── config/             # Configuración de la base de datos
    ├── controllers/        # Controladores
    ├── helpers/            # Funciones auxiliares
    ├── middlewares/        # Middlewares
    ├── models/             # Modelos de datos
    ├── routes/             # Rutas de la aplicación
    └── views/              # Plantillas EJS

```

## Contribución

Si deseas contribuir a este proyecto, por favor:

1.  Haz un fork del repositorio
2.  Crea una rama para tu nueva funcionalidad (`git checkout -b feature/amazing-feature`)
3.  Realiza tus cambios
4.  Haz commit de tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
5.  Sube tus cambios (`git push origin feature/amazing-feature`)
6.  Abre un Pull Request
