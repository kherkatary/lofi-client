import { useEffect, useState } from 'react'
import './SignIn.scss'
import './styles.scss'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../src/Context/AuthContext';
import { app } from '../firebaseConfig';


const SignIn = () => {

  useEffect(()=>{
    if(authSetter?.token) return navigate('/')
  })

      const [email, setEmail]= useState("");
      const [pass, setPass] =useState("")
      const [status, setStatus]= useState()
      const navigate= useNavigate();
      const authSetter= useAuth()
      
      const auth= getAuth(app)
      

      const logUser= async()=>{
        try{

           await signInWithEmailAndPassword(auth,email,pass).then(userCred=>{
             console.log(userCred?.user);
             authSetter?.setUser({userCred})
            localStorage.setItem("userCred", userCred?.user?.accessToken)
            authSetter?.setToken(userCred?.user?.accessToken)
            navigate('/')

           }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorCode) setStatus(errorCode)
            

          });


        } catch(err){
            console.log(err);
        }
      }
     


  return (
    <div className='loginBox'>

    <div className='leftSide'>
    <h1>Welcome to Lofi Hub</h1>
    <h2>Play Lofi Music 24x7</h2>
    </div>
    <div className='mainCon'>
      <div id="form-container">
      <h1 className="title">Sign in</h1>
       <div style={{color:"red"}}>{status}</div>
       
			<div className="label">Email</div>
			<input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
			<div className="label">Password</div>
			<input type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
			<input type="button" className="submit" onClick={logUser} value="Sign in" />
      <Link to='/signup'>
			<div className="label msg">◆ You dont have an account? <a href="#">Sign up</a></div>
      </Link>
       </div>
    </div>
       

      
    </div>
  )
}

export default SignIn