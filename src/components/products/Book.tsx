import { Link } from 'react-router-dom';
import { BookCoverType } from '../../pages/Books';
// import { addToCart } from '../methods/methods';
import { formatString } from '../functions/functions';
import PlusIcon from '../icons/PlusIcon';
import { useStore } from '../../store';
const Book: React.FC<BookCoverType> = ({ id, title, price, image }) => {
    const addToCart = useStore((store) => store.cart.addToCart);

    const stringId = formatString(title);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        addToCart(id, 1, image, price);
    };
    return (
        <div className='w-[130px] h-[190px] sm:w-[150px] bg-[#edebf0] rounded-md hover:scale-105 transition-transform duration-200 cursor-pointer'>
            <Link to={`/bstore/book/${stringId}`}>
                <div className='flex flex-col gap-1 justify-between items-center cursor-pointer w-full h-full'>
                    <img
                        src={image}
                        className='w-[120px] sm:w-[130px] h-[150px] object-cover object-center'
                    />
                    <div className='w-full grid grid-cols-3 items-center py-1 px-2'>
                        <p className='text-[12px] opacity-80 text-center truncate w-full col-span-2'>
                            {title}
                        </p>
                        <button
                            className='ml-auto bg-main text-secondary w-6 h-6 rounded-full flex justify-center items-center transition-all hover:opacity-85'
                            onClick={handleClick}
                        >
                            <PlusIcon width={12} height={12} />
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;
