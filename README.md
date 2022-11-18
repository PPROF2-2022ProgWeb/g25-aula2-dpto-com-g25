# AppDelEscabio

App del Escabio es una aplicación web de ecommerce orientada a la venta de bebidas alcohólicas, está implementada utilizando Angular y Bootstrap para el frontend y Java, Springboot y MySQL para el backend. Se decidió simplificar la base de datos para poder llegar a la entrega con un proyecto funcional, la base de datos original puede verse en la carpeta `documentos/base de datos/Escabio.pdf`; la base de datos implementada en esta entrega se encuentra en `documentos/base de datos/escabio_test_relacional.png`

# Como ejecutar la aplicación

- Clonar el repositorio `git clone https://github.com/PPROF2-2022ProgWeb/g25-aula2-dpto-com-g25.git`
- Importar el backend del proyecto del directorio `api-spring/escabio/`
- Importar la base de datos de prueba (Con productos y usuarios creados) de `documentos/base de datos/escabio_test_datos.sql`
- Modificar los datos de la BD en application.properties del backend
- Las credenciales del usuario administrador son: usuario `admin` / contraseña `admin1234`
- En la raiz del directorio ejecutar `npm install` y `ng serve -o` para iniciar el frontend

# Capturas de pantalla

- ### Home de la aplicación sin logueo

![home](https://user-images.githubusercontent.com/17080020/202609061-ba803140-e319-4b43-9247-cc144b19332a.png)

- ### Formulario de registro

![registro](https://user-images.githubusercontent.com/17080020/202609158-4f782fee-00d8-45c8-b0a5-efebbb486451.png)

- ### Formulario de login

![login](https://user-images.githubusercontent.com/17080020/202609195-fedc143b-5eac-43a9-89d5-717b9f026397.png)

- ### Home con usuario cliente logueado

![home-compra](https://user-images.githubusercontent.com/17080020/202609259-da6d2b1b-d73a-4a40-8faa-bd88c3ffcf0f.png)

- ### Carrito de compras

![carrito](https://user-images.githubusercontent.com/17080020/202609332-4c93a120-de84-4b31-a7bf-14cba2fd9002.png)

- ### Panel de administración de productos con administrador logueado

![admin-productos](https://user-images.githubusercontent.com/17080020/202609399-0b09a9f5-cef2-4a6a-aba3-27fe8f085c70.png)

- ### Panel de administración de usuarios con administrador logueado

![admin-usuarios](https://user-images.githubusercontent.com/17080020/202609465-b8376514-1317-49f0-b125-e700ebe411b3.png)







