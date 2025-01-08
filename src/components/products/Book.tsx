import { Link } from 'react-router-dom';
// import BookCover from '../../assets/images/book_cover.png';
import { BookCoverType } from '../../pages/Books';
import { addToCart } from '../methods/methods';
const Book: React.FC<BookCoverType> = ({ _id, title, price, image }) => {
    return (
        <div className='w-[175px] h-[300px] sm:w-[215px] bg-[#edebf0] rounded-md flex flex-col gap-1 justify-center items-center hover:scale-105 transition-transform duration-200 cursor-pointer'>
            <Link to={`/bstore/book/${_id}`} className='w-full'>
                <div className='flex flex-col gap-1 justify-center items-center cursor-pointer w-full'>
                    {/* <img src={BookCover} className='w-[120px] sm:w-[130px]' /> */}
                    <img
                        // src={navigator.onLine ? image : BookCover}
                        src={image}
                        className='w-[120px] sm:w-[130px]'
                    />
                    <p className='text-[14px] text-center truncate w-3/5'>
                        {title}
                    </p>
                    <h5 className='text-sm font-semibold text-primary'>
                        {price}
                    </h5>
                </div>
            </Link>
            <button
                className='btn-hover w-[107px] h-[31px] bg-main text-secondary rounded-[5px] text-sm'
                onClick={() => addToCart(_id, 1, image, price)}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default Book;
