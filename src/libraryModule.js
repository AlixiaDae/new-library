import { Book } from "./book"

export class Library {
    constructor() {
        this.shelf = []
    }

    showBooks() {
        console.log(this.shelf.map(book => book.title))
    }

    addBook(newBook) {
        if(!this.shelf.includes(newBook.title)) {
            this.shelf.push(newBook)
        }
    }

    removeBook(bookId) {
        let bookToBeRemoved = this.shelf.find(book => book.title == bookId)
        let bookIndex = this.shelf.indexOf(bookToBeRemoved)
        return this.shelf.splice(bookIndex, 1)
    }

}