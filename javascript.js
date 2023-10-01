document.addEventListener('DOMContentLoaded', function () {
    const newBookBtn = document.getElementById('newBookBtn');
    const bookList = document.getElementById('bookList');

    newBookBtn.addEventListener('click', function () {
        const title = prompt('Enter book title:');
        const author = prompt('Enter author:');
        const pages = prompt('Enter number of pages:');
        const read = confirm('Have you read this book?');

        if (title && author && pages) {
            const book = createBook(title, author, pages, read);
            bookList.appendChild(book);
        }
    });

    