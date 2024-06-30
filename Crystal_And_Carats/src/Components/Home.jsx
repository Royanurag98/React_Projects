import React, { useEffect, useState, useRef } from 'react';

import { Link, NavLink } from 'react-router-dom'

import './home.css'
import img1 from '../assets/img/img1.jpg'
import img2 from '../assets/img/gemstone.jpg'
import img3 from '../assets/img/dia.png'
import img4 from '../assets/img/gold.jpg'
import img5 from '../assets/img/platnum.jpg'

import img6 from '../assets/img/coin.jpg'
import img7 from '../assets/img/new-earrings.jpg'
import img8 from '../assets/img/braslet.jpg'
import img9 from '../assets/img/pl11.webp'
import img10 from '../assets/img/new-necklace.webp'
import img11 from '../assets/img/new-nose-pins.webp'
import img12 from '../assets/img/new-finger-rings.webp'
import img13 from '../assets/img/new-pendant-sets.jpg'

import img14 from '../assets/img/8_Mararashtrian.png'
import img15 from '../assets/img/show-stopper.png'
import img16 from '../assets/img/12_gujarati.png'

import img17 from '../assets/img/gc3.jpg'

import img18 from '../assets/img/a2.jpg'
import img19 from '../assets/img/a3.jpg'
import img20 from '../assets/img/kids.png'






