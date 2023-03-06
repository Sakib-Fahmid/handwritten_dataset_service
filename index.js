const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@handwriting-dataset.wkyksjq.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.get('/hello', (req, res) => {
    res.send('Hello handwriting dataset port a: ' + port);
})

<<<<<<< HEAD
app.post('/user', async (req, res) => {
=======
app.post('/test', async (req, res) => {
>>>>>>> 8554c0cd22612cb6ce9b5bbdc48639690ebeb953
    await client.connect();
    const userInputCollection = client.db("handWrDataset").collection("userInput");
    const newInput = req.body;
    const result = await userInputCollection.insertOne(newInput);
    res.send({ result });
})

app.listen(port, () => {
    console.log('Example app listening to port: ', port)
})
