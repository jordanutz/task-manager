const express = require('express');
const massive = require('massive');
const app = express();
app.use(express.json());

massive(process.env.CONNECTION_STRING).then(db => {
   app.set('db', db)
   console.log('Database is kickin')
 });

const tasks = require('./controllers/tasks');
app.get('/api/tasks', tasks.getTasks);

PORT = 5800;

app.listen(PORT, () => {
   console.log(`Blasting off on Port ${PORT}`)
});
