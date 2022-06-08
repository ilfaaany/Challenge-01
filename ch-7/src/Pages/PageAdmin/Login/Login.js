import React, { useState } from 'react'
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { useNavigate } from 'react-router';
// import { auth } from '../../../firebase';
// import GoogleButton from 'react-google-button';
import gambar1 from '../../../Komponen/Img/Rectangle 62.png'

import './Login.css'

export const Login = () => {
  const PindahHalamanS =()=>{
    window.location.href="/Dashboard"
  }
//   var axios = require('axios');
//   const authHandle = auth;
//   const provider = new GoogleAuthProvider();

//   const [Email, setEmail] = useState("");
//   const [Password, setPassword] = useState("")
//   let Navigate = useNavigate();
//   const [Alert, setAlert] = useState(false)

// //handle google auth
//   const handleGoogle =() => {
//     signInWithPopup(authHandle, provider).then ((data) => {
//       if (data) {
//         console.log(data, "ini dataku");
//         console.log(JSON.stringify(data.user.accessToken));
//         sessionStorage.setItem("Token from User", data.user.accessToken);
//         return Navigate('/costumer')
//       }
//     })
//       .catch((err) => {
//         console.log(err, "ini error")
//       })
//   }

// //admin login
//     const handleButton = (e) => {
    
//       var data = {
//         "email": Email,
//         "password": Password
//       };
  
//       var config = {
//         method: 'post',
//         url: 'https://rent-car-appx.herokuapp.com/admin/auth/login',
//         headers: { 
//           'Content-Type': 'application/json'
//         },
//         data : data
//       };
  
//       axios(config)
//       .then(function (response) {
//         console.log(response.data, "Login Successfull");
//         Navigate('/Dashboard')
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
  
//     }
  return (
    <div className='container-login'>
      <div className='gambar-1'>
          {/* <img src={gambar1} alt='' className='gbr-1'/> */}
      </div>

      <div className='field-login'>
          <img src={gambar1} alt='' className='property-login' />
          <h2 className='property-login Title'>Welcome, Admin BCR</h2>
          

          <label className='property-login email-pass'>Email</label>
          <input type='email' placeholder='Contoh: johndee@gmail.com' className='input-field property-login'></input>

          <label className='property-login email-pass'>Password</label>
          <input type='password' placeholder='6+ karakter' className='input-field property-login' ></input>

          <button className='btn-login' onClick={PindahHalamanS}>Login</button>
          {/* <GoogleButton className='btn-google' onClick={handleGoogle}/> */}

          <h6 className='btn-to-login'>Don't have account
            <a href='/'>   Register Here</a>
          </h6>
      </div>
    </div>
  )
}
