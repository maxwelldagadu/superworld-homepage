import './SpwrScience.scss';
import LearnMoreBtn from '../../components/learnmorebtn/LearnMoreBtn.jsx';


const SpwrScience = () => {

  const howItWorksLink = "https://www.superworldapp.com/how-it-works";
  return(
    <div className="spwr__science section__padding-big">
      <h2>The science</h2>
      <h2>Of Superworld</h2>
      <LearnMoreBtn text={"How it works"} link={howItWorksLink}/>
    </div>
  )
}


export default SpwrScience;