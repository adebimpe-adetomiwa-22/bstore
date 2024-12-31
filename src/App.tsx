import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Books from './pages/Books';
import Latest from './pages/Latest';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Book from './pages/Book';
import Search from './pages/Search';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Error from './pages/Error';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/bstore' element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path='books' element={<Books />} />
                    <Route path='book/:bookID' element={<Book />} />
                    <Route path='latest' element={<Latest />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='account' element={<Account />} />
                    <Route path='cart' element={<Cart />} />
                    <Route path='search' element={<Search />} />
                    <Route
                        path='category/:categoryName'
                        element={<Category />}
                    />
                    <Route path='signup' element={<Signup />} />
                    <Route path='login' element={<Login />} />
                    <Route path='*' element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
