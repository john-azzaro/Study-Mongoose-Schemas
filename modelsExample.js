/* 
In the following example, we create a basic model for a book

*/



const mongoose = required('mongoose');               // Import Mongoose 

const bookSchema = new mongoose.Schema({             // New schema of Book
    title: String,
    author: String,
    summary: String,
    isbn: Number
});

const Book = mongoose.model('Book', bookSchema);     // Create the "Book" model by creating a model with the collection name in 
                                                     // corresponding MongoDB database (e.g. Book) and the corresponding schema (bookSchema).

module.exports = { Book };                           // Export the models on your page via destructured object. 
                                                     // IN this case, we only have one model... Book.


