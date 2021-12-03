import React, { useEffect } from "react";
import i_logo from "./img/logo.png";
import i_wallet from "./img/icon-wallet.png";
import fade from "./img/fade.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Header(){

  useEffect(() => {
    Aos.init({duration: 1100});
}, []);

    return (
        <header>
        <div className="container-header">
          <div className="top-menu">
            <a href="#" className="logo"><img src={i_logo} alt="img/logo.png" /></a>
            <ul className="main-menu">
              <li><a href="/">Home</a></li>
              <li><a href="#">Mystery Box</a></li>
              <li><a href="#">Airdrop</a></li>
              <li><a href="/token">The Token</a></li>
              <li><a href="#">Marketplace</a></li>
              <li><a href="#" className="disabled">Play to earn</a></li>
            </ul>
            <div className="control-zone">
              <div className="burger-icon">
                <div className="burger-line burger-line-1" />
                <div className="burger-line burger-line-2" />
                <div className="burger-line burger-line-3" />
              </div>
              <a href="#" className="price-box">
                $1 - 192.40M RACCOON
              </a>
              <a href="#" className="connect-wallet">
                <img src={i_wallet} alt="img/icon-wallet.png" />
                Connect Wallet
              </a>
            </div>
          </div>
          <div className="inner-menu">
            <img src={fade} alt="img/fade.png" className="fade-right" />
            <div className="top-inner-menu">
              <ul>
                <li><a href="#">Whitepaper</a></li>
                <li><a href="#">Audit</a></li>
                <li><a href="#">Liquidity Lock </a></li>
                <li><a href="#">Medium</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;