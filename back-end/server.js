const express = require('express');
const app = express();
require('./model/db');
const facultyModel = require('./model/faculty');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(function (req, res, next) {
    console.log('middleware working')
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, x-auth");
    next();
  });

app.listen(5000, ()=>{
    console.log('Server is running on Port 3000...');
});

app.get('/test', (req, res)=>{
    res.json({result: "Heelo Test"});
});

app.post('/addfaculty', (req, res)=>{
    facultyModel.create(req.body, (err, doc)=>{
        if (err) res.json({result: "Add data Failed!"});
        res.json({doc});
    });
});

app.get('/addfaculty', (req, res)=>{
    facultyModel.find((err, doc)=>{
        res.json({doc});
    });
});

app.get('/addfaculty/:id', (req, res)=>{
    facultyModel.findById({_id: req.params.id}, (err, faculty)=>{
        if(err) res.json({result: "find failed!"});
        res.json({faculty});
    });
});

app.delete('/addfaculty/delete/:id', (req, res)=>{
    facultyModel.findByIdAndRemove({_id: req.params.id}, (err, faculty)=>{
        if(err) res.json({result: "delete failed!"});
        res.json({result: "Delete Complete!"});
    });
});



