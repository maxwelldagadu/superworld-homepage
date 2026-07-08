import './Podcast.scss';
import { FaYoutube,FaSpotify } from "react-icons/fa";
import { SiApplepodcasts } from "react-icons/si";
import Hrish from '../../assest/images/podcast/Hrish.png';
import PodcastThumbnails from './index.js';
import React from 'react';
import SliderBtn from '../../components/sliderBtn/SliderBtn.jsx';

const PodcastVideo = ({thumbnail,link}) => {

  return(
    <div className="podcast__container-content_video">
      <img src={thumbnail} alt="podcast thumbnail"/>
      <div className="podcast__container-content_video-social">
        <a href={link}><FaYoutube/></a>
      </div>
    </div>
  )
}



const Podcast = () => {

  const slidePodcast = React.useRef(null);
  const podcastRef = React.useRef(null);
  const {intersectionObj,setIntersectionObj} = React.useState({});

  const slider = (direction) => {
    
    /* Converted the 7rem gap into pixels (112px) and added it to the clientWidth(content width)
    this makes sure each video is centered on each slide. When we have 500px or lesser
    screen width, we check that and add the corressponding pixel ( we now have 4rem gap betwen each video. 
    That 4rem gap is 64px*/
    const windowsCurrentWith = window.innerWidth; // Current viewport width
    const gapIntoPixels = windowsCurrentWith <= 600 ? 64 : 112; 

    const container = slidePodcast.current;
    if (!container)return;
    const contentDiv =  container.firstElementChild;
    const childWidth = contentDiv.firstElementChild.clientWidth + gapIntoPixels;
    container.scrollBy({left: direction === "left" ? -childWidth : +childWidth, behavior: "smooth"});
  }


  return(
    <div className="podcast section__padding-slider">
      <div className="podcast__about">
        <div className="podcast__about-connect">
          <h2>
            Start streaming and listening to 
            <p>
              <span>Building a better world podcast</span>
            </p> 
            today!
          </h2>
          <div>
            <a href="https://www.youtube.com/@SuperWorldApp">
              <FaYoutube />
            </a>
            <a href="">
              <SiApplepodcasts />
            </a>
            <a href="">
              <FaSpotify />
            </a>
          </div>
        </div>
        <div className="podcast__about-host">
          <img src={Hrish} alt="Hrish Lotlikar" />
          <div className="podcast__about-host_bar">&nbsp;</div>{/* this empty div is the horizontal styled bar*/}
          <div className="podcast__about-host_name">
            <p>Hrish Lotlikar</p>
            <p>Co-Founder and CEO of SuperWorld</p>
          </div>
        </div>
      </div>

      <div className="podcast__container">
        <div className="podcast__container-slide" ref={slidePodcast}>
          <div className="podcast__container-content">
            { PodcastThumbnails.map((podcast,index) =>{
              return <PodcastVideo key={index} thumbnail={podcast.thumbnail} link={podcast.link}/>

            })}
          </div>
        </div>
        <SliderBtn left={() => slider("left")} right={() => slider("right")}/>
      </div>
    </div>
  )
}


export default Podcast;