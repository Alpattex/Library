function createBook(title, author, pages, read) {
    const book = document.createElement('div');
    book.classList.add('book');

    const authorSection = createSection('Author', author);
    const titleSection = createSection('Title', title);
    const pagesSection = createSection('Pages', pages);
    const statusSection = createSection('Status', read ? 'Read' : 'Not Read');

    [authorSection, titleSection, pagesSection, statusSection].forEach(section => book.appendChild(section));

    return book;
}

function createSection(label, content) {
    const section = document.createElement('p');
    section.textContent = `${label}: ${content}`;
    return section;
}

newBookBtn.addEventListener('click', function () {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const form = document.createElement('form');
    form.innerHTML = `
        <label for="title">Title:</label>
        <input type="text" id="title" required>

        <label for="author">Author:</label>
        <input type="text" id="author" required>

        <label for="pages">Pages:</label>
        <input type="number" id="pages" required>

        <label for="read">Have you read it?</label>
        <input type="checkbox" id="read">

        <button type="submit">Add Book</button>
    `;

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const read = document.getElementById('read').checked;

        if (title && author && pages) {
            const newBook = createBook(title, author, pages, read);
            bookList.appendChild(newBook);
            modal.remove();
        }
    });

    modal.appendChild(form);
    document.body.appendChild(modal);
});

window.addEventListener('resize', function () {
});