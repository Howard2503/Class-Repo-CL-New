//Data array
let defaultData = [
  {
    name: "Me",
    message: "This is my first y message"
  },
  {
    name: "You",
    message: "Hello hello!"
  }
];

//Set up the server
let express = require('express');
let app = express();

//Serve static files from a public folder
app.use(express.static('public'));

app.get('/messages', (request, response) => {
  //Send data as an object
  response.json(defaultData);
});



//Set port variable to listen for requests
let port = 3000;
app.listen(port, () => {
  console.log('Server listening on localhost:', port);
});

/*ROUTES */

