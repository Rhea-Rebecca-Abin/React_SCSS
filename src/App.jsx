import React from 'react';
import'./App.scss';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Cardssection from './components/Cardsection/Cardsection';
import FlexCardSection from './components/FlexCardSection/FlexCardSection';
import Footer from './components/Footer/Footer';
const App=()=>{
  return (
    <>
     <Navbar />
     <Jumbotron/>
     <Cardssection/>
     <FlexCardSection/>
     <Footer/>
    </>
  );
};
export default App;