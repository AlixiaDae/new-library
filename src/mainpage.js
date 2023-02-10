import './style.css'
import bookIcon from './imgs/book.png'
import { Library } from './libraryModule'
import { Book } from './book'

const mainPage = (() => {
    //header

    const header = document.createElement("div")
    header.classList.add("header")
    document.body.appendChild(header)

    const logo = document.createElement("img")
    logo.classList.add("logo")
    logo.src = bookIcon
    header.appendChild(logo)

    const libraryName = document.createElement("h1")
    libraryName.classList.add("library-name")
    libraryName.textContent = "Alexandria"
    header.appendChild(libraryName)

    //Nav bar
    const navBar = document.createElement("nav")
    navBar.classList.add("nav-bar")
    document.body.appendChild(navBar)

    const homeBtn = document.createElement("div")
    homeBtn.textContent = "Home"
    homeBtn.classList.add("home-button")
    navBar.appendChild(homeBtn)

    const addBookBtn = document.createElement("button")
    addBookBtn.textContent = "Add Book"
    addBookBtn.id = "add-button"
    navBar.appendChild(addBookBtn)

    //Add book form

    const formContainer = document.createElement("div")
    formContainer.classList.add("form-container")
    document.body.appendChild(formContainer)

    formContainer.style.height = "0px"

    function showBookForm() {
        if(formContainer.style.height == "0px") {
            formContainer.style.height = "285px"
        } else {
            formContainer.style.height = "0px"
        }
    }

    addBookBtn.addEventListener("click", showBookForm)
 
    const bookForm = document.createElement("form")
    bookForm.classList.add("book-form")
    formContainer.appendChild(bookForm)
 
    const bookField = document.createElement("fieldset")
    bookForm.appendChild(bookField)
 
    const addBookLegend = document.createElement("legend")
    addBookLegend.textContent = "Add a new book"
    bookField.appendChild(addBookLegend)
 
    const addBookTitleWrapper = document.createElement("div")
    bookField.appendChild(addBookTitleWrapper)
 
    const addBookTitleLabel = document.createElement("label")
    addBookTitleLabel.textContent = "Book Title:"
    addBookTitleLabel.setAttribute("for", "bTitle")
    addBookTitleWrapper.appendChild(addBookTitleLabel)
 
    const addBookTitleInput = document.createElement("input")
    addBookTitleInput.id = "bTitle"
    addBookTitleInput.name = "bTitle"
    addBookTitleWrapper.appendChild(addBookTitleInput)
 
    const addBookAuthorWrapper = document.createElement("div")
    bookField.appendChild(addBookAuthorWrapper)
 
    const addBookAuthorLabel = document.createElement("label")
    addBookAuthorLabel.textContent = "Book Author:"
    addBookAuthorLabel.setAttribute("for", "bAuthor")
    addBookAuthorWrapper.appendChild(addBookAuthorLabel)
 
    const addBookAuthorInput = document.createElement("input")
    addBookAuthorInput.id = "bAuthor"
    addBookAuthorInput.name = "bAuthor"
    addBookAuthorWrapper.appendChild(addBookAuthorInput)
 
    const addBookProgressWrapper = document.createElement("div")
    bookField.appendChild(addBookProgressWrapper)
 
    const addBookProgressWrapperLabel = document.createElement("div")
    addBookProgressWrapperLabel.textContent = "Read/Unread"
    addBookProgressWrapper.appendChild(addBookProgressWrapperLabel)
 
    const bookReadRadioWrapper = document.createElement("p")
    bookReadRadioWrapper.classList.add("read-wrapper")
    addBookProgressWrapper.appendChild(bookReadRadioWrapper)
 
    const bookReadRadio = document.createElement("input")
    bookReadRadio.type = "radio"
    bookReadRadio.id = "read"
    bookReadRadio.name = "bIsRead"
    bookReadRadio.value = true
    bookReadRadioWrapper.appendChild(bookReadRadio)
     
    const bookReadRadioLabel = document.createElement("label")
    bookReadRadioLabel.setAttribute("for", "bIsRead")
    bookReadRadioLabel.textContent = "Read"
    bookReadRadioWrapper.appendChild(bookReadRadioLabel)
 
    const bookUnreadRadioWrapper = document.createElement("p")
    bookUnreadRadioWrapper.classList.add("unread-wrapper")
    addBookProgressWrapper.appendChild(bookUnreadRadioWrapper)
 
   const bookUnreadRadio = document.createElement("input")
    bookUnreadRadio.type = "radio"
    bookUnreadRadio.id = "unread"
    bookUnreadRadio.name = "bIsRead"
    bookUnreadRadio.value = false
    bookUnreadRadioWrapper.appendChild(bookUnreadRadio)
     
    const bookUnreadRadioLabel = document.createElement("label")
    bookUnreadRadioLabel.setAttribute("for", "bIsRead")
    bookUnreadRadioLabel.textContent = "Unread"
    bookUnreadRadioWrapper.appendChild(bookUnreadRadioLabel)
 
   //book submit button
 
    const addBookSubmitButton = document.createElement("input")
    addBookSubmitButton.setAttribute("type", "submit")
    addBookSubmitButton.id = "submit-book"
    addBookSubmitButton.value = "Add to Library"
    bookField.appendChild(addBookSubmitButton)
 
    addBookSubmitButton.addEventListener("click", (e) => {
        e.preventDefault()
        const newBookTitle = document.getElementById("bTitle")
        const newBookAuthor = document.getElementById("bAuthor")
        const readBook = document.getElementById("read")
        const unreadBook = document.getElementById("unread")
        let bookProgress = ""
        if(readBook.checked) {
            bookProgress = true
        } else {
            bookProgress = false
        }
        const newBook = new Book(newBookTitle.value, newBookAuthor.value, bookProgress)
        if(!newBookTitle.value) return
        library.addBook(newBook)
        saveToLocal()
        library.showBooks()
        showBooks()
    })

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

    function populateLibrary() {
        let bookOne = new Book("The Lion, The Witch, and the Wardrobe", "C.S. Lewis", true)
        let bookTwo = new Book("Percy Jackson", "Rick Riordan", true)
        let bookThree = new Book("Book of Human Skin", "Michelle Lovric", true)
        library.addBook(bookOne)
        library.addBook(bookTwo)
        library.addBook(bookThree)
        saveToLocal()
    }

    function showBooks() {
        shelf.innerHTML = ''
        for(let book of JSON.parse(localStorage.getItem("myLibrary"))) {
            createBookCard(shelf, book)
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

        const bookAuthor = document.createElement("p")
        bookAuthor.textContent = book.author 
        bookCard.appendChild(bookAuthor)

        const removeBtn = document.createElement("button")
        removeBtn.textContent = 'x'
        removeBtn.id = 'remove-button'
        bookCard.appendChild(removeBtn)

        removeBtn.addEventListener("click", () => {
            bookCard.remove()
            library.removeBook(bookId)
            saveToLocal()
        })
    }

    // Local Storage

    const saveToLocal = () => {
        localStorage.setItem("myLibrary", JSON.stringify(library.shelf))
    }

    populateLibrary()
    showBooks()

})()

export default mainPage