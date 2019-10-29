# Mongoose Schema Study

<br>

## What is the Mongoose Schema Study?
The mongoose schema study is an examination of Mongoose Schemas, how to create and export them, schema design, and concepts associated with 

Here are some of the questions covered in this study:

* [What are some of the key takeaways from the Mongoose Schema Study?](#What-are-some-of-the-key-takeaways-from-the-Mongoose-Schema-Study)
* [What is a Schema?](#What-is-a-Schema)
* [How do you create a Mongoose Schema?](#How-do-you-create-a-Mongoose-Schema)
* [](#)
* [](#)





<br>

## What are some of the key takeaways from the Mongoose Schema Study?

<dl>

### Mongoose Schemas let you validate required fields.
------

<dd>
For most of your model classes, you'll have a certain set of field that you will need to save to your database. In addition, you can use an instance methods like a "serial" method which will expose only the properties you want to the client. 
</dd>

### Always consider how data relates to each other in your project to keep your database organized.
------

<dd>

Suppose you have a basic blog application and you have a a single user with a single user name. This would be considered a one-to-one. Conversely, you can have a a one-to-many relationship if you have a blog post by that single user but comments from multiple users. And to take the idea even further, you could have a blog with a many-to-many relationship by having multiple authors and multiple comments with multiple users for a single blog post. You ABSOLUTELY need to think about how you want to layout your database and schemas so that you can optimize your database organization.

</dd>



<dl>




<br>

## What is a Schema?
***A schema is used to define the shape (i.e. layers of properties) of documents within a collection in MongoDB.*** In other words, a schema is a template that you can plug data into and save in a collection inside your database. For instance, in MongoDB Compass for each database you will see "collections". A "document" in a MongoDB "collection" is an individual instance of each schema with unique values in the standard properties. 

If you want to see how schemas integrate into a developed mongoose application, feel free to check out [Mongoose Configuration and Data Modeling Study](https://github.com/john-azzaro/Study-Mongoose-Configuration-and-Data-Modeling "Mongoose Configuration and Data Modeling Study").

<br>

## How do you create a Mongoose Schema?
To create a schema, you first need to set the schema you want to create to a new schema class. For example, suppose we want to create a schema for a car and ascribe certain information about the car we want to commit to the database, such as make, model, and year. 

***First, we need to reference Mongoose (which we use in this schema model file).*** As a refresher, before this you would need to add this dependency to your package.json file from the npm registry. 
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


