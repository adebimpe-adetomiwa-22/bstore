import { Link, useParams } from 'react-router-dom';
import StarIcon from '../components/icons/StarIcon';
import CartIcon2 from '../components/icons/CartIcon2';
import { BookCoverType } from './Books';
import { formatString } from '../components/functions/functions';
import { useStore } from '../store';
import Book2 from '../components/products/Book';

const Book: React.FC = () => {
    const addToCart = useStore((store) => store.cart.addToCart);
    const books = useStore((store) => store.books);
    let { bookID } = useParams();
    if (bookID) {
        bookID = formatString(bookID, 'revert');
    }

    const book = books.find((book) => book.title === bookID);

    const similarBooks: BookCoverType[] = books
        .filter((book) => book.category === book.category)
        .map((book) => ({
            id: book.id,
            title: book.title,
            price: book.price,
            image: book.image,
        }))
        .slice(0, 20);

    const formateRating = () => {
        if (!book?.rating) {
            return;
        }

        const allRating = [];

        const rated = book?.rating;
        const unrated = 5 - book?.rating;

        for (let i = 0; i < rated; i++) {
            const markedRating = {
                starred: true,
            };
            allRating.push(markedRating);
        }
        for (let i = 0; i < unrated; i++) {
            const markedRating = {
                starred: false,
            };
            allRating.push(markedRating);
        }

        return allRating;
    };

    const html = document.getElementsByTagName('html')[0];
    html.scrollTop = 0;

    // styles
    const bookLinksStyle = 'book-links transition hover:text-gray-500';
    const separator = <span>/</span>;

    // return <div>hello</div>;
    return (
        <div className='book'>
            <div className='container text-sm text-primary md:w-[700px] lg:w-[1000px]'>
                <div className='mt-7 mb-5 sm:mb-7 md:mb-9 lg:mb-11'>
                    <ul className='flex gap-2 text-gray-400'>
                        <li className={bookLinksStyle}>
                            <Link to={'/bstore/books'}>Books</Link>
                        </li>
                        {separator}
                        <li className={bookLinksStyle}>
                            <Link to={`/bstore/category/${book?.category}`}>
                                {book?.category}
                            </Link>
                        </li>
                        {separator}
                        <li>{book?.title}</li>
                    </ul>
                </div>
                <div className='lg:flex lg:justify-between lg:gap-20 lg:h-[320px]'>
                    <div className='flex flex-col items-center sm:flex-row sm:h-80 sm:gap-3 lg:w-full'>
                        <div className='book-image sm:w-full sm:h-full'>
                            <img
                                src={book?.image}
                                alt='book image'
                                title='book image'
                                className='mt-5 w-48 sm:w-auto sm:h-full sm:mt-0'
                            />
                        </div>
                        <div className='flex flex-col items-center sm:items-end sm:justify-between sm:w-full sm:h-full'>
                            <div>
                                <h2 className='tittle text-lg text-center sm:text-end text-primary mt-10 sm:mt-0'>
                                    {book?.title}
                                </h2>
                            </div>
                            <div className='flex flex-col items-center sm:items-end'>
                                <div className='text-prima flex gap-0.5'>
                                    {/* {<StarIcon width={15} starred={true} />} */}
                                    {formateRating()?.map((element, index) => (
                                        <StarIcon
                                            key={index}
                                            width={15}
                                            {...element}
                                        />
                                    ))}
                                </div>
                                <p className='text-lg font-semibold text-primary'>
                                    {book?.currency}
                                    {book?.price}
                                </p>
                                <div className='mt-3 flex gap-3'>
                                    <button
                                        className='bg-main text-secondary px-2 py-1.5 rounded-md transition hover:bg-opacity-80 flex gap-2 justify-center items-center'
                                        onClick={() =>
                                            book?.id &&
                                            addToCart(
                                                book.id,
                                                1,
                                                book.image,
                                                book.price
                                            )
                                        }
                                    >
                                        <span>Add to cart</span>
                                        <CartIcon2 width={15} height={15} />
                                    </button>
                                    {/* <input className='w-5 text-center text-sm' /> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='description w-full mt-10 flex flex-col gap-2 lg:w-[900px] lg:mt-0'>
                        <p className='font-semibold'>Description</p>
                        <p className='leading-5 lg:h-full lg:overflow-y-scroll lg:scrollbar-thin lg:scrollbar-track-secondary lg:scrollbar-thumb-primary'>
                            {book?.description}
                        </p>
                    </div>
                </div>
                <div className='recommendation mt-16 text-primary'>
                    <div>
                        <h3 className='font-semibold'>Recommendations</h3>
                    </div>
                    <div className='mt-3 grid grid-flow-col gap-3 overflow-x-scroll scrollbar-thin scrollbar-track-secondary scrollbar-thumb-primary p-2'>
                        {similarBooks?.map((book) => (
                            <Book2 key={book.id} {...book} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;
