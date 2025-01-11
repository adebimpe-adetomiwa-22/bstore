import BookCover from '../../assets/images/book_cover.png';
import CaretDownIcon from '../icons/CaretDownIcon';
import CaretUpIcon from '../icons/CaretUpIcon';
import TrashIcon from '../icons/TrashIcon';
import { CartBookType } from '../methods/methods';

const CartItem: React.FC<
    CartBookType & {
        increase: (bookID: string, bookAmount: number) => void;
        decrease: (bookID: string, bookAmount: number) => void;
        deleteBook: (bookID: string, bookAmount: number) => void;
    }
> = ({
    bookID,
    bookAmount,
    bookPrice,
    bookImage,
    increase,
    decrease,
    deleteBook,
}) => {
    return (
        <div className='flex flex-col w-32 sm:w-40 md:w-52 rounded-sm overflow-hidden h-32 sm:h-auto'>
            <div className='flex gap-5 w-full h-full justify-between'>
                <div className='item-image'>
                    <img
                        src={bookImage || BookCover}
                        className='h-full object-cover object-center'
                        alt='book image'
                        title='book image'
                    />
                </div>
                <div className='info flex flex-col justify-between text-[12px] md:text-[14px]'>
                    <div className='flex flex-col items-center gap-1 sm:gap-3 border border-gray-300/80 rounded-sm p-2 h-[80%] sm:h-auto'>
                        <button
                            id='increase'
                            className='caret-button up'
                            onClick={() => increase(bookID, bookAmount)}
                        >
                            <CaretUpIcon />
                        </button>
                        <p className='text-center'>{bookAmount}</p>
                        <div className='flex flex-col gap-1.5 sm:gap-5 items-center'>
                            <button
                                className='caret-button down'
                                onClick={() => decrease(bookID, bookAmount)}
                            >
                                <CaretDownIcon />
                            </button>
                            <button
                                className='caret-button down opacity-65 text-[10px] sm:text-[15px]'
                                onClick={() => deleteBook(bookID, bookAmount)}
                            >
                                <TrashIcon />
                            </button>
                        </div>
                    </div>
                    {/* <div className='price flex justify-center border border-gray-300/80 p-1'> */}
                    <div className='price flex justify-center'>
                        <h5 className='font-semibold text-primary sm:text-base'>
                            {(bookPrice * bookAmount).toFixed(2)}
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
