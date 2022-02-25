// ./index.js
// * Imports

//This is the main part of the program
const express = require("express"); // Imports Express's class definition
const morgan = require("morgan"); // Imports Morgan's class definition

// Initialize express's class object
const app = express();
// Tell Express to use Morgan for logging requests to the console
app.use(morgan("dev")); // Pretty-print requests with the "dev" format

// Create the port number for the server to listen on
const port = 8080; // See: Wikipedia's List of TCP and UDP port numbers
//8080 is just a random port that shouldn't be busy ever
// Dynamically load all routes from the ./routes folder

//connect our routes file to index
require("./routes")(app);

// Imports from our class modules

//connect the blockchain part of our blockchain
const Blockchain = require("./src/blockchain");

// Global variables

global.difficulty = 5; // Difficulty to mine a particular block

global.blockchain = new Blockchain(); // Our copy of the blockchain

global.transactions = []; // Our current transactions

//LISTEN GOES LAST!!!

// Configure our server to run
app.listen(port, () => {
    // Log that our server is running in the terminal
    console.log(`Server is listening at http://localhost:${port}/`);
});