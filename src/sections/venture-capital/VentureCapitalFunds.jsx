import './VentureCapitalFunds.scss';
import React from 'react';
import {logos} from './vc-companies';



const  VentureCapitalFunds = () => {
  const observerRef = React.useRef(null);
  const headingElementRef = React.useRef(null);

  React.useEffect(() => {

    /* Clones the ventureCapital__slider-container div and appends it to the parent div.
      this makes the 2 slides loop dynamically without any break/space in between. 
    */
    const mainDiv = document.querySelector('.ventureCapital__slider-container');
      
    const sliderDiv = document.querySelector('.ventureCapital__slider-slides');

    const extendedSlider = sliderDiv.cloneNode(true);
    mainDiv.appendChild(extendedSlider);
  },[]);


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
    <div className="ventureCapital" ref={observerRef}>
      <div className="ventureCapital__sub-heading">
        <h2 ref={headingElementRef}>
          Venture Capital Funds
        </h2>
        <h3>
          SuperWorld is backed by a diverse group of world-class venture capital firms and industry-leading 
          angels who share our vision for the future of immersive technology, AI, and decentralized ownership.
        </h3>
      </div>

      <div className="ventureCapital__container">
        <div className="ventureCapital__slider-container">
          <div className="ventureCapital__slider-slides">
            { logos.map((logo,index) => {
              return <img key={index} src={logo} alt="vc-logo" />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default VentureCapitalFunds;