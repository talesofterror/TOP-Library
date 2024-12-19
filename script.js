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
		return this
	}
	this.SetReadStatus = (status) => {
		this.readStatus = status
		return this
	}
	this.SetDescription = (description) => {
		this.description = description
		return this
	}
}

// more parameters?
function addBook (name, author) {
	let newBook = new Book(name, author)
	library.push(newBook)
}

addBook("Le Miserable", "Hugo Boss")
library[0].SetDescription("This is the description for the miserables")
library[0].setPages(2000)
library[0].SetReadStatus(true)
addBook("There and Back Again", "Bilbo Baggins")
addBook("The Necronomicon", "Bruce Campbell")

const bookArea = document.getElementById("book-area")

function refreshLibrary() {
	bookArea.innerHTML = "";

	for (const [index, book] of library.entries()) {
		console.log(index + ": " + book.name + " by " + book.author)

		const entry = document.createElement("div")
		entry.classList.add("book-entry")
		bookArea.appendChild(entry)

		const entryInfo = document.createElement("div")
		entryInfo.classList.add("book-entry-info")
		entry.appendChild(entryInfo)

		const entryTitle = document.createElement("div")
		const entryAuthor = document.createElement("div")
		const entryPages = document.createElement("div")
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

let addBookDialogue = document.getElementById("add-book-dialog")

function showDialogue () {
	addBookDialogue.showModal()
}

// for a possible color change function
Number(12).toString(16)
// converts the number 12 to its hexadecimal representation


