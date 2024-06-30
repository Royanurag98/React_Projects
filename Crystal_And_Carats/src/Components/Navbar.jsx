import React ,{createContext}from 'react';
import './Nav.css'
import logoImg from '../assets/img/logo.png'
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from 'react';
import {Link, NavLink} from 'react-router-dom'



export const imgContext = createContext()

function Navbar() {
 
    const { user, loginWithRedirect, logout, isLoading } = useAuth0();
    var prf = user ? user.picture : "";
    const Pname = user ? user.name : "";
    const pEmail = user ? user.email : "";
    console.table(user)
    // CoumponentDidMount
    useEffect(() => {
        if (!isLoading && !user) {
           setTimeout(() => {
            loginWithRedirect();
           }, 10000); 

        }
    }, [isLoading, user, loginWithRedirect]);
     
     const  show = () =>{
        const  hamb=document.querySelector(".hamb")
        hamb.style.display="block"
     }

    return (
        
        <div>
            <nav>
                <ul className="start">

             
                    <li>
                        
                        <NavLink
                         to='/'
                         className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
                          Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                         to='/HomePages'
                         className={({ isActive }) => (isActive ? 'active' : 'inactive')}

                        >
                       Shope
                        </NavLink>
                    </li>
                   
                    <li>
                        <NavLink
                         to='/BLogs'
                         className={({ isActive }) => (isActive ? 'active' : 'inactive')}

                        >
                       Blog
                        </NavLink>
                    </li>
                    
                </ul>
                <div className="center">
                    
                    <div className="logo">
                        <img src={logoImg} alt="Logo" />
                    </div>
                </div>
                <div className="last">
                    <ul className="end">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path></svg>
                        </li>
                        <li className='cartimg'>
                       
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg>
                            <span>0</span>
                        </li>

                        <li className='loginimg'>
                        <NavLink
                         to='/Contact'
                         className=""
                         >
                          <img src={prf} alt="Login" />
                        </NavLink>
                       
                    </li>
                           
                    </ul>

                    <div className="hamburger" onClick={show}>
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                    </div>
                    {/* //  info side box */}
                    <div className='hamb'>
                   
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARlJREFUSEvt1M8qxUEYxvHP2SrZEMpCUlyD/Cls5TZkq9yJzsZKuQG5AmSFbP3JmiVX4PfWqF/6nZlx6mRzZjm98zzv8513pmfEqzdifWODIuF/R3SMM7wPaHUFGzgdFCWX4BAneMFmh8kyrjGHfVx0meQM4mAIhNBr6vQnyRJuMYtHbOHrrwZR32UyUSseAjWXPI+rlOQJU8n4vkm4g8/cKNUYxPmFhGsxiWWxtA1rDYJ1MA/2sR6aVNul7msRhfhNQvScEMXeXbO/WzIpJWh3/oY1TLbGs5gkZ9Al/pEQxegGspkSrpzBQTPnfQSWmPPfr3k1JZnGHi6HeQdHOM98FWGyPuxXUfwpawpKl1yjka0ZGxQRjhzRNxi0NBmpupZSAAAAAElFTkSuQmCC" className='cross'
                      onClick={() => {
                         const form = document.querySelector('.hamb'); 
                         form.style.display = "none";
                          }} />
                  
                     <div className='infobox'>
                        <div className="infoBOxImg"><img src={prf} alt="Login" /></div>
                        <h1>{Pname}</h1>
                        <p >{pEmail}</p>
                     </div>
                    <ul className='list'>
                    <li>
                        <a href="#" className="Active hover-line"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:"#fff"}}><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path></svg>Home</a>
                    </li>
                    <li>
                        <a href="#" className="hover-line"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:"#fff"}}><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>Profile</a>
                    </li>
                    <li>
                        <a href="#" className="hover-line"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:"#fff"}}><path d="M5 18v3.766l1.515-.909L11.277 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h1zM4 8h12v8h-5.277L7 18.234V16H4V8z"></path><path d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"></path></svg>Massages</a>
                    </li>
                    <li>
                        <a href="#" className="hover-line"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:"#fff"}}><path d="M12 6a3.939 3.939 0 0 0-3.934 3.934h2C10.066 8.867 10.934 8 12 8s1.934.867 1.934 1.934c0 .598-.481 1.032-1.216 1.626a9.208 9.208 0 0 0-.691.599c-.998.997-1.027 2.056-1.027 2.174V15h2l-.001-.633c.001-.016.033-.386.441-.793.15-.15.339-.3.535-.458.779-.631 1.958-1.584 1.958-3.182A3.937 3.937 0 0 0 12 6zm-1 10h2v2h-2z"></path><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path></svg>Help</a>
                    </li>
                    <li>
                        <a href="#" className="hover-line"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:"#fff"}}><path d="M17 8V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2H9V7c0-1.654 1.346-3 3-3s3 1.346 3 3v1h2zm1 4 .002 8H6v-8h12z"></path></svg>Password</a>
                    </li>
                    <li><a onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:"#fff"}}><path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path></svg> Logout</a></li>
                    <li><div className="navBtn"><img src={prf} alt="" /></div></li>
                    
                  </ul>
                 </div>
                    {/* //  info side box */ }
               </div >
            </nav >

        <imgContext.Provider value={prf}/>
      
       
    
        </div >
      
    );
}

export default Navbar;
{/* <div className='navLast'>
                   
                   
                    <div className="navBtn"><img src="" alt="" /></div>
                    </div> */}