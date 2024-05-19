import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {


  const [signState, setSignstate] = React.useState("Sign Up");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulaire soumis avec le nom :', name);
  };

  return (
    <div className='login'>
      <img src= {logo}  className='login-logo'/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={handleSubmit}>
          {signState === "Sign Up" ? <input type="text" placeholder='Your name'/> : <></>}
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button type="submit">{signState === "Sign In" ? "Sign In" : "Sign Up"} </button>
            <div className="form-help">
              <div className="remember">
                <input type="checkbox" /> <label htmlFor="remember">{signState==="Sign Up"? "I agree to the term and conditions": "Remember me"} </label>
              </div>
              <p>Need Help ?</p>
            </div>
        </form>
        <div className="form-switch">
           {signState === "Sign Up" ? <p>Already have an Account ? <span onClick={()=>setSignstate("Sign In")}>Sign In now</span></p> : <p>Don't have an Account ? <span onClick={()=>setSignstate("Sign Up")}>Sign Up now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login