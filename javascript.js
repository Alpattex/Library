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

    function createBook(title, author, pages, read) {
        const book = document.createElement('div');
        book.classList.add('book');

        const bookInfo = document.createElement('p');
        bookInfo.textContent = `${title} by ${author}\n${pages} pages`;

        const readStatus = document.createElement('p');
        readStatus.textContent = read ? 'Read' : 'Not Read';
        readStatus.style.color = read ? '#27AE60' : '#E74C3C';

        book.appendChild(bookInfo);
        book.appendChild(readStatus);

        return book;
    }
});

