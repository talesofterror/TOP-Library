"use strict"

console.log("hi")

/* 

Library Array

Book Object:
	Title
	Author
	Description
	Pages
	Read Status

Loop Function
	Display Books
	Update library display

New Book Function

Delete Book Function

Book Info Expand Function

*/


let library = []

// can i create a chain function for pages, 
// redStatus and description? 
function Book(name, author) {
	this.name = {
		value: name,
		element: createEntryElement("book-entry-info-title")
	},
	this.author = {
		value: author,
		element: createEntryElement("book-entry-info-author")
	},
	this.pages = {
		value: undefined,
		element: createEntryElement("book-entry-info-pages")
	},
	this.readStatus = {
		value: undefined,
		element: createEntryElement("book-entry-info-readstatus")
	},
	this.description = {
		value: undefined,
		element: createEntryElement("book-entry-info-description")
	},
	this.setPages = (pages) => {
		this.pages = pages
	}
	this.SetReadStatus = (status) => {
		this.readStatus = status
	}
	this.SetDescription = (description) => {
		this.description = description
	},
	this.entryContainer = createEntryElement("book-entry")
	this.entryInfoContainer = createEntryElement("book-entry-info")
	this.entryIcon = {
		element: createEntryElement("book-entry-icon"),
		img: document.createElement("img")
	}
}



let bookArea = document.getElementById("book-area")

function refreshLibrary() {
	bookArea.innerHTML = ""

	for (const [index, book] of library.entries()) {
		console.log(index + ": " + book.name + " by " + book.author)

		appendEntryElements(bookArea, book.entryContainer)
		appendEntryElements(book.entryContainer, book.entryIcon.element, book.entryInfoContainer, book.description.element, book.readStatus.element)

		appendEntryElements(book.entryInfoContainer, book.name.value, book.author.value, book.pages.value)
		appendEntryElements(book.entryIcon.element, book.entryIcon.img)

		book.name.element.textContent = book.name
		book.author.element.textContent = book.author
		book.pages.value.textContent = book.pages
		book.description.element.textContent = book.description
		book.readStatus.element.textContent = book.readStatus ? "Read" : "Unread"
	}
}

function createEntryElement (className) {
	const element = document.createElement("div")
	element.classList.add(className)
	return element
}

function appendEntryElements (target, ...elements) {
	for (const e of elements) {
		target.appendChild(e)
	}
}

function deleteBook (index) {
	library.splice(index, index)
}

let addBookDialog = document.getElementById("add-book-dialog")

function showDialogue () {
	addBookDialog.showModal()
}

let inputBookTitle = document.getElementById("add-book-dialog-title")
let inputBookAuthor = document.getElementById("add-book-dialog-author")
let inputBookPages = document.getElementById("add-book-dialog-pages")
let inputBookDescription = document.getElementById("add-book-dialog-description")
let inputBookReadStatus = document.getElementById("add-book-dialog-readstatus") 
inputBookReadStatus.checked = false;
let inputAddButton = document.getElementById("add-book-dialog-button")

inputAddButton.addEventListener("click", (e) => {
	e.preventDefault()
})

// more parameters?
function addDefaultBook (name, author) {
	let newBook = new Book(name, author)
	library.push(newBook)
}

function inputAddBook () {
	let newBook = new Book(inputBookAuthor.value, inputBookPages.value)
	newBook.pages = inputBookPages.value
	newBook.description = inputBookDescription.value
	newBook.readStatus = inputBookReadStatus.checked // .value is not related to whether the box is checked. .checked is
	library.push(newBook)
	refreshLibrary()
	addBookDialog.close()
}

// for a possible color change function
Number(12).toString(16)
// converts the number 12 to its hexadecimal representation

addDefaultBook("Le Miserable", "Hugo Boss")
library[0].SetDescription("This is the description for the miserables")
library[0].setPages(2000)
library[0].SetReadStatus(true)
addDefaultBook("There and Back Again", "Bilbo Baggins")
addDefaultBook("The Necronomicon", "Bruce Campbell")

