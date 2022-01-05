import React from 'react';
import gc_1 from "../img/gc-1.png";
import gc_2 from "../img/gc-2.png";
import gc_4 from "../img/gc-4.png";
import gc_default from "../img/gc-default.png";
import i_star from "../img/icon-star.png";





const Review = () => {
    return(

      <section className="section-card">
      <div className="collection-title">
        <h2>The Raccoongirl Review Collection</h2>
      </div>
      <div className="swiper-cover">
        {/* Swiper */}
        <div className="swiper-container card-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <a href="#" className="card-item">
                <img src={gc_1} alt= "img/gc-1.png" className="card-img" />
                <h3 className="card-title">CUTE</h3>
                <div className="star">
                  <img src={i_star} alt= "img/icon-star.png" />
                  <img src={i_star} alt= "img/icon-star.png" />
                  <img src={i_star} alt= "img/icon-star.png" />
                  <img src={i_star} alt= "img/icon-star.png" />
                  <img src={i_star} alt= "img/icon-star.png" />
                </div>
                <div className="price-button" style={{backgroundColor: '#A66452'}}>
                  2000
                </div>
              </a>{/* item */}
            </div>
            <div className="swiper-slide">
              <a href="#" className="card-item">
                <img src={gc_2} alt= "img/gc-2.png" className="card-img" />
                <h3 className="card-title">BIKINI</h3>
                <div className="star">
                  <img src={i_star} alt= "img/icon-star.png" />
                  <img src={i_star} alt= "img/icon-star.png" />
                  <img src={i_star} alt= "img/icon-star.png" />
                  <img src={i_star} alt= "img/icon-star.png" />
                  <img src={i_star} alt= "img/icon-star.png" />
                </div>
                <div className="price-button" style={{backgroundColor: '#E66C4D'}}>
                  2000
                </div>
              </a>{/* item */}
            </div>
            <div className="swiper-slide">
              <a href="#" className="card-item">
                <img src={gc_default} alt= "img/gc-default.png" className="card-img" />
                <h3 className="card-title">CHRISTMAS</h3>
                <div className="star">
                  <img src={i_star} alt= "img/icon-star.png" />
                  <img src={i_star} alt= "img/icon-star.png" />
                  <img src={i_star} alt= "img/icon-star.png" />
                  <img src={i_star} alt= "img/icon-star.png" />
                  <img src={i_star} alt= "img/icon-star.png" />
                </div>
                <div className="price-button" style={{backgroundColor: '#FF85A0'}}>
                  2000
                </div>
              </a>{/* item */}
            </div>
            <div className="swiper-slide">
              <a href="#" className="card-item">
                <img src={gc_default} alt= "img/gc-default.png" className="card-img" />
                <h3 className="card-title">MOON</h3>
                <div className="star">
                  <img src={i_star} alt= "img/icon-star.png" />
                  <img src={i_star} alt= "img/icon-star.png" />
                  <img src={i_star} alt= "img/icon-star.png" />
                  <img src={i_star} alt= "img/icon-star.png" />
                  <img src={i_star} alt= "img/icon-star.png" />
                </div>
                <div className="price-button" style={{backgroundColor: '#FF7070'}}>
                  2000
                </div>
              </a>{/* item */}
            </div>
            <div className="swiper-slide">
              <a href="#" className="card-item">
                <img src={gc_4} alt= "img/gc-4.png" className="card-img" />
                <h3 className="card-title">MOON</h3>
                <div className="star">
                  <img src={i_star} alt= "img/icon-star.png" />
                  <img src={i_star} alt= "img/icon-star.png" />
                  <img src={i_star} alt= "img/icon-star.png" />
                  <img src={i_star} alt= "img/icon-star.png" />
                  <img src={i_star} alt= "img/icon-star.png" />
                </div>
                <div className="price-button" style={{backgroundColor: '#FF7070'}}>
                  2000
                </div>
              </a>{/* item */}
            </div>
          </div>
        </div>
        <div className="collection-button-next"> <i className="fas fa-angle-right" /> </div>
        <div className="collection-button-prev"> <i className="fas fa-angle-left" /> </div>
      </div>
    </section>
    

    )
}

export default Review ;