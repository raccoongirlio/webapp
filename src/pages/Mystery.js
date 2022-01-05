import React, { useEffect } from 'react';
import Header_mystery from '../Header_mystery';
import Footer from '../Footer';
import my_g from "../img/mystery-girl.png";
import l_eth from "../img/logo-eth.png";
import i_readmore from "../img/icon-readmore.png";



const MysteryPage = () => {
    
    useEffect(() => {
        document.title = "Raccoon Girls | Mystery Box";
    }, []);
    

    return(
        <div>
        <Header_mystery />
        <div className="header-space" />
        <section className="section-mystery-top">
        <div className="container">
          <div className="mobile-mystery-girl">
            <img src={my_g} alt= "img/mystery-girl.png" />
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="mystery-form">
                <h1>NFT Mystery Box</h1>
                <div className="mystery-form-box">
                  <div className="balance">
                    <h3>ETH BALANCE</h3>
                    <span>0 ETH</span>
                  </div>
                  <div className="text-row">
                    <p>Amount</p>
                    <button className="max-button">Max</button>
                  </div>
                  <div className="input-cover">
                    <div className="number-control">
                      <button className="minus-button" onclick="decrement()">-</button>
                      <input type="number" name="eth-value" min={1} className="input-number" id="mint-number" defaultValue={1} />
                      <button className="plus-button" onclick="increment()">+</button>
                    </div>
                  </div>
                  <div className="text-row">
                    <p>Total balance</p>
                    <p>ETH</p>
                  </div>
                  <div className="total">
                    <span>0.065</span>
                    <img src={l_eth} alt= "img/logo-eth.png" />
                  </div>
                  <button type="submit" className="mint-submit">
                    <img src={i_readmore} alt= "img/icon-readmore.png" />
                    <span>MINT YOUR RACCOONGIRL</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="drop-rate">
                <div className="mystery-circle">
                  <img src={my_g} alt= "img/mystery-girl.png" />
                </div>
                <h3>Rarity/Drop Rate:</h3>
                <div className="rate-box">
                  <div className="rate-item" style={{backgroundColor: '#95675B66'}}>Ultra Rare 0.1%</div>
                  <div className="rate-item" style={{backgroundColor: '#4FCAFF66'}}>Hyper Rare 0.4%</div>
                  <div className="rate-item" style={{backgroundColor: '#E377FE66'}}>Super Rare 2.5%</div>
                  <div className="rate-item" style={{backgroundColor: '#FDA03B66'}}>RR = Dou Rare 5%</div>
                  <div className="rate-item" style={{backgroundColor: '#FF707066'}}>R = Rare 10%</div>
                  <div className="rate-item" style={{backgroundColor: '#FF85A066'}}>C = Common 82%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <Footer />
        </div>
    )
}

export default MysteryPage;