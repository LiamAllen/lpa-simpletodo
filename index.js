/**Copyright Liam Allen 2023
 * All code present was written by Liam Allen
 * Do not use any code without the explicit permission of Liam Allen
 */

//import needed files
const express = require('express');

//create variables to define the host and active port
//initialise the server using express()
const host = "localhost";
const port = 8080;
const app = express();

//make the server listen on the port specified in line 12
app.listen(port, () => {

    console.log("App is listening on http://" + host + ":" + port);
});

//make express use static files to ensure the stylesheet loads properly
app.use(express.static(__dirname));

//Send the user to index.html where they can interact with the GUI
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});