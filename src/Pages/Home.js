import React from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Hero from '../Components/Hero/Hero'
import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';
import Welcome from '../Components/Welcome/Welcome';

function Home(props) {
  return (
    <div className="homeParentDiv">
      <Header />
     
      {/* <Banner /> */}
      <Hero/>
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
 
