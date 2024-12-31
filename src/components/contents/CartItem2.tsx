import { useEffect, useState } from 'react';
import BookCover from '../../assets/images/book_cover.png';
import CaretDownIcon from '../icons/CaretDownIcon';
import CaretUpIcon from '../icons/CaretUpIcon';
import TrashIcon from '../icons/TrashIcon';
import { CartBookType } from '../methods/methods';

const CartItem: React.FC<{ bookID: string }> = ({ bookID }) => {
    const [books, setBooks] = useState<CartBookType[]>([]);
    const [book, setBook] = useState<CartBookType | null>(null);
    const [bookAmount, setBookAmount] = useState<number>(1);

    useEffect(() => {
        const booksString = localStorage.getItem('books');
        if (booksString) {
            const booksArray = JSON.parse(booksString);
            setBooks(booksArray);
            const foundBook = booksArray.find(
                (item: CartBookType) => item.bookID === bookID
            );
            if (foundBook) {
                setBook(foundBook);
                setBookAmount(foundBook.bookAmount); // Initialize local amount state
            }
        }
    }, [bookID]);

    const handleClick = (action: 'increase' | 'decrease') => {
        if (action === 'increase') {
            setBookAmount((prev) => prev + 1);
        } else if (action === 'decrease' && bookAmount > 1) {
            setBookAmount((prev) => prev - 1);
        }
    };

    useEffect(() => {
        if (book) {
            const updatedBooks = books.map((item) =>
                item.bookID === bookID ? { ...item, bookAmount } : item
            );
            setBooks(updatedBooks);
            localStorage.setItem('books', JSON.stringify(updatedBooks));
            console.log(updatedBooks);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bookAmount]);

    return (
        <div className='flex flex-col w-56 rounded-sm overflow-hidden'>
            <div className='flex gap-5 w-full h-full justify-between'>
                <div className='item-image'>
                    <img
                        src={BookCover}
                        className='h-full'
                        alt='book image'
                        title='book image'
                    />
                </div>
                <div className='info flex flex-col justify-between'>
                    <div className='flex flex-col items-center gap-3 border border-gray-300/80 rounded-sm p-2'>
                        <button
                            className='caret-button up'
                            onClick={() => handleClick('increase')}
                        >
                            <CaretUpIcon width={11} height={11} />
                        </button>
                        <p className='text-center'>{bookAmount}</p>
                        <div className='flex flex-col gap-5 items-center'>
                            <button
                                className='caret-button down'
                                onClick={() => handleClick('decrease')}
                            >
                                <CaretDownIcon width={11} height={11} />
                            </button>
                            <button className='caret-button down opacity-65'>
                                <TrashIcon width={15} height={15} />
                            </button>
                        </div>
                    </div>
                    {/* <div className='price flex justify-center border border-gray-300/80 p-1'> */}
                    <div className='price flex justify-center'>
                        <h5 className='font-semibold text-primary'>
                            {book?.bookPrice}
                        </h5>
                    </div>
                </div>
            </div>
            {/* <button className='text-sm rounded-md border-t-0 border border-main text-main py-2'>
                <span>Remove</span>
            </button> */}
        </div>
    );
};

export default CartItem;
