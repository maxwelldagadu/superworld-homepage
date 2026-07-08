import { angelInvestors } from './index.js';
import './AngelInvestors.scss';
import {FaLinkedin } from "react-icons/fa6";
import SliderBtn from '../../components/sliderBtn/SliderBtn.jsx';
import React, { useRef } from 'react';

/* Investors rendering component*/ 

const Investor = ({photo,name,linkedin,work}) =>{

  return(
    <div className="angelInvestors__main">
      <div className="angelInvestors__main-image">
        <img src={photo} alt="investor image" />
      </div>
      <div className="angelInvestors__main-info">
        <div className="angelInvestors__main-info_connect">
          <span>{name}</span>
          <a href={linkedin}><FaLinkedin className="angelinvestor__linkedin"/></a>
        </div>
        <span className="angelInvestors__main-info_connect-work">{work}</span>
      </div>
    </div>
  )
}

const AngelInvestors = () =>{

  const sliderContainer = useRef(null);
  const observerRef = useRef(null);
  const headingElementRef = useRef(null);

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

  
  // Invetors photo slide logic. Renders the investors
  const slide = (direction) => {
    const {current} = sliderContainer;
    if(!current) return;
    let scrollLength;
    /* There's a 3.3rem column gap between the investor container.
      That gap is being converted into pixels and added to the investor container's width.
      This centers each investor container uppon each slide
    */
    const gap = 52.8; // The converted column gap into pixels
    scrollLength= current.clientWidth;
    const scrollContainer = current.firstElementChild;
    const investorWidth = scrollContainer.firstElementChild.clientWidth + gap;
    const windowWidth = window.innerWidth; // Current viewport window width
    if(windowWidth <= 500) scrollLength = investorWidth;
    current.scrollBy({left: direction === "left" ? - scrollLength : scrollLength,behavior: "smooth"});
  }


  return(
    <div className="angelInvestors" ref={observerRef}>
      <h2 ref={headingElementRef}>Angel investors</h2>
      <div className="angelInvestors__slider" ref={sliderContainer}>
        <div className="angelInvestors__container">
          {angelInvestors.map((investor,index) => {
            return <Investor key={index+investor.name} photo={investor.photo}
                    name={investor.name} linkedin={investor.linkedin} work={investor.work}
            />
          })}
        </div>
      </div>
      <SliderBtn left={() => slide("left")} right={() => slide("right")}/>
    </div>
  )
}

export default AngelInvestors;