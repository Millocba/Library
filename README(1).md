# Ejercicio Práctico del Uso de Express (Library)

Este ejercicio tiene como finalidad poner en práctica los conocimientos adquiridos durante el cursado en Santex Academy, relacionados con el desarrollo de aplicaciones backend utilizando Node.js y Express.

## Descripción

El proyecto "Library" es una aplicación web que permite gestionar una biblioteca virtual. Su objetivo es brindar a los usuarios la posibilidad de administrar libros, librerías y usuarios de manera eficiente. La aplicación cuenta con diferentes funcionalidades, como la creación y búsqueda de libros, la gestión de librerías y la autenticación de usuarios.

## Estructura del Proyecto

El proyecto sigue una estructura organizada y modular para separar las diferentes capas y componentes de la aplicación. A continuación, se describe la estructura de carpetas y archivos:

- `models/`: Contiene los modelos de datos que representan las entidades del proyecto, como los libros y las librerías.
- `providers/`: Capa de proveedores que se encarga de interactuar con la base de datos y realizar operaciones CRUD.
- `services/`: Capa de servicios que implementa la lógica de negocio y utiliza los proveedores para realizar las operaciones.
- `controllers/`: Controladores que manejan las peticiones HTTP, invocan los servicios correspondientes y envían las respuestas.
- `routes/`: Define las rutas y los controladores asociados a cada una de ellas.
- `middlewares/`: Middleware para la autenticación y validación de las peticiones.
- `config/`: Configuración del proyecto, como la conexión a la base de datos y la configuración de Passport para la autenticación.
- `database/`: Scripts y archivos relacionados con la base de datos.
- `test/`: Contiene pruebas unitarias y de integración para garantizar el correcto funcionamiento del proyecto.
- `index.js`: Archivo principal que inicializa la aplicación y configura los módulos y rutas necesarios.

## Tecnologías Utilizadas

En el desarrollo de este proyecto se utilizaron las siguientes tecnologías y herramientas:

- Node.js: Plataforma de ejecución de código JavaScript en el servidor.
- Express.js: Framework web utilizado para el desarrollo de la aplicación.
- Sequelize (ORM): Biblioteca de mapeo objeto-relacional que facilita la interacción con la base de datos.
- SQLite3 (Motor de Base de Datos): Sistema de gestión de bases de datos utilizado para almacenar los datos de la aplicación.
- Passport (Autenticación): Middleware de autenticación utilizado para gestionar la autenticación de los usuarios.
- Bcrypt: Biblioteca utilizada para el cifrado de contraseñas.
- JSON Web Tokens (JWT): Esquema de autenticación basado en tokens utilizado para la generación y verificación de tokens de acceso.

## Instalación

1. Clona el repositorio: `git clone https://github.com/Millocba/Library`
2. Instala las dependencias: `npm install`
3. Configura las variables de entorno en un archivo `.env` (consultar el archivo `.env.example` para ver las variables requeridas).
4. Inicia la aplicación: `npm start`

## Contribuciones

Las contribuciones son bienvenidas. Si deseas realizar mejoras o corregir problemas, sigue los pasos a continuación:

1. Haz un Fork del repositorio.
2. Crea una nueva rama: `git checkout -b feature/nombre-de

-la-caracteristica`.
3. Realiza los cambios necesarios y realiza los commits: `git commit -am 'Agrega una nueva característica'`.
4. Sube los cambios a tu Fork: `git push origin feature/nombre-de-la-caracteristica`.
5. Envía una Pull Request indicando los cambios realizados y su propósito.


Para obtener más detalles sobre cada componente del proyecto, visita los enlaces proporcionados.

¡Gracias por tu interés en el proyecto! Si tienes alguna pregunta o sugerencia, no dudes en comunicarte.




## Evolución del proyecto

El proceso de desarrollo del proyecto se dividió en varias etapas, cada una enfocada en la creación de diferentes archivos y componentes necesarios para su funcionamiento. A continuación, se describe la evolución del proyecto y los motivos detrás de la creación de cada archivo:

