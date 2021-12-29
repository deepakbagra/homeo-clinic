import mongoose from 'mongoose';
import 'mongoose-type-email';

const Schema = mongoose.Schema;

const patientSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    middleName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    gender: {
        type: String,
        required: true,
        trim: true,
    },
    dob: {
        type: Date,        
        trim: true, 
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },    
    password: {
        type: String,
        required: true,
        trim: true,        
    },
    date: {
        type: Date,
        default: Date.now
    }
    
});

const patient = mongoose.model('patient', patientSchema);
export default patient;