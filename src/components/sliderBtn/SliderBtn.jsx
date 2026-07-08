import './SliderBtn.scss';


const SliderBtn = ({left,right}) => {
  return(
    <div className="slider__btn">
      <button type="button" onClick={left}>&larr;</button>
      <button type="button" onClick={right}>&rarr;</button>
    </div>
  )
}


export default SliderBtn;