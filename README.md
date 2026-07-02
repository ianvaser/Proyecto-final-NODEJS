Proyecto Final para el curso de Buenos Aires Aprende,
donde se destaca el uso de backend para desarrollar una API enlazada a una base de datos almacenada en Firebase
Con la cual manejamos la creacion,visualizacion y eliminacion de distintos productos

Como correr el programa?
Podrias clonar el repositorio con Git clone en tu dispositivo local y correrlo desde alli con `npm run start`
Luego abrir buscar localhost:3000 o local:host3001
(en caso de necesitar las claves hablar con el propietario del repositorio)

Otra opcion es usar la pagina en internet (hosteada con vercel): [Pagina web](https://proyecto-final-nodejs-blond.vercel.app/api/products)

Comandos:
-yendo a https://proyecto-final-nodejs-blond.vercel.app/api/products => esta direccion deberia proporcionar todos los productos de la base de datos creados hasta el momento (usar METHOD:GET)
-luego esta https://proyecto-final-nodejs-blond.vercel.app/api/products/create => esta direccion le permite al usuario generar un nuevo producto (es importante enviar un body en raw y usar el metodo:POST)
-https://proyecto-final-nodejs-blond.vercel.app/api/products/:id => con esta direccion podra user realizar dos acciones , La primera es poder eliminar productos (con el metodo:DELETE). La segunda es ver los productos individualmente (con el metodo:GET), pero necesitara las credenciales para poder acceder.
-para acceder a las credenciales debera acceder a https://proyecto-final-nodejs-blond.vercel.app/auth/login y enviar el email y password autorizado(Metodo:POST). En caso de ser correcto se le garantizara el token.

Establecido esto le deseamos mucha suerte, y que disfrute el proyecto.
