import './PressAndMedia.scss';
import Press from './index.js';


const PressContentComponent = ({image,title,text,link}) =>{

  return(
     <div className="press__container-content">
      <div className="press__container-image">
        <img src={image} alt="press image" />
      </div>
      <div className="press__container-info">
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="press__container-info_link">
          <a href={link}>+</a>
        </div>
      </div>
    </div>
  )
}


const PressAndMedia = () => {
  return(
    <div className="press section__padding-big">
      <div className="press__heading">
        <h3>Interviews and articles</h3>
        <h3>Press & media</h3>
      </div>
      <div className="press__container">
       {Press.map((press,index) => {
        return (
          <PressContentComponent key={press.title + index} title={press.title}
          image={press.image} link={press.link} text={press.text} />
        )
       })}
      </div>
    </div>
  )
}


export default PressAndMedia;