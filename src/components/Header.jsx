import PropTypes from "prop-types"
import { NavLink } from "react-router-dom";
import { logoHeader } from '../data/data'

function Header({
    navLinks,
    activeLink
   
  }
  
)
  
 {
 
     return (
    <header>
      
      <div className="head-container">
            <img src={logoHeader} className="logo"  id ="logo" alt="Dulce-Capricho" />
            <h1 className="titulo"> Dulce Capricho</h1>     
        </div>
   
      <div className="nav-container">
        <nav>
            <ul>
            {navLinks.map((link, index) => (
              
                  <li className={`${activeLink===link.url ? "activo" : ""}`}  
                    key={index}>
                    <NavLink className="nav-link" to={link.url}>
                      {link.name}
                    </NavLink>
                                       
                  </li>
                ))}
            
            </ul>
        </nav>
    </div>

    </header>
  )
}

Header.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ), 
  activeLink: PropTypes.string.isRequired, 
}
export default Header
