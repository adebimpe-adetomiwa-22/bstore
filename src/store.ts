import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Store } from './types';
import { books } from './assets/data/ts/books';

export const useStore = create<Store>()(
    devtools((set) => ({
        books: books,
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
        search: {
            open: false,
            searching: false,
            toggleOpen: () =>
                set((state) => ({
                    search: { ...state.search, open: !state.search.open },
                })),

            textInput: '',
            enableAdvanceSearch: true,
            category: 'All',
            price: 50,
            rating: 0,
            onChange: (name, value) =>
                set((state) => ({
                    search: { ...state.search, [name]: value },
                })),
            searchedBooks: [],
        },
    }))
);
