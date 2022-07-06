const express = require ('express');
const { MongoClient } = require('mongodb');
const app = express ();
const port = process.env.PORT || 5000;

const url = 'mongodb+srv://uas:backend@mongodb.7cgztlg.mongodb.net/test';
const client = new MongoClient(url);
const dbName = 'uas';


app.get("/",async (req,res)=> {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('backend');
    const database = await collection.find({}).toArray();

    res.status(200).json({database});
  });

app.listen(port,()=> {
    console.log(`Example app listening on port ${port}`);
});