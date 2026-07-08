

// This component is what displays the socials
// Styling is actually in Footer.scc

const RenderSocials = ({link,Icon}) => {
  return(
    <li>
      <a href={link}>
        <Icon  className="footer__getintouch-socials-icon"/>
      </a>
    </li>
  )
}


export default RenderSocials;