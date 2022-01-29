const album = require('../models/albumModel');

exports.getallalbums  =  (req , res) =>{
    res.status(200).send('hello from the server side: get');
}

exports.addalbum = async (req , res) =>{
    
    try{
        const newAlbum  =  await album.create(req.body);
    
        res.status(200).json({
        status: 'success',
        data:{
            album:newAlbum
        }
    });
    } catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
            })
    }
}

exports.updatealbum = (req , res) =>{
    res.status(200).send('hello from the server side: patch');
}
exports.deletealbum = (req , res)=>{
    res.status(200).send('hello from the server side');
}