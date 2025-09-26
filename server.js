const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router');

const port = 3001;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://dilsarasup:Dila2001@cluster0.mtvybfh.mongodb.net/?retryWrites=true&w=majority';

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('MongoDB Error:', error);
    }
};

connect();

app.use('/api', router);

const server = app.listen(port, () => {
    console.log(`Node server is listening on port ${server.address().port}`);
});
