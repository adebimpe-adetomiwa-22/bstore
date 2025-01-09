// import React, { useEffect, useState } from 'react';
// import AngleDownIcon from '../components/icons/AngleDownIcon';
// import { BookCoverType } from './Books';
// import Book from '../components/products/Book';
// import categories from '../components/navbar/Categories';
// import LoadIcon from '../components/icons/LoadIcon';
// import SearchIcon from '../components/icons/SearchIcon';

// const Search: React.FC = () => {
//     const [startSearching, setStartSearching] = useState<boolean>(false);
//     const [searchResult, setSearchResult] = useState<BookCoverType[]>([]);
//     const [openAdvanceSearch, setOpenAdvanceSearch] = useState<boolean>(true);
//     const [enableAdvanceSearch, setEanbleAdvanceSearch] =
//         useState<boolean>(false);
//     const [searching, setSearching] = useState<boolean>(false);
//     const [inputValue, setInputValue] = useState<string>('');

//     const [searchFilters, setSearchFilters] = useState<{
//         category: string;
//         price: number;
//         rating: number | string;
//     }>({ category: 'All', price: 0, rating: 'All' });

//     // functions

//     const handleEnableAdvanceSearch = (
//         event: React.ChangeEvent<HTMLInputElement>
//     ): void => {
//         const checked = event.target.checked;
//         setEanbleAdvanceSearch(checked);
//     };

//     const handleSearchFilters = (
//         event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
//     ): void => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setSearchFilters((prevSearchFilters) => ({
//             ...prevSearchFilters,
//             [name]: value,
//         }));
//     };

//     const search = async (): Promise<void> => {
//         // let allFilters = '';
//         // if (enableAdvanceSearch) {
//         //     const { category, price, rating } = searchFilters;

//         //     // adding eaching filter
//         //     if (category && category !== 'All') {
//         //         allFilters += `&category=${category}`;
//         //     }
//         //     if (price && price !== 0) {
//         //         allFilters += `&price=${price}`;
//         //     }
//         //     if (rating && rating !== 'All') {
//         //         allFilters += `&rating=${rating}`;
//         //     }
//         // }

//         const url = `http://127.0.0.1:5000/api/v1/books?title=${inputValue}`;

//         const response = await fetch(url);
//         const data: BookCoverType[] = await response.json();
//         setSearchResult(data);
//         setSearching(false);
//     };

//     const handleInputChange = (
//         event: React.ChangeEvent<HTMLInputElement>
//     ): void => {
//         const value = event.target.value;
//         setInputValue(value);
//     };

//     const handleAdvanceSearch = (): void => {
//         setOpenAdvanceSearch((prevOpenAdvanceSearch) => !prevOpenAdvanceSearch);
//     };

//     const handleSearchButton = (): void => {
//         // if (!enableAdvanceSearch) {
//         //     return;
//         // }
//         // setSearching(true);
//         search();
//     };

//     useEffect(() => {
//         if (enableAdvanceSearch) {
//             return;
//         }
//         if (inputValue) {
//             setStartSearching(true);
//             search();
//         } else {
//             setStartSearching(false);
//             setSearchResult([]);
//         }
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [inputValue]);

//     useEffect(() => {
//         if (!enableAdvanceSearch) {
//             setSearching(false);
//         }
//     }, [enableAdvanceSearch]);

//     // useEffect(() => {
//     //     console.log(rangeValue);
//     // }, [rangeValue]);

