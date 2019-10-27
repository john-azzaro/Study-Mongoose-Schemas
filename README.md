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

<br>

## How do you create a Mongoose Schema?
**To create a schema, you first need to set the schema you want to create to a new schema class.** For example, suppose we want to create a schema for a *car*. First, you need to create a schema named "car" and set it to a new ```mongoose.Schema``` class. What will happen is that every time you call the *car* schema, it will create new instance of the class.
```JavaScript
    const car = mongoose.Schema({

    })
```
 **Inside this new *car* class, you will have object full of properties.** Each car that uses this new class will have the specified properties that will eventually be saved to you MongoDB collection. In essence, defining the "shape" of the of the document you are creating that will be saved to MongoDB using Mongoose.
```JavaScript
    const car = mongoose.Schema({
        make: String,
        model: String,
        year: Number
    })

```




When you call the *car* schema
