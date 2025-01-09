// import { useEffect, useState } from 'react';
// import { useStore } from '../../store';
// import { Book } from '../../types';

const CartAlert = () => {
    // const [book, setbook] = useState<Book | null>(null);
    // const books: Book[] = useStore((store) => store.books);
    // const addingBook = useStore((store) => store.cart.addingBook);

    // useEffect(() => {
    //     if (addingBook) {
    //         const fetchedBook = books.find((book) => book.id === addingBook);
    //         setbook(fetchedBook as Book);
    //     }
    // }, [addingBook, books]);
    // console.log(addingBook);
    return (
        <div className='w-screen bg-secondary h-12 fixed left-0 top-0 z-10'>
            <div className='container w-full'>
                <div className='text-sm w-full'>
                    <span className=''>{'Book'}</span> added to cart
                </div>
            </div>
        </div>
    );
};

export default CartAlert;
