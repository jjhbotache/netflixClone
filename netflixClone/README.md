# Netflix Clone ![Netflix](https://img.shields.io/badge/Netflix-E50914?style=for-the-badge&logo=netflix&logoColor=white)

Este proyecto es un **clon** de Netflix que utiliza **Cognito de AWS** para permitir el registro y el inicio de sesión de los usuarios (tambien permite inicio y registro con google). Los usuarios pueden crear perfiles y cada perfil puede tener su propia lista de favoritos. Además, el proyecto incluye una funcionalidad para comprar una suscripción mediante **PayPal**. El objetivo de este proyecto es recrear la apariencia y funcionalidad básica de Netflix, con algunas funcionalidades adicionales.

---
### Landing page
La landing page se hizo idéntica a la [página original de Netflix](https://www.netflix.com/). El botón de **sign in** y botones de **get started** llevan a la página de inicio de sesion
![text](/readmeImgs/netflixClone_landingPage.gif)

---
### Sign in
El inicio de sesión se hace mediante el servicio de **Cognito de AWS**. Adicionalmente, se puede iniciar sesión con **google**.
![text](/readmeImgs/netflixClone_login.gif)

---
### Perfiles
Una vez que el usuario se ha registrado e iniciado sesión, puede crear perfiles. Cada perfil tiene su propia lista de favoritos.
![text](/readmeImgs/netflixClone_profiles.gif)

---
### Página principal
La página principal muestra todas las películas y series disponibles en Netflix. El usuario puede filtrar por categoría.
![text](/readmeImgs/netflixClone_mainPage.gif)

---
### Página de detalles
Cuando el usuario hace clic en una película o serie, se muestra una página con más detalles sobre el contenido.
![text](/readmeImgs/netflixClone_detailsPage.gif)

---
### Página de favoritos
El usuario puede agregar películas y series a su lista de favoritos. Estos favoritos están asociados con el perfil del usuario.
![text](/readmeImgs/netflixClone_favorites.gif)

---
### Página de pago
El usuario puede comprar una suscripción a Netflix mediante **PayPal**. Cuando se completa la compra, se muestra un mensaje de confirmación y se actualiza el estado del usuario.
![text](/readmeImgs/netflixClone_payment.gif)

---
### Página de inicio de sesión
La página de inicio de sesión permite al usuario iniciar sesión con su correo electrónico y contraseña, o con Google.
![text](/readmeImgs/netflixClone_Login.gif)

## Tecnologías utilizadas

- JavaScript
- React
- Firebase
- PayPal (para la funcionalidad de pago)
- react-router-dom
- Styled components


![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)

![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)

![Google](https://img.shields.io/badge/google-4285F4?style=for-the-badge&logo=google&logoColor=white)

## Estructura del proyecto

El proyecto se divide en varias carpetas principales:

- `src/components`: Aquí es donde se encuentran todos los componentes de React utilizados en el proyecto.
- `src/functions`: Aquí es donde se encuentran todas las funciones auxiliares, incluyendo las funciones de Firebase y PayPal.
- `src/pages`: Aquí es donde se encuentran todas las páginas de la aplicación.
- `src/router`: Aquí es donde se maneja el enrutamiento de la aplicación.

## Cómo ejecutar el proyecto

1. Clona el repositorio
2. Instala las dependencias con `npm install`
3. Ejecuta el proyecto con `npm start`
