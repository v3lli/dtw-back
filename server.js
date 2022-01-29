const dotenv = require('dotenv');
const app = require('./app');
// const mongoose = require('mongoose');

dotenv.config({path: './config.env'});

// const DB =  process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

// try{
//     mongoose.connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// }).then(() => console.log('db connected'));
// }catch{
//     console.log(err)
// }


const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://emekaon:4MySite!@cluster0.f3wfb.mongodb.net/mediabase?retryWrites=true&w=majority";
const DB =  process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});



const port = 3000;
app.listen(port, ()=>{
    console.log(`app is runing on port ${port}... `)
})