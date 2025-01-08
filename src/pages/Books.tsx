import React, { useState } from 'react';
import Book from '../components/products/Book';
import { useStore } from '../store';

export interface BookCoverType {
    id: string;
    title: string;
    price: number;
    image: string;
}

const Books = () => {
    const [page, setPage] = useState<number>(1);
    const books = useStore((store) => store.cover).slice(0, 20);

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
        if (value <= 0) {
            return;
        }
        setPage(value);
    };

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
                        className='w-5 text-center border-none outline-none'
                        onChange={handleChange}
                    />
                    <button className='page-button' onClick={nextPage}>
                        Next
                    </button>
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
