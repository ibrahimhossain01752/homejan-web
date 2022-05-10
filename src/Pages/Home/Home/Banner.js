import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
          <div className='banner-main text-white '>
        <div className="banner-overlay">
        <div className="container col-md-12 col-sm-6">
            <div className="row">
            {/* <Fade left> */}
                <div className="col-lg-6">
                    <div className="banner-content text-center text-md-start">
                        
                        <h1>Cari Cari</h1>
                        <p>Live from their sofa to yours. Get closer to your favorite <span class="span-1">artists, and never miss out.</span></p>
                        
                        
                    </div>
                </div>
                <div clss ="col-lg-6">

                </div>
                
                
          
            </div>
        </div>
        </div>
    </div>
    );
};

export default Banner;