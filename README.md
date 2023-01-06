# 🔖 Kamibooking

<br>

![React](https://img.shields.io/badge/React-555?style=for-the-badge&logo=React&logoColor=61DAFB) ![MaterialUI](https://img.shields.io/badge/MaterialUI-007FFF?style=for-the-badge&logo=MUI&logoColor=white) ![ExpressJS](https://img.shields.io/badge/express.js-555?style=for-the-badge&logo=Express&logoColor=white) ![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-77B829?style=for-the-badge&logo=MongoDB&logoColor=white)

<br>

This app was built using the MERN stack (MongoDB, Express, React, and Node.js) and allows users to search for and book hotels. Features included are:

🛡 Admin login: Admins can log in to the app and add new hotels to the database.

🔎 Hotel search: Users can search for hotels based on the number of people, desired price range, and available dates. The search results are generated by querying the database for available hotels.

🏩 Hotel pages: Each hotel has its own page where users can view more information about the hotel, including its features and amenities.

🛌 Booking: Once a user has found a suitable hotel, they can proceed to book it by providing their personal and payment information.

<br>

A live demonstration is available [here](https://kamibooking.onrender.com)

<br> 

## To Do:

- [ ] Add user registration and login
- [ ] Integrate Admin dashboard and make a dedicated admin account
- [ ] Improve filter system
- [ ] Add loading icons
- [ ] Add payment integration using Stripe API so users can pay for their rooms
- [ ] Add other integrations such as flights, car rentals and taxis

<br>

## Getting started

To get the app up and running on your local machine, follow these steps:

- Clone the repository to your local machine:

```
git clone https://github.com/KamranNaveed/kamisocial.git
```
- Navigate to the api directory:
```
cd api
```
- Install the dependencies:
```
npm install
```
- Set up the environment variables:

Create a ```.env``` file with the necessary values for the environment variables. These include the database URI, alias ```MONGO```, and server port for development.

- Start the development server:
```
npm start
```
You can change the dev commands to reflect your development environment by going to ```package.json``` and updating ```scripts```

The server should start running in your selected port

- Navigate to the client directory:
```
cd client
```
- Install the dependencies:
```
npm install
```
- Start the development server:
```
npm start
```
You can change the dev commands to reflect your development environment by going to ```package.json``` and updating ```scripts```
The app should now be running on http://localhost:3000.

<br>

Thank you for checking out the project! If you have any questions or suggestions, please don't hesitate to reach out.
