import './LearnMoreBtn.scss';

// This is the learn more button on the page

const LearnMoreBtn = ({link,text}) => {
  return(
    <div className="learnmore__button">
      <a href={link}>{text}</a>
    </div>
  )
}


export default LearnMoreBtn;