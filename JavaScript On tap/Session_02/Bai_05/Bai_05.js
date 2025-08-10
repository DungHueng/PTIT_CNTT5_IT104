let phoneBooks = [];

function addContact() {
    let Name = prompt("Nhap ten: ");
    let PhoneNumbers = prompt("Nhap so dien thoai: ");
    let Email = prompt("Nhap email: ");
    let phoneBook = {
        Name: Name,
        Phone: PhoneNumbers,
        Email: Email
    };
    phoneBooks.push(phoneBook);
}

function showContacts() {
    for (let i = 0; i < phoneBooks.length; i++) {
        console.log(`Ten: ${phoneBooks[i].Name}, SDT: ${phoneBooks[i].Phone}, Email: ${phoneBooks[i].Email}`);
    }
}
addContact();
showContacts();