1. Creación de los modelos: Se comenzó definiendo los modelos de datos necesarios para la aplicación, como User, Library y Book. Estos modelos representan las entidades principales con sus respectivas relaciones y atributos. Se crearon los archivos correspondientes a los modelos en el directorio "models" para definir su estructura utilizando un ORM (Object-Relational Mapping) como Sequelize.

2. Creación de los proveedores: Para encapsular la lógica de acceso a los datos y operaciones relacionadas, se crearon los proveedores correspondientes a cada modelo. Los proveedores, ubicados en el directorio "providers", ofrecen métodos para interactuar con la base de datos, como crear, obtener, actualizar o eliminar registros. Estos proveedores se encargan de realizar consultas y manipulaciones de datos utilizando los modelos definidos.

3. Creación de los servicios: La capa de servicios se utiliza para encapsular la lógica de negocio de la aplicación. Estos servicios se encuentran la carpeta "services" y se encargan de coordinar y ejecutar operaciones más complejas que involucran la interacción entre múltiples modelos o la implementación de reglas de negocio específicas.

Los servicios actúan como una capa intermedia entre los controladores y los proveedores, brindando un nivel adicional de abstracción. Su objetivo principal es orquestar las operaciones y asegurar que se cumplan las reglas y requisitos de la aplicación. Los servicios pueden incluir lógica de validación, cálculos, transformaciones de datos y cualquier otra tarea relacionada con la lógica de negocio.

4. Creación de los controladores: Los controladores, ubicados en el directorio "controllers", se encargan de recibir las solicitudes HTTP, interactuar con los servicios correspondientes y enviar las respuestas adecuadas. Se crearon controladores para cada modelo, como UserController, LibraryController y BookController, que definen los métodos para manejar las diferentes operaciones CRUD (Crear, Leer, Actualizar, Eliminar).

5. Creación de las rutas: Para establecer las rutas de la aplicación y definir cómo se accede a los diferentes endpoints, se crearon los archivos de rutas en el directorio "routes". Cada archivo de ruta, como userRoutes, libraryRoutes y bookRoutes, utiliza el enrutador de Express para asociar las rutas a los controladores correspondientes y definir las acciones que se ejecutan en cada ruta.

6. Configuración del servidor: El archivo principal de la aplicación, "app.js", se encarga de configurar el servidor Express. Aquí se establecen middlewares como express.json() para el manejo de datos en formato JSON, se configura la autenticación con Passport.js y se definen las rutas principales que se utilizarán en la aplicación.

7. Inicialización de la base de datos: Para asegurarse de que la base de datos esté lista para su uso, se creó el archivo "database.js" en el directorio "config". Aquí se establecen los parámetros de conexión y se inicializa la base de datos utilizando Sequelize. También se pueden realizar migraciones y ejecutar seeders para establecer datos iniciales si es necesario.

8. Creación de middlewares adicionales: Además de los middlewares básicos utilizados para autenticación y manejo de errores, se pueden agregar otros middlewares de validación o personalizados según las necesidades específicas de la aplicación. Estos middlewares pueden aplicarse a las rutas relevantes para realizar validaciones adicionales, verificar permisos o ejecutar acciones antes o después de procesar las solicitudes.

A lo largo de estas etapas, se crearon los diferentes archivos y componentes para establecer la estructura básica de la aplicación y definir su funcionalidad. Este enfoque modular permite una separación clara de responsabilidades y facilita la escalabilidad y mantenibilidad del proyecto.
## Uso de índices

El uso de índices en cada carpeta del proyecto tiene como objetivo principal facilitar la organización y estructura del código, así como mejorar la legibilidad y la navegación dentro de los directorios del proyecto. A continuación, se explica el propósito y beneficios del uso de índices en cada carpeta:

1. Mejor organización: Al incluir un archivo índice (index) en cada carpeta, se establece un punto central de referencia para acceder a los archivos y componentes contenidos en esa carpeta. Esto ayuda a mantener una estructura organizada y coherente en todo el proyecto.

2. Simplificación de importaciones: El archivo índice actúa como un punto de entrada para la carpeta, lo que significa que se pueden importar múltiples archivos desde la carpeta utilizando una sola importación. Esto evita la necesidad de especificar la ruta completa de cada archivo al importarlo en otros archivos.

3. Modularidad y legibilidad: Al agrupar archivos relacionados en una carpeta y utilizar un archivo índice para exponer esos archivos, se mejora la legibilidad y comprensión del código. Los nombres de los archivos importados desde el archivo índice suelen ser más concisos y representativos de su función, lo que facilita la comprensión de la estructura del proyecto.

4. Abstracción y encapsulación: El archivo índice puede ocultar detalles de implementación interna y exponer solo lo necesario para interactuar con la carpeta desde otros componentes. Esto promueve la encapsulación y ayuda a establecer una interfaz clara entre los distintos módulos y capas de la aplicación.

5. Facilidad de navegación: Al tener un archivo índice en cada carpeta, se simplifica la navegación por el proyecto, ya que se puede acceder directamente a la carpeta y ver su contenido sin necesidad de explorar todas las rutas y subcarpetas.

En resumen, el uso de índices en cada carpeta del proyecto proporciona una estructura organizada, simplifica las importaciones, mejora la legibilidad del código, promueve la modularidad y la encapsulación, y facilita la navegación dentro del proyecto. Es una práctica común en el desarrollo de software para mantener un código más limpio y mantenible.
## Técnologias usadas

El proyecto utiliza las siguientes tecnologías:

1. Node.js: Es un entorno de ejecución de JavaScript basado en el motor de JavaScript V8 de Google. Node.js permite ejecutar código JavaScript en el servidor y proporciona un conjunto de bibliotecas y herramientas para el desarrollo de aplicaciones web y de red.

2. Express.js: Es un framework web de Node.js que simplifica el desarrollo de aplicaciones web y API. Express.js proporciona un conjunto de funciones y middleware para manejar solicitudes HTTP, enrutamiento, gestión de sesiones, plantillas, entre otros.

3. Sequelize: Es una biblioteca de Node.js para interactuar con bases de datos relacionales. Sequelize proporciona una abstracción ORM (Object-Relational Mapping) que facilita la creación, consulta, actualización y eliminación de registros en la base de datos a través de modelos y consultas en lenguaje JavaScript.

4. MySQL: Es un sistema de gestión de bases de datos relacional ampliamente utilizado. En el proyecto, se utiliza MySQL como motor de base de datos para almacenar y recuperar datos.

5. Bcrypt: Es una biblioteca para el hashing de contraseñas en Node.js. Bcrypt proporciona funciones para generar y verificar hashes seguros de contraseñas, lo cual es fundamental para proteger la información confidencial de los usuarios.

6. JWT (JSON Web Tokens): Es un estándar abierto basado en JSON para la creación de tokens de acceso que se utilizan para autenticar y autorizar solicitudes en aplicaciones web. JWT permite transmitir información de forma segura entre diferentes partes de una aplicación.

7. Passport: Es un middleware de autenticación para Node.js que simplifica el proceso de autenticación en aplicaciones web. Passport proporciona una forma fácil de implementar diferentes estrategias de autenticación, como la autenticación basada en tokens JWT.

8. Git: Es un sistema de control de versiones distribuido ampliamente utilizado. Git permite gestionar el código fuente del proyecto, realizar seguimiento de cambios, colaborar con otros desarrolladores y facilitar la integración y entrega continua.

Estas tecnologías se combinan para crear una aplicación web robusta y escalable, que utiliza Node.js como plataforma de desarrollo, Express.js como framework web, Sequelize como ORM para interactuar con la base de datos, y diversas herramientas y bibliotecas para la autenticación, encriptación y control de versiones.