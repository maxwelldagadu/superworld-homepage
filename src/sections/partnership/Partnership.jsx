import './Partnership.scss';
import LearnMoreBtn from '../../components/learnmorebtn/LearnMoreBtn.jsx';
import SITicket from '../../assest/images/si-tickets.svg';

const learnMorelink = "https://map.superworldapp.com/map/si-tickets";

const Partnership = () => {
  return(
    <div className="partnership section__padding-big">
      <div className="partnership__si-tickets">
        <img src={SITicket} alt="SI ticket" className="partnership__si-tickets_img"/>
      </div>
        
      <div className="partnership__youtube-video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/olvHJwUx7Qo?si=1NCeamEiI5ah4wuC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
      </div>
      <LearnMoreBtn text={"learn more"} link={learnMorelink} className="partnership__learn-more"/>
    </div>
  )
}


export default Partnership;