function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef(null);
  const slidesRef = useRef([]);

  useEffect(() => {
    const slides = document.querySelectorAll('.slider');
    let counter = 0;

    // Set initial positions of slides
    slides.forEach((slider, index) => {
      slider.style.left = `${index * 100}%`;
    });

    // Function to move to the next slide
    function nextSlide() {
      counter++;
      if (counter === slides.length) {
        counter = 0; // Reset counter if it exceeds the number of slides
      }
      updateSlider();
    }

    // Function to update slider position
    function updateSlider() {
      slides.forEach((slider, index) => {
        slider.style.transition = 'left 0.5s ease-in-out';
        slider.style.left = `${(index - counter) * 100}%`;
      });
    }

    // Automatically move to the next slide every 3 seconds
    const interval = setInterval(nextSlide, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);



  useEffect(() => {
    const slid = document.querySelectorAll('.sliders');
    let count = 0;

    // Set initial positions of slides
    slid.forEach((slider, index) => {
      slider.style.left = `${index * 100}%`;
    });

    // Function to move to the next slide
    function nextSlide() {
      count++;
      if (count === slid.length) {
        count = 0; // Reset counter if it exceeds the number of slides
      }
      updateSlider();
    }

    // Function to update slider position
    function updateSlider() {
      slid.forEach((slider, index) => {
        slider.style.transition = 'left 0.5s ease-in-out';
        slider.style.left = `${(index - count) * 100}%`;
      });
    }

    // Automatically move to the next slide every 3 seconds
    const interval = setInterval(nextSlide, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // slider cards


  useEffect(() => {
    slidesRef.current = sliderRef.current.querySelectorAll('.Box');
  }, []);

  const showSlides = () => {
    if (slidesRef.current.length === 0) return; // Prevent errors if slidesRef is empty

    if (slideIndex < 0) {
      setSlideIndex(slidesRef.current.length - 1);
    } else if (slideIndex >= slidesRef.current.length) {
      setSlideIndex(0);
    } else {
      const offset = -slideIndex * slidesRef.current[0].offsetWidth;
      sliderRef.current.style.transform = `translateX(${offset}px)`;
    }
  };

  useEffect(() => {
    showSlides();
  }, [slideIndex]);

  const slide = (n) => {
    setSlideIndex((prevIndex) => {
      const newIndex = prevIndex + n;
      if (newIndex < 0) {
        return slidesRef.current.length - 1;
      } else if (newIndex >= slidesRef.current.length) {
        return 0;
      } else {
        return newIndex;
      }
    });
  };

  const [showCards, setShowCards] = useState(false);


  return (
    <>
      <div className='container'>
        <div className='left-box'>
          <img src={img1} alt="" />
        </div>

        <div className='right-box'>
          <main className='slide1'>
            <img src={img18} alt="" className="slider" />
            <img src={img19} alt="" className="slider" />
            <img src="https://5.imimg.com/data5/SELLER/Default/2023/3/296885745/KI/SZ/IL/152673053/gold-necklace-jewellery-500x500.jpg" alt="" className="slider" />
            <img src="https://www.wholesalecovering.com/image/cache/catalog/Necklace1/nlc1315-light-weight-bridal-wedding-gold-necklace-design-online-1-850x1000.jpg.webp" alt="" className="slider" />
          </main>

          <div className='slide2'>
            <main>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFOvKNrHmKOMts_d-3KqQzhOW4y1uo4ycKA&s" alt="" className="sliders" />
              <img src="https://www.candere.com/media/jewellery/images/KCGN261-A_1.jpg" alt="" className="sliders" />
              <img src={img19} alt="" className="sliders" />
              <img src={img18} alt="" className="sliders" />
            </main>
          </div>
        </div>
      </div>



      <div className='container2'>
        <h1>Browser By Category</h1>
        <p>Discover elegance at your fingertips</p>
      </div>

      <div className='container3'> <div className='chield1'>
        <div className='text'><h1>Crystals </h1></div>
        <div className='card1'>
          <div style={{ textAlign: "center" }}><div class=" Box Shadow-1"><img src={img2} alt="" /></div><h3>GEMSTONE</h3></div>
          <div style={{ textAlign: "center" }}><div class=" Box Shadow-1"><img src={img3} alt="" /></div><h3>DIAMOND</h3></div>
        </div>
      </div>

        <div className='chield1'>
          <div className='text'><h1> Carats</h1></div>
          <div className='card2'>

            <div style={{ textAlign: "center" }}><div class=" Box Shadow-1"><img src={img4} alt="" /></div><h3>GOLD</h3></div>
            <div style={{ textAlign: "center" }}><div class=" Box Shadow-1"><img src={img5} alt="" /></div><h3>PLATINUM</h3></div>
          </div>
        </div>
      </div>





      <div className='container90'>

        <div className='content9'>
          <h1>Best Sellers</h1>
          <p>Timeless elegance meets contemporary style</p>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" viewBox="10 60 1670 90" xmlspace="preserve">
          <g xmlns="http://www.w3.org/2000/svg" id="Line_Design">
            <g id="Group_14194" transform="translate(-5 -41.068)">
              <line id="Line_294" className="st0" style={{ fill: 'none', stroke: '#832729' }} x1="27" y1="114.5" x2="783" y2="114.5" />
              <line id="Line_295" className="st0" style={{ fill: 'none', stroke: '#832729' }} x1="915" y1="114.5" x2="1671" y2="114.5" />
              <path id="Path_1361" className="st1" d="M895.7,105.8c-5.4,0-10.8,1.3-15.6,3.7c-1.8,0.8-3.5,1.8-5.2,2.7c-0.8,0.4-1.3,1.3-1.2,2.2    c0.1,2.2-0.9,4.3-2.7,5.7c-2.3,2.1-5.3,3.2-8.4,3.1c-1.3-0.1-2.5-0.4-3.7-0.9c-0.5-0.2-1.1-0.3-1.6-0.1c-3.3,1.4-6.8,2.4-10.4,2.9    c-5,0.6-9.9,0.5-14.6-1.6c-2-0.8-3.7-2.1-5.1-3.8c-0.6-0.7-0.9-0.8-1.7-0.3c-4.1,2.5-8.7,4.3-13.4,5.2c-5.5,1-11,1.3-16.3-0.9    c-3.9-1.6-6.8-4.1-8.1-8.2c-0.7-2.1-1.1-4.3-0.1-6.4c1.1-2.4,3-4.2,5.5-5.1c4.6-1.9,9.2-2,13.6,0.7c1.6,1.1,2.9,2.6,3.7,4.4    c0.1,0.2,0.1,0.4-0.1,0.6c0,0-0.1,0-0.1,0.1c-0.2,0.2-0.5,0.2-0.7,0c-0.1-0.1-0.2-0.2-0.2-0.3c-1.4-2.9-4.1-5-7.3-5.4    c-3.8-0.8-7.7,0.1-10.8,2.5c-3.2,2.2-4,6.7-1.8,9.9c0.2,0.3,0.5,0.6,0.8,0.9c2,2.3,4.8,3.7,7.8,4.2c4.7,0.6,9.4,0.3,13.9-1.1    c3.9-1.1,7.6-2.8,11-4.9c1.3-0.8,1.5-1.3,1.2-2.8c-1.1-5.3,2.3-9.1,6.8-9.9c3.2-0.6,6.4,0.1,9.1,1.8c0.9,0.6,2.1,0.8,3.1,0.3    c4.5-1.7,9.3-2.4,14.1-2c4.1,0.3,8,1.1,11.5,3.5c0.7,0.5,1.4,1.1,2.1,1.7c0.5,0.6,1.3,0.7,1.9,0.2c2.4-1.3,4.8-2.4,7.3-3.3    c5.4-2,11.3-2.6,17-1.8c3.8,0.4,7.3,1.9,10.3,4.3c2.3,1.7,3.6,4.5,3.6,7.3c-0.1,1.8-0.9,3.5-2.2,4.8c-1.8,2-4.3,3.2-7,3.6    c-2.4,0.3-4.8-0.2-6.8-1.3c-0.4-0.2-0.4-0.5-0.2-0.9c0.2-0.3,0.5-0.4,0.8-0.2c1.7,1.2,3.9,1.7,5.9,1.3c2.4-0.3,4.7-1.4,6.5-3.1    c2.6-2.5,2.6-6.6,0.1-9.2c-0.2-0.2-0.5-0.5-0.8-0.7c-2.2-1.6-4.8-2.6-7.5-2.9C898.5,105.9,897.1,105.8,895.7,105.8L895.7,105.8z     M828.2,118.1c1.3,1.4,3,2.3,4.8,2.9c3.1,0.8,6.3,1.1,9.4,0.7c3.7-0.4,7.3-1.3,10.7-2.7c0.7-0.3,0.7-0.3,0.2-0.8    c-0.8-0.8-1.5-1.6-2.3-2.4c-2-2.1-3.9-4.2-6-6c-0.5-0.5-1.3-0.6-2-0.2C837.9,111.9,833.1,115.2,828.2,118.1z M845.5,108.6    c3,2.7,5.7,5.6,8.4,8.5c1,1,1.2,1.1,2.5,0.4c4.5-2.3,8.9-5,13.2-7.5c0.9-0.5,0.9-0.5,0-1.2c-1.9-1.3-4.1-2.2-6.4-2.5    c-4-0.6-8-0.5-11.9,0.3C849.3,106.9,847.3,107.6,845.5,108.6L845.5,108.6z M840.1,106c-0.1-0.1-0.1-0.1-0.1-0.1    c-2.6-1.8-5.9-2.6-9-2c-3.8,0.5-6.5,4.1-6,7.9c0,0.3,0.1,0.6,0.2,0.9c0.3,1.3,0.4,1.3,1.5,0.6c3.6-2.1,7.2-4.3,11-6.1    C838.5,106.8,839.3,106.4,840.1,106z M859.4,121.4c0.4,0.2,0.7,0.3,0.9,0.4c4,1,8.2-0.3,10.9-3.4c1.1-1.3,1.6-2.9,1.5-4.6    C868.3,116.3,864.1,119,859.4,121.4L859.4,121.4z" />
            </g>
          </g>
        </svg>

      </div>

      <div class="container5">

        <div> <div class=" Box Shadow-6"><img src={img6} alt="" /></div>Coins</div>
        <div> <div class=" Box Shadow-6"><img src={img7} alt="" /></div>Ear Rings</div>
        <div> <div class=" Box Shadow-6"><img src={img8} alt="" /></div>Bracelet</div>
        <div> <div class=" Box Shadow-6"><img src={img9} alt="" /></div>Bangles</div>
        <div> <div class=" Box Shadow-6"><img src={img10} alt="" /></div>Necklace</div>
        <div> <div class=" Box Shadow-6"><img src={img11} alt="" /></div>Nose Pins</div>
        <div> <div class=" Box Shadow-6"><img src={img12} alt="" /></div>Ring</div>
        <div> <div class=" Box Shadow-6"><img src={img13} alt="" /></div>Pendent</div>
      </div>


      <div className='container7'>
        <div className='content2'>
          <h1>Bridal jewellery Special</h1>
          <p>Be the Bride you always dreamt of</p>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" viewBox="10 60 1670 90" xmlspace="preserve">
          <g xmlns="http://www.w3.org/2000/svg" id="Line_Design">
            <g id="Group_14194" transform="translate(-5 -41.068)">
              <line id="Line_294" className="st0" style={{ fill: 'none', stroke: '#832729' }} x1="27" y1="114.5" x2="783" y2="114.5" />
              <line id="Line_295" className="st0" style={{ fill: 'none', stroke: '#832729' }} x1="915" y1="114.5" x2="1671" y2="114.5" />
              <path id="Path_1361" className="st1" d="M895.7,105.8c-5.4,0-10.8,1.3-15.6,3.7c-1.8,0.8-3.5,1.8-5.2,2.7c-0.8,0.4-1.3,1.3-1.2,2.2    c0.1,2.2-0.9,4.3-2.7,5.7c-2.3,2.1-5.3,3.2-8.4,3.1c-1.3-0.1-2.5-0.4-3.7-0.9c-0.5-0.2-1.1-0.3-1.6-0.1c-3.3,1.4-6.8,2.4-10.4,2.9    c-5,0.6-9.9,0.5-14.6-1.6c-2-0.8-3.7-2.1-5.1-3.8c-0.6-0.7-0.9-0.8-1.7-0.3c-4.1,2.5-8.7,4.3-13.4,5.2c-5.5,1-11,1.3-16.3-0.9    c-3.9-1.6-6.8-4.1-8.1-8.2c-0.7-2.1-1.1-4.3-0.1-6.4c1.1-2.4,3-4.2,5.5-5.1c4.6-1.9,9.2-2,13.6,0.7c1.6,1.1,2.9,2.6,3.7,4.4    c0.1,0.2,0.1,0.4-0.1,0.6c0,0-0.1,0-0.1,0.1c-0.2,0.2-0.5,0.2-0.7,0c-0.1-0.1-0.2-0.2-0.2-0.3c-1.4-2.9-4.1-5-7.3-5.4    c-3.8-0.8-7.7,0.1-10.8,2.5c-3.2,2.2-4,6.7-1.8,9.9c0.2,0.3,0.5,0.6,0.8,0.9c2,2.3,4.8,3.7,7.8,4.2c4.7,0.6,9.4,0.3,13.9-1.1    c3.9-1.1,7.6-2.8,11-4.9c1.3-0.8,1.5-1.3,1.2-2.8c-1.1-5.3,2.3-9.1,6.8-9.9c3.2-0.6,6.4,0.1,9.1,1.8c0.9,0.6,2.1,0.8,3.1,0.3    c4.5-1.7,9.3-2.4,14.1-2c4.1,0.3,8,1.1,11.5,3.5c0.7,0.5,1.4,1.1,2.1,1.7c0.5,0.6,1.3,0.7,1.9,0.2c2.4-1.3,4.8-2.4,7.3-3.3    c5.4-2,11.3-2.6,17-1.8c3.8,0.4,7.3,1.9,10.3,4.3c2.3,1.7,3.6,4.5,3.6,7.3c-0.1,1.8-0.9,3.5-2.2,4.8c-1.8,2-4.3,3.2-7,3.6    c-2.4,0.3-4.8-0.2-6.8-1.3c-0.4-0.2-0.4-0.5-0.2-0.9c0.2-0.3,0.5-0.4,0.8-0.2c1.7,1.2,3.9,1.7,5.9,1.3c2.4-0.3,4.7-1.4,6.5-3.1    c2.6-2.5,2.6-6.6,0.1-9.2c-0.2-0.2-0.5-0.5-0.8-0.7c-2.2-1.6-4.8-2.6-7.5-2.9C898.5,105.9,897.1,105.8,895.7,105.8L895.7,105.8z     M828.2,118.1c1.3,1.4,3,2.3,4.8,2.9c3.1,0.8,6.3,1.1,9.4,0.7c3.7-0.4,7.3-1.3,10.7-2.7c0.7-0.3,0.7-0.3,0.2-0.8    c-0.8-0.8-1.5-1.6-2.3-2.4c-2-2.1-3.9-4.2-6-6c-0.5-0.5-1.3-0.6-2-0.2C837.9,111.9,833.1,115.2,828.2,118.1z M845.5,108.6    c3,2.7,5.7,5.6,8.4,8.5c1,1,1.2,1.1,2.5,0.4c4.5-2.3,8.9-5,13.2-7.5c0.9-0.5,0.9-0.5,0-1.2c-1.9-1.3-4.1-2.2-6.4-2.5    c-4-0.6-8-0.5-11.9,0.3C849.3,106.9,847.3,107.6,845.5,108.6L845.5,108.6z M840.1,106c-0.1-0.1-0.1-0.1-0.1-0.1    c-2.6-1.8-5.9-2.6-9-2c-3.8,0.5-6.5,4.1-6,7.9c0,0.3,0.1,0.6,0.2,0.9c0.3,1.3,0.4,1.3,1.5,0.6c3.6-2.1,7.2-4.3,11-6.1    C838.5,106.8,839.3,106.4,840.1,106z M859.4,121.4c0.4,0.2,0.7,0.3,0.9,0.4c4,1,8.2-0.3,10.9-3.4c1.1-1.3,1.6-2.9,1.5-4.6    C868.3,116.3,864.1,119,859.4,121.4L859.4,121.4z" />
            </g>
          </g>
        </svg>
      </div>
      <div className='box-z'>
        <div className='c-d'>
          <div class=" Box Shadow-1"><img src={img14} alt="" /><h4>Enchanting</h4></div>
          <div class=" Box Shadow-1"><img src={img15} alt="" /><h4>Trendsetter</h4></div>
          <div class=" Box Shadow-1"><img src={img16} alt="" /><h4>Dazzling</h4></div>
        </div>
      </div>


      <div className='box-y'>
        <img src={img17} alt="" />
        <h1>GIFT CARDS</h1>
      </div>

      <div className='container2'>
        <h1>Shop by Gender</h1>
        <p>First-class jewelry for first-class Men, Women & Children</p>
      </div>

      <div className='box-j'>

        <div class=" Box Shadow-1"><img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwef4310c0/homepage/ShopByGender/Men.jpg" alt="" />
          <h4 >
            <NavLink
              to='/Mansection'
              style={{ textDecoration: "none", color: "black" }}>
              Men
            </NavLink>
          </h4>
        </div>
        <div class=" Box Shadow-1"><img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwc0abe627/homepage/ShopByGender/Woman.jpg" alt="" />
          <h4 >
            <NavLink
              to='/Womensection'
              style={{ textDecoration: "none", color: "black" }}>
              Women
            </NavLink>
          </h4>
        </div>

        <div class=" Box Shadow-1"><img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw24db1907/homepage/ShopByGender/kid.jpg" alt="" />
          <h4 >
            <NavLink
              to='/Kidsection'
              style={{ textDecoration: "none", color: "black" }}>
              Kids
            </NavLink>
          </h4>
        </div>
      </div>


      <div className='box-K'>
        <div class="slider-auto">

          <video controls width="100%" height="440px" loop autoplay poster='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwa2f88d7f/homepage/Mia/gwtf-desktopm.jpg'>
            <source src="https://staticimg.tanishq.co.in/videos/ge-dt.mp4" type="video/mp4" />
          </video>
        </div>
      </div>



      <div className='container8'>

        <div className='content-l'>
          <h1>Recommendation For you</h1>
          <p>Style meets the pluse of fashion</p>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" viewBox="10 60 1670 90" xmlspace="preserve">
          <g xmlns="http://www.w3.org/2000/svg" id="Line_Design">
            <g id="Group_14194" transform="translate(-5 -41.068)">
              <line id="Line_294" className="st0" style={{ fill: 'none', stroke: '#832729' }} x1="27" y1="114.5" x2="783" y2="114.5" />
              <line id="Line_295" className="st0" style={{ fill: 'none', stroke: '#832729' }} x1="915" y1="114.5" x2="1671" y2="114.5" />
              <path id="Path_1361" className="st1" d="M895.7,105.8c-5.4,0-10.8,1.3-15.6,3.7c-1.8,0.8-3.5,1.8-5.2,2.7c-0.8,0.4-1.3,1.3-1.2,2.2    c0.1,2.2-0.9,4.3-2.7,5.7c-2.3,2.1-5.3,3.2-8.4,3.1c-1.3-0.1-2.5-0.4-3.7-0.9c-0.5-0.2-1.1-0.3-1.6-0.1c-3.3,1.4-6.8,2.4-10.4,2.9    c-5,0.6-9.9,0.5-14.6-1.6c-2-0.8-3.7-2.1-5.1-3.8c-0.6-0.7-0.9-0.8-1.7-0.3c-4.1,2.5-8.7,4.3-13.4,5.2c-5.5,1-11,1.3-16.3-0.9    c-3.9-1.6-6.8-4.1-8.1-8.2c-0.7-2.1-1.1-4.3-0.1-6.4c1.1-2.4,3-4.2,5.5-5.1c4.6-1.9,9.2-2,13.6,0.7c1.6,1.1,2.9,2.6,3.7,4.4    c0.1,0.2,0.1,0.4-0.1,0.6c0,0-0.1,0-0.1,0.1c-0.2,0.2-0.5,0.2-0.7,0c-0.1-0.1-0.2-0.2-0.2-0.3c-1.4-2.9-4.1-5-7.3-5.4    c-3.8-0.8-7.7,0.1-10.8,2.5c-3.2,2.2-4,6.7-1.8,9.9c0.2,0.3,0.5,0.6,0.8,0.9c2,2.3,4.8,3.7,7.8,4.2c4.7,0.6,9.4,0.3,13.9-1.1    c3.9-1.1,7.6-2.8,11-4.9c1.3-0.8,1.5-1.3,1.2-2.8c-1.1-5.3,2.3-9.1,6.8-9.9c3.2-0.6,6.4,0.1,9.1,1.8c0.9,0.6,2.1,0.8,3.1,0.3    c4.5-1.7,9.3-2.4,14.1-2c4.1,0.3,8,1.1,11.5,3.5c0.7,0.5,1.4,1.1,2.1,1.7c0.5,0.6,1.3,0.7,1.9,0.2c2.4-1.3,4.8-2.4,7.3-3.3    c5.4-2,11.3-2.6,17-1.8c3.8,0.4,7.3,1.9,10.3,4.3c2.3,1.7,3.6,4.5,3.6,7.3c-0.1,1.8-0.9,3.5-2.2,4.8c-1.8,2-4.3,3.2-7,3.6    c-2.4,0.3-4.8-0.2-6.8-1.3c-0.4-0.2-0.4-0.5-0.2-0.9c0.2-0.3,0.5-0.4,0.8-0.2c1.7,1.2,3.9,1.7,5.9,1.3c2.4-0.3,4.7-1.4,6.5-3.1    c2.6-2.5,2.6-6.6,0.1-9.2c-0.2-0.2-0.5-0.5-0.8-0.7c-2.2-1.6-4.8-2.6-7.5-2.9C898.5,105.9,897.1,105.8,895.7,105.8L895.7,105.8z     M828.2,118.1c1.3,1.4,3,2.3,4.8,2.9c3.1,0.8,6.3,1.1,9.4,0.7c3.7-0.4,7.3-1.3,10.7-2.7c0.7-0.3,0.7-0.3,0.2-0.8    c-0.8-0.8-1.5-1.6-2.3-2.4c-2-2.1-3.9-4.2-6-6c-0.5-0.5-1.3-0.6-2-0.2C837.9,111.9,833.1,115.2,828.2,118.1z M845.5,108.6    c3,2.7,5.7,5.6,8.4,8.5c1,1,1.2,1.1,2.5,0.4c4.5-2.3,8.9-5,13.2-7.5c0.9-0.5,0.9-0.5,0-1.2c-1.9-1.3-4.1-2.2-6.4-2.5    c-4-0.6-8-0.5-11.9,0.3C849.3,106.9,847.3,107.6,845.5,108.6L845.5,108.6z M840.1,106c-0.1-0.1-0.1-0.1-0.1-0.1    c-2.6-1.8-5.9-2.6-9-2c-3.8,0.5-6.5,4.1-6,7.9c0,0.3,0.1,0.6,0.2,0.9c0.3,1.3,0.4,1.3,1.5,0.6c3.6-2.1,7.2-4.3,11-6.1    C838.5,106.8,839.3,106.4,840.1,106z M859.4,121.4c0.4,0.2,0.7,0.3,0.9,0.4c4,1,8.2-0.3,10.9-3.4c1.1-1.3,1.6-2.9,1.5-4.6    C868.3,116.3,864.1,119,859.4,121.4L859.4,121.4z" />
            </g>
          </g>
        </svg>

      </div>

      <div className='main-container'>
        <div class="slider-container">
          <button class="slider-btn prev" onClick={() => slide(-1)}>&#10094;</button>
          <div class="card-slider" ref={sliderRef}>
            <div className="Box Shadow-1 "><img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw114df9d7/homepage/shopByCategory/fod-mangalsutra.jpg" alt="" /><h1>Mangalsutras</h1></div>
            <div className="Box Shadow-1 "><img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwebf0313b/homepage/shopByCategory/fod-gold-coins.jpg" alt="" /><h1>Gold Coin</h1></div>
            <div className="Box Shadow-1 "><img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw47b1df4b/homepage/shopByCategory/fod-earrings.jpg" alt="" /><h1>Earrings</h1></div>
            <div className="Box Shadow-1 "><img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwfc4fb974/homepage/shopByCategory/fod-rings.jpg" alt="" /><h1>Finger Rings</h1></div>
            <div className="Box Shadow-1"><img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw3617b276/homepage/shopByCategory/fod-pendants.jpg" alt="" /><h1>Pendents</h1></div>
            <div className="Box Shadow-1"><img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0cb7b15f/homepage/shopByCategory/fod-nosepins.jpg" alt="" /><h1>Nose Pins</h1></div>
            <div className="Box Shadow-1"><img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwcbb3ebbb/homepage/shopByCategory/fod-chain.jpg" alt="" /><h1>Chains</h1></div>
            <div className="Box Shadow-1"><img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw4dcf3d1d/homepage/shopByCategory/fod-bracelet.jpg" alt="" /><h1>Braclets</h1></div>
            <div className="Box Shadow-1"><img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw7dbdbacf/homepage/shopByCategory/fod-bangle.jpg" alt="" /><h1>Bangles</h1></div>
            <div className="Box Shadow-1"><img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwb8086cf2/homepage/shopByCategory/fod-necklace.jpg" alt="" /><h1>Neckwear</h1></div>
            <div className="Box Shadow-1"><img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw66347a7d/homepage/shopByCategory/fod-necklace-set.jpg" alt="" /><h1>Necklace Set</h1></div>
            <div className="Box Shadow-1"><img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw407b5f83/homepage/shopByCategory/fod-pendant-set.jpg" alt="" /><h1>Pandants Sets</h1></div>
            <div className="Box Shadow-1"><img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw3617b276/homepage/shopByCategory/fod-pendants.jpg" alt="" /><h1>Pendents</h1></div>
            <div className="Box Shadow-1"><img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0cb7b15f/homepage/shopByCategory/fod-nosepins.jpg" alt="" /><h1>Nose Pins</h1></div>
            <div className="Box Shadow-1"><img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwcbb3ebbb/homepage/shopByCategory/fod-chain.jpg" alt="" /><h1>Chains</h1></div>
            <div className="Box Shadow-1"><img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw4dcf3d1d/homepage/shopByCategory/fod-bracelet.jpg" alt="" /><h1>Braclets</h1></div>
            <div className="Box Shadow-1"><img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw7dbdbacf/homepage/shopByCategory/fod-bangle.jpg" alt="" /><h1>Bangles</h1></div>
            <div className="Box Shadow-1"><img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwb8086cf2/homepage/shopByCategory/fod-necklace.jpg" alt="" /><h1>Neckwear</h1></div>
            <div className="Box Shadow-1"><img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw66347a7d/homepage/shopByCategory/fod-necklace-set.jpg" alt="" /><h1>Necklace Set</h1></div>
            <div className="Box Shadow-1"><img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw407b5f83/homepage/shopByCategory/fod-pendant-set.jpg" alt="" /><h1>Pandants Sets</h1></div>



          </div>
          <button class="slider-btn next" onClick={() => slide(1)}>&#10095;</button>
        </div>
      </div>



      <div className='container11'>
        <div className='content5'>
          <h1>Connect With Us</h1>
          <p>We are always available to guide you at your convenience</p>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" viewBox="10 60 1670 90" xmlspace="preserve">
          <g xmlns="http://www.w3.org/2000/svg" id="Line_Design">
            <g id="Group_14194" transform="translate(-5 -41.068)">
              <line id="Line_294" className="st0" style={{ fill: 'none', stroke: '#832729' }} x1="27" y1="114.5" x2="783" y2="114.5" />
              <line id="Line_295" className="st0" style={{ fill: 'none', stroke: '#832729' }} x1="915" y1="114.5" x2="1671" y2="114.5" />
              <path id="Path_1361" className="st1" d="M895.7,105.8c-5.4,0-10.8,1.3-15.6,3.7c-1.8,0.8-3.5,1.8-5.2,2.7c-0.8,0.4-1.3,1.3-1.2,2.2    c0.1,2.2-0.9,4.3-2.7,5.7c-2.3,2.1-5.3,3.2-8.4,3.1c-1.3-0.1-2.5-0.4-3.7-0.9c-0.5-0.2-1.1-0.3-1.6-0.1c-3.3,1.4-6.8,2.4-10.4,2.9    c-5,0.6-9.9,0.5-14.6-1.6c-2-0.8-3.7-2.1-5.1-3.8c-0.6-0.7-0.9-0.8-1.7-0.3c-4.1,2.5-8.7,4.3-13.4,5.2c-5.5,1-11,1.3-16.3-0.9    c-3.9-1.6-6.8-4.1-8.1-8.2c-0.7-2.1-1.1-4.3-0.1-6.4c1.1-2.4,3-4.2,5.5-5.1c4.6-1.9,9.2-2,13.6,0.7c1.6,1.1,2.9,2.6,3.7,4.4    c0.1,0.2,0.1,0.4-0.1,0.6c0,0-0.1,0-0.1,0.1c-0.2,0.2-0.5,0.2-0.7,0c-0.1-0.1-0.2-0.2-0.2-0.3c-1.4-2.9-4.1-5-7.3-5.4    c-3.8-0.8-7.7,0.1-10.8,2.5c-3.2,2.2-4,6.7-1.8,9.9c0.2,0.3,0.5,0.6,0.8,0.9c2,2.3,4.8,3.7,7.8,4.2c4.7,0.6,9.4,0.3,13.9-1.1    c3.9-1.1,7.6-2.8,11-4.9c1.3-0.8,1.5-1.3,1.2-2.8c-1.1-5.3,2.3-9.1,6.8-9.9c3.2-0.6,6.4,0.1,9.1,1.8c0.9,0.6,2.1,0.8,3.1,0.3    c4.5-1.7,9.3-2.4,14.1-2c4.1,0.3,8,1.1,11.5,3.5c0.7,0.5,1.4,1.1,2.1,1.7c0.5,0.6,1.3,0.7,1.9,0.2c2.4-1.3,4.8-2.4,7.3-3.3    c5.4-2,11.3-2.6,17-1.8c3.8,0.4,7.3,1.9,10.3,4.3c2.3,1.7,3.6,4.5,3.6,7.3c-0.1,1.8-0.9,3.5-2.2,4.8c-1.8,2-4.3,3.2-7,3.6    c-2.4,0.3-4.8-0.2-6.8-1.3c-0.4-0.2-0.4-0.5-0.2-0.9c0.2-0.3,0.5-0.4,0.8-0.2c1.7,1.2,3.9,1.7,5.9,1.3c2.4-0.3,4.7-1.4,6.5-3.1    c2.6-2.5,2.6-6.6,0.1-9.2c-0.2-0.2-0.5-0.5-0.8-0.7c-2.2-1.6-4.8-2.6-7.5-2.9C898.5,105.9,897.1,105.8,895.7,105.8L895.7,105.8z     M828.2,118.1c1.3,1.4,3,2.3,4.8,2.9c3.1,0.8,6.3,1.1,9.4,0.7c3.7-0.4,7.3-1.3,10.7-2.7c0.7-0.3,0.7-0.3,0.2-0.8    c-0.8-0.8-1.5-1.6-2.3-2.4c-2-2.1-3.9-4.2-6-6c-0.5-0.5-1.3-0.6-2-0.2C837.9,111.9,833.1,115.2,828.2,118.1z M845.5,108.6    c3,2.7,5.7,5.6,8.4,8.5c1,1,1.2,1.1,2.5,0.4c4.5-2.3,8.9-5,13.2-7.5c0.9-0.5,0.9-0.5,0-1.2c-1.9-1.3-4.1-2.2-6.4-2.5    c-4-0.6-8-0.5-11.9,0.3C849.3,106.9,847.3,107.6,845.5,108.6L845.5,108.6z M840.1,106c-0.1-0.1-0.1-0.1-0.1-0.1    c-2.6-1.8-5.9-2.6-9-2c-3.8,0.5-6.5,4.1-6,7.9c0,0.3,0.1,0.6,0.2,0.9c0.3,1.3,0.4,1.3,1.5,0.6c3.6-2.1,7.2-4.3,11-6.1    C838.5,106.8,839.3,106.4,840.1,106z M859.4,121.4c0.4,0.2,0.7,0.3,0.9,0.4c4,1,8.2-0.3,10.9-3.4c1.1-1.3,1.6-2.9,1.5-4.6    C868.3,116.3,864.1,119,859.4,121.4L859.4,121.4z" />
            </g>
          </g>
        </svg>
      </div>
      <div class="contect">
        <div class="connectCard">
          <div class="icon-img-connect">
            <h5 class="text-red">Connect On</h5>
            <h3 class="connectHeading ">
              <strong>WhatsApp</strong>
            </h3>
            <button class="exploreButton" data-assetid="connect-on-whatsapp">Connect</button>
          </div>
        </div>


        <div class="appointmentCard">
          <div class="icon-img-appointment">
            <h6 class="text-red">Book an</h6>
            <h3 class="jewelleryHeading ">
              <strong>Appointment</strong>
            </h3>
            <button class="exploreButton">Book</button>
          </div>
        </div>
        <div class="scheduleCard">
          <div class="icon-img-schedule">
            <h5 class=" text-red">Schedule a</h5>
            <h3 class="connectHeading text-red ">
              <strong>Video Call</strong>
            </h3>
            <button class="exploreButton" data-assetid="schedule-video-call">Schedule</button>
          </div>
        </div>

      </div>

    </>


  )
}

export default Home;
