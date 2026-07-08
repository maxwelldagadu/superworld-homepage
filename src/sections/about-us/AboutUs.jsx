import './AboutUs.scss';
import LearnMoreBtn from '../../components/learnmorebtn/LearnMoreBtn';
import React from 'react';


const AboutUs = () => {

  const observerRef = React.useRef(null);
  const headingElementRef = React.useRef(null);
  const learnMoreLink = "https://www.superworldapp.com/about-us";


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
    <div className="aboutus section__padding-big" ref={observerRef}>
      <h2 className="heading__primary" ref={headingElementRef}>
        Learn more about the SuperWorld vision and team
      </h2>
      <LearnMoreBtn text={"About us"} link={learnMoreLink}/>
    </div>
  )
}
 

export default AboutUs;