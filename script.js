document.getElementById('newBookBtn').addEventListener('click', openModal);

function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function addBook() {
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked ? 'Yes' : 'No';

    const tableBody = document.getElementById('libraryBody');
    const newRow = tableBody.insertRow(-1);

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.innerHTML = author;
    cell2.innerHTML = title;
    cell3.innerHTML = pages;
    cell4.innerHTML = read;

    closeModal();
}

