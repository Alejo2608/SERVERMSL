//Import
require('../database.js');
const component = require('../models/components');

//Controller
class components {
    //Register
    async addcomponent(body) {
        try {
            const { name, mr, type, espec } = body;
            const newcomponent = new component({name, mr, type, espec});
            await newcomponent.save();

        } catch (err) {
            console.error(err);            
        };
    };
    
    //Search by id
    async findcomponent(id) {
        try {
            const component = await component.findById(id);
            return component; 
        } catch (err) {
            console.error(err); 
        };
    };

    //Update
    async updatecomponent(body, id) {
        try {
            const { name, mr, type, espec }  = body;
            await component.findByIdAndUpdate(id, { name, mr, type, espec });
        } catch (err) {
            console.error(err); 
        };
    };

    //Delete
    async deletecomponent(id) {
        try {
            await component.findByIdAndDelete(id);
        } catch (err) {
            console.error(err); 
        };
    };

    //Show all components
    async allcomponents() {
        try {
            const components = await component.find();
            return components;
        } catch (err) {
            console.error(err); 
        };
    };
};

module.exports = components;
