import { useParams } from 'react-router-dom';
import Book from '../components/products/Book';
import { useStore } from '../store';

const Category: React.FC = () => {
    const { categoryName } = useParams();

    const getCategory = useStore((store) => store.category);

    if (!categoryName) {
        return <div>An error occured, check the category parameter</div>;
    }

    const books = getCategory(categoryName);

    return (
        <section className='category' id='categor'>
            <div className='container'>
                <div className='title text-primary font-semibold border-b border-b-primary border-opacity-30'>
                    {categoryName}
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

export default Category;
