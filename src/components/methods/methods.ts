export interface CartBookType {
    bookID: string;
    bookAmount: number;
    bookImage: string;
    bookPrice: number;
}

export const addToCart = (
    bookID: string,
    bookAmount: number,
    bookImage: string,
    bookPrice: number
): void => {
    const book: CartBookType = {
        bookID,
        bookAmount,
        bookImage,
        bookPrice,
    };

    let books: CartBookType[];

    // check status of local storage (empty or filled)
    const getBooks: string | null = localStorage.getItem('books');
    if (getBooks) {
        books = JSON.parse(getBooks);
    } else {
        books = [];
    }

    // check if book exists and add
    const checkBook = books.find((item) => item.bookID === bookID);
    if (checkBook) {
        books = books.map((item) =>
            item.bookID === bookID
                ? { ...item, bookAmount: item.bookAmount + 1 }
                : item
        );
    } else {
        books.push(book);
    }

    // turn books json to string
    const addBook: string = JSON.stringify(books);

    // add to local storage
    localStorage.setItem('books', addBook);

    // console.log(books);
};
