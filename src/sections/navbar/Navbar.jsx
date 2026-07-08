import Superworldlogo from '../../assest/logos/Superworld.png';
import {
  GiHamburgerMenu,
  FaRegTimesCircle,
  IoMdArrowDropup,
  BsTwitterX,
  FaTiktok,
  FaInstagram,
  FaTelegramPlane,
  FaDiscord,
  TbBrandYoutubeFilled,
  FaLinkedin,
  FaFacebook,
  MdContactSupport,
  mainSectionArray,
  subSectionArray
} from './index';
import './Navbar.scss';
import { useEffect,useRef,useState } from 'react';
import RenderSocials from '../../components/RenderSocials.jsx';
import {socialLinks} from '../../sections/footer/index.js';


const Navbar = () => {
  const [slideWindow,setSlideWindow] = useState(false);
  const [apiData,setApiData] = useState({});

  // Fetches Api token data from Azbit API and sets the state with the data
  const fetchData = async () => {
    try{
      const apiURL = "https://data.azbit.com/api/tickers";
      const response = await fetch(apiURL);
      const getData = await response.json();
      if(!getData) return;
      const spwrCode = "SPWR_USDT";
      const getSPWR = getData.find((token) => token.currencyPairCode === spwrCode);
      // Re-structuring getSPWR into a new object
      const SPWRToken = {
        price: getSPWR.price,
        price24hAgo: getSPWR.price24hAgo,
        volume: getSPWR.volume24h
      };

      setApiData(SPWRToken); // Updating the state
      
    }
    catch(error){
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData(); // Fetches the data on initial page load
    
    // Fetching and updating the state variable "apiData" every 5 seconds
    const getInterval = setInterval(fetchData,5000);

    return () => clearInterval(getInterval); // Clears interval
  },[]);

  return (
    <nav className=" navbar section__padding">
      <div className="navbar__hamburger">
        <GiHamburgerMenu onClick={() => setSlideWindow(!slideWindow)}/>
      </div>

      <div className="navbar__spwr-insight">
        {/* Grid alignment works best with the insight container*/}
        <span>Token</span>
        <span>Price</span>
        <span>Price 24h ago</span>
        <span>volume</span>
        <span>Trend</span>
        <span style={{color:"#fff",textTransform:"uppercase"}}>SPWR</span>
        {/* Passing the real time token data */} 
        <span style={{color:"#fff"}}>
          {apiData?.price ? `$${apiData?.price.toFixed(5)}` : "Loading..."}
          </span>
        <span style={{color:"#fff"}}>
          {apiData?.price24hAgo ? `$${apiData?.price24hAgo.toFixed(5)}` : "Loading..."}
          </span>
        <span style={{color:"#fff"}}>
          {apiData?.volume ? `$${Math.ceil(apiData?.volume).toLocaleString()}` : "Loading..."}
          </span>
        <span style={{color:"#1aca9a"}}>Bullish <IoMdArrowDropup/></span>
      </div>
      {/*This container renders SPWR insight vertically. Purposely for mobile display. It is set to display:none by default. Displays with media query min-width: 1190px*/}
      <div className="navbar__spwr-mobileInsight">
        <h3 className="navbar__spwr-mobileInsight_heading"><span style={{textTransform:"uppercase"}}>SPWR</span> insight</h3>
        <ul className="navbar__spwr-mobileInsight_container gradient__bg">
          <li className="navbar__spwr-mobileInsight_data">
            <span>Token</span>
            <span style={{color:"#fff",textTransform:"uppercase"}}>SPWR</span>
          </li>
          <li className="navbar__spwr-mobileInsight_data">
            <span>Price</span>
            <span style={{color:"#fff"}}>
              {apiData?.price ? `$${apiData.price?.toFixed(5)}` : "Loading..."}
            </span>
          </li>
          {/* Passing the real time token data */} 
          <li className="navbar__spwr-mobileInsight_data">
            <span>Price 24h ago</span>
            <span style={{color:"#fff"}}>
              {apiData?.price24hAgo ? `$${apiData.price24hAgo?.toFixed(5)}` : "Loading..."}
            </span>
          </li>
          <li className="navbar__spwr-mobileInsight_data">
            <span>volume</span>
            <span style={{color:"#fff"}}>
              {apiData?.volume ? `$${Math.ceil(apiData?.volume).toLocaleString()}` : "Loading..."}
            </span>
          </li>
          <li className="navbar__spwr-mobileInsight_data">
            <span>Trend</span>
            <span className="navbar__mobile-bullish" style={{color:"#1aca9a"}}>Bullish <IoMdArrowDropup/></span>
          </li>
          <li className="navbar__spwr-mobileInsight_buy">
            <a href="https://azbit.com/exchange/SPWR_USDT">
              Buy <span style={{textTransform:"uppercase"}}>$SPWR</span>
            </a>
          </li> 
        </ul>
      </div>
      {/* Superworld logo*/}
      <div className="navbar__logo">
        <a href="https://www.superworldapp.com/">
          <img src={Superworldlogo} alt="Superworld logo" />
        </a>
      </div>
      {/*Social medial links */}
      <div className="navbar__socials">
        <h3 className="navbar__socials-heading">Our socials</h3>
        <ul className="navbar__socials-links gradient__bg">
          <li>
            <a href="https://www.tiktok.com/@superworldapp?_t=ZP-8y8aCL7EhP5&_r=1">
              TikTok
              <FaTiktok className="navbar__socials-links_logo"/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/superworldapp/">
              LinkedIn
              <FaLinkedin className="navbar__socials-links_logo"/>
            </a>
          </li>
          <li>
            <a href="https://x.com/superworldapp?s=20">
              X
              <BsTwitterX className="navbar__socials-links_logo"/>
            </a>
          </li>
          <li>
            <a href="https://web.facebook.com/superworldapp?__mmr=1&_rdc=1&_rdr#">
              Facebook
              <FaFacebook className="navbar__socials-links_logo"/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/superworldapp/?hl=en">
              Instagram
              <FaInstagram className="navbar__socials-links_logo"/>
            </a>
          </li>
          <li>
            <a href="https://discord.com/invite/JP3b8TGZC4">
              Discord
              <FaDiscord className="navbar__socials-links_logo"/>
            </a>
          </li>
          <li>
            <a href="https://t.me/superworldtoken">
              Telegram
              <FaTelegramPlane className="navbar__socials-links_logo"/>
            </a>
          </li>
          <li>
            <a href="https://youtube.com/@superworldapp?si=pPnc09AKx3qQnzYH">
              Youtube
              <TbBrandYoutubeFilled className="navbar__socials-links_logo" /> 
            </a>
          </li>
        </ul>
      </div>
      {/*Sales contact */}
      <div className="navbar__contactus">
        <a href="https://www.superworldapp.com/get-in-touch">Contact sales</a>
      </div>
      <div className="navbar__contactus-icon">
        <a href="https://www.superworldapp.com/get-in-touch">
        <MdContactSupport style={{color:"#fff",fontSize:"1.8rem"}}/></a>
      </div>

      {/* Window slider */}
      
      <div className={`navbar__slide-window gradient__bg section__padding 
        ${slideWindow ?'navbar__slide-window_show': ''}`}>
        <div className={`navbar__slide-window-nav ${slideWindow ? 'navbar__slide-window-nav_show':''}`}>
          <div className="navbar__hamburger">
            <FaRegTimesCircle onClick={() => setSlideWindow(!slideWindow)}/>
          </div>

          {/* Superworld logo */}
          <div className="navbar__logo">
            <a href="https://www.superworldapp.com/">
              <img src={Superworldlogo} alt="Superworld logo" />
            </a>
          </div>

          <div className="navbar__contactus">
            <a href="https://www.superworldapp.com/get-in-touch">Contact sales</a>
          </div>
          <div className="navbar__contactus-icon">
            <a href="https://www.superworldapp.com/get-in-touch">
            <MdContactSupport style={{color:"#fff",fontSize:"1.8rem"}}/></a>
          </div>
        </div>

        <h2 className={`navbar__slide-window_menu ${slideWindow ? 'navbar__slide-window_menu-show' : ''}`}>Menu</h2>

        <div className={`navbar__slide-window_socials ${slideWindow ? 'navbar__slide-window_socials-show' : ''}`}>
          <div className="navbar__slide-window_socials-page">
            <h2 className="navbar__slide-window_heading">Main sections</h2>
            <div className="navbar__slide-window_socials-page_links">
              {mainSectionArray.map((section,index) => {
              return(
                <a tabIndex="0" key={index} href={section.link}>{section.page}</a>
              )
              })}
            </div>
          </div>

          <div className="navbar__slide-window_socials-page">
            <h2 className="navbar__slide-window_heading">Sub sections</h2>
            <div className="navbar__slide-window_socials-page_links">
              {subSectionArray.map((section,index) => {
              return(
                <a tabIndex="0" key={index} href={section.link}>{section.page}</a>
              )
              })}
            </div>
          </div>

          <div className="navbar__slide-window_socials-page">
            <h2 className="navbar__slide-window_heading">Contact sections</h2>
            <span>Get in touch</span>
            <ul className="footer__getintouch-socials">
              {socialLinks.map((social,index) => {
                return <RenderSocials key={index} link={social.link} Icon={social.icon} />
              })}
            </ul>
          </div>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar;