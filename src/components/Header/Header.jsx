import React, { useContext, useState } from 'react';
import Logo from '../../assets/img/logo.png'
import './Header.css'
import { Link } from 'react-router-dom';
import { productsContext } from '../../contexts/ProductsContext';

const Header = () => {
    const { searchProduct, searchData} = useContext(productsContext);
    const [searchValue, setSearchValue] = useState('');

    const handleValue = (e) => {
        setSearchValue(e.target.value);
        searchProduct(e.target.value);
    }


    return (
        <header>
            <div className="navbar">
                <div className="navbar__logo">
                    <img src={Logo} alt="" />
                </div>
                <ul className="navbar__right">
                    <Link to='/'>
                        <li className='navbar__list'>HOME</li>
                    </Link>
                    <li className='navbar__list'>ABOUT CHIGO</li>
                    <Link to='/products'>
                        <li className='navbar__list'>PRODUCTS</li>
                    </Link>
                    <li className='navbar__list'>NEWS</li>
                    <li className='navbar__list'>CONTACT US</li>
                </ul>
                    <input type='text' className='inp-search' onChange={handleValue} />
                    <div className={searchValue ? 'search-result' : 'close'}>
                            {searchData.map(item => (
                                <Link to={`/details/${item.id}`}>
                                    <div className='search-items'>
                                        <img src={item.image} alt='images' /><br></br>
                                        {item.title}
                                    </div>
                                </Link>
                            ))}
                        </div>
            </div>
        </header>
    );
};

export default Header;