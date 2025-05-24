import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound';
import Register from './pages/Entry/Register';
import Login from './pages/Entry/Login';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Createproduct from './pages/Admin/Createproduct';
import CreateCategory from './pages/Admin/CreateCategory';
import UpdateProduct from './pages/Admin/UpdateProduct';
import Products from './Components/Products';
import PrivateAdmin from './Components/Admin/AdminVeriffy';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';
import Cart from './pages/Cart';
import Order from './pages/Order';
import UserDash from './pages/user/UserDash';
import UserProfile from './pages/user/UserProfile';
import PrivateUser from './Components/User/UserVerify';
import AdminOrder from './pages/Admin/AdminOrder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= { <Home/> } />
        <Route path='/search/:name' element= { <Search/> } />
        <Route path='/cart' element= { <Cart/> } />
        <Route path='/product/:slug' element= { <ProductDetails/> } />
        <Route path='/register' element= { <Register/> } />
        <Route path='/login' element= { <Login/> } />

        <Route path='/dashboard' element= { <PrivateUser/> }>
          <Route path='user' element = {<UserDash/>} />
          <Route path='user/orders' element = {<Order/>} />
          <Route path='user/profile' element = {<UserProfile/>} />
        </Route>

        <Route path='/dashboard' element= { <PrivateAdmin/> }>
          <Route path='admin' element = {<AdminDashboard/>} />
          <Route path='admin/products' element = {<Products/>} />
          <Route path='admin/update-products/:slug' element = {<UpdateProduct/>} />
          <Route path='admin/create-category' element = {<CreateCategory/>} />
          <Route path='admin/create-product' element = {<Createproduct/>} />
          <Route path='admin/orders' element = {<AdminOrder/>} />
        </Route>

        <Route path= "*" element= { <NotFound/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
