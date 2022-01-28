const album = require('../models/albumModel');

exports.getallalbums  =  (req , res) =>{
    res.status(200).send('hello from the server side: get');
}

exports.addalbum = (req , res) =>{
    res.status(200).send('hello from the server side: post');
}

exports.updatealbum = (req , res) =>{
    res.status(200).send('hello from the server side: patch');
}
exports.deletealbum = (req , res)=>{
    res.status(200).send('hello from the server side');
}