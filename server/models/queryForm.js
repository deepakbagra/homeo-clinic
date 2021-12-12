import mongoose from 'mongoose';
import 'mongoose-type-email';

const Schema = mongoose.Schema;

const queryFormSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "first name cannot be blank!"],
        trim: true,
    },   
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        required: true,
        trim: true,
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },

});

const queryForm = mongoose.model('queryForm', queryFormSchema);
export default queryForm;