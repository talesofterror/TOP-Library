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

	this.entryContainer = createEntryElement("book-entry"),
	this.entryInfoContainer = createEntryElement("book-entry-info"),
	this.entryInfoName = createEntryElement("book-entry-info-title"),
	this.entryInfoAuthor = createEntryElement("book-entry-info-author"),
	this.entryInfoPages = createEntryElement("book-entry-info-pages"),
	this.entryDescription = createEntryElement("book-entry-description"),
	this.entryReadStatus = createEntryElement("book-entry-readstatus"),

	this.name = {
		value: name,
		element: this.entryInfoName
	},
	this.author = {
		value: author,
		element: createEntryElement("book-entry-info-author")
	},
	this.pages = {
		element: createEntryElement("book-entry-info-pages"),
		value: undefined
	},
	this.description = {
		element: this.entryDescription,
		value: undefined
	},
	this.readStatus = {
		value: undefined,
		element: createEntryElement("book-entry-readstatus")
	},
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
		appendEntryElements(
			document.querySelectorAll(".book-entry")[index], 
				book.entryIcon.element, 
				book.entryInfoContainer, 
				book.description.element, 
				book.readStatus.element)

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
	newBook.pages = 100
	newBook.description = "Default book description"
	newBook.readStatus = true
	library.push(newBook)
}

function inputAddBook () {
	let newBook = new Book(inputBookAuthor.value, inputBookPages.value)
	newBook.pages.value = inputBookPages.value
	newBook.description.value = inputBookDescription.value
	newBook.readStatus.value = inputBookReadStatus.checked // .value is not related to whether the box is checked. .checked is
	library.push(newBook)
	refreshLibrary()
	addBookDialog.close()
}

// for a possible color change function
Number(12).toString(16)
// converts the number 12 to its hexadecimal representation

addDefaultBook("Le Miserable", "Hugo Boss")
addDefaultBook("There and Back Again", "Bilbo Baggins")
addDefaultBook("The Necronomicon", "Bruce Campbell")

