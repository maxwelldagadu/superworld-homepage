import './Features.scss';
import {featuresArray} from './index';
import React from 'react';


/* Feature component*/

const FeatureComponent = ({svg,heading,feature}) => {
  return(
    <div className="features__main">
      <div className="features__icon">
        <img src={svg} alt="svg" />
      </div>
      <div className="features__detail">
        <h3>{heading}</h3>
        <p>{feature}</p>
      </div>
    </div>
  )
}

const Features = () => {

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
    <div className="features section__padding" ref={observerRef}>
      <div className="features__heading">
        <h2 className="heading__primary" ref={headingElementRef}>
          Everything Creators Need to Turn Their Map into Income
        </h2>
        <p className="paragraph__primary">
          SuperWorld gives you all the tools to create, share, and monetize your unique experiences and locations.
        </p>
      </div>
      
      <div className="features__container">
        {
          featuresArray.superFeatures.map((feature,index) => {
            return <FeatureComponent key={feature.heading+index} heading={feature.heading} 
            svg={feature.svg} feature={feature.feature}/> 
          })
        }
      </div>
    </div>
  )
}

export default Features;