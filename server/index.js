const express = require('express');
const massive = require('massive');
const app = express();
require('dotenv').config();
app.use(express.json());

massive({
   connectionString: process.env.CONNECTION_STRING,
   ssl: {rejectUnauthorized: false}
 }).then(db => {
   app.set('db', db)
   console.log('Database is kickin')
 }).catch(err => {
    console.log(err)
 })

const tasks = require('./controllers/tasks');
app.get('/api/tasks', tasks.getTasks);

PORT = 5800;

app.listen(PORT, () => {
   console.log(`Blasting off on Port ${PORT}`)
});
