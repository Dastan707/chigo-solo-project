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

const Routes = () => {
    return (
        <div>
            <ProductsContextProvider>
            <Router>
            <Header />
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/add' component={AddProducts} />
                    <Route exact path='/edit' component={EditProducts} />
                    <Route exact path='/products' component={ProductsList} />
                    <Route exact path={`/details/:id`} component={ProductsDetails} />
                </Switch>
                <Footer/>
            </Router>
            </ProductsContextProvider>
        </div>
    );
};

export default Routes;