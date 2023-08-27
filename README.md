# Dog Breed Information SPA 🐶

Welcome to the Dog Breed Information Single Page Application!

## Overview

This project is a Single Page Application (SPA) designed to provide comprehensive information about various dog breeds. With an array of dynamic features, users can explore, filter, and sort through a wide range of dog breeds. From combined filters and ordering options to breed creation and search functionality, this application offers an immersive experience for dog enthusiasts and learners alike.

## Features

- **Combined Filters and Ordering:** Users can seamlessly apply combined filters and select different sorting orders to tailor their browsing experience. Choose from A-Z, Z-A, lighter-heavier, and heavier-lighter sorting options.

- **Breed Categories:** Discover breeds from three categories: "All Breeds," "New Breeds" (database additions), and "API Breeds" (fetched from an external API).

- **Controlled Form for New Dogs:** Create new dog entries using a controlled form that validates every input. This ensures accurate and reliable data for each breed.

- **Pagination:** Navigate through the extensive list of breeds with user-friendly pagination controls, making it easy to explore all breeds.

- **Search by Breed Name:** Utilize the search bar to find specific breeds by name, enhancing user convenience and efficiency.

## Technologies Used

- HTML, CSS, JavaScript: The fundamental building blocks of the application's structure, style, and interactivity.

- React.js: Developed using React.js for efficient component-based architecture and dynamic UI elements.

- Vite: Employed Vite as the front-end build tool. To run the application, use `npm run dev` to start the development server.

- Express: Utilized Express.js for server-side functionality. To start the server, use `npm start`.

- API Integration: Utilized external API data to populate the application with a variety of dog breeds.

- Pagination Logic: Implemented pagination logic to manage the display of multiple breed entries.

## How to Run

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install project dependencies.
4. Run `npm run dev` to start the development server using Vite.
5. In a separate terminal window, run `npm start` to start the Express server.
6. Access the application by opening your web browser and visiting `http://localhost:3000`.

## Demo

![Dog Breed Information SPA Demo](/demo/demo.gif)

## Future Enhancements

As a continuously evolving project, future enhancements could encompass:

- **User Accounts:** Implement user accounts to save favorites and personalize the browsing experience.

- **Extended Breed Details:** Expand breed information to include care guides, health information, and more.

- **Responsive Design:** Enhance the application's responsiveness across various devices and screen sizes.

## Feedback and Contributions

Feedback and contributions are enthusiastically welcomed. If you have suggestions, identify bugs, or want to introduce additional features, feel free to [open an issue](link-to-issue) or submit a pull request.

---

Dive into the code and experience the diverse functionalities of the application. Should you have any inquiries or feedback, don't hesitate to reach out!

Happy exploring the canine world 🐕‍🦺!


-  **react**: 17.0.1
-  **react-dom**: 17.0.1
-  **react-router-dom**: 5.2.0
-  **redux**: 4.0.5
-  **react-redux**: 7.2.3

Está permitido, **bajo tu responsabilidad**, actualizar las dependencias a versiones más actuales si lo deseas. Versiones mas actuales podrían presentar configuraciones diferentes respecto a las versiones en las que venimos trabajando durante el bootcamp.

### **⛔️ Está rotundamente prohibido utilizar librerías externas para aplicar estilos a la SPA. Tendrás que utilizar CSS mediante algunas de las opciones vistas en el bootcamp (CSS, Legacy, Inline Styling, CSS Modules o Styled Components).**

<br />

---

## **📋 PARA COMENZAR...**

1. Deberás forkear este repositorio para tener una copia del mismo en tu cuenta personal de GitHub.

2. Clona el repositorio en tu computadora para comenzar a trabajar. Este repositorio contiene un **`BoilerPlate`** con la estructura general del proyecto, tanto del servidor como del cliente. El boilerplate cuenta con dos carpetas: **`api`** y **`client`**. En estas carpetas estará el código del back-end y el front-end respectivamente.

3. En la carpeta **`api`** deberás crear un archivo llamado: **`.env`** que tenga la siguiente forma:

   ```env
       DB_USER=usuariodepostgres
       DB_PASSWORD=passwordDePostgres
       DB_HOST=localhost
   ```

4. Reemplazar **`usuariodepostgres`** y **`passwordDePostgres`** con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

5. Adicionalmente será necesario que crees, **desde psql (shell o PGAdmin)**, una base de datos llamada **`dogs`**. Si no realizas este paso de manera manual no podrás avanzar con el proyecto.

<br />

---

## **📖 ENUNCIADO GENERAL**

La idea de este proyecto es construir una aplicación web a partir de la API [**TheDogApi**](https://thedogapi.com/) y en la que se pueda:

-  Buscar perros.
-  Visualizar la información de los perros.
-  Filtrarlos.
-  Ordenarlos.
-  Crear nuevos perros.

⚠️ Para las funcionalidades de filtrado y ordenamiento NO se puede utilizar los endpoints de la API externa que ya devuelven los resultados filtrados u ordenados.

**IMPORTANTE**: para poder utilizar la API es necesario crear una cuenta y obtener una ApiKey que luego deberá ser incluida en todos los request que hagamos. Esto se logra simplemente agregando **`?api_key={YOUR_API_KEY}`** al final de cada end-point. Agregar la clave en el archivo **`.env`** para que la misma no se suba al repositorio por cuestiones de seguridad.

### **Únicos end-points que se pueden utilizar**

-  [**TheDogApi**](https://api.thedogapi.com/v1/breeds)
-  **Search By 'Raza':** _"https://api.thedogapi.com/v1/breeds/search?q={raza_perro}"_

<br />

---

<div align="center">

## **📁 INSTRUCCIONES**

</div>

<br />

### **🖱 BASE DE DATOS**

Deberás crear dos modelos para tu base de datos. Una será para las razas de perros y la otra será para los temperamentos (pueden llevar el nombre que tu quieras). La relación entre ambos modelos debe ser de muchos a muchos. A continuación te dejamos **todas** las propiedades que debe tener cada modelo.

**📍 MODELO 1 | Dogs**

-  ID.\*
-  Imagen.\*
-  Nombre.\*
-  Altura.\*
-  Peso.\*
-  Años de vida.\*

<br />

**📍 MODELO 2 | Temperaments**

-  ID.\*
-  Nombre.\*

<br />

---

<br />

### **🖱 BACK-END**

Para esta parte deberás construir un servidor utilizando **NodeJS** y **Express**. Tendrás que conectarlo con tu base de datos mediante **Sequelize**.

Tu servidor deberá contar con las siguientes rutas:

#### **📍 GET | /dogs**

-  Obtiene un arreglo de objetos, donde cada objeto es la raza de un perro.

#### **📍 GET | /dogs/:idRaza**

-  Esta ruta obtiene el detalle de una raza específica. Es decir que devuelve un objeto con la información pedida en el detalle de un perro.
-  La raza es recibida por parámetro (ID).
-  Tiene que incluir los datos de los temperamentos asociadas a esta raza.
-  Debe funcionar tanto para los perros de la API como para los de la base de datos.

#### **📍 GET | /dogs/name?="..."**

-  Esta ruta debe obtener todas aquellas razas de perros que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
-  Debe poder buscarlo independientemente de mayúsculas o minúsculas.
-  Si no existe la raza, debe mostrar un mensaje adecuado.
-  Debe buscar tanto los de la API como los de la base de datos.

#### **📍 POST | /dogs**

-  Esta ruta recibirá todos los datos necesarios para crear un nuevo perro y relacionarlo con los temperamentos asociados.
-  Toda la información debe ser recibida por body.
-  Debe crear la raza de perro en la base de datos, y esta debe estar relacionada con los temperamentos indicados (al menos uno).

#### **📍 GET | /temperaments**

-  Obtiene todos los temperamentos existentes.
-  Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.

<br />

---

<br />

### **🖱 FRONT-END**

Se debe desarrollar una aplicación utilizando **React** y **Redux** que contenga las siguientes vistas:

**📍 LANDING PAGE |** deberás crear una página de inicio o bienvenida con:

-  Alguna imagen de fondo representativa al proyecto.
-  Botón para ingresar a la **`home page`**.

<br />

**📍 HOME PAGE |** la página principal de tu SPA debe contener:

-  SearchBar: un input de búsqueda para encontrar razas de perros por nombre.
-  Sector en el que se vea un listado de cards con los perros. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta **`GET /dogs`** y deberá mostrar su:
   -  Imagen.
   -  Nombre.
   -  Temperamentos.
   -  Peso.
-  Cuando se le hace click a una Card deberá redirigir al detalle de esa raza específica.
-  Botones/Opciones para **filtrar** por temperamentos, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
-  Botones/Opciones para **ordenar** tanto ascendentemente como descendentemente las razas de perros por orden alfabético y por peso.
-  Paginado: el listado de razas de perros se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 8 perros por página.

**⚠️ IMPORTANTE**: se deben mostrar tanto las razas de perros traidas desde la API como así también las de la base de datos, pero **NO** está permitido almacenar en la base de datos las razas de perros de la API. **Solamente se pueden guardar aquellas creadas desde el form**.

<br />

**📍 DETAIL PAGE |** en esta vista se deberá mostrar toda la información específica de un perro:

-  ID.
-  Imagen.
-  Nombre.
-  Altura.
-  Peso.
-  Temperamentos.
-  Años de vida.

<br />

**📍 FORM PAGE |**: en esta vista se encontrará el formulario para crear una nueva raza de perro.

Este formulario debe ser **controlado completamente con JavaScritp**. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:

-  Nombre.
-  Altura **(diferenciar entre altura mínima y máxima de la raza)**.
-  Peso **(diferenciar entre peso mínimo y máximo de la raza)**.
-  Años de vida.
-  Posibilidad de seleccionar/agregar varios temperamentos en simultáneo.
-  Botón para crear la nueva raza.

> [**IMPORANTE**]: es requisito que el formulario de creación esté validado sólo con JavaScript. Puedes agregar las validaciones que consideres. Por ejemplo: que el nombre de la raza no pueda contener números, o que el peso/altura mínimo no pueda ser mayor al máximo.

<br />

---

<br />

### **🖱 TESTING**

Ten en cuenta que en esta instancia no es obligatorio el desarrollo de testing para tu aplicación. De igual manera, te desafiamos a que los hagas, ¡ya que suman puntos!

-  Al menos tener un componente del frontend con sus tests respectivos.
-  Al menos tener dos rutas del backend con sus tests respectivos.
-  Al menos tener un modelo de la base de datos con sus tests respectivos.

<br />

---

<br />

<img src="./dogs.jpg" alt="" width="1000px" />
