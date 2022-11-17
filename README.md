# AppDelEscabio

App del Escabio es una aplicación web de ecommerce orientada a la venta de bebidas alcohólicas, está implementada utilizando Angular y Bootstrap para el frontend y Java, Springboot y MySQL para el backend. Se decidió simplificar la base de datos para poder llegar a la entrega con un proyecto funcional, la base de datos original puede verse en la carpeta `documentos/base de datos/Escabio.pdf`; la base de datos implementada en esta entrega se encuentra en `documentos/base de datos/escabio_test_relacional.png`

# Como ejecutar la aplicación

- Clonar el repositorio `git clone https://github.com/PPROF2-2022ProgWeb/g25-aula2-dpto-com-g25.git`
- Importar el backend del proyecto del directorio `api-spring/escabio/`
- Importar la base de datos de prueba (Con productos y usuarios creados) de `documentos/base de datos/escabio_test_datos.sql`
- Modificar los datos de la BD en application.properties del backend
- Las credenciales del usuario administrador son: usuario `admin` / contraseña `admin1234`
- En la raiz del directorio ejecutar `npm install` y `ng serve -o` para iniciar el frontend
