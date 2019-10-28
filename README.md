# Mongoose Schema Study

<br>

## What is the Mongoose Schema Study?
The mongoose schema study is an examination of...

Here are some of the questions covered in this study:

* [What are some of the key takeaways from the Mongoose Schema Study?](#What-are-some-of-the-key-takeaways-from-the-Mongoose-Schema-Study)
* [What is a Schema?](#What-is-a-Schema)
* [](#)





<br>

## What are some of the key takeaways from the Mongoose Schema Study?

<dl>

### abc
------

<dd>
xyz
</dd>


<dl>




<br>

## What is a Schema?
A **schema** is used to define the shape (i.e. layers of properties) of documents within a collection in MongoDB. In other words, a schema is a template that you can plug data into and save in a collection inside your database. For instance, in MongoDB Compass for each database you will see "collections". A "document" in a MongoDB "collection" is an individual instance of each schema with unique values in the standard properties. 

If you want to see how schemas integrate into a developed mongoose application, feel free to check out [Mongoose Configuration and Data Modeling Study](https://github.com/john-azzaro/Study-Mongoose-Configuration-and-Data-Modeling "Mongoose Configuration and Data Modeling Study").

<br>

## How do you create a Mongoose Schema?
***To create a schema, you first need to set the schema you want to create to a new schema class.*** For example, suppose we want to create a schema for a car and ascribe certain information about the car we want to commit to the database, such as make, model, and year. 

First, we need to reference Mongoose to use in this schema model file.
```JavaScript
    const mongoose = require('mongoose');
```

***Next, you need to create a schema named "carSchema" and set it to a new ```mongoose.Schema``` class.*** What will happen is that every time you call the *carSchema* schema, it will create new instance of the class.
```JavaScript
    const carSchema = mongoose.Schema({
        // properties go here!
    });
```
 
 ***Inside this new carSchema class, you will have object full of properties.*** Each car that uses this new class will have the specified properties that will eventually be saved to you MongoDB collection. Again, what we're doing here is essentially defining the "shape" of the of the document that will be saved to MongoDB using Mongoose, which is a car with the properties of pertinent information: make, model, and year. 
```JavaScript
    const carSchema = mongoose.Schema({
        make: String,
        model: String,
        year: Number
    });
```

***Finally, export the model***. When you export the model, you are essentially packaging it to be used elsewhere in your code. To do this, you need to create a *model* and then export that model.
```JavaScript
    const Car = mongoose.model('Car', carSchema);
    module.exports = { Book }
```


