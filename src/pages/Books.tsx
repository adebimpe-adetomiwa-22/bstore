import React, { useEffect, useState } from 'react';
import Book from '../components/products/Book';
import { useStore } from '../store';
import { Cover } from '../types';

export interface BookCoverType {
    id: string;
    title: string;
    price: number;
    image: string;
}

const Books = () => {
    const [page, setPage] = useState<number>(1);
    const storeBooks = useStore((store) => store.cover);
    // const books = storeBooks.slice(0, 20);
    const [books, setBooks] = useState<Cover[]>(storeBooks.slice(0, 20));
    const [booksPerPage] = useState<number>(
        storeBooks.length > 20 ? 20 : storeBooks.length
    );

    const nextPage = (): void => {
        // if (page)
        setPage((prevPage) => prevPage + 1);
    };
    const prevPage = (): void => {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = Number(event.target.value);
        if (value <= 0 || value > storeBooks.length / booksPerPage) {
            return;
        }
        setPage(value);
    };

    useEffect(() => {
        const start = booksPerPage * page - booksPerPage;
        const end = start + 20;
        // const nextBooks = storeBooks.slice(0, 20);
        const nextBooks = storeBooks.slice(start, end);
        setBooks(nextBooks);
    }, [booksPerPage, page, storeBooks]);

    return (
        <section className='all-books' id='all-books'>
            <div className='container'>
                <div className='pages mt-10 flex justify-center items-center gap-5 text-sm'>
                    {page > 1 && (
                        <button className='page-button' onClick={prevPage}>
                            Prev
                        </button>
                    )}

                    <input
                        minLength={1}
                        value={page}
                        className='w-5 text-center border-none outline-none min-w-9 rounded-md'
                        onChange={handleChange}
                    />
                    {!(page >= storeBooks.length / booksPerPage) && (
                        <button className='page-button' onClick={nextPage}>
                            Next
                        </button>
                    )}
                </div>
                <div className='books mt-10 flex flex-wrap justify-center gap-3'>
                    {books.map((book) => (
                        <Book key={book.id} {...book} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Books;
