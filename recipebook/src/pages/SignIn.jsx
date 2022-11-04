import React, {useState} from 'react'
import axios from 'axios'
import { toast} from 'react-toastify'
import Footer from '../components/Footer'
import MyNav from '../components/MyNav'
import {useNavigate} from 'react-router-dom'


const SignIn = ({history}) => {

    let navigate = useNavigate()

    const [values, setValues] = useState({
        email: '',
        password:''
 
    });

    const { email, password} = values;

    const handleChange = name => (e) =>{
        // console.log(e.target.value);
        setValues({...values, [name]: e.target.value});
    }


    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const {data} = await axios.post('/api/signin', {
                email,
                password
            });

            console.log(data);

            if  (data.success === true){
                setValues({ email: '', password:''});
                toast.success("Log In successfully");
                navigate("/user/dashboard");
                 
            }
            

        } catch(err){
            console.log(err);
         
        }
    }
    

    return (
      <div className="main signin"> <MyNav />
      <div className="container custom_className pt-5">
                
                <form className=" col-sm-6 offset-3 pt-1 signup_form">
                <h2 className="text-center mb-4">SIGN IN</h2>
                    
                    <div className="form-outline mb-4">
                        <input onChange={handleChange("email")} type="email" id="form4Example2" className="form-control" value={email}/>
                        <label className="form-label" htmlFor="form4Example2">Email </label>
                    </div>

                
                    <div className="form-outline mb-4">
                        <input onChange={handleChange("password")} type="password" id="form4Example3" className="form-control" value={password}/>
                        <label className="form-label" htmlFor="form4Example3">Password</label>
                    </div>
                
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-block mb-4">Log In</button>
                    <button className="btn btn-secondary btn-block mb-4"><a href="http://localhost:3000/signup">Don't Have an Account?</a></button>

                </form>
            </div>
      <Footer/>
      </div>
    )
  }

export default SignIn