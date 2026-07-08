import './Testimonials.scss';
import LearnMoreBtn from '../../components/learnmorebtn/LearnMoreBtn';
import TestimonialsArray from './index.js';
import SliderBtn from '../../components/sliderBtn/SliderBtn.jsx';
import React from 'react';

// Testimonials component 
const TestimonialsComponent = ({testimonial,name,profession,link,photo}) =>{
  return(
    <div className="testimonials__content">
      <div className="testimonials__content-about">
        <p>"{testimonial}"</p>
        <div className="testimonials__content-user_info">
          <h3>{name}</h3>
          <span>, {profession}</span>
        </div>
        <LearnMoreBtn text={"view source"} link={link}/>
      </div>
      <div className="testimonials__content_user-photo">
        <img src={photo} alt="user photo"/>
      </div>
    </div>
  )
}


// Maps through the array and render them with the TetimonialsComponent

const Testimonials = () => {

  const slider = React.useRef(null);

    const testimonialSlide = (direction) => {
    const {current} = slider;

    const rowGap = 5 * 16; /* There's a 5rem row-gap between each testimonial. For the testimonial 
    to be well centered on each slide, the 5rem has to be converted into pixels and added to the
    testimonial width (clientWidth) */

    if(!current) return;
    const testimonials = current.firstElementChild;
    const scrollLenght = testimonials.firstElementChild.clientWidth + rowGap;

    current.scrollBy(
      {left: direction === "left" ? - scrollLenght : +scrollLenght,
      behavior: "smooth"
    })
  }


  return(
    <div className="testimonials section__padding-slider_testimonial">
      <div className="testimonials__slider" ref={slider}>
        <div className="testimonials__container">
          {TestimonialsArray.map((testimonial,index) => {
            return (
              <TestimonialsComponent 
              key={testimonial.name + index}
              testimonial={testimonial.testimonial}
              name={testimonial.name}
              profession={testimonial.profession}
              link={testimonial.link}
              photo={testimonial.photo}
              />
            )
          })}
        </div>
      </div>
      <div className="testimonials__sliderBtn">
        <SliderBtn left={() => testimonialSlide("left")} right={() => testimonialSlide("right")}/>
      </div>
    </div>
  )
}

export default Testimonials;