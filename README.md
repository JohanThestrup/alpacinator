# Alpacinator 🦙

Tiny application for calculating the cost for alpacas depending on from what farm they origin from.
To save you the hassle of setting everything up I've deployed the application here: https://alpacinator-app.herokuapp.com/
Have some patience on initial load since Heroku goes to sleep if the app hasn't been used in a while 😊

## My solution

I wrote the application using a React front end and a small server using express.js that connects to a PostgreSQL database.
The app has two views:
1. A list that shows data about alpacas stored in the database.
<img src="/screenshots/listalpaca_screenshot.jpg" alt="List view" title="The list view" width="600" />
2. A form that lets the user add alpacas to the database.
<img src="/screenshots/addalpaca_screenshot.jpg" alt="List view" title="The list view" width="600" />

## How to start

Get the source code:
```
git clone https://github.com/JohanThestrup/alpacinator.git
```

To launch the client you just need node installed. However, launching the server requires some setup.

### What you need

* Node (https://nodejs.org/en/download/)
* PostgreSQL 
    * Guide: https://www.youtube.com/watch?v=RAFZleZYxsc 
    * Setting Windows PATH for PSQL Postgres tools: https://www.youtube.com/watch?v=D3YzLLo34ZU
    * Download link: https://www.postgresql.org/download/
    * Finally you'll need to create a database that corresponds to the name we set in our environment variable "DB" (alpacinator)
* Setup environment variables
    * Inside the "api"-folder, create a file named ".env"
    * Add the following to the .env file:
    ```
    USER="your username"
    PASSWORD="your postgres password"
    HOST="localhost"
    PORT="5432"
    DB="alpacinator"
    ```
### Installing

You are now ready to start the application!

#### Client

Run the following commands from inside the "alpacinator" folder:

    ```
     cd .\client\
     npm i
     npm start
    ```
The app is then available on: http://localhost:3006/

#### Server

Run the following commands from inside the "alpacinator" folder:

    ```
     cd .\api\
     npm i
     npm start
    ```
The server is then listening on: http://localhost:3000/

### Running tests

Run the following from the client folder and api folder respectively:

```
npm test
```
