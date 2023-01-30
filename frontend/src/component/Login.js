import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import './login.css'

const Login = () => {
  /*const useEffect=()=>{
    document.title='login user';
}*/
  const url_base='http://127.0.0.1:8000/'
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const [compteuser,setcompteuser]=useState('');
  const handelForm=async(e) => {
    const userformatdatalogin=new FormData()
    e.preventDefault();
    userformatdatalogin.append("email",email)
    userformatdatalogin.append("password",password)
    try{
      
      axios.post(url_base+'annonceur_login/',userformatdatalogin)
      .then(resp=> {if(resp.data.bool===true){
        console.log('a');
              localStorage.setItem('userloginstatus','true')
              localStorage.setItem('id',resp.data.id)

              setcompteuser('true')          //localStorage.setItem('user_id',resp.data.id)
    }
    if(resp.data.bool===false){console.log('false');
    setcompteuser('false')   }
    }
  )
  }catch(error){
       console.log(error)
    }
    const userloginstatus=localStorage.getItem('userloginstatus');
    if(userloginstatus==='true'){
      window.location.href='/'
    }};
  return (
  <>
     <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/> <br/> <br/>
{compteuser==='false' && <p class="text-success">le compte n'existe pas  </p>}
<section class="container2 forms">
<div class="forme login">
<div class="forme-content">
  <div class="header">Login</div>
  <form action="#">
    <div class="field input-field">
      <input  type="email" value={email} onChange={e=>
    setemail(e.target.value)}  name="email"   id="email"  placeholder="Email" class="input"/>
    </div>

    <div class="field input-field">
      <input type="password"   value={password}onChange={e=>
    setpassword(e.target.value)}  name="password"  id="password" placeholder="Password" class="password"/>
      <i class='bx bx-hide eye-icon'></i>
    </div>

    <div class="forme-link">
      <a href="#" class="forgot-pass">Forgot password?</a>
    </div>

    <div class="field button-field">
      <button type="submit" onClick={handelForm}>Login</button>
    </div>
  </form>

  <div class="forme-link">
    <span>Don't have an account? <a href="/register" >Signup</a></span>
  </div>
</div>

<div class="line"></div>


<div class="media-options">
            <a href="#" class="field google">
                <img src="images/google.png" alt="" class="google-img"/>
                <span>Login with Google</span>
            </a>
        </div>
</div>
</section>
    </>
  )
}

export default Login
