import AngleDownIcon from '../components/icons/AngleDownIcon';
import BookComponent from '../components/products/Book';
import categories from '../components/navbar/Categories';
import LoadIcon from '../components/icons/LoadIcon';
import SearchIcon from '../components/icons/SearchIcon';
import { useStore } from '../store';
import { Cover } from '../types';

const Search: React.FC = () => {
    const books = useStore((store) => store.books);
    const {
        open,
        searching,
        textInput,
        toggleOpen,
        enableAdvanceSearch,
        category,
        price,
        rating,
        onChange,
        searchedBooks,
    } = useStore((store) => store.search);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange('textInput', event.target.value);

        if (!enableAdvanceSearch || !open) {
            const filtered = books.filter((book) => {
                const regex = new RegExp(textInput, 'i');
                return regex.test(book.title);
            });
            const mapOut: Cover[] = filtered.map((item) => ({
                id: item.id,
                title: item.title,
                price: item.price,
                image: item.image,
            }));
            onChange('searchedBooks', mapOut.slice(0, 20));
            return;
        }
        // console.log('cannot search yet');
    };

    // useEffect(() => {
    //     console.log(searchedBooks);
    // }, [searchedBooks]);

    const handleSearchButton = () => {
        onChange('searching', true);
        const searchReggex = new RegExp(textInput, 'i');

        const filtered = books.filter(
            (item) =>
                searchReggex.test(item.title) &&
                item.price >= price &&
                (rating === 0 ? true : item.rating === rating) &&
                (category === 'All' ? true : item.category === category)
        );

        const mapOut: Cover[] = filtered.map((item) => ({
            id: item.id,
            title: item.title,
            price: item.price,
            image: item.image,
        }));
        onChange('searchedBooks', mapOut.slice(0, 20));

        onChange('searching', false);
    };

    return (
        <div>
            <div className='container text-sm mt-7'>
                <div className='search-box'>
                    <div className='input-box flex gap-3'>
                        <input
                            type='text'
                            placeholder='The black ...'
                            value={textInput}
                            onChange={handleChange}
                        />
                        <button
                            className='flex items-center gap-1 transition text-gray-500/80 hover:text-gray-600'
                            onClick={toggleOpen}
                        >
                            <span>Advance Search</span>
                            <span
                                className={
                                    `transition duration-300 ` +
                                    (open ? '-rotate-180' : '')
                                }
                            >
                                <AngleDownIcon width={13} height={13} />
                            </span>
                        </button>
                    </div>

                    <div
                        className={
                            'flex flex-col items-start gap-5 mt-7 transition-all duration-300 max-h-0 overflow-hidden ' +
                            (open ? 'max-h-screen p-2 ' : '') +
                            (enableAdvanceSearch
                                ? 'opacity-100'
                                : 'opacity-50 pointer-events-none')
                        }
                    >
                        <div className='flex items-center gap-2 pointer-events-auto'>
                            <label
                                htmlFor='enable-advance-search'
                                className={`text-primary`}
                            >
                                Enable advance search
                            </label>
                            <input
                                type='checkbox'
                                name='enable-advance-search'
                                id='enable-advance-search'
                                checked={enableAdvanceSearch}
                                onChange={(event) =>
                                    onChange(
                                        'enableAdvanceSearch',
                                        event.target.checked
                                    )
                                }
                                className={`accent-primary cursor-pointer`}
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='category'>Category</label>
                            <select
                                name='category'
                                value={category}
                                onChange={(event) =>
                                    onChange('category', event.target.value)
                                }
                            >
                                <option value={'All'} id='category'>
                                    All
                                </option>
                                {categories.map((category, index) => (
                                    <option key={index} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor='price'>Price</label>
                            <div className='flex gap-2 items-center'>
                                <input
                                    name='price'
                                    id='price'
                                    type='range'
                                    min={0.0}
                                    max={100.0}
                                    value={price}
                                    onChange={(event) =>
                                        onChange('price', event.target.value)
                                    }
                                    className='accent-primary cursor-pointer'
                                />
                                <p>{price}.00</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor='rating'>Rating</label>
                            <select
                                name='rating'
                                id='rating'
                                value={rating}
                                onChange={(event) =>
                                    onChange(
                                        'rating',
                                        Number(event.target.value)
                                    )
                                }
                            >
                                {[0.0, 1.0, 2.0, 3.0, 4.0, 5.0].map(
                                    (ratingValue, index) => (
                                        <option key={index} value={ratingValue}>
                                            {ratingValue === 0
                                                ? 'All'
                                                : ratingValue}
                                        </option>
                                    )
                                )}
                            </select>
                        </div>
                        <div>
                            <button
                                className='bg-primary text-secondary px-2 py-1 rounded-md transition hover:opacity-85 flex items-center gap-5'
                                onClick={handleSearchButton}
                            >
                                <span>Search</span>

                                {searching ? (
                                    <span className='animate-spin'>
                                        <LoadIcon width={15} height={15} />
                                    </span>
                                ) : (
                                    <span>
                                        <SearchIcon width={13} height={13} />
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {!searching && (
                    <div className='search-contents mt-7'>
                        <div className='result bg-primary text-secondary px-2 py-1 rounded-sm'>
                            <h2>
                                Result:{' '}
                                <span className='font-semibold text-base'>
                                    {searchedBooks.length}
                                </span>
                            </h2>
                        </div>
                        <div className='mt-5 flex gap-3 flex-wrap justify-center'>
                            {searchedBooks.length >= 1 ? (
                                searchedBooks.map((book, index) => (
                                    <BookComponent key={index} {...book} />
                                ))
                            ) : (
                                <div>
                                    <p>No result</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;
