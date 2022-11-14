class Book {
    constructor(title,author,category) {
        this.title = title;
        this.author = author;
        this.category = category;
    }
}

let btn = document.getElementById('submit');

let books = [];

function submitForm(event) {
    event.preventDefault();
    
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let category = document.getElementById('category').value;

    let book = new Book(title,author,category);

    books.push(book);

    let elementol = document.createElement('ol');

    function addElement() {
        
        let elementTitle = document.createElement('li');
        let elementAuthor = document.createElement('li');
        let elementCategory = document.createElement('li');

        let titleContent = document.createTextNode("Title: " + books[books.length-1].title);
        let authorContent = document.createTextNode("Author: " + books[books.length-1].author);
        let categoryContent = document.createTextNode("Category: " + books[books.length-1].category);
        
           
        elementTitle.appendChild(titleContent);
        elementAuthor.appendChild(authorContent);
        elementCategory.appendChild(categoryContent);
    
        elementol.appendChild(elementTitle);
        elementol.appendChild(elementAuthor);
        elementol.appendChild(elementCategory);
    
        document.querySelector('.container').appendChild(elementol);
    }  

    addElement();
      
}
btn.addEventListener('click',submitForm);
