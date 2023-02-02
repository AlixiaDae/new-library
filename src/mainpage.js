import './style.css'
import bookIcon from './imgs/book.png'
import { Library } from './libraryModule'
import { Book } from './book'

const mainPage = (() => {
    //Nav bar
    const navBar = document.createElement("nav")
    navBar.classList.add("nav-bar")
    document.body.appendChild(navBar)

    const logo = document.createElement("img")
    logo.classList.add("logo")
    logo.src = bookIcon
    navBar.appendChild(logo)

    const homeBtn = document.createElement("h1")
    homeBtn.textContent = "Home"
    homeBtn.classList.add("home-button")
    navBar.appendChild(homeBtn)

    //Sub header
    const subHeader = document.createElement("div")
    subHeader.classList.add("sub-header")
    document.body.appendChild(subHeader)

    //footer 
    const footer = document.createElement("div")
    footer.classList.add("footer")
    document.body.appendChild(footer)

    //Shelf and BookCards

    let shelf = document.createElement("div")
    shelf.classList.add("shelf")
    subHeader.appendChild(shelf)

    let library = new Library()
    let bookOne = new Book("The Lion, The Witch, and the Wardrobe", "C.S. Lewis", true)
    let bookTwo = new Book("Percy Jackson", "Rick Riordan", true)
    let bookThree = new Book("Book of Human Skin", "Michelle Lovric", true)
    library.addBook(bookOne)
    library.addBook(bookTwo)
    library.addBook(bookThree)

    function showBooks() {
        shelf.innerHTML
        for(let book of library.shelf) {
            createBookCard(shelf,book)
        }
    }

    function createBookCard(container, book) {
        const bookCard = document.createElement("div")
        bookCard.classList.add("book-card")
        container.appendChild(bookCard)

        const bookTitle = document.createElement("p")
        bookTitle.textContent = book.title
        bookCard.appendChild(bookTitle)
        let bookId = book.title

        const removeBtn = document.createElement("button")
        removeBtn.textContent = 'x'
        removeBtn.id = 'remove-button'
        bookCard.appendChild(removeBtn)

        removeBtn.addEventListener("click", () => {
            bookCard.remove()
            library.removeBook(bookId)
        })
    }

    showBooks()

})()

export default mainPage