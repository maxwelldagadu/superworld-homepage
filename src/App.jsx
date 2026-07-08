import './App.scss';
import {
  Navbar,
  Header,
  City,
  Intro,
  VentureCapitalFunds,
  AngelInvestors,
  Features,
  Webapp,
  Technology,
  TopLocations,
  Podcast,
  Partnership,
  DigitalAssets,
  PressAndMedia,
  Testimonials,
  AboutUs,
  Interest,
  SpwrScience,
  Footer
} from './sections';
import {useRef} from 'react';

const App = () => {
  const navRef = useRef(null);
  return(
    <>
      <Navbar navRef = {navRef}/>
      <Header />
      <City />
      <Intro />
      <VentureCapitalFunds />
      <AngelInvestors />
      <Features />
      <Webapp />
      <Technology />
      <TopLocations />
      <Podcast navRef = {navRef}/>
      <Partnership />
      <DigitalAssets />
      <PressAndMedia />
      <Testimonials />
      <AboutUs/>
      <Interest />
      <SpwrScience />
      <Footer />
    </>
  )
}

export default App;