import React from 'react';
import bg_fade from '../img/bg-fade.png';
import bg_circle from '../img/bg-circle.png';
import moon from '../img/moon.png';



const Roadmap = () => {

    return (

        <section className="section-roadmap">
        <div className="fade-bg">
          <img src={bg_fade} alt="img/bg-fade.png" />
        </div>
        <div className="circle-bg">
          <img src={bg_circle} alt="img/bg-circle.png" />
        </div>
        <div className="road-map-title">
          <h2>
            ROADMAP
          </h2>
        </div>
        <div className="road-map-box">
          <div className="map-control">
            <div className="road-map-item">
              <div className="number text-grad">1</div>
              <h3 className="text-grad">Q4/2021</h3>
              <ul>
                <li>NFT Collection </li>
                <li>Smart Contract Design &amp; NFT</li>
                <li>Listing on OpenSea</li>
              </ul>
            </div>
          </div>
          <div className="map-control">
            <div className="road-map-item">
              <div className="number text-grad">2</div>
              <h3 className="text-grad">Q1/2022</h3>
              <ul>
                <li>Marketing promote the platform</li>
                <li>Marketing promote the NFT</li>
                <li>NFT Collection </li>
                <li>Audit </li>
                <li>List Token on CoinMarketCap </li>
                <li>List Token on coingecko</li>
                <li>Initial listing Kucoin</li>
                <li>Initial listing Bitfinex</li>
              </ul>
            </div>
          </div>
          <div className="map-control">
            <div className="road-map-item">
              <div className="number text-grad">3</div>
              <h3 className="text-grad">Q2/2022</h3>
              <ul>
                <li>Marketing, promote platform &amp; NFTs </li>
                <li>Initial listing Bithumb</li>
                <li>Initial listing Okex</li>
                <li>Initial listing BitMart </li>
                <li>Earn Events </li>
                <li>Raccoongirl Marketplace</li>
              </ul>
            </div>
          </div>
          <div className="map-control">
            <div className="road-map-item">
              <div className="number text-grad">4</div>
              <h3 className="text-grad">Q3/2022</h3>
              <ul>
                <li>Marketing promote the platform </li>
                <li>Marketing promote the NFT</li>
                <li>Launch play-to-earn  game</li>
              </ul>
            </div>
          </div>
          <div className="map-control">
            <div className="road-map-item">
              <div className="number text-grad">5</div>
              <h3 className="text-grad">Q4/2022</h3>
              <ul>
                <li>So exciting to list on big exchanges</li>
                <li>To the moon</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="moon-girl">
          <img src={moon} alt="img/moon.png" />
        </div>
      </section>


    )
}

export default Roadmap;