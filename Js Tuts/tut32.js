console.log('its tutorial 32.js');

class Library{
    constructor(bookName, userName, issueDate, returnDate){
        this.bookname = bookName;
    }

    getBookList(){
        let books = `${this.bookname}`;
        return books;
    }

    issueBook(){
        let bookname = `${this.bookName}`
        let username = `${this.userName}`;
        let issuedate = `${this.issueDate}`;
        return issuedate;
    }

    returnBook(){
        let username = `${this.userName}`;
        let returnDate = `${this.returnDate}`; 
        return returnDate; 
    }

}

let libraryObj = new Library('Digital Systems', 'Nilam' , '5-12-2021', '10-12-2021');
console.log(libraryObj);