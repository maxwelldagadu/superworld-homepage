import './Footer.scss';
import FooterPageNavigation from './index.js';
import {socialLinks} from './index.js';
import AllSocials from '../../components/RenderSocials.jsx';
import RenderSocials from '../../components/RenderSocials.jsx';



const Footer = () => {
  return (
    <div className="footer section__padding-big">
      <div className="footer__container">
        <div className="footer__container-subscription">
          <h2 className="footer__heading">Subscription</h2>
          <p>
            Receive our exclusive research report on virtual real estate, non-fungible tokens and digital assets.
          </p>
        </div>
        <div className="footer__navigation_page">
          <h2 className="footer__heading">Superworld</h2>
          <ul className="footer__navigation_page-links">
            {/* Maps through the FooterPageNavigation array and render each superworld page in the footer seection*/}
            {FooterPageNavigation.map((page,index) => {
              return(
                <li className="footer__navigation_page-links_item" key={page.page + index}>
                  <a href={page.link}>{page.page}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="footer__getintouch">
          <h2 className="footer__heading">contact</h2>
          <span>Get in touch</span>
          <ul className="footer__getintouch-socials">
           {socialLinks.map((social,index) => {
             return <RenderSocials key={index} link={social.link} Icon={social.icon} />
           })}
          </ul>
        </div>
      </div>
      <p className="footer__copyright">
        <a href="https://www.superworldapp.com/terms-of-service/">
          Terms of Service
        </a>
        <a href="https://www.superworldapp.com/privacy-policy">
          Privacy and Policy
        </a>
        &#169;Superworld 2026
      </p>
    </div>
  )
}


export default Footer;