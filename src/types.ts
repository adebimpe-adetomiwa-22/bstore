import { BookCoverType } from './pages/Books';

export interface Book {
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
    title: string;
    price: number;
    image: string;
}

export interface Store {
    books: Book[];
    error: boolean;
    errorMessage: string;
    cover: BookCoverType[];
    category: (categoryName: string) => BookCoverType[];
    // fields: (...fieldNames: string[]) =>
}
