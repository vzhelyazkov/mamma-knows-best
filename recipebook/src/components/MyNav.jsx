import logo from "../images/logo.png"
import axios from "axios"
import {toast} from "react-toastify"
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'



function MyNav() {

  let loggedout = useNavigate()


  const logOut = () => {
    axios.get("api/logout/")
    .then(result => {
      toast.success("Logged Out Successfully");
      localStorage.removeItem("token");
      loggedout("/home");
    })
       .catch(error =>{
        console.log(error);
       })
     

  }

  
  return (
    <section className="top-nav">
    <div>
    <a href="http://localhost:3000/home"> <img className="granny" src={logo} alt="granny"/></a>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' for="menu-toggle">
    <div className='menu-button'></div>
  </label>
    <ul className="menu">
    <li className="nav-item">     
                                <Link className="nav-link" to ="/" >Home </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to ="/signin" >Sign In </Link>
                           </li>

                          <li className="nav-item">
                                <Link className="nav-link" to ="" onClick={logOut} >Log out </Link>
                           </li>
   
    </ul>
  </section>

  

  );
}

export default MyNav;