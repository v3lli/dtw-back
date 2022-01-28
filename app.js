const express = require('express');
// const { ppid } = require('process');
const app = express();
const albumRouter = require('./routes/albumroutes');



// app.get('/api/v1/albums' , getallalbums );
// app.post('/api/v1/albums' , addalbum);
// app.patch('/api/v1/albums' , updatealbum );
// app.delete('/api/v1/albums' , deletealbum );


app.use('/api/v1/albums', albumRouter);
