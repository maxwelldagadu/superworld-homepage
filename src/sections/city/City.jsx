import './City.scss';
import Cloud1 from '../../assest/images/cloud1.png';

/* This componet only renders the city block background image*/
const City = () =>{
  return(
    <div className="city__block">
      <div className="city__cloud1">
        <img src={Cloud1} alt="cloud image" />
      </div>
    </div>
  )
}

export default City;