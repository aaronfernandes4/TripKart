import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  
  const { user } = useContext(AuthContext);
  const logout=()=>{
    localStorage.clear();
    
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">TripKart</span>
        </Link>
        {user ? <div>{ user.username} <Link to="/" onClick={logout} style={{color: "white"}}>Logout</Link></div> : (
          <div className="navItems">
            <button className="navButton"><a  href ='http://localhost:3001/users/new'  target="_blank"> Register</a></button>
            <button className="navButton"><a  href ='/login' > Login</a></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
