import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BookCover from '../assets/images/book_cover.png';
import StarIcon from '../components/icons/StarIcon';
import CartIcon2 from '../components/icons/CartIcon2';
import { BookCoverType } from './Books';
import Book2 from '../components/products/Book';
import { addToCart } from '../components/methods/methods';
import url from '../globals/url';

interface BookType {
    _id: string;
    title: string;
    price: number;
    category: string;
    rating: number;
    image: string;
    description: string;
    upc: string;
    product_type: string;
    price_excl_tax: number;
    price_incl_tax: number;
    tax: number;
    availability: number;
    reviews: number;
    currency: string;
}

const Book: React.FC = () => {
    const { bookID } = useParams();
    const [book, setBook] = useState<BookType | null>(null);
    const [rating, setRating] = useState<number | null>(null);

    const [similarBooks, setSimilarBooks] = useState<BookCoverType[] | null>(
        null
    );

    const fetchSimilarBooks = async (category?: string): Promise<void> => {
        const response = await fetch(
            `${url}/v1/books?category=${
                book?.category || category
            }&fields=title,price,image`
        );
        const data: BookCoverType[] = await response.json();
        setSimilarBooks(data);
    };

    const fetchBook = async (): Promise<void> => {
        const response = await fetch(`${url}/v1/books/${bookID}`);
        const data: BookType = await response.json();
        setBook(data);
    };
    useEffect(() => {
        fetchBook();
        const html = document.getElementsByTagName('html')[0];
        html.scrollTop = 0;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bookID]);
    useEffect(() => {
        setRating(book?.rating || null);
        fetchSimilarBooks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [book]);

    // useEffect(() => {
    //     formateRating();
    //     console.log(rating);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [rating]);

    const formateRating = () => {
        if (!rating) {
            return;
        }

        const allRating = [];

        const rated = rating;
        const unrated = 5 - rating;

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

    // styles
    const bookLinksStyle = 'book-links transition hover:text-gray-500';
    const separator = <span>/</span>;
    return (
        <div className='book'>
            <div className='container text-sm text-primary md:w-[700px] lg:w-[1000px]'>
                <div className='mt-7 mb-5 sm:mb-7 md:mb-9 lg:mb-11'>
                    <ul className='flex gap-2 text-gray-400'>
                        <li className={bookLinksStyle}>
                            <Link to={'/books'}>Books</Link>
                        </li>
                        {separator}
                        <li className={bookLinksStyle}>
                            <Link to={`/category/${book?.category}`}>
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
                                // src={navigator.onLine ? book?.image : BookCover}
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
                                            book?._id &&
                                            addToCart(
                                                book?._id,
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
                            <Book2 key={book._id} {...book} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;
