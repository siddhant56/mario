const express = require('express');
const app=express();

app.use(express.static('public'))

const server = app.listen(8000 , () => {
    console.log('Server Running');
});