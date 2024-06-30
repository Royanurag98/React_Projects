import React ,{useContext}from 'react';
import './Contect.css'
import {imgContext } from '../Components/Navbar.jsx';

function Contect() {
    const myName= useContext(imgContext)
    console.log(myName)

    let arr=[]
    const handleSubmit = (e) => {
      e.preventDefault();
      let form = new FormData(e.target)
      let formObj = Object.fromEntries(form.entries());
      arr.push(formObj)
      console.table(arr)
      
    }
  return (
    <div>
        <div className='contect-Container30'>
                <div className='Contect-right30A'>
                    <div className='presonal-info10'>
                        <div className='profile-pic'>  <img src='https://lh3.googleusercontent.com/a/ACg8ocLtXQ_0tUvVKK4ZKfDJ2Kqvh4J8o7asx6FOMYMpL28I2nltDMGvmw=s96-c' alt="Login" /></div>
                        <div className='content-profile'>
                            <h3>hellow,</h3>
                            <h2>Anurag Roy</h2>
                        </div>
                    </div>
                    <div className='order'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path d="M5 22h14a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1h-3v-.777c0-2.609-1.903-4.945-4.5-5.198A5.005 5.005 0 0 0 7 7v1H4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2zm12-12v2h-2v-2h2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-2 3h2v2H7v-2z"></path></svg>
                        <h2>My Order</h2>
                    </div>
                    <div className='Ac-setting'>
                        <div className='Adjust'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path d="M8 12.052c1.995 0 3.5-1.505 3.5-3.5s-1.505-3.5-3.5-3.5-3.5 1.505-3.5 3.5 1.505 3.5 3.5 3.5zM9 13H7c-2.757 0-5 2.243-5 5v1h12v-1c0-2.757-2.243-5-5-5zm11.294-4.708-4.3 4.292-1.292-1.292-1.414 1.414 2.706 2.704 5.712-5.702z"></path></svg>
                            <h2>Account Settings</h2></div>
                        <ul>
                            <li>Profile Information</li>
                            <li>Manage Address</li>
                        </ul>
                    </div>
                    <div className='Payment'>
                        <div className='Adjust'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path d="M14 9h8v6h-8z"></path><path d="M20 3H5C3.346 3 2 4.346 2 6v12c0 1.654 1.346 3 3 3h15c1.103 0 2-.897 2-2v-2h-8c-1.103 0-2-.897-2-2V9c0-1.103.897-2 2-2h8V5c0-1.103-.897-2-2-2z"></path></svg>
                            <h2>  Payments</h2></div>
                        <ul>
                            <li>Save Cards</li>
                            <li>Saved UPI ids</li>
                            <li>Gift Cards</li>
                        </ul>
                    </div>
                    <div className='Stuff'>
                        <div className='Adjust'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path></svg>
                            <h2>   My Stuff</h2></div>
                        <ul>
                            <li>My Wishlist</li>
                            <li>My Coupons</li>
                            <li>My Reviews</li>
                        </ul>
                    </div>
                    <div className='setting'>
                        <div className='Adjust'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" ><path d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path></svg>
                            <h2>  Settings</h2></div>
                        <ul>
                            <li>Notification</li>
                            <li>KYC</li>

                        </ul>
                    </div>
                    <div className='Adjust'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path d="m10.998 16 5-4-5-4v3h-9v2h9z"></path><path d="M12.999 2.999a8.938 8.938 0 0 0-6.364 2.637L8.049 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051S20 10.13 20 12s-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637C21.063 16.665 22 14.405 22 12s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z"></path></svg>
                        <h2>Logout</h2>
                    </div>
            

                </div>
                <div className='Contect-left'>
                    <form action=""  method="POST" onSubmit={handleSubmit}> 

                        <h1>PERSONAL INFORMATION</h1>

                        <label for="first-name">Your Name:</label> <br />
                        <input type="text" id="first-name" name="first-name" placeholder="First Name" />
                        <input type="text" id="last-name" name="last-name" placeholder="Last Name" /><br />

                        <label for="gender">Gender:</label><br />
                        <div className='radio-box'>
                            <div>
                                <input type="radio" id="male" name="gender" value="male" />
                                <label for="male">Male</label>
                            </div>
                            <div>
                                <input type="radio" id="female" name="gender" value="female" />
                                <label for="female">Female</label><br /></div>
                        </div>

                        <label for="email">Email:</label><br />
                        <input type="email" id="email" name="email" placeholder="Email" /><br />

                        <label for="mobile">Mobile Number:</label><br />
                        <input type="tel" id="mobile" name="mobile" placeholder="Mobile Number" /><br />

                        <label for="terms">
                            <input type="checkbox" id="terms" name="terms" />
                            I agree to the Terms and Conditions
                        </label><br />

                        <input type="submit" value="Submit" />

                    </form>
                </div>
            </div>

    </div>
  );
}

export default Contect;
