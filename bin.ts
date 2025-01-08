// const [searchResult, setSearchResult] = useState<BookCoverType[]>([]);
//     // const [openAdvanceSearch, setOpenAdvanceSearch] = useState<boolean>(true);
//     // const [enableAdvanceSearch, setEanbleAdvanceSearch] =
//     //     useState<boolean>(false);
//     // const [searching, setSearching] = useState<boolean>(false);
//     // // const [simpleSearching, setSimpleSearching] = useState<boolean>(false);
//     // const [searched, setSearched] = useState<boolean>(false);
//     // const [inputValue, setInputValue] = useState<string>('');

//     // const [searchFilters, setSearchFilters] = useState<{
//     //     category: string;
//     //     price: number;
//     //     rating: number | string;
//     // }>({ category: 'All', price: 0, rating: 'All' });

//     // // functions

//     // const handleEnableAdvanceSearch = (
//     //     event: React.ChangeEvent<HTMLInputElement>
//     // ): void => {
//     //     const checked = event.target.checked;
//     //     setEanbleAdvanceSearch(checked);
//     // };

//     // const handleSearchFilters = (
//     //     event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
//     // ): void => {
//     //     const name = event.target.name;
//     //     const value = event.target.value;
//     //     setSearchFilters((prevSearchFilters) => ({
//     //         ...prevSearchFilters,
//     //         [name]: value,
//     //     }));
//     // };

//     // const search = async (): Promise<void> => {
//     //     const url = `${serverUrl}/books?title=${inputValue}`;

//     //     const response = await fetch(url);
//     //     const data: BookCoverType[] = await response.json();
//     //     setSearchResult(data);
//     //     setSearched(true);
//     //     // setSimpleSearching(false);
//     // };

//     // const advanceSearch = async (): Promise<void> => {
//     //     let allFilters = '';
//     //     let numericFilters = '&numericFilters=';
//     //     if (enableAdvanceSearch) {
//     //         const { category, price, rating } = searchFilters;

//     //         // adding eaching filter
//     //         if (category && category !== 'All') {
//     //             allFilters += `&category=${category}`;
//     //         }
//     //         if (price && price > 0) {
//     //             // allFilters += `&price=${price}`;
//     //             numericFilters += `price>=${price},`;
//     //         }
//     //         if (rating && rating !== 'All') {
//     //             // allFilters += `&rating=${rating}`;
//     //             numericFilters += `rating=${rating}`;
//     //         }
//     //     }

//     //     allFilters += numericFilters;
//     //     const url = `${serverUrl}/books?title=${inputValue || ''}${allFilters}`;

//     //     // console.log(url);
//     //     const response = await fetch(url);
//     //     const data: BookCoverType[] = await response.json();
//     //     setSearchResult(data);
//     //     setSearched(true);
//     //     setSearching(false);
//     // };

//     // const handleInputChange = (
//     //     event: React.ChangeEvent<HTMLInputElement>
//     // ): void => {
//     //     const value = event.target.value;
//     //     setInputValue(value);
//     // };

//     // const handleAdvanceSearch = (): void => {
//     //     setOpenAdvanceSearch((prevOpenAdvanceSearch) => !prevOpenAdvanceSearch);
//     // };

//     // const handleSearchButton = (): void => {
//     //     advanceSearch();
//     //     setSearching(true);
//     // };

//     // // useEffects

//     // useEffect(() => {
//     //     if (inputValue && !enableAdvanceSearch) {
//     //         // setSimpleSearching(true);
//     //         search();
//     //     }
//     //     if (!inputValue && !enableAdvanceSearch) {
//     //         setSearched(false);
//     //     }
//     //     // eslint-disable-next-line react-hooks/exhaustive-deps
//     // }, [inputValue]);
