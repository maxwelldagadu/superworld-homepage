import './Interest.scss';
import InterestImages  from './index.js';
import React from 'react';



const Interest = () => {
  
  const [interestImagesDisplay,setInterestImagesDisplay] = React.useState([]);
  const [imageIndex,setImageIndex] = React.useState(1);

  // On initial screen load, display the first 12 Images
  React.useEffect(() =>{

    setInterestImagesDisplay(InterestImages.slice(0,12)) // Renders first 12 Images on initial page load;

    //Rendering 12 Images from the InterestImages array every 5 seconds

    const renderInterest = setInterval(function(){

    setImageIndex((pre)=>{
      const currentIndex = pre === 1 ? 2 : 1;
      const startIndex = (currentIndex - 1) * 12;
      const endIndex = (currentIndex * 1) * 12;
      setInterestImagesDisplay(InterestImages.slice(startIndex,endIndex));

      return currentIndex; // Update the imageIndex state to the next index (1 or 2)
    })
  
    },5000);

   return () => clearInterval(renderInterest);

  },[]);

  
  return(
    <ul className="interest section__padding-big">
      {interestImagesDisplay.map((image,index) => {
        return(
          <li key={index}>
            <img src={image} alt="Interest" />
          </li>
        )
      })}
    </ul>
  )
}


export default Interest;