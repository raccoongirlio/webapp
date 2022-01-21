import React from "react";
import qr from "../img/qr-code.png";
//import rac_girl from "../img/raccoon-girls.png";
import i_read from "../img/icon-readmore.png";


const Donate = () => {
    return(

        <section className="section-donate">
        <div className="container">
          <div className="donate-box">
            <div className="qr-code-box">
              <img src={qr} alt="img/qr-code.png" />
              <p>
                RACCOONGIRL COIN
              </p>
            </div>
            <div className="donate-content">
              <h3>DONATE TO RACCOONGIRL DEVS</h3>
              <p>
                DONATE If you like our work, and would like to support us, you can send your donation to this address. thank you very much for your support! 
              </p>
              <a href="#" className="donate-button">
                <img src={i_read} alt="img/icon-readmore.png" />
                DONATE
              </a>
            </div>
          </div>
        </div>
      </section>

    
    )
}

export default Donate;