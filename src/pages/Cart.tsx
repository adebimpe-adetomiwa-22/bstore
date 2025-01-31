import { useEffect, useState } from 'react';
import CartItem from '../components/contents/CartItem';
import { CartBookType } from '../components/methods/methods';
import { useStore } from '../store';
import { Link } from 'react-router-dom';
const Cart = () => {
    const [books, setBooks] = useState<CartBookType[] | null>(null);
    const [fixedPage, setFixedPage] = useState<boolean>(false);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const updateCart = useStore((store) => store.cart.updateCart);

    const fetchBooks = (): void => {
        const booksString: string | null = localStorage.getItem('cart');
        let books: CartBookType[];
        if (booksString) {
            books = JSON.parse(booksString);
        } else {
            books = [];
        }
        setBooks(books);
    };
    // const updateBooks = (): void => {
    //     if (books) {
    //         localStorage.setItem('cart', JSON.stringify(books));
    //     }
    // };

    useEffect(() => {
        window.addEventListener('scroll', () =>
            scrollY > 100 ? setFixedPage(true) : setFixedPage(false)
        );
    }, []);

    useEffect(() => {
        fetchBooks();
    }, []);
    useEffect(() => {
        if (!books) return;
        if (books.length > 0) {
            const prices = books.map(
                (book) => book.bookPrice * book.bookAmount
            );
            const total = prices.reduce((acc, curr) => acc + curr);
            setTotalPrice(Math.round(total * 100) / 100);
        } else {
            setTotalPrice((0 * 100) / 100);
        }

        // update booksb
        // updateBooks();
        updateCart(books);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [books]);

    // cart items
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const increase = (bookID: string, _bookAmount: number): void => {
        // console.log('increase');
        // console.log(bookID, bookAmount);

        setBooks(
            (prevBooks) =>
                prevBooks &&
                prevBooks.map((prevBook) =>
                    prevBook.bookID === bookID
                        ? {
                              ...prevBook,
                              bookAmount: prevBook.bookAmount + 1,
                          }
                        : prevBook
                )
        );
    };
    const decrease = (bookID: string, bookAmount: number): void => {
        // console.log('decrease');
        // console.log(bookID, bookAmount);
        if (bookAmount > 1) {
            setBooks(
                (prevBooks) =>
                    prevBooks &&
                    prevBooks.map((prevBook) =>
                        prevBook.bookID === bookID
                            ? {
                                  ...prevBook,
                                  bookAmount: prevBook.bookAmount - 1,
                              }
                            : prevBook
                    )
            );
        } else {
            deleteBook(bookID, bookAmount);
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const deleteBook = (bookID: string, _bookAmount: number): void => {
        setBooks(
            (prevBooks) =>
                prevBooks &&
                prevBooks.filter((prevBook) => prevBook.bookID !== bookID)
        );
    };

    // useEffect(() => {
    //     console.log(books);
    // }, []);

    return (
        <div>
            <div className='container max-w-[900px]'>
                <div className='border-b border-primary border-opacity-25 py-2 flex justify-between items-center'>
                    <h2 className=' text-sm text-primary'>Your books</h2>
                    <h1
                        className={
                            'text-primary text-lg font-semibold transition-all ' +
                            (fixedPage
                                ? 'fixed top-5 right-5 bg-primary text-secondary p-1 rounded-md text-sm'
                                : '')
                        }
                    >
                        $ {totalPrice}
                    </h1>
                </div>
                <div className='items mt-7 flex flex-wrap gap-6 justify-center lg:justify-center md:gap-12 p-2 w-full'>
                    {books && books.length <= 0 ? (
                        <div>
                            <p className='text-sm'>You have no books to read</p>
                        </div>
                    ) : (
                        books?.map((book) => (
                            // <CartItem  />
                            <CartItem
                                key={book.bookID}
                                {...book}
                                increase={increase}
                                decrease={decrease}
                                deleteBook={deleteBook}
                            />
                        ))
                    )}
                </div>

                {books && books.length <= 0 ? (
                    <div className='text-sm flex justify-center items-center mt-7'>
                        <Link to={'/bstore/books'}>
                            <button className='bg-main text-secondary py-1 px-2 rounded-md transition-all animate-bounce hover:opacity-85 hover:animate-none'>
                                Add books
                            </button>
                        </Link>
                    </div>
                ) : (
                    <div className='checkout text-sm'>
                        <h5>Checkout</h5>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;

// cart or checkout page
