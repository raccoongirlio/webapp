import React from 'react';
import i_facebook from "./img/icon-facebook.png";
import i_instagram from "./img/icon-instagram.png";
import i_discord from "./img/icon-discord.png";
import i_twitter from "./img/icon-twitter.png";
import i_telegram from "./img/icon-telegram.png";
import i_robot from "./img/icon-robot.png";
import i_logo from "./img/logo.png";



function Footer(){
    return(
        <footer>
        <div className="container">
          <div className="footer-row">
            <a href="#" className="logo-footer"><img src={i_logo} alt="img/logo.png" /></a>
            <div className="footer-menu">
              <div className="link-menu">
                <h3>Link</h3>
                <ul>
                  <li><a href="https://coinmarketcap.com/" target="_blank">CoinMarketcap</a></li>
                  <li><a href="https://www.coingecko.com/" target="_blank">CoinGecko</a></li>
                  <li><a href="#" target="_blank">Raccoon Swap</a></li>
                </ul>
              </div>
              <div className="link-social">
                <a href="https://www.facebook.com/Raccoongirl-NFT-112073641356707" target="_blank"><img src={i_facebook} alt="facebook" /></a>
                <a href="#" target="_blank"><img src={i_instagram} alt="instagram" /></a>
                <a href="https://discord.gg/Rmpp8D8q" target="_blank"><img src={i_discord} alt="discord" /></a>
                <a href="https://twitter.com/RaccoonGirlnft" target="_blank"><img src={i_twitter} alt="twitter" /></a>
                <a href="https://t.me/nftraccoongirl" target="_blank"><img src={i_telegram} alt="telegram" /></a>
                <a href="#" target="_blank"><img src={i_robot} alt="reddit" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;
