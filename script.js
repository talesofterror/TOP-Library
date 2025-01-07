"use strict"

console.log("hi")

let library = []
let bookArea = document.getElementById("book-area")

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
		element: createEntryElement("book-entry-info-pages"),
		value: undefined
	},
	this.description = {
		element: createEntryElement("book-entry-description"),
		value: undefined
	},
	this.readStatus = {
		element: createEntryElement("book-entry-readstatus"),
		value: undefined,
	},
	this.entryIcon = {
		element: createEntryElement("book-entry-icon"),
		img: document.createElement("img")
	},

	this.entryContainer = createEntryElement("book-entry"),
	this.entryInfoContainer = createEntryElement("book-entry-info")

}

function refreshLibrary() {
	bookArea.innerHTML = ""

	for (const [index, book] of library.entries()) {
		console.log(index + ": " + book.name.value + " by " + book.author.value)

		appendEntryElements(bookArea, book.entryContainer)

		appendEntryElements(
			document.querySelectorAll(".book-entry")[index], 
				book.entryIcon.element, 
				book.entryInfoContainer, 
				book.description.element, 
				book.readStatus.element
		)

		appendEntryElements(book.entryIcon.element, book.entryIcon.img)

		appendEntryElements(book.entryInfoContainer, 
			book.name.element, 
			book.author.element, 
			book.pages.element
		)

		book.name.element.textContent = book.name.value
		book.author.element.textContent = book.author.value
		book.pages.element.textContent = book.pages.value
		book.description.element.textContent = book.description.value
		book.readStatus.element.textContent = book.readStatus.value ? "Read" : "Unread"
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
	newBook.pages.value = 100
	newBook.description.value = "Default book description"
	newBook.readStatus.value = true
	library.push(newBook)
}

function inputAddBook () {
	let newBook = new Book(inputBookTitle.value, inputBookAuthor.value)
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


