import express from 'express';
import Appointment from '../models/appointments.js';

const router = express.Router();

router.route('/').get((req, res) => {
    Appointment.find()    
    .then(results => res.json(results))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/bookAppointment').post((req, res) => {

    const newAppointment = new Appointment({        
        bookDate: req.body.bookDate,
        bookTime: req.body.bookTime,
     });

     // verify if the requested booking slot already exist in database
    Patient.find({ bookDate: bookDate },
        { bookTime: bookTime }, (err, booking) => {

        if (err) {
            res.send('Error: Internal Server Error!')
        }
        else if (booking.length > 0) {
            res.send(`The slot is already booked!`)
        }
        // if no sign up error, save the new patient
        else {
            newAppointment.save()
            .then(result => res.json(result))
            .catch(err => res.send(err));
        }
    })
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

