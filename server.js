const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());

const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json')));

app.get('/profile', (request, response) => response.send(data.profile));
app.get('/recentChats', (request, response) => response.send(data.recentChats));
app.get('/allFriends', (request, response) => response.send(data.allFriends));

const server = app.listen(process.env.PORT || 8080, _ => {
  console.log('Server started');
});
