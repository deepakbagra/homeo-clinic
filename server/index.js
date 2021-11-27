import express from 'express';
import mongoose from 'mongoose';

const app = express();

// allow middleware to handle incoming request object

app.use(express.json());
app.use(express.urlencoded());

// set-up mongodb data base

const CONNECT_URI = 'mongodb+srv://deepak:Deepak123@cluster0.0lvkk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// server listen to the defined port

const PORT = process.env.PORT || 9000;

mongoose.connect(CONNECT_URI)
    .then( () => app.listen(PORT, () => console.log(`Serveer is running on PORT ${PORT}`)) )
    .catch( (error) => console.log(error.message) );








