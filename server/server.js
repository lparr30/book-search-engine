const express = require('express');


const db = require('./config/connection');

const PORT = 3001;
const app = express();

app.use(express.static());
app.use(express.urlencoded({ extended: true }));

db.once('open', () => {
    console.log('connected to database')
    app.listen(PORT, () => {
        console.log(`server listening to port ${PORT}`);
    })
})
