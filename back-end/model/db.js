var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-faculty', { useNewUrlParser: true })

mongoose.connection.on('connected', function(){
    console.log("Database Connected");
});

mongoose.connection.on('error', function(){
    console.log('Database error');
});

mongoose.connection.on('disconnected', function(){
    console.log('Database disconnected');
});

process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log('Database Down...');
        process.exit(0);
    });
});