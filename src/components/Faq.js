import React from 'react';

const Faq = () => {

    return (

        <section className="section-faq">
        <div className="container">
          <div className="main-title">
            <h2>FAQ &amp; DISCLAIMER</h2>
          </div>
          <div className="faq-box closed">
            <div className="qq">
              <span>
                Where can I hold my CCOON?
              </span>
              <i className="fas fa-chevron-up icon-opened" />
              <i className="fas fa-chevron-down icon-closed" />
            </div>
            <div className="aa">
              You can keep your CCOON on any ERC-20 compatible wallets. A couple of popular ones are MetaMask or TrustWallet.
            </div>
          </div>{/* 1 question */}
          <div className="faq-box closed">
            <div className="qq">
              <span>
                What is your plan for NFT and why is it more than a piece of art?
              </span>
              <i className="fas fa-chevron-up icon-opened" />
              <i className="fas fa-chevron-down icon-closed" />
            </div>
            <div className="aa">
              Raccoongirl NFT, in addition to being a piece of art. It can also be implemented in the pay to earn platform, which is a game designed to create in-game economy that can actually pay rewards.
            </div>
          </div>{/* 1 question */}
          <div className="faq-box closed">
            <div className="qq">
              <span>
                Installing your digital wallet
              </span>
              <i className="fas fa-chevron-up icon-opened" />
              <i className="fas fa-chevron-down icon-closed" />
            </div>
            <div className="aa">
              Go to <a href="#">metamask.io</a> and install their app (available on Chrome Web Store, iOS and Android). MetaMask Wallet is a trusted, and secure wallet in the crypto space. Make sure to keep your seed phrase somewhere safe!
            </div>
          </div>{/* 1 question */}
        </div>
      </section>


    )
}

export default Faq;