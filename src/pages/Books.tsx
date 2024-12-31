import React, { useEffect, useState } from 'react';
import Book from '../components/products/Book';
import { Load } from '../components/contents/Main';

export interface BookCoverType {
    _id: string;
    title: string;
    price: number;
    image: string;
}

const Books = () => {
    const [books, setBooks] = useState<BookCoverType[]>([]);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);
    // const [pageDisabled, setPageDisabled] = useState<boolean>(false);

    // functions
    const fetchBooks = async (): Promise<void> => {
        const response = await fetch(
            `http://127.0.0.1:5000/api/v1/books?limit=10&fields=title,price,image&page=${page}`
        );
        const data: BookCoverType[] = await response.json();
        // console.log(data);
        setBooks(data);
        setLoading(false);
    };

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

    // const changePage = (): void => {
    //     setPageDisabled((prevPageDisabled) => !prevPageDisabled);
    //     console.log('double clicked');
    // };

    // effects

    // useEffect(() => {
    //     console.log(page);
    // }, [page]);

    // useEffect(() => {
    //     console.log(pageDisabled);
    // }, [pageDisabled]);

    useEffect(() => {
        fetchBooks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return (
        <section className='all-books' id='all-books'>
            <div className='container'>
                <div className='pages mt-10 flex justify-center items-center gap-5 text-sm'>
                    {page > 1 && (
                        <button className='page-button' onClick={prevPage}>
                            Prev
                        </button>
                    )}
                    {/* <p
                        onDoubleClick={() => {
                            console.log('ready to edit');
                        }}
                    >
                        {page}
                    </p> */}
                    <input
                        // type='number'
                        minLength={1}
                        value={page}
                        // disabled={pageDisabled}
                        className='w-5 text-center border-none outline-none'
                        onChange={handleChange}
                        // onDoubleClick={changePage}
                    />
                    <button className='page-button' onClick={nextPage}>
                        Next
                    </button>
                </div>
                {loading ? (
                    <Load />
                ) : (
                    <div className='books mt-10 flex flex-wrap justify-center gap-3'>
                        {books.map((book) => (
                            <Book key={book._id} {...book} />
                        ))}
                    </div>
                )}
                {/* <div className='pages mt-10 flex justify-center items-center gap-5 text-sm'>
                    {page > 1 && (
                        <button className='page-button' onClick={prevPage}>
                            Prev
                        </button>
                    )}
                    <button className='page-button' onClick={nextPage}>
                        Next
                    </button>
                </div> */}
            </div>
        </section>
    );
};

export default Books;
