import { useEffect, useState } from 'react'
import './SignIn.scss'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../src/Context/AuthContext';
import { app } from '../firebaseConfig';


const SignUp = () => {

  useEffect(()=>{
    if(authSetter?.token) return navigate('/')
  })

    
      const [email, setEmail]= useState("");
      const [name, setName] = useState("");
      const [phone, setPhone]= useState("")
      const [pass, setPass] =useState("")
      const navigate= useNavigate();
      const authSetter= useAuth()


      const auth= getAuth(app)

      const Register= async()=>{
        try{

           await createUserWithEmailAndPassword(auth,email,pass).then(userCred=>{
             console.log(userCred?.user);
             authSetter?.setUser({userCred})
            localStorage.setItem("userCred", userCred?.user?.accessToken)
            authSetter?.setToken(userCred?.user?.accessToken)
            navigate('/')

           }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            console.log(errorCode)
            // ..
          });


        } catch(err){
            console.log(err);
        }
      }
     


  return (
    <div className='mainCon'>

      <div id="form-container">
      <h1 className="title">Sign Up</h1>
      <div className="label">Name</div>
			<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
      <div className="label">Phone</div>
			<input type="text" value={phone} onChange={(e)=>{setPhone(e.target.value)}} />
			<div className="label">Email</div>
			<input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
			<div className="label">Password</div>
			<input type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
			<input type="button" className="submit" onClick={Register} value="Sign Up" />
            <Link to='/login'>

			<div className="label msg">◆ You dont have an account? <a href="#">Sign In</a></div>
            </Link>
       </div>
    </div>
  )
}

export default SignUp