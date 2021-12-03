import React from 'react';
import how_to_buy from '../img/how-to-buy.png';
import buy_2 from '../img/buy-2.png';
import buy_3 from '../img/buy-3.png';
import buy_4 from '../img/buy-4.png';
import i_button from '../img/logo-button.png';




const Howto = () => {

    return (

        <section className="section-how-to-buy">
        <div className="how-to-buy-title">
          <h2>
            HOW TO BUY?
          </h2>
        </div>
        <div className="how-to-buy-box">
          <img src={how_to_buy} alt="img/how-to-buy.png" className="htb-img" />
          <div className="step-box">
            <img src="img/buy-1.png" />
            <div className="step-content">
              <h3>Get MetaMask Wallet</h3>
              <p>
                Go to <a href="#">metamask.io</a> and install their app (available on Chrome Web Store, iOS and Android). MetaMask Wallet is a trusted, and secure wallet in the crypto space. Make sure to keep your seed phrase somewhere safe!
              </p>
            </div>
          </div>{/* 1 step */}
          <div className="step-box">
            <img src={buy_2} alt="img/buy-2.png" />
            <div className="step-content">
              <h3>Add Binance Smart Chain network</h3>
              <p>
                You will need to add the Binance Smart Chain network into your MetaMask wallet before you can purchase RACCOONCOIN.
              </p>
            </div>
          </div>{/* 2 step */}
          <div className="step-box">
            <img src={buy_3} alt="img/buy-3.png" />
            <div className="step-content">
              <h3>Buy some ETH</h3>
              <p>
                Purchase ETH on exchanges, such and add your funds into your virtual wallet.
              </p>
            </div>
          </div>{/* 3 step */}
          <div className="step-box">
            <img src={buy_4} alt="img/buy-4.png" />
            <div className="step-content">
              <h3>Go to</h3>
              <p>
                Go to Raccoon Swap and get some Raccoon coin
              </p>
              <a href="#" className="buy-button">
                <img src={i_button} alt="img/logo-button.png" />
                Buy Raccoon coin
              </a>
            </div>
          </div>{/* 4 step */}
        </div>
      </section>


    )
}

export default Howto;