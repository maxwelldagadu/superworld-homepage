import './TopLocations.scss';
import Paris from '../../assest/images/paris.jpg';
import Tour from '../../assest/images/tour.jpg';
import TimesSquare from '../../assest/images/timesquare.jpg';
import LearnMoreBtn from '../../components/learnmorebtn/LearnMoreBtn.jsx';
import React from 'react';


// Link that takes you to the learn more page
const linkLearnMore = "https://www.superworldapp.com/virtual-real-estate"; 

const TopLocations = () => {

  const observerRef = React.useRef(null);
  const headingElementRef = React.useRef(null);
  const paragraphElementRef = React.useRef(null);

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
        paragraphElementRef.current.style.transform = "translateY(0)";
      })
    },options);
    
    const target = observerRef.current; // Parent element that crosses the threshold

    if(!target) return;
    observer.observe(target);
    return () => observer.unobserve(target);
  },[]);


  return(
    <div className="toplocations section__padding-big" ref={observerRef}>
      <h2 className="heading__primary" ref={headingElementRef}>Featured</h2>
      <div className="toplocations__content">
        <div>
          <img src={Paris} alt="paris" />
        </div>
        <div>
          <img src={Tour} alt="tourist atrraction image" />
        </div>
        <div>
          <img src={TimesSquare} alt="times square" />
        </div>
      </div>
      <p className="heading__primary" ref={paragraphElementRef}>Check out Trending Virtual Real Estate!</p>
      <LearnMoreBtn text={"learn more"} link={linkLearnMore} />
    </div>
  )
}

export default TopLocations;