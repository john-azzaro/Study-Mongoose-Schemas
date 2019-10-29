/* 
In the following example, the objective is to create a model of a Car such that the schema that all documents 
in our database will have will have make, model, year, and rating.

*/



const mongoose = required('mongoose');                    // Import Mongoose 

const carSchema = new mongoose.Schema({                   // New schema of carSchema
    make: String,
    model: String,
    year: Number,
    rating: String
});

const Car = mongoose.model('Car', carSchema);             // Create the "Car" model by creating a model with the collection name in 
                                                          // corresponding MongoDB database (e.g. Car) and the corresponding schema (carSchema).

module.exports = { Car };                                 // Export the models on your page via destructured object. 
                                                          // In this case, we only have one model... Car.


