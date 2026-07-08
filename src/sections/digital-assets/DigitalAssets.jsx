import './DigitalAssets.scss';
import SuperWorldDigitalAssets from './index.js';
import LearnMoreBtn from '../../components/learnmorebtn/LearnMoreBtn.jsx';
import SuperworldDigitalAssets from './index.js';


const learnmorelink = "https://www.superworldapp.com/nft-salon";


const DigitalAssetsMain = ({image,description,link}) => {
  return(
    <div className="digital__assets-content_main">
      <a href={link}>
        <div className="digital__assets-content">
          <div className="digital__assets-content_image">
            <img src={image} alt="asset image" />
          </div>
          <div className="digital__assets-content_description">
            <p>{description}</p>
          </div>
        </div>
      </a>
    </div>
  )
}


const DigitalAssets = () => {
  return(
    <div className="digital__assets section__padding-big">
      <h2>
        <span>Digital assets</span>
        <span>& communities</span>
      </h2>
      <div className="digital__assets-container">
        {SuperworldDigitalAssets.map((assest,index) => {
          return (
          <DigitalAssetsMain
            key={index}
            image={assest.image} 
            description={assest.description} 
            link={assest.link}
          />
          )
        })}
      </div>
      <LearnMoreBtn text={"learn more"} link={learnmorelink} />
    </div>
  )
}

export default DigitalAssets;