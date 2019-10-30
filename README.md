# Mongoose Schema Study

<br>

## What is the Mongoose Schema Study?
Every database is going to need a schema, which represents the way that database is built. The mongoose schema study is an examination of 
how to create, export, design, and resolve the relationships between schemas using Mongoose and MongoDB.  

Here are some of the questions covered in this study:

* [What are some of the key takeaways from the Mongoose Schema Study?](#What-are-some-of-the-key-takeaways-from-the-Mongoose-Schema-Study)
* [What is a Schema?](#What-is-a-Schema)
* [How do you create a Mongoose Schema?](#How-do-you-create-a-Mongoose-Schema)
* [What is a Mongoose Model and how do you create one?](#What-is-a-Mongoose-Model-and-how-do-you-create-one)
* [What is a virtual and how do you create one?](#What-is-a-virtual-and-how-do-you-create-one)
* [What is an instance method and how do you create one?](#What-is-an-instance-method-and-how-do-you-create-one)
* [What are relationship types and why are they important?](#What-are-relationship-types-and-why-are-they-important)
* [What are embedded models?](#What-are-embedded-models)
* [](#)
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

### Always call your model after everything else (i.e. schemas, virtuals, etc.).
------

<dd>

By calling the model after everything else in your model file, such as the schema, any virtuals or instance methods, you make sure that those will actually be included in the model exportation. Doing it before will not work so just make sure to instantiate the model at the very bottom of the document before you export it.

</dd>

### Use a virtual if you want to use schema properties in unique ways.
------

<dd>

Virtuals come in pretty handy if you have a host of properties in your schema but you dont have a specific instance of the kind you want to create. The best example to give is concatenating two properties together so they make something new, like you have your first name and last name saved seperately in your database document and you want to have an easy way of concatenating them both together for use in your application. 

Although you dont have to do this, it seems like creating a virtual to do the job would make your server file much cleaner by simply calling the virtual rather than doing the work potentially many times over. In other words, its worth the effort just to create a virtual even if you just do it once because you never know when you will need it again.

</dd>

### Use an instance method for additional security.
------

<dd>

Using instance methods is an extremely useful way to ensure that the client that requests information only gets back the information you want to show them. Suppose you had a collection of users and each document had not only the names of the users, but the passwords as well. You dont want other people to have access to that information so you would make an instance method that would *serialize* the schema so that when the client requests users, properties like "password" and "address" are kept secret. In many ways, instance methods are security methods.

</dd>

### Always consider how data relates to each other in your project to keep your database organized.
------

<dd>

Suppose you have a basic blog application and you have a a single user with a single user name. This would be considered a one-to-one. Conversely, you can have a a one-to-many relationship if you have a blog post by that single user but comments from multiple users. And to take the idea even further, you could have a blog with a many-to-many relationship by having multiple authors and multiple comments with multiple users for a single blog post. 

Simply put, you ABSOLUTELY need to think about how you want to layout your database and schemas so that you can optimize your database organization.

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
        year: Number,
        rating: String
    });
```

<br>

## What is a Mongoose Model and how do you create one?
***A mongoose model is essentially creating a wrapper which packages the schema(s) to be used elsewhere in your code.*** After you create your schema, you will need to export your model to use elsewhere in your program which requires a model in order to export. In other words, you are creating the interface for the database using a model. To create a model, you need to create a *model* and then export that model.
```JavaScript
    const Car = mongoose.model('Car', carSchema);
    module.exports = { Car }
```

<br>

## What is a virtual and how do you create one?
A virtual allows you to manipulate the properties inside your schema object for use in your application. In our Car example, suppose we want to concatenate (combine) the make and model of
the car into one cohesive string. To do this, you need to call the schema (e.g. carSchema), define the virtual name (e.g. fullCarName), and then return the desired value. In the example below, we'll use a template literal to concatenate the properties of make and model to create a full car name. Note here that we use the *.trim* method do remove any whitespace from the properties.
```JavaScript
    carSchema.virtual('fullCarName', function() {
        return `${this.make} ${this.model}`.trim();
    });
```

<br>

## What is an instance method and how do you create one?
***An instance method perfoms a specific action on a specific instance of a document rather than the entire document.*** In essence, this is liek a security step that ensures that only select properties in your schema are shown to the client. This would come in handy if you had documents that stored user information and if a client wanted to see all the users in the database, they coudl EXCEPT for certain properties that are meant to keep private, like passwords, addresses, etc. 

Suppose that in the example of the Car model, we want the user to have access to all the properties in the Car model EXCEPT the reviews, which are meant to be kept private. For those times you want the Car model to restrict the properties like this, you would then call this specific "serialize" method in the server.js file.
```JavaScript
    carSchema.methods.serialize = function() {
        return {
            make: String,
            model: String,
            year: Number
        }
    }
```

<br>

## What are relationship types and why are they important?
When you store data inside a database, you need to give particular consideration to how the data in that database *relates* to one another. Here are three of the most common relationship types:

***One-to-One***  relationships exist when you need only one account for one user. In the basic blog example, when a single author has a single user username, that is a direct *one-to-one* realtionship between the author and the username.  

***One-to-Many*** realtionships exists when you have one account with multiple associated accounts. In the basic blog example, one blog post could have many comments from different users. In other words, you can only have one blog post for for the many comments made on that blog post, so there is a *one-to-many* realtionship between the two.

***Many-to-Many*** relationships exist when you have you have multiple accounts with multiple associated accounts. In the basic blog example, a *many-to-many* relationship exists when a single blog post has multiple authors.

<br>

## What are embedded models?
***Embedded models are essentially associated data stored with your document.*** For example, suppose we have a document in our database for instances of Cars that will have the make, model, and the year of the car that look something like this:
```JavaScript
    {
        "make": "Ferrai",
        "model": "458",
        "year": "2015"
    }
```
Now suppose we want to include a collection of reviews that is tied to this 2015 Ferrari 458 document in our collection. We know that there is going to be a *one-to-many* realtionship because we have only ONE post about the 2015 Ferrari 458 but we want to have MANY reviews. We also know that the front-end will to retrieve BOTH the post AND also the reviews. 

To do this, you need to store the reviews in an array!
```JavaScript
    {
        "make": "Ferrai",
        "model": "458",
        "year": "2015",
        "reviews": [                                              // array of objects
            {
                "content": "This Ferrari is the best!"            // each object is a review
            },
            {
                "content": "Ferrari has done it again!"
            },                
            {
                "content": "I love horses... I love Ferraris!"
            },                
        ]
    }
```

### How do you work with embedded model arrays in Mongo Shell?
---------
When working with arrays, Mongo has array update operators and array query operators. For example, if you want to add, remove, etc elements to an array you use some of the many methods available.

```$push``` will add items to an array.
```$pull``` will remove all elements that match the specified query.
```$addToSet``` will add elements to an array only if they do not exist.
```$pullAll``` will remove all matching values from an array.
```$each``` will modify *.push* and *.addToSet* operators and append multiple items fro array updates.
```$position``` will modify *.push* operator to specify the position in the array to add elements.
```$slice``` will modify the *.push* operator to limit the size of updated arrays.
```$sort``` will modify *.push* operator to reorder documents stored in an array.


```
    db.cars.update(
        {
            make: 'Ferrari',
            model: '458',
            year: 2015,
        }
    )
```






<br>

### How do you work with embedded model arrays in Mongoose?
--------


