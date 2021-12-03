import React from 'react';
import i_total from '../img/icon-total.png';
import i_collect from '../img/icon-collect.png';
import i_holder from '../img/icon-holder.png';
import i_airdrop from '../img/icon-airdrop.png';
import i_buy from '../img/icon-buy.png';
import l_cmc from '../img/logo-cmc.png';
import l_pancakeswap from '../img/logo-pancakeswap.png';
import l_hotbit from '../img/logo-hotbit.png';
import l_cg from '../img/logo-cg.png';
import l_metamask from '../img/logo-metamask.png';
import l_bitmart from '../img/logo-bitmart.png';


const Stats = () => {
    return(
        <section className="section-padding">
        <div className="container">
          <div className="main-title line-title">
            <h2>
              STATS
            </h2>
          </div>
          <div className="stats-row">
            <div className="stats-box">
              <img src={i_total} alt="img/icon-total.png" className="stats-icon" />
              <div className="stats-number">924678</div>
              <p>Total Raccoongirls</p>
            </div>{/* stats box */}
            <div className="stats-box">
              <img src={i_collect} alt="img/icon-collect.png" className="stats-icon" />
              <div className="stats-number">9</div>
              <p>Collectible Raccoongirls</p>
            </div>{/* stats box */}
            <div className="stats-box">
              <img src={i_holder} alt="img/icon-holder.png" className="stats-icon" />
              <div className="stats-number">900K+</div>
              <p>Raccoongirls Coin Hoders</p>
            </div>{/* stats box */}
          </div>
          <div className="button-row">
            <a href="#" className="airdrop-button">
              <img src={i_airdrop} alt="img/icon-airdrop.png" />
              Claim Airdrop
            </a>
            <a href="#" className="buy-button">
              <img src={i_buy} alt="img/icon-buy.png" />
              Buy Mystery Box
            </a>
          </div>
          <div className="partner-box">
            <div className="main-title">
              <h2>
                Find us on
              </h2>
            </div>
            <div className="partnet-row">
              <a href="#">
                <img src={l_cmc} alt="img/logo-cmc.png" />
              </a>
              <a href="#">
                <img src={l_pancakeswap} alt="img/logo-pancakeswap.png" />
              </a>
              <a href="#">
                <img src={l_hotbit} alt="img/logo-hotbit.png" />
              </a>
            </div>
            <div className="partnet-row">
              <a href="#">
                <img src={l_cg} alt="img/logo-cg.png" />
              </a>
              <a href="#">
                <img src={l_metamask} alt="img/logo-metamask.png" />
              </a>
              <a href="#">
                <img src={l_bitmart} alt="img/logo-bitmart.png" />
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Stats;