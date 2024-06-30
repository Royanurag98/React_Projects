import React from 'react';
import './Blog.css'
import blogImg from '../assets/img/blog_ban1.webp'
import blogCard1 from '../assets/img/blog_1.webp'
import blogCard2 from '../assets/img/blog2.jpg'
import blogCard3 from '../assets/img/b8.jpg'
import blogCard4 from '../assets/img/photo_shoot.webp'

function Blogs() {
  return (
    <div>
      <div className='blog-container'>
        <div className='blog-banneer'>
            <img src={blogImg} alt="" />
        </div>
        <div className='blog-Latest'>
            <h1>LATEST BLOGS</h1>
            <p>By inspired hearts, our jewellery is consciously made to look and feel good on skin. How do you care them? We will help you.</p>
            <div className='blog-card'>
            <div class=" blog-card1 Shadow-01"><img src={blogCard1} alt="" />
            <div className='card-content'><p>Tips to take care of your Crystals</p></div>
            </div>
            <div class=" blog-card1 Shadow-01"><img src={blogCard2} alt="" />
            <div className='card-content'><p>Tips to take care of your Carats</p></div>
            </div>
            <div class="blog-card1  Shadow-01"><img src={blogCard3} alt="" />
            <div className='card-content'><p>Tips to take care of Bridal Sets</p></div>
            </div>
            </div>
        </div>
        <div className='footr-card'>
          <img src={blogCard4} alt="" />
          <div className='foot-c'>
          <p>It is a season of breezy dresses and boho jewellery to go funky and light. Colourful gemstones and sea-inspired jewellery like shell necklaces and pearl jewellery sets are the essence of every summer wardrobe.</p>
          <h3>Seasonal Trends in Jewellery and Accessories</h3>
        </div>
        </div>
    </div>
    </div>
  );
}

export default Blogs;
