import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';

const app = express();
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());

const data = JSON.stringify(
  JSON.parse(fs.readFileSync(path.resolve(__dirname, './db.json')))
);

app.get('/profile', (request, response) => response.ok(data.profile));
app.get('/recentChats', (request, response) => response.ok(data.recentChats));
app.get('/allFriends', (request, response) => response.ok(data.allFriends));

const server = app.listen(process.env.PORT || 8080);
