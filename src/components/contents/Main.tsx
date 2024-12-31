import { useEffect, useState } from 'react';
import Book from '../products/Book';
import { BookCoverType } from '../../pages/Books';
import LoadIcon from '../icons/LoadIcon';
import url from '../../globals/url';
// import Search from './Search';

const Main: React.FC = () => {
    // const [books, setBooks] = useState<BookCoverType[]>([]);
    const [latestBooks, setLatestBooks] = useState<BookCoverType[]>([]);
    const [bestSelling, setBestSelling] = useState<BookCoverType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchBooks = async (): Promise<void> => {
        const response = await fetch(
            `${url}/books?limit=50&fields=title,price,image`
        );
        const data: BookCoverType[] = await response.json();
        // setBooks(data);
        setLatestBooks(data.slice(0, 13));
        setBestSelling(data.slice(13, 30));
        setLoading(false);
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    // const load = (

    // );
    return (
        <main className='main' id='main'>
            <div className='container'>
                {/* <Search /> */}
                <div>
                    <div className='book-subtitle'>
                        <h3>Latest Books</h3>
                    </div>
                    {loading ? (
                        <Load />
                    ) : (
                        <div className='books mt-3 flex flex-wrap justify-center gap-3'>
                            {latestBooks.map((book) => (
                                <Book key={book._id} {...book} />
                            ))}
                        </div>
                    )}
                </div>
                <div>
                    <div className='book-subtitle'>
                        <h3>Best Selling</h3>
                    </div>
                    {loading ? (
                        <Load />
                    ) : (
                        <div className='books mt-3 flex flex-wrap justify-center gap-3'>
                            {bestSelling.map((book) => (
                                <Book key={book._id} {...book} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Main;

export const Load: React.FC = () => {
    return (
        <div className='flex justify-center p-10'>
            <div className='animate-spin'>
                <LoadIcon width={25} height={25} />
            </div>
        </div>
    );
};
