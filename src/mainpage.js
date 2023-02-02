import './style.css'
import bookIcon from './book.png'

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

})()

export default mainPage