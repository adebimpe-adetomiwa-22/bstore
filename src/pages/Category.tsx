import { useParams } from 'react-router-dom';
import Book from '../components/products/Book';
import { useEffect, useState } from 'react';
import { BookCoverType } from './Books';
import { Load } from '../components/contents/Main';
import url from '../globals/url';

const Category: React.FC = () => {
    const { categoryName } = useParams();
    const [books, setBooks] = useState<BookCoverType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchBooks = async (): Promise<void> => {
        const response = await fetch(
            `${url}/books?category=${categoryName}&fields=title,price,image`
        );
        const data: BookCoverType[] = await response.json();
        setBooks(data);
        setLoading(false);
    };
    useEffect(() => {
        fetchBooks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryName]);
    return (
        <section className='category' id='categor'>
            <div className='container'>
                <div className='title text-primary font-semibold border-b border-b-primary border-opacity-30'>
                    {categoryName}
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
            </div>
        </section>
    );
};

export default Category;
