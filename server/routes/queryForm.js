import express from 'express';
import QueryForm from '../models/queryForm.js';

const router = express.Router();

// find all queries
router.route('/').get((req, res) => {
    QueryForm.find()
    .then(queries => res.status(200).json(queries))
    .catch(error => res.status(400).json('Error:' + error));
});

// adding new query
router.route('/add').post((req, res) => {
    const firstName = req.body.firstName;    
    const lastName = req.body.lastName;    
    const email = req.body.email;
    const message = req.body.message;

    const newQuery = new QueryForm({
        firstName,        
        lastName,        
        email,
        message
    });

    newQuery.save()
    .then(() => res.json('New Query Added!'))
    .catch(error => res.status(400).send(error.message));
});

// find a query by id
router.route('/:id').get((req, res) => {
    QueryForm.findById(req.params.id)
    .then(queries => res.json(queries))
    .catch(error => res.status(400).json(error.message));
});

// delete query form by id
router.route('/:id').delete((req, res) => {
    QueryForm.findByIdAndDelete(req.params.id)
    .then(() => res.json('Query Deleted'))
    .catch(error => res.status(400).json(error.message));
});


export default router;