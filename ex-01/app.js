const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send("<img src='/img/userNavatarM.jpg'  alt='imagemDoAvatarDoUsuario'/>");
})

app.post('/', (req,res) =>{
    res.send(`Got a POST request`)
})

app.put('/user', (req,res) =>{
    res.send(`Got a PUT request`)
})

app.delete('/user', (req,res) =>{
    res.send(`Got a DELETE request`)
})


app.listen(port, () =>{
    console.log(`listen on port ${port}`);
})