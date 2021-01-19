const express = require('express');
const path = require('path');
const app = express();
const port=process.env.port || 3000;
app.use('/public', express.static(path.join(__dirname, '/public')));

app.listen(port, () => {
    console.log("Servidor en puerto 3000");
});