const express = require('express');
const app = express();
const PORT = process.env.PORT;
  
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: true}));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

const routes = require('./routes/sample.api');

if(!PORT) {
    throw `port is not defined`
}

app.use('/api', routes);

app.get('/', (req, res)=>{
    console.log('In get request');
    return res.send({message:`Hello Jest.`});
});

app.post('/upload', (req, res)=> {
    console.log(' upload ', req.body);
    res.send({message:1});
});
app.listen(PORT, ()=>console.log(`server start in ${PORT}`));

module.exports = app;