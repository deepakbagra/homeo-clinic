import express from 'express';
import Patient from '../models/patient.js';
import dotenv from 'dotenv';

const router = express.Router();
import bcrypt from 'bcrypt';

dotenv.config();



// find all registered patient info
router.route('/').get((req, res) => {
    Patient.find()
    .then(patients => res.status(200).json(patients))
    .catch(error => res.status(400).json('Error:' + error));
});

// new patient sign up post
router.route('/signUp').post(async (req, res) => {

    const saltPassword = await bcrypt.genSalt(8)
    const encryptedPassword = await bcrypt.hash(req.body.password, saltPassword)

    const firstName = req.body.firstName;
    const middleName = req.body.middleName;
    const lastName = req.body.lastName;
    const gender = req.body.gender;
    const dob = Date(req.body.dob);
    const email = req.body.email;    
    const password = encryptedPassword;

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
                password,
            });
             
            newPatient.save()
            .then(() => res.json('Sign Up Successfully! Click next to sign in'))
            .catch(error => res.send(error.message));            
        }
    })
});

// exisitng patient sign in post
router.route('/signIn').post(async (req, res) => {
    const { email, password } = req.body;

    try {
        const patient = await Patient.findOne({ email: email });
        
        if (patient) {
            bcrypt.compare(password, patient.password, function(err, result) {
                
                if (result) {
                    
                    res.json('Validation success!');
                    console.log('Validation success!');

                }
                else {
                    res.json(
                        `Invalid password for email: ${email}`
                    );
                    console.log(`Invalid password for email: ${email}`);
                }
            });
        }
        else {
            res.status(401).json({
                message: `No user found for email: ${email}`                
            });
            console.log(`No user found for email: ${email}`);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal server error!");
    }
})

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