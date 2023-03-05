const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
console.log(process.env)

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@handwriting-dataset.wkyksjq.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        console.log(uri);
        await client.connect();
        console.log("connected");
        const userInputCollection = client.db("handWrDataset").collection("userInput");

        app.post('/user', async (req, res) => {
            const newInput = req.body;
            console.log(newInput)
            const result = await userInputCollection.insertOne(newInput);
            res.send({ result });
        })

        app.post('/test', async (req, res) => {
            const newInput = req.body;
            console.log(newInput)
            const result = await userInputCollection.insertOne(newInput);
            res.send({ result });
        })
    }
    finally {
        // await client.close();
    }

}
run().catch(console.dir);



app.get('/hello', (req, res) => {
    res.send('Hello handwriting dataset port a: ' + port);
})

// app.get('/users', (req, res) => {
//     console.log('front end client requesting for data ')
//     // res.send(users);
// });


// app.get('/user/:id', (req, res) => {
//     // const id = parseInt(req.params.id);
//     // console.log('print id, ' + id + ", " + typeof (id));
//     // user = users.find(u => u.id === id);
//     console.log("default api triggered !");
//     res.send({response : "connected"});
// })




app.listen(port, () => {
    console.log('Example app listening to port: ', port)
})
