const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
//const appData = {};


// Dependencies
const bodyParser = require('body-parser');
//Middleware
//Here we are configuring express to use body-parser as middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Cors for cross origin allowance
const cors = require('cors');
const req = require('express/lib/request');
app.use(cors());


//initialize the main project folder
app.use(express.static('demo'))
//app.use(express.static(path.join(__dirname +'demo')))
/*
app.use('/js',express.static(path.join(__dirname +'/js')));
app.use('/css',express.static(path.join(__dirname +'/css')));

app.use('/css',express.static(__dirname +'/css'));
app.use('/js',express.static(__dirname +'/js'));
*/

// Lesson3 Get and Route
/*
app.get('/all', function(req, res){
res.send('Hello world');
}
);

//post 
app.post('/all', (req, res)=>{
    console.log(req.body);
    data.push(req.body);
});
*/

const server = app.listen(port, ()=>{
    console.log("server is running");
    console.log(`running on localhost: ${port}`);
} );


// using Arrow function

app.get('/addAnimal', (request, response)=>{
    response.sendFile(path.join(__dirname,"/demo/index.html"));
}
); 

let data = [];
app.post('/postall', (request, response)=>{
    //data.push(req.body)
    let newData = request.body;
    let newEntry = {
        name: newData.name,
        type: newData.type,
    }
    data.push(newEntry);
    //every time i click on the button in the page i make a post so the code inside the post function is executed here in the server side and the console.log display content in the terminal, but the console.log in the app.js desplay content in the browser's console. 
    console.log(data);
});
// note that ever get or post shoul have different URL or nothing will go will
app.get('/updatURL', (request, response)=>{
    response.send(data);
    console.log("its data from server sent to client \"update frontend\" ", data);
        
});

/*
app.get('/removeURL', (request, response)=>{
    response.send(data);
    console.log("its data from server sent to client \"remove frontend\"", data);
        
});*/
  
//console.log(data[0]); this code is executed only once before the server lestining or post function so the data = [] , data[0] is undefined

// post >> request the body and execute the code and everything here in the server side.
// get >> respond with the data and send it to the cleint side (browser like sending the frontend "html, css, js" or any data i want to send it from here"server side" to the client side).