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

function Book(name, author) {
	this.name = name
	this.author = author
	this.pages = undefined
	this.readStatus = undefined
	this.description = undefined
}

function addBook (name, author) {
	let newBook = new Book(name, author)
	library.push(newBook)
}

addBook("Le Miserable", "Hugo Boss")
addBook("There and Back Again", "Bilbo Baggins")
addBook("The Necronomicon", "Bruce Campbell")

function deleteBook (index) {
	library.splice(index, index)
}

function refreshLibrary() {
	for (const [index, book] of library.entries()) {
		console.log(index + ": " + book.name + " by " + book.author)
	}
}
