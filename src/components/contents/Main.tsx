import Book from '../products/Book';
import LoadIcon from '../icons/LoadIcon';
import { useStore } from '../../store';

const Main: React.FC = () => {
    const cover = useStore((store) => store.cover);
    const latestBooks = cover.slice(0, 13);
    const bestSelling = cover.slice(13, 30);
    return (
        <main className='main' id='main'>
            <div className='container2 bg-red-500'>
                {/* <Search /> */}
                <div>
                    <div className='book-subtitle'>
                        <h3>Latest Books</h3>
                    </div>
                    <div className='books mt-3 flex flex-wrap justify-center gap-3'>
                        {latestBooks.map((book) => (
                            <Book key={book.id} {...book} />
                        ))}
                    </div>
                </div>
                <div>
                    <div className='book-subtitle'>
                        <h3>Best Selling</h3>
                    </div>
                    <div className='books mt-3 flex flex-wrap justify-center gap-3'>
                        {bestSelling.map((book) => (
                            <Book key={book.id} {...book} />
                        ))}
                    </div>
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
