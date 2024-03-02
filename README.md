# Netflix Clone ![Netflix](https://img.shields.io/badge/Netflix-E50914?style=for-the-badge&logo=netflix&logoColor=white)

This project is a **clone** of Netflix that uses **AWS Cognito** to allow user registration and login (it also allows login and registration with Google). Users can create profiles and each profile can have its own list of favorites. Additionally, the project includes functionality to purchase a subscription using **PayPal**. The goal of this project is to recreate the appearance and basic functionality of Netflix, with some additional features.

---
### Landing page
The landing page is made identical to the [original Netflix page](https://www.netflix.com/). The **sign in** button and **get started** buttons lead to the login page.
![text](/readmeImgs/netflixClone_landingPage.gif)

---
### Login
Login is done using the **AWS Cognito** service. Additionally, users can log in with **Google**.
![text](/readmeImgs/netflixClone_login.gif)

---
### Profiles
Once the user has registered and logged in, they can view and manage their profiles. Each profile has its own list of favorites.
![text](/readmeImgs/netflixClone_profiles.gif)

---
### Main Page and List
The main page displays all the movies and series available on Netflix. Users can add them to their list.
![text](/readmeImgs/netflixClone_mainPage.gif)

---
### Series/Movie Simulation Page
When the user clicks on a movie or series, a page is displayed that simulates watching a series or movie. This page will display an alert if you don't have a plan.
![text](/readmeImgs/netflixClone_watchsSerie.gif)

---
### Payment Page
The user can purchase a subscription to Netflix using **PayPal**. When the purchase is completed, a confirmation message is displayed and the user's status is updated.
![text](/readmeImgs/netflixClone_paymentProcess.gif)


## Technologies Used

- JavaScript
- React
- Firebase
- PayPal (for payment functionality)
- react-router-dom
- Styled components


![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)

![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)

![Google](https://img.shields.io/badge/google-4285F4?style=for-the-badge&logo=google&logoColor=white)

## Project Structure

The project is divided into several main folders:

- `src/components`: This is where all the React components used in the project are located. Components consist of two files: one with the component itself, and another with the styled components.

- `src/functions`: This is where all the helper functions are located, including Firebase and PayPal functions. These functions are divided into subfolders such as firebaseFunctions, paypalFunctions, and simpleHelpers.

- `src/pages`: This is where all the application pages are located. Each page has its own folder.

- `src/router`: This is where the application routing is handled.

- `src/assets`: This folder contains all the static resources used in the project, such as images and logos.

- `src/configs`: This is where configuration files are located, such as Firebase configuration.

- `src/constants`: This folder contains files with constants used throughout the project.

## How to Run the Project

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the project with `npm start`
