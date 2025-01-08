import Book from '../components/products/Book';
import { useStore } from '../store';

const Latest = () => {
    const books = useStore((store) => store.cover).slice(0, 20);
    return (
        <section className='latest-books' id='latest-books'>
            <div className='container'>
                <div className='books mt-10 flex flex-wrap justify-center gap-3'>
                    {books.map((book) => (
                        <Book key={book.id} {...book} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Latest;
