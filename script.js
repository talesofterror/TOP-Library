
const Library = (function () {
	console.log("hello from the module")

	let library = []
	let bookArea = document.getElementById("book-area")
	let addBookDialog = document.getElementById("add-book-dialog")
	let inputAddButton = document.getElementById("add-book-dialog-button")

	let inputForm = document.getElementById("add-book-form")
	let inputBookTitle = document.getElementById("add-book-dialog-title")
	let inputBookAuthor = document.getElementById("add-book-dialog-author")
	let inputBookPages = document.getElementById("add-book-dialog-pages")
	let inputBookDescription = document.getElementById("add-book-dialog-description")
	let inputBookReadStatus = document.getElementById("add-book-dialog-readstatus") 
	inputBookReadStatus.checked = false;
	
	function refreshLibrary() {
		bookArea.innerHTML = ""

		for (const [index, book] of library.entries()) {
			console.log(index + ": " + book.name.value + " by " + book.author.value)

			Book.appendEntryElements(bookArea, book.entryContainer)

			Book.appendEntryElements(
				document.querySelectorAll(".book-entry")[index], 
					book.entryIcon.element, 
					book.entryInfoContainer, 
					book.description.element, 
					book.readStatus.element,
					book.entryDeleteButton
			)
			
			Book.appendEntryElements(book.entryIcon.element, book.entryIcon.img)
			book.entryIcon.img.src = "assets/BookClosed.svg"

			Book.appendEntryElements(book.entryInfoContainer, 
				book.name.element, 
				book.author.element, 
				book.pages.element
			)

			Book.addListeners(book)

			book.name.element.textContent = book.name.value
			book.author.element.textContent = book.author.value
			book.pages.element.textContent = book.pages.value + " pages"
			book.description.element.textContent = book.description.value
			book.readStatus.element.textContent = book.readStatus.value ? "Read" : "Unread"
			book.entryDeleteButton.textContent = "[delete]"
			book.index = index
		}
	}

	inputAddButton.addEventListener("click", (e) => {
		e.preventDefault()
	})

	addBookDialog.addEventListener("click", (e)=>{
		console.log(e.target)
		if (e.target == addBookDialog) addBookDialog.close()
	})

	function showDialogue () {
		addBookDialog.showModal()
	}

	function inputAddBook () {
		let newBook = new Book(inputBookTitle.value, inputBookAuthor.value)
		newBook.pages.value = inputBookPages.value
		newBook.description.value = inputBookDescription.value
		newBook.readStatus.value = inputBookReadStatus.checked
		library.push(newBook)
		refreshLibrary()
		inputForm.reset()
		addBookDialog.close()
	}

	function addDefaultBook (name, author, pages, description, readStatus) {
		let newBook = new Book(name, author)
		newBook.pages.value = pages
		newBook.description.value = description
		newBook.readStatus.value = readStatus
		library.push(newBook)
	}

	function deleteBook (index) {
		library.splice(index, 1)
		refreshLibrary()
	}

	return {
		refreshLibrary, showDialogue, inputAddBook, addDefaultBook, deleteBook
	}

})()

class Book {

	constructor (_name, _author) {
		this.name.value = _name
		this.author.value = _author
	}

	name = {
		element: this.constructor.createEntryElement("book-entry-info-title")	
	}
	author = {
		element: this.constructor.createEntryElement("book-entry-info-author")
	}
	pages = {
		element: this.constructor.createEntryElement("book-entry-info-pages"),
		value: undefined
	}
	description = {
		element: this.constructor.createEntryElement("book-entry-description"),
		value: undefined
	}
	readStatus = {
		element: this.constructor.createEntryElement("book-entry-readstatus"),
		value: undefined,
	}
	entryIcon = {
		element: this.constructor.createEntryElement("book-entry-icon"),
		img: document.createElement("img")
	}

	entryContainer = this.constructor.createEntryElement("book-entry")
	entryInfoContainer = this.constructor.createEntryElement("book-entry-info")
	entryDeleteButton = this.constructor.createEntryElement("book-entry-delete")
	listenersAdded = false
	index = 0

	static addListeners (book) {
		if (!book.listenersAdded) {
			book.listenersAdded = true
			book.entryDeleteButton.addEventListener("click", ()=> Library.deleteBook(book.index))
			book.entryContainer.addEventListener("mouseover", ()=> {
				book.entryDeleteButton.style.display = "block"
				book.entryIcon.img.src = "assets/BookOpen.svg"
			})
			book.entryContainer.addEventListener("mouseout", ()=> {
				book.entryDeleteButton.style.display = "none"
				book.entryIcon.img.src = "assets/BookClosed.svg"
			})
		}
	}

	static createEntryElement (className) {
		const element = document.createElement("div")
		element.classList.add(className)
		return element
	}

	static appendEntryElements (target, ...elements) {
		for (const e of elements) {
			target.appendChild(e)
		}
	}
}

Library.addDefaultBook(
	"Elric of Melnibone"
	, "Michael Moorcock"
	, 752
	, "Sword and sorcery with horror elements. Protagonist is a brooding king fighting to rise above the fascist brutality of his traditional culture."
	, false)
Library.addDefaultBook(
	"Doom Guy"
	, "John Romero"
	, 384
	, "Autobiography by the famed iD Software founder. Covers his life and games, from Commander Keen to Daikatana and then some."
	, true)
Library.addDefaultBook(
	"Dune"
	, "Frank Herbert"
	, 412
	, "Extended and convoluted emperialism metaphor with some orientalism thrown in. Kind of slow tbh."
	, true)
Library.addDefaultBook(
	"Radio Free Albemuth"
	, "Phillip K. Dick"
	, 214
	, "Subversive paranoia with a gnostic subtext. The pro-communist aliens communicate through records. I should reread it."
	, true)
Library.addDefaultBook(
	"Dhalgren"
	, "Samuel Delaney"
	, 874
	, "Something about a pocket of warped reality engulfing a town in California. Communications are cut off and holographic gangs roam the streets."
	, false)

Library.refreshLibrary()
