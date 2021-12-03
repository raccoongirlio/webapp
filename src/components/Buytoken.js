import React from 'react';
import p_token_bg from '../img/token-banner.png';
import i_readmore from '../img/icon-readmore.png';


const Buytoken = () => {

    return (

        <section className="section-token-top">
        <img src={p_token_bg} alt="img/token-banner.png" className="token-banner-bg" />	
        <div className="front-token-stats">
          <div className="inside-box">
            <h1>RACCOON GIRL</h1>
            <div className="token-row-stats">
              <div className="token-stats-item">
                <h3>200K+</h3>
                <p>Holders</p>
              </div>{/* stat */}
              <div className="token-stats-item">
                <h3>63%</h3>
                <p>Token burn</p>
              </div>{/* stat */}
              <div className="token-stats-item">
                <h3>20K+</h3>
                <p>Token burn</p>
              </div>{/* stat */}
            </div>
            <div className="token-address-box">
              <h2>Contract Address</h2>
              <p className="click-to-copy">
                <input type="text" id="copy-to-clipboard" defaultValue="0xfa817872b35a27316a24a153ffaf1ee84ca15c57" readOnly />
              </p>
              <a href="#" className="buy-token-button">
                <img src={i_readmore} alt="img/icon-readmore.png" />
                Buy
              </a>
            </div>
          </div>
        </div>
      </section>

    )

}

export default Buytoken;