//     return (
//         <div>
//             <div className='container text-sm mt-7'>
//                 <div className='search-box'>
//                     <div className='input-box flex gap-3'>
//                         <input
//                             type='text'
//                             placeholder='The black ...'
//                             value={inputValue}
//                             onChange={handleInputChange}
//                         />
//                         <button
//                             className='flex items-center gap-1 transition text-gray-500/80 hover:text-gray-600'
//                             onClick={handleAdvanceSearch}
//                         >
//                             <span>Advance Search</span>
//                             <span
//                                 className={
//                                     `transition ` +
//                                     (openAdvanceSearch ? '-rotate-180' : '')
//                                 }
//                             >
//                                 <AngleDownIcon width={13} height={13} />
//                             </span>
//                         </button>
//                     </div>
//                     <div
//                         className={
//                             `advance-search flex flex-col items-start gap-7 overflow-hidden transition-all ` +
//                             (openAdvanceSearch
//                                 ? 'max-h-screen p-2 mt-9'
//                                 : 'max-h-0') +
//                             (enableAdvanceSearch
//                                 ? ' opacity-100'
//                                 : ' opacity-50')
//                         }
//                     >
//                         <div className='flex items-center gap-2'>
//                             <label
//                                 htmlFor='enable-advance-search'
//                                 className={`text-primary`}
//                             >
//                                 Enable advance search
//                             </label>
//                             <input
//                                 type='checkbox'
//                                 name='enable-advance-search'
//                                 id='enable-advance-search'
//                                 checked={enableAdvanceSearch}
//                                 onChange={handleEnableAdvanceSearch}
//                                 className={`accent-primary cursor-pointer`}
//                             />
//                         </div>
//                         <div className='flex flex-col gap-2'>
//                             <label htmlFor='category'>Category</label>
//                             <select
//                                 name='category'
//                                 value={searchFilters.category}
//                                 onChange={handleSearchFilters}
//                             >
//                                 <option value={'All'} id='category'>
//                                     All
//                                 </option>
//                                 {categories.map((category, index) => (
//                                     <option key={index} value={category}>
//                                         {category}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>
//                         <div className='flex flex-col gap-3'>
//                             <label htmlFor='price'>Price</label>
//                             <div className='flex gap-2 items-center'>
//                                 <input
//                                     name='price'
//                                     id='price'
//                                     type='range'
//                                     min={0.0}
//                                     max={100.0}
//                                     value={searchFilters.price}
//                                     onChange={handleSearchFilters}
//                                     className='accent-primary cursor-pointer'
//                                 />
//                                 <p>{searchFilters.price}.00</p>
//                             </div>
//                         </div>
//                         <div className='flex flex-col gap-3'>
//                             <label htmlFor='rating'>Rating</label>
//                             <select
//                                 name='rating'
//                                 id='rating'
//                                 value={searchFilters.rating}
//                                 onChange={handleSearchFilters}
//                             >
//                                 {['All', 1.0, 2.0, 3.0, 4.0, 5.0].map(
//                                     (ratingValue, index) => (
//                                         <option key={index} value={ratingValue}>
//                                             {ratingValue}
//                                         </option>
//                                     )
//                                 )}
//                             </select>
//                         </div>
//                         <div>
//                             <button
//                                 className='bg-primary text-secondary px-2 py-1 rounded-md transition hover:opacity-85 flex items-center gap-5'
//                                 onClick={handleSearchButton}
//                             >
//                                 <span>Search</span>

//                                 {searching ? (
//                                     <span className='animate-spin'>
//                                         <LoadIcon width={15} height={15} />
//                                     </span>
//                                 ) : (
//                                     <span>
//                                         <SearchIcon width={13} height={13} />
//                                     </span>
//                                 )}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 {startSearching && (
//                     <div className='search-contents mt-7'>
//                         <div className='result bg-primary text-secondary px-2 py-1 rounded-sm'>
//                             <h2>
//                                 Result:{' '}
//                                 <span className='font-semibold text-base'>
//                                     {searchResult.length}
//                                 </span>
//                             </h2>
//                         </div>
//                         <div className='mt-5 flex gap-3 flex-wrap justify-center'>
//                             {searchResult.length >= 1 ? (
//                                 searchResult.map((book) => (
//                                     <Book key={book._id} {...book} />
//                                 ))
//                             ) : (
//                                 <div>
//                                     <p>No result</p>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Search;
