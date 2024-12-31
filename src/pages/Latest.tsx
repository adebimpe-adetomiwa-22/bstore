import { useEffect, useState } from 'react';
import Book from '../components/products/Book';
import { BookCoverType } from './Books';
import { Load } from '../components/contents/Main';
import url from '../globals/url';

const Latest = () => {
    const [books, setBooks] = useState<BookCoverType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const fetchBooks = async (): Promise<void> => {
        const response = await fetch(
            `${url}/v1/books?limit=30&fields=title,price,image`
        );
        const data: BookCoverType[] = await response.json();
        setBooks(data);
        setLoading(false);
    };
    useEffect(() => {
        fetchBooks();
    }, []);
    return (
        <section className='latest-books' id='latest-books'>
            <div className='container'>
                {loading ? (
                    <Load />
                ) : (
                    <div className='books mt-10 flex flex-wrap justify-center gap-3'>
                        {books.map((book) => (
                            <Book key={book._id} {...book} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Latest;
