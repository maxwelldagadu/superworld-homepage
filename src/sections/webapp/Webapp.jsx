import './Webapp.scss';
import WebappImage from '../../assest/images/superweb.png';

const Webapp = () => {
   return( <div className="webapp section__padding-big">
      <div className="webapp__image">
        <img src={WebappImage} alt="web app image" />
      </div>
      <div className="webapp__content">
        <p>
          Own a Piece of the Map. <span>Benefit from Every Interaction.</span>
        </p>
        <p>
          In SuperWorld, every plot of virtual real estate is tied to real-world locations. Monetize all user activity in your location—whether it's exploring, sharing content, hosting events, or shopping. 
        </p>
        <p>
          Support the places you love while benefiting from what happens there, both online and offline.
          Learn How It Works
          Arrow White
        </p>
        <a href="https://www.superworldapp.com/virtual-real-estate">Learn how it works <span>&rarr;</span> </a>
      </div>
    </div>
  )
}

export default Webapp;