/* 
In the following example, the objective is to create a model of a Car such that the schema that all documents 
in our database will have will have make, model, year, and rating. We also have a virtual which can manipulate 
the properties in our Schema to create specific values. Additionally, you can use an instance method if you need 
to keep sensitive information from the client.

*/

const mongoose = required('mongoose');                    // Import Mongoose 

const carSchema = new mongoose.Schema({                   // New schema of carSchema
    make: String,
    model: String,
    year: Number,
    rating: String
});

 
carSchema.virtual('fullCarName', function() {           // If you need to manipulate the properties in your carSchema to create something new,
    return `${this.make} ${this.model}`.trim();         // you simply create a virtual to, in this case, concatenate property values together.
});


carSchema.methods.serialize = function() {               // If you need to keep sensitive information away from the client, you would use an
    return {                                             // instance method like this which would omit senitive information (i.e. rating).
        make: String,
        model: String,
        year: Number
    }
}



const Car = mongoose.model('Car', carSchema);             // Create the "Car" model by creating a model with the collection name in 
                                                          // corresponding MongoDB database (e.g. Car) and the corresponding schema (carSchema).

module.exports = { Car };                                 // Export the models on your page via destructured object. 
                                                          // In this case, we only have one model... Car.


