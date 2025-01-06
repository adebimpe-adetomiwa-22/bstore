import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Store } from './types';
import { books } from './assets/data/ts/books';

// const BookCoverType: {
//     title: string;
//     price: number;
//     image: string;
// }

export const store = () => ({
    books: books,
    error: false,
    errorMessage: '',
    cover: books.map((book) => ({
        title: book.title,
        price: book.price,
        image: book.image,
    })),
    category: (categoryName: string) =>
        books
            .filter((book) => book.category === categoryName)
            .map((item) => ({
                title: item.title,
                price: item.price,
                image: item.image,
            })),
});

// export const useStore = create(persist(devtools(store), { name: 'store' }));
export const useStore = create<Store>()(
    persist(devtools(store), { name: 'store' })
);
