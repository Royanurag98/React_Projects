import React, { useState } from 'react';
import './style.css'
function Navbar() {

  const [color, setColor] = useState("white")

  const colorChanger = (newColor) => {
    body = document.querySelector("#root")
// set multiple colors
    // let R = Math.floor(Math.random() * 100)
    // let G = Math.floor(Math.random() * 100)
    // let B = Math.floor(Math.random() * 100)
    // let change = `rgb(${R},${G},${B})`
  
  
    if(color=="white"){
      let color="black";
      setColor(newColor = color)
      document.body.style.backgroundColor = newColor;

    }
    if(color=="black"){
      let colors="white";
      setColor(newColor = colors)
      document.body.style.backgroundColor = newColor;
      
    }
  }

  return (
    <>
      <nav>
        <input type="checkbox" id='Check' />
        <label for="Check" className='checkbtn'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAGRJREFUSEvtkjsKACAMQyN4/ws76OIHQUgKFkHaOTRpXhOcJznvRxjQhp9UVHusYV4AZBp1CbbQpwvcDQxhufQJAx7LoFAYDCbqWjPk6wZqUkkXkE81BWTpeabozy+ydUDU7hU1ApwMGeTiyUAAAAAASUVORK5CYII=" className='hamb' />
        </label>
        <label className='logo'>TextUtils</label>
      
        <ul>
        
        <li><span class="toggle-wrapper"onClick={colorChanger}>
              <input class="toggle-checkbox" type="checkbox"/>
             
              <div class="toggle-container">
                <div class="toggle-button"></div>
              </div>
            
            </span></li>
      
        <li> <a href="#" className='Active'>Home </a></li>
        <li> <a href="#">About </a></li>
        <li> <a href="#">Contect </a></li>
        <li> <a href="#">Galery </a></li>
      </ul>
    </nav >

    </>
  );
}

export default Navbar;
