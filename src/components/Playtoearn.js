import React from 'react';
import i_icon_play_to_earn from '../img/icon-play-to-earn.png';
import i_tokenomic from '../img/tokenomic.png';
import i_icon_readmore from '../img/icon-readmore.png';
import i_token_1 from '../img/token-1.png';
import i_token_2 from '../img/token-2.png';





const Playtoearn = () => {
    return(
        <section className="section-padding">
        <div className="container">
          <div className="main-title">
            <h2>
              <img src={i_icon_play_to_earn} alt="img/icon-play-to-earn.png" />
              PLAY TO EARN
            </h2>
            <p>
              How do you earn by  RACCOON GAMES  and Raccoongirl.  Raccoon girl have to different methods, you can utilize your Raccoongirls Token and Raccoon girl NFT to earn big time, while having fun!	
            </p>
          </div>
          <div className="tokenomic-box">
            <img src={i_tokenomic} alt="img/tokenomic.png" />
            <div className="token-content">
              <h3>Airdrop</h3>
              <p>
                It's time to put your have Raccoon girls! What kind of "content" are we looking for? Here are some examples!:
                Video, Fanart, Meme, Music Eligible content is not limited to this list, so feel free to be creative and have fun with it!
              </p>
              <a href="#" className="readmore">
                <img src={i_icon_readmore} alt="img/icon-readmore.png" />
                Readmore
              </a>
            </div>
          </div>
          <div className="main-title line-title">
            <h2>
              CELLECTIONS
            </h2>
          </div>
          <div className="collection-box">
            <div className="row">
              <div className="col-md-6">
                <div className="collection-content">
                  <h4>Current collection</h4>
                  <img src={i_token_1} alt="img/token-1.png" />
                  <h2>Cute Raccoon Girl</h2>
                  <h3>NFT are your Collection</h3>
                  <p>
                    Our Raccoon girl Mystery boxes give what is called “Collection Card” to randomize cards that
                    give special attributes.<br />
                    You can obtain certain Raccoon card via  Mystery Box their , and  will be able to add them to your collection through the Marketplace.
                  </p>
                </div>
              </div>{/* col */}
              <div className="col-md-6">
                <div className="collection-content">
                  <h4>Soon collection</h4>
                  <img src={i_token_2} alt="img/token-2.png" />
                  <h2 className="plum">Bikini Raccoon Girl</h2>
                  <h3>Every Ceollection has a new batch of Raccoongirls</h3>
                  <p>
                    Every Collection has a new batch of Raccoongirls
                    For every new Collection, a new set of newly designed Raccoongirls will be released! Expect to see 
                    Raccoon girls of all sorts of shapes, colors, with varying, and unique. 
                  </p>
                </div>
              </div>{/* col */}
            </div>
          </div>
        </div>
      </section>
    )
}

export default Playtoearn;