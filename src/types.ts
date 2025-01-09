export interface Book {
    id: string;
    sn: number;
    title: string;
    price: number;
    category: string;
    rating: number;
    image: string;
    description: string;
    upc: string;
    product_type: string;
    price_excl_tax: number;
    price_incl_tax: number;
    tax: number;
    availability: number;
    reviews: number;
    currency: string;
}

export interface Cover {
    id: string;
    title: string;
    price: number;
    image: string;
}

export interface Cart {
    bookAmount: number;
    bookID: string;
    bookImage: string;
    bookPrice: number;
}

export interface Store {
    books: Book[];
    cover: Cover[];
    category: (categoryName: string) => Cover[];
    search: {
        open: boolean;
        searching: boolean;
        toggleOpen: () => void;
        textInput: string;
        enableAdvanceSearch: boolean;
        category: string;
        price: number;
        rating: number;
        onChange: (
            name: string,
            value: number | string | boolean | Cover[]
        ) => void;
        searchedBooks: Cover[];
    };
    cart: {
        items: Cart[];
        count: number;
        updateCart: (cart: Cart[]) => void;

        addToCart: (
            bookID: string,
            bookAmount: number,
            bookImage: string,
            bookPrice: number
        ) => void;
        cartAlert: boolean;
        addingBook: string | null;
    };
}
