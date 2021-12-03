import React from 'react';
import top_banner from '../img/top-banner.png';
import top_banner_2 from '../img/top-banner-2.png';
import top_banner_mobile from '../img/top-banner-mobile.png';
import logo_button from '../img/logo-button.png';


const Welcome = () => {
    return(
        
        <section className="section-all-cover">
        <section className="section-top-mobile">
          <img src={top_banner_mobile} alt="img/top-banner-mobile.png" className="bg-mobile" />
        </section>
        <section className="section-top">
          <div className="bg-overlay">
            <img src={top_banner} alt="img/top-banner.png" className="bg-img" />
          </div>
          <div className="top-text-box">
            <div className="text-styled">
              <div className="container">
                <h2>WELCOME TO</h2>
                <h1>ETH RACCOONGIRL</h1>
                <a href="/token" className="token-button">
                  <img src={logo_button} alt="img/logo-button.png" />
                  The Token
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section-intro">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img src={top_banner_2} alt="img/top-banner-2.png" />
              </div>
              <div className="col-md-6">
                <div className="content-box">
                  <h2>Collect Raccoon girls and earn</h2>
                  <p>
                    Raccoongirl creates  entertainment platform consisting of digitally-engineered collectible . Users can truly own Raccoongirls and verify their ownership on the blockchain. With customizable Raccoongirl NFTs  to our Raccoongirl ecosystem, we will bring a multitude of ways to allow our users fun, and earn rewards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      
    )
};


export default Welcome;
