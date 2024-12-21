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
	this.name = name
	this.author = author
	this.pages = undefined
	this.readStatus = undefined
	this.description = undefined
	this.setPages = (pages) => {
		this.pages = pages
	}
	this.SetReadStatus = (status) => {
		this.readStatus = status
	}
	this.SetDescription = (description) => {
		this.description = description
	}
}


let bookArea = document.getElementById("book-area")

function refreshLibrary() {
	bookArea.innerHTML = ""

	for (const [index, book] of library.entries()) {
		console.log(index + ": " + book.name + " by " + book.author)

		let entry = createEntryElement("book-entry")
		let entryIcon = createEntryElement("book-entry-icon")
		let entryInfo = createEntryElement("book-entry-info")
		let entryDescription = createEntryElement("book-entry-description")
		let entryReadStatus = createEntryElement("book-entry-readstatus")

		appendEntryElements(bookArea, entry)
		appendEntryElements(entry, entryIcon, entryInfo, entryDescription, entryReadStatus)

		let entryInfoTitle = createEntryElement("book-entry-info-title")
		let entryInfoAuthor = createEntryElement("book-entry-info-author")
		let entryInfoPages = createEntryElement("book-entry-info-pages")
		appendEntryElements(entryInfo, entryInfoTitle, entryInfoAuthor, entryInfoPages)

		entryInfoTitle.textContent = book.name
		entryInfoAuthor.textContent = book.author
		entryInfoPages.textContent = book.pages
		entryDescription.textContent = book.description
		entryReadStatus.textContent = book.readStatus ? "Read" : "Unread"

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
inputBookReadStatus.value = false;
let inputAddButton = document.getElementById("add-book-dialog-button")

inputAddButton.addEventListener("click", (e) => {
	e.preventDefault()
})

// more parameters?
function addBook (name, author) {
	let newBook = new Book(name, author)
	library.push(newBook)
}

function inputAddBook () {
	let newBook = new Book(inputBookTitle.value, inputBookAuthor.value)
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

addBook("Le Miserable", "Hugo Boss")
library[0].SetDescription("This is the description for the miserables")
library[0].setPages(2000)
library[0].SetReadStatus(true)
addBook("There and Back Again", "Bilbo Baggins")
addBook("The Necronomicon", "Bruce Campbell")

