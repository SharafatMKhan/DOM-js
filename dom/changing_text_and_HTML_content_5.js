var books = document.querySelectorAll("#book-list li .name");
// console.log(books);

// //To replace the content
// Array.from(books).forEach(function(book){
//     // console.log(book.textContent);
//     book.textContent = 'hello world';
// })

//To append in it

// Array.from(books).forEach(function(book){
//     // console.log(book.textContent);
//     book.textContent += '(Book title)';
// })

//Changing the content 

const booklist = document.querySelector('#book-list');
// console.log(booklist);
booklist.innerHTML = '<h2>Hello World<h2>';
booklist.innerHTML += '<p> This is how you attach inner html<p>';