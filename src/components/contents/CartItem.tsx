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
        <div className='flex flex-col w-56 rounded-sm overflow-hidden'>
            <div className='flex gap-5 w-full h-full justify-between'>
                <div className='item-image'>
                    <img
                        src={bookImage || BookCover}
                        className='h-full'
                        alt='book image'
                        title='book image'
                    />
                </div>
                <div className='info flex flex-col justify-between'>
                    <div className='flex flex-col items-center gap-3 border border-gray-300/80 rounded-sm p-2'>
                        <button
                            className='caret-button up'
                            onClick={() => increase(bookID, bookAmount)}
                        >
                            <CaretUpIcon width={11} height={11} />
                        </button>
                        <p className='text-center'>{bookAmount}</p>
                        <div className='flex flex-col gap-5 items-center'>
                            <button
                                className='caret-button down'
                                onClick={() => decrease(bookID, bookAmount)}
                            >
                                <CaretDownIcon width={11} height={11} />
                            </button>
                            <button
                                className='caret-button down opacity-65'
                                onClick={() => deleteBook(bookID, bookAmount)}
                            >
                                <TrashIcon width={15} height={15} />
                            </button>
                        </div>
                    </div>
                    {/* <div className='price flex justify-center border border-gray-300/80 p-1'> */}
                    <div className='price flex justify-center'>
                        <h5 className='font-semibold text-primary'>
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
