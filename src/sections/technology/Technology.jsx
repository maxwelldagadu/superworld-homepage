import './Technology.scss';
import Checkmark from '../../assest/images/checkmark.png';
import AI from '../../assest/images/AI.svg';
import Blockchain from '../../assest/images/blockchain.svg';
import React from 'react';




const Technology = () => {
  
  const observerRef = React.useRef(null);
  const headingElementRef = React.useRef(null);

  React.useEffect(() => {

    // Observing the heading. Scrolls up upon parent container intersection
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2
    }

    const observer = new IntersectionObserver((entries)=>{
      // Looping through the observer results and running logic
      entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        headingElementRef.current.style.transform = "translateY(0)";
      })
    },options);
    
    const target = observerRef.current; // Parent element that crosses the threshold

    if(!target) return;
    observer.observe(target);
    return () => observer.unobserve(target);
  },[]);


  return(
    <div className=" technology section__padding-big" ref={observerRef}>
      <h2 className="heading__primary" ref={headingElementRef}>Technology That Powers Your Map</h2>
      <div className="technology__content">
        <div className="technology__content-detail">
          <h3>Powered by AI</h3>
          <div className="technology__content-detail_info">
            <div>
              <img src={Checkmark} alt="check mark" />
              <p>Discover hidden gems and trending spots based on your interests.</p>
            </div>
            <div>
              <img src={Checkmark} alt="check mark" />
              <p>Plan trips or experiences in minutes.</p>
            </div>
            <div>
              <img src={Checkmark} alt="check mark" />
              <p>Get smart recommendations using AI.</p>
            </div>
          </div>
          <div className="technology__content-detail_logo">
            <img src={AI} alt="AI logo" />
          </div>
        </div>

        <div className="technology__content-detail">
          <h3>Powered by Blockchain</h3>
          <div className="technology__content-detail_info">
            <div>
              <img src={Checkmark} alt="check mark" />
              <p>Buy and sell virtual properties linked to real-world locations.</p>
            </div>
            <div>
              <img src={Checkmark} alt="check mark" />
              <p>Mint your experiences as digital assets and earn rewards.</p>
            </div>
            <div>
              <img src={Checkmark} alt="check mark" />
              <p>Enjoy transparent, secure transactions.</p>
            </div>
          </div>
          <div className="technology__content-detail_logo">
            <img src={Blockchain} alt="AI logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology;