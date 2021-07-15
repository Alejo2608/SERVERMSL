//Modules
const express = require('express');
const router = express.Router();

// //Controllers
const Component = require('../controllers/components');

//Initialize Component
const ComponentController = new Component();

//Root
//Show Components 
router.get('/', async (req, res) => {
    const Components = await ComponentController.allComponents();
    res.json(Components);
});

//Search by id
router.get('/:_id', async (req, res) => {
    const Component = await ComponentController.findComponent(req.params._id);
    res.json(Component);
})

//Register a new component 
router.post('/', async (req, res) => {
    await ComponentController.addComponent(req.body); 

    const Components = await ComponentController.allComponents();
    res.json(Components);
});

//Modify a component
router.put('/:_id', async (req, res) => {
    await ComponentController.updateComponent(req.body, req.params._id);
    const Component = await ComponentController.findComponent(req.params._id);
    res.json(Component);
});

//Delete a component
router.delete('/:_id', async (req, res) => {
    await ComponentController.deleteComponent(req.params._id); 

    const Components = await ComponentController.allComponents();
    res.json(Components);
});

// //Export 
module.exports = router;