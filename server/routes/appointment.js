import express from 'express';
import Appointment from '../models/appointments.js';

const router = express.Router();

router.route('/').get((req, res) => {
    Appointment.find()    
    .then(results => res.json(results))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req, res) => {    
    let name = req.body.name;
    let appointmentDate = req.body.appointmentDate;
    let appointmentTime = req.body.appointmentTime;
    let email = req.body.email;
      

    if (!appointmentDate || !name || !email) {
        return res.status(400).json(
            'Appointment date, name and email are required',
        );        
    }

    const newAppointment = new Appointment( {        
        name,
        appointmentDate,
        appointmentTime,
        email,
     });
     newAppointment.save()
     .then(result => res.json(result))
     .catch(err => res.send(err));
});

// find appointment by id
router.route('/:id').get((req, res) => {
    Appointment.findById(req.params.id)
    .then(patients => res.json(patients))
    .catch(error => res.status(400).json('Error: ' + error));
});

// delete appointment by id
router.route('/:id').delete((req, res) => {
    Appointment.findByIdAndDelete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.send(err));
});

export default router;

