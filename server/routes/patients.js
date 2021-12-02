import express from 'express';
import Patient from '../models/patient.js';

const router = express.Router();

// find all patients
router.route('/').get((req, res) => {
    Patient.find()
    .then(patients => res.status(200).json(patients))
    .catch(error => res.status(400).json('Error:' + error));
});

router.route('/add').post((req, res) => {
    const firstName = req.body.firstName;
    const middleName = req.body.middleName;
    const lastName = req.body.lastName;
    const gender = req.body.gender;
    const dob = Date(req.body.dob);
    const email = req.body.email;

    const newPatient = new Patient({
        firstName,
        middleName,
        lastName,
        gender,
        dob,
        email,
    });

    newPatient.save()
    .then(() => res.json('Patient addedd!'))
    .catch(error => res.status(400).json(error.message));
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