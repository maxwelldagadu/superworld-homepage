import './Intro.scss';
import BaseLogo from '../../assest/logos/base-logo.png'

const Intro = () =>{
  return(
    <div className="about">
      <div className="about__container secondary__padding">
        <p>
          SuperWorld is transforming how people interact with the world around them.
        </p>
        <strong>Imagine if you could monetize your google maps and recommendations.</strong>
        <p>
          SuperWorld is a virtual world mapped onto the real world where anyone can personalize the real world around them with content, recommendations, events, and bookings from real world businesses and monetize activity at real-world locations they care about.
        </p>
        <p>
          Every plot of virtual real estate in SuperWorld is a digital asset that corresponds to real world space and lets users buy and sell properties, and monetize activity on their land.
        </p>
        <p>
          We are building a consumer application, focused on bringing digital and physical interactions, real world assets (RWAs) and decentralized physical infrastructure networks (DePIN) to real world locations.
        </p>
        <strong>
          Our token $SPWR powers the SuperWorld ecosystem on <span>Base <img src={BaseLogo} alt="base-logo"/> </span>
        </strong>
      </div>
    </div>
  )
}

export default Intro;