import './Header.scss';


const Header = () =>{
  return (
    <div className="header section__padding">
      <div className="header__container">
        <h1 className="header__title-main">
          SuperWorld
        </h1>
        <h2 className="header__title-sub">Make the world yours</h2>
        <div className="header__btn">
          <a href="https://map.superworldapp.com/map/">
            Start
          </a>
          <a href="https://azbit.com/exchange/SPWR_USDT">
            Buy <span style={{textTransform:"uppercase"}}>$SPWR</span>
          </a>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Header;