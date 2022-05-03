import { 
  faBed,
  faPlane,
  faCar,
  faTaxi 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
          <FontAwesomeIcon icon={faBed} />
          <span>Stays</span>
          </div>
          <div className="headerListItem">
          <FontAwesomeIcon icon={faPlane} />
          <span>Flights</span>
          </div>
          <div className="headerListItem">
          <FontAwesomeIcon icon={faCar} />
          <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
          <FontAwesomeIcon icon={faBed} />
          <span>Attractions</span>
          </div>
          <div className="headerListItem">
          <FontAwesomeIcon icon={faTaxi} />
          <span>Airport taxis</span>
          </div>
      </div>
      <h1 className="headerTitle">A lifetime of discount? it's genius</h1>
      <p className="headerDesc">
        Get rewarded for your travels - unlock instant savings of 10% or more with a free Davbooking account
      </p>
      <button className="headerBtn">Sign in / Register</button>
    </div>
  </div>
  )
}

export default Header