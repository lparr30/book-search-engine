const express = require('express');

const PORT = 3001;

const app = express();

app.use(express.static());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`server listening to port ${PORT}`);
})