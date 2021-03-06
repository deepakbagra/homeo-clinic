import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// routers
import patientRouter from './routes/patients.js';
import queryRouter from './routes/queryForm.js';
import appointmentRouter from './routes/appointment.js';

dotenv.config();

const app = express();


// allow middleware to handle incoming request object
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// set-up connetion to mongodb data base
const uri = process.env.ATLUS_URI;
const PORT = process.env.PORT || 9000;
mongoose.connect(uri);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("Mongoose database connection established successfully!");
});

// routing to the given path 
app.use('/patients', patientRouter);
app.use('/query', queryRouter);
app.use('/appointments', appointmentRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})














