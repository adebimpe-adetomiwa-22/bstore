// const [books, setBooks] = useState<CartBookType[]>([]);
// const [book, setBook] = useState<CartBookType | null>(null);

// // functions
// const handleClick = (action: 'increase' | 'decrease'): void => {
//     switch (action) {
//         case 'increase':
//             console.log(action);
//             if (book) {
//                 setBook({ ...book, bookAmount: book.bookAmount + 1 });
//             }
//             break;

//         case 'decrease':
//             console.log(action);
//             if (book && book.bookAmount > 1) {
//                 setBook({ ...book, bookAmount: book.bookAmount - 1 });
//             }
//             break;
//         default:
//             console.log(`Unknow action: ${action}`);
//     }
// };

// const fetchBooks = (): void => {
//     const booksString: string | null = localStorage.getItem('books');
//     if (booksString) {
//         setBooks(JSON.parse(booksString));
//     }
// };

// const fetchBook = (): void => {
//     if (books) {
//         const bookData = books.find((item) => item.bookID === bookID);
//         if (bookData) {
//             setBook(bookData);
//         }
//     }
// };

// const updateBook = (): void => {
//     if (books && book) {
//         const newBook: CartBookType[] = books.map((item) =>
//             item.bookID === book.bookID ? book : item
//         );
//         localStorage.setItem('books', JSON.stringify(newBook));
//         console.log(newBook);
//     }
// };

// // use effects

// useEffect(() => {
//     fetchBooks();
// }, [bookID]);

// useEffect(() => {
//     fetchBook();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [books]);

// useEffect(() => {
//     if (book) {
//         updateBook();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [book]);
