import React, {useState} from 'react'
import MyNav from '../components/MyNav'
import Footer from '../components/Footer'
import axios from 'axios'
import { toast } from 'react-toastify';



function Signup()  {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password:''
    });

    const {name, email, password} = values;

    const handleChange = name => (e) =>{
        // console.log(e.target.value);
        setValues({...values, [name]: e.target.value});
    }


    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const {data} = await axios.post('/api/signup', {
                name,
                email,
                password
            });

            console.log(data);

            if  (data.success === true){
                setValues({name: '', email: '', password:''});
                toast.success("Sign up successful, please Login!");
              
            }
            

        } catch(err){
            console.log(err.response.data.error);
            toast.error(err.response.data.error);
         
        }
    }
    
            

    return (
      <div className="main signin"> <MyNav />
      <div className="container custom_className pt-5">
                
                <form className=" col-sm-6 offset-3 pt-1 signup_form">
                <h2 className="text-center mb-4">SIGN UP</h2>

                    <div className="form-outline mb-4">
                        <input onChange={handleChange("name")} type="text" id="form4Example1" className="form-control" value={name}/>
                        <label className="form-label " htmlFor="form4Example1">Name</label>
                    </div>

                    
                    <div className="form-outline mb-4">
                        <input onChange={handleChange("email")} type="email" id="form4Example2" className="form-control" value={email}/>
                        <label className="form-label" htmlFor="form4Example2">Email </label>
                    </div>

                
                    <div className="form-outline mb-4">
                        <input onChange={handleChange("password")} type="password" id="form4Example3" className="form-control" value={password}/>
                        <label className="form-label" htmlFor="form4Example3">Password</label>
                    </div>
                
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-block mb-4">Register</button>
                    <button className="btn btn-secondary btn-block mb-4"><a href="http://localhost:3000/signin">Already Registered?</a></button>

                </form>
            </div>
      <Footer/>
      </div>
    )
  }

export default Signup