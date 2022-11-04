import React, {useState, useEffect} from 'react';
import MyNav from '../../components/MyNav'
import Footer from '../../components/Footer'


const UserDashboard = () => {

    const [profile, setProfile] = useState("");
    const {name, email, role, createdAt} = profile;

    useEffect(()=>{
        fetch('/api/getme')
        .then(res =>{
            return res.json()
        })
        .then(result =>{
            //console.log(result)
            setProfile(result.user)
        })
        .catch(error => {
            console.log(error);
        })
    }, []);
    
  return (
    <div class="main">

    <MyNav/>

    <div className="container-fluid dashboard_container d-flex justify-content-center mt-4">
        <div className="row">
            <div className="col-sm-4 ">
               <div className="card card_dashboard">
               <div className="card-header ">
                    <b>User Dashboard</b>    
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> Name: {name}</li>
                    <li className="list-group-item"> E-mail: {email}</li>
                    <li className="list-group-item"> Joined at: {new Date(createdAt).toLocaleDateString()}</li>
                    <li className="list-group-item"> {role===1 ? "Admin" : "Registered User"}</li>
                </ul>
               </div>
            </div>
            <div className="col-sm-8">
            </div>
        </div>

    </div>
     
    <Footer/>    
                
    </div>
    
  )
};

export default UserDashboard;