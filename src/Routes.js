import React from 'react';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import ProductsList from './components/Products/ProductsList'
import Footer from './components/Footer/Footer';
import ProductsContextProvider from './contexts/ProductsContext';
import AddProducts from './components/AddProducts/AddProducts';
import EditProducts from './components/EditProduct/EditProducts';
import ProductsDetails from './components/Products/ProductsDetails';
import AuthContextProvider from './contexts/AuthContext';
import Register from './components/Register/Register';
import LogIn from './components/LogIn/LogIn';
import Favorites from './components/Favorites/Favorites';
// import Payment from './components/Payment/Payment';

const Routes = () => {
    return (
        <div>
            <ProductsContextProvider>
            <AuthContextProvider>
            <Router>
            <Header />
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/add' component={AddProducts} />
                    <Route exact path='/edit' component={EditProducts} />
                    <Route exact path='/products' component={ProductsList} />
                    <Route exact path={`/details/:id`} component={ProductsDetails} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={LogIn} />
                    <Route exact path='/products/favorites' component={Favorites} />
                    {/* <Route exact path='/products/payment' component={Payment} /> */}
                </Switch>
                <Footer/>
            </Router>
            </AuthContextProvider>
            </ProductsContextProvider>
        </div>
    );
};

export default Routes;