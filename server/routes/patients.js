import express from 'express';
import Patient from '../models/patient.js';

const router = express.Router();

// find all registered patient info
router.route('/').get((req, res) => {
    Patient.find()
    .then(patients => res.status(200).json(patients))
    .catch(error => res.status(400).json('Error:' + error));
});

// new patient sign up post
router.route('/signUp').post((req, res) => {
    const firstName = req.body.firstName;
    const middleName = req.body.middleName;
    const lastName = req.body.lastName;
    const gender = req.body.gender;
    const dob = Date(req.body.dob);
    const email = req.body.email;

    // verify if the patient's email already exist in database
    Patient.find({ email: email }, (err, patient) => {
        if (err) {
            res.send('Error: Internal Server Error!')
        }
        else if (patient.length > 0) {
            res.send(`The email "${email}" is already registered!`)
        }
        // if no sign up error, save the new patient
        else {
            const newPatient = new Patient({
                firstName,
                middleName,
                lastName,
                gender,
                dob,
                email,
            });
             
            newPatient.save()
            .then(() => res.json('Sign Up Successfully!'))
            .catch(error => res.status(400).send(error.message));            
        }
    })
});

// find patient by id
router.route('/:id').get((req, res) => {
    Patient.findById(req.params.id)
    .then(patients => res.json(patients))
    .catch(error => res.status(400).json(error.message));
});

// delete patient by id
router.route('/:id').delete((req, res) => {
    Patient.findByIdAndDelete(req.params.id)
    .then(() => res.json('Patient Deleted'))
    .catch(error => res.status(400).json(error.message));
});


export default router;