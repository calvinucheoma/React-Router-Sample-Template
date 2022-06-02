import React from 'react';
import "./App.css";
import{Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
import Profile from './components/Profile';
import { AuthProvider } from './authentication/auth';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth';
const LazyAbout = React.lazy(() => import('./components/About'));


function App() {

  return (

<>

 <AuthProvider>

  <Navbar/>

  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='about' element={<React.Suspense fallback='Loading...'><LazyAbout/></React.Suspense>} />
    <Route path="order-summary" element={<OrderSummary/>} />
    <Route path='*' element={<NoMatch/>} />
    <Route path="products" element={<Products/>}>
        <Route index element={<FeaturedProducts/>} />
        <Route path="featured" element={<FeaturedProducts/>} />
        <Route path="new" element={<NewProducts/>} />
    </Route>
    <Route path="users" element={<Users/>} />
    <Route path="users/:userId" element={<UserDetails/>} />
    <Route path="users/admin" element={<Admin/>} />
    <Route path='profile' element={<RequireAuth><Profile/></RequireAuth>}/>
    <Route path='login' element={<Login/>} />
  </Routes>

  </AuthProvider>

</>
  )
  
};

export default App;
