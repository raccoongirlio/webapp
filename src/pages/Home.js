import React, { useEffect } from 'react';
import Header from '../Header'; 
import Footer from '../Footer';
import Welcome from '../components/Welcome';
import Playtoearn from '../components/Playtoearn';
import Review from '../components/Review';
import Stats from '../components/Stats';
import Donate from '../components/Donate';

const HomePage = () => {
    
    useEffect(() => {
        document.title = "Raccoon Girls | Home";
    }, []);
    

    return(
        <div>
        <Header />
        <div data-aos="fade-up"><Welcome /></div>
        <div data-aos="fade-up"><Playtoearn /></div>
        <div data-aos="fade-up"><Review /></div>
        <div data-aos="fade-up"><Stats /></div>
        <div><Donate /></div>
        <Footer />
        </div>
    )
};


export default HomePage;
