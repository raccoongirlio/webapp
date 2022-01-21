import React, { useEffect } from "react";
import i_logo from "./img/logo.png";
import i_wallet from "./img/icon-wallet.png";
import i_facebook from "./img/icon-facebook.png";
import i_instagram from "./img/icon-instagram.png";
import i_youtube from "./img/icon-youtube.png";
import i_twitter from "./img/icon-twitter.png";
import i_telegram from "./img/icon-telegram.png";
import i_robot from "./img/icon-robot.png";
import fade from "./img/fade.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Header(){

  useEffect(() => {
    Aos.init({duration: 500});
}, []);

    return (
      <div>
        <header>
        <div className="container-header">
          <div className="top-menu">
            <a href="#" className="logo"><img src={i_logo} alt="img/logo.png" /></a>
            <ul className="main-menu">
              <li><a href="/" class="active">Home</a></li>
              <li><a href="/mystery">Mystery Box</a></li>
              <li><a href="#">Airdrop</a></li>
              <li><a href="/token">The Token</a></li>
              <li><a href="#" className="disabled">Marketplace</a></li>
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
      <div className="burger-menu">
      <ul>
        <li><a href="#" className="active">Home</a></li>
        <li><a href="#">Mystery Box</a></li>
        <li><a href="#">Airdrop</a></li>
        <li><a href="#">The Token</a></li>
        <li><a href="#">Marketplace</a></li>
        <li><a href="#" className="disabled">Play to earn</a></li>
      </ul>
      <div className="menu-bottom-box">
        <a href="#" className="price-box mobile-price-box">
          $1 - 192.40M RACCOON
        </a>
      </div>
      <div className="link-social">
        <a href="#">
          <img src={i_facebook} alt="img/icon-facebook.png" />
        </a>
        <a href="#">
          <img src={i_instagram} alt="img/icon-instagram.png" />
        </a>
        <a href="#">
          <img src={i_youtube} alt="img/icon-youtube.png" />
        </a>
        <a href="#">
          <img src={i_twitter} alt="img/icon-twitter.png" />
        </a>
        <a href="#">
          <img src={i_telegram} alt="img/icon-telegram.png" />
        </a>
        <a href="#">
          <img src={i_robot} alt="img/icon-robot.png" />
        </a>
      </div>
    </div>
  </div>
    )
}

export default Header;
