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

// Create entry html element in the function below?
function refreshLibrary() {
	for (const [index, book] of library.entries()) {
		console.log(index + ": " + book.name + " by " + book.author)
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


