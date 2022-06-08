import React, { useState } from 'react'
import Logo from '../../../Komponen/Img/Rectangle 62.png';
// import GoogleButton from "react-google-button";
// import { auth } from '../../firebase';
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

import './Regist.css'

export const Regist = () => {

  const PindahHalamanS =()=>{
    window.location.href="/costumer"
  }
    // var axios = require('axios');
    // const navigate = useNavigate();
    // const authHandle = auth;
    // const provider = new GoogleAuthProvider

    // const [Email, setEmail] = useState("");
    // const [PassWord, setPassWord] = useState("")
    // const [Alert, setAlert] = useState(false)

//handle google auth
    // const handleGoogle = () => {
    //     signInWithPopup(authHandle, provider).then((data) => {
    //         console.log(data, "ini dataku");
    //         console.log(JSON.stringify(data.user.accessToken));
    //         sessionStorage.setItem("Token Costumer", data.user.accessToken);
    //         return navigate('/costumer')
    //     }).catch((err) => {
    //         console.log(err, "data ini error");
    //     })
    // }

// registrasi Admin
// const signUpAdmin = () =>{
//     var data = {
//       email: Email,
//       password: PassWord,
//       "role": "admin"
//     };
    
//     var config = {
//       method: 'post',
//       url: 'https://rent-cars-api.herokuapp.com/admin/auth/register',
//       headers: { 
//         'Content-Type': 'application/json'
//       },
//       data : data
//     };
    
//     axios(config)
//     .then(function (response) {
//       console.log(response.data.token, "Register suksesfull");
//       sessionStorage.setItem("Token", response.data.token)
//       navigate('/Dashboard')
//     })
//     .catch(function (error) {
//       console.log(error, "Error");
//     });
//   }
  return (
    <div className='container-login'>
        <div className='gambar-1'>
            {/* <img src={gambar1} alt='' className='gbr-1'/> */}
        </div>

        <div className='field-login'>
            <img src={Logo} alt="" className='property-login'/>
            <h2 className='property-login Title'>Create new Account</h2>

            <label className='property-login email-pass'>Email</label>
                <input type="email" placeholder='Contoh: johndee@gmail.com' className='input-field property-login' ></input>

                <label className='property-login email-pass'>Password</label>
                <input type='password' placeholder='6+ karakter' className='input-field property-login'></input>

                <button  className='btn-signup' variant='primary' size='md' id='btn' onClick={() => {PindahHalamanS()}}>Sign Up</button>
                {/* <GoogleButton
                  className='btn-google'
                  onClick={handleGoogle}
                /> */}
                <h6 className='btn-to-login'>Already have an account? Login
                  <a href='Login'>Sign In Here</a>
                </h6>
        </div>
    </div>
  )
}
