import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import { Link } from 'react-router-dom';
import './MainCarousel.css'



const MainCarousel = () => {
    return (
        <>
            <div className='main-carousel'>
                <h1>PRODUCTS</h1>
                <InfiniteCarousel
                    breakpoints={[
                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                            },
                        },
                    ]}
                    dots={true}
                    showSides={true}
                    sidesOpacity={.5}
                    sideSize={.1}
                    slidesToScroll={4}
                    slidesToShow={4}
                    scrollOnDevice={true}
                >
                    <Link to='/products' >

                        <div>
                            <img src='http://www.chigogroup.com/upload/portal/20200604/202006041851091617.png' alt='chigo' />
                        </div>
                        </Link>
                        <Link to='/products' >
                    <div>
                        <img src='http://www.chigogroup.com/upload/portal/20200604/202006041915156473.png' alt='chigo' />
                    </div>
                    </Link>
                    <Link to='/products' >
                    <div>
                        <img src='http://www.chigogroup.com/upload/portal/20200604/202006041859501680.png' alt='chigo' />
                    </div>
                    </Link>
                    <Link to='/products' >
                    <div>
                        <img src='http://www.chigogroup.com/upload/portal/20200604/202006041843358604.png' alt='chigo' />
                    </div>
                    </Link>
                    <div>
                        <img src='http://www.chigogroup.com/upload/portal/20200604/202006041851091617.png' alt='chigo' />
                    </div>
                    <div>
                        <img src='http://www.chigogroup.com/upload/portal/20200604/202006041915156473.png' alt='chigo' />
                    </div>

                    <div>
                        <img src='http://www.chigogroup.com/upload/portal/20200604/202006041859501680.png' alt='chigo' />
                        
                    </div>
                    <div>
                        <img src='http://www.chigogroup.com/upload/portal/20200604/202006041843358604.png' alt='chigo' />
                    </div>
                    
                </InfiniteCarousel>
            </div>
        </>
    )
}
export default MainCarousel;