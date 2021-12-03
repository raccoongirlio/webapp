import React, { useEffect } from 'react';
import Header_token from '../Header_token'; 
import Footer from '../Footer';
import Buytoken from '../components/Buytoken';
import Tokenomics from '../components/Tokenomics';
import Roadmap from '../components/Roadmap';
import Howto from '../components/Howto';
import Faq from '../components/Faq';
import Donate from '../components/Donate';

const TokenPage = () => {
    useEffect(() => {
        document.title = "Raccoon Girls | The Token";
    }, []);
    

    return(
        <div>
        <Header_token />
        <div data-aos="fade-up"><Buytoken /></div>
        <div data-aos="fade-up"><Tokenomics /></div>
        <div data-aos="fade-up"><Roadmap /></div>
        <div data-aos="fade-up"><Howto /></div>
        <div data-aos="fade-up"><Faq /></div>
        <div data-aos="fade-up"><Donate /></div>
        <Footer />
        </div>
    )
};


export default TokenPage;