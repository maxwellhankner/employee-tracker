const connection = require('./connection');

class DB {
    constructor(connection){
        this.connection = connection
    }

    getAllEmployees(){
        return this.connection.query("SELECT * FROM employees")
    }

    // getAllBooks(){
    //     return this.connection.query("SELECT * FROM books")
    // }

    // getOneBook(title){
    //     return this.connection.query("SELECT title, imageURL, firstName, lastName FROM books LEFT JOIN authors ON books.authorId = authors.id WHERE books.title = ?", [title])
    // }

    // getBookNotes(bookId){
    //     return this.connection.query("SELECT * FROM notes WHERE notes.bookId = ?", [bookId])
    // }

    // addBook({title, authorId, imageURL}){
    //     // console.log(aBook)
    //     return this.connection.query("INSERT INTO books SET ?",
    //     {
    //         title, 
    //         authorId,
    //         imageURL
    //     })
    // }

    // addBookNote({note, bookId}){
    //     return this.connection.query("INSERT INTO notes SET ?", 
    //     {
    //         note,
    //         bookId
    //     })
        
    // }

    // deleteNote(note){
    //     return this.connection.query("DELETE FROM notes WHERE note = ?", [note])
    // }
}

module.exports = new DB(connection);