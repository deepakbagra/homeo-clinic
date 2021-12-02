import mongoose from 'mongoose';
import 'mongoose-type-email';

const Schema = mongoose.Schema;

const patientSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "first name cannot be blank!"],
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
        type: mongoose.SchemaTypes.Email,
        required: true,
        trim: true,
    }
});

const patient = mongoose.model('patient', patientSchema);
export default patient;