import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Cart, Store } from './types';
import { books } from './assets/data/ts/books';

export const useStore = create<Store>()(
    devtools((set, get) => ({
        books: books,
        cover: books.map((book) => ({
            id: book.id,
            title: book.title,
            price: book.price,
            image: book.image,
        })),

        category: (categoryName: string) =>
            books
                .filter((book) => book.category === categoryName)
                .map((item) => ({
                    id: item.id,
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

        cart: {
            items: [],
            count: 0,
            updateCart: (cart) => {
                // update local storage
                localStorage.setItem('cart', JSON.stringify(cart));

                // update cart items
                set((state) => ({ cart: { ...state.cart, items: cart } }));

                // update cart count
                set((state) => ({
                    cart: { ...state.cart, count: cart.length },
                }));
            },

            addToCart: (bookID, bookAmount, bookImage, bookPrice) => {
                const book: Cart = {
                    bookID,
                    bookAmount,
                    bookImage,
                    bookPrice,
                };

                let books: Cart[];

                // check status of local storage (empty or filled)
                const getBooks: string | null = localStorage.getItem('cart');
                if (getBooks) {
                    books = JSON.parse(getBooks);
                } else {
                    books = [];
                }

                // check if book exists and add
                const checkBook = books.find((item) => item.bookID === bookID);
                if (checkBook) {
                    books = books.map((item) =>
                        item.bookID === bookID
                            ? { ...item, bookAmount: item.bookAmount + 1 }
                            : item
                    );
                } else {
                    books.push(book);
                }

                get().cart.updateCart(books);

                // show alert
                set((state) => ({
                    cart: { ...state.cart, addingBook: bookID },
                }));
                set((state) => ({ cart: { ...state.cart, cartAlert: true } }));

                // hide alert
                setTimeout(() => {
                    set((state) => ({
                        cart: { ...state.cart, cartAlert: false },
                    }));
                    set((state) => ({
                        cart: { ...state.cart, addingBook: null },
                    }));
                }, 1500);
            },
            cartAlert: false,
            addingBook: null,
        },
    }))
);
