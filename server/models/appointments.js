import mongoose from 'mongoose';
import 'mongoose-type-email';
// var ObjectId = mongoose.Schema.Types.ObjectId;

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    
    appointmentDate : {
        type: String,
        trim: true,
    },
    appointmentTime : {
        type: String,
        trim: true,
    },
    
});

const appointment = mongoose.model('appointment', appointmentSchema);
export default appointment;