import React from 'react';
import cardimg1 from '../assets/img/w1.webp'
import cardimg2 from '../assets/img/w2.webp'
import cardimg3 from '../assets/img/w3.webp'
import cardimg4 from '../assets/img/w4.webp'
import cardimg5 from '../assets/img/w5.jpg'
import cardimg6 from '../assets/img/w6.jpg'
import cardimg7 from '../assets/img/w7.jpg'
import cardimg8 from '../assets/img/w8.jpg'
import cardimg9 from '../assets/img/w9.webp'
import cardimg10 from '../assets/img/w10.webp'
import cardimg11 from '../assets/img/w101.png'
// import cardimg12 from '../assets/img/l13.webp'
import cardimg13 from '../assets/img/output.png'
import cardimg14 from '../assets/img/output1.png'


function Kidsection() {
  return (
    <div>
         <div className='headingsection'><h2>Collections for Kids</h2></div>
          <div className="container230">
            
            <div className="card-grid">
                {/* Repeating card structure 10 times */}
                <div className="card-man">
                <img src={cardimg1} alt="" />
                    <h3>Tiny Treasure Trinkets</h3>
                    <div className="card-content303">
                        <h3>Rs 49000</h3>
                    </div>
                </div>

                <div className="card-man">
                <img src={cardimg2} alt="" />
                       
                       <h3>Petite Pendant Paradise</h3>
                    <div className="card-content303">
                        <h3>Rs 45675</h3>
                 
                    </div>
                </div>

                <div className="card-man">
                <img src={cardimg3} alt="" />
                    
                    <h3>Playful Gem Pal Pendant</h3>
                    <div className="card-content303">
                        <h3>Rs 55740</h3>
                  
                    </div>
                </div>

                <div className="card-man">
                <img src={cardimg3} alt="" />
                 
                    <h3>Joyful Stone Chain</h3>
                    <div className="card-content303">
                        <h3>Rs 69000</h3>
                      
                    </div>
                </div>

                <div className="card-man">
                <img src={cardimg4} alt="" />
                    <h3>Kid Craze Charms</h3>
                    <div className="card-content303">
                        <h3>Rs 78905</h3>
                    
                    </div>
                </div>

                <div className="card-man">
                <img src={cardimg5} alt="" />
              
                    <h3>Little Loom Lagoon Bracelet</h3>
                    <div className="card-content303">
                        <h3>Rs 49807</h3>
                     
                    </div>
                </div>

                <div className="card-man">
                <img src={cardimg6} alt="" />
                    <h3>Sunny Bead Sprouts</h3>
                    <div className="card-content303">
                        <h3>Rs 42745</h3>
                     
                    </div>
                </div>

                <div className="card-man">
                <img src={cardimg7} alt="" />
                
                    <h3>Frolic Fashion For Kid</h3>
                    <div className="card-content303">
                        <h3>Rs 63467</h3>
                      
                    </div>
                </div>

                <div className="card-man">
                <img src={cardimg8} alt="" />
                    
                    <h3>Pixie Gold Pendant</h3>
                    <div className="card-content303">
                        <h3>Rs 78905</h3>
                       
                    </div>
                </div>

                <div className="card-man">
                <img src={cardimg9} alt="" />
                    <h3>Junior Jamboree Pendant</h3>
                    <div className="card-content303">
                        <h3>Rs 49807</h3>
                    </div>
                </div>

                <div className="card-man">
                <img src={cardimg10} alt="" />
                    
                    <h3>Kinder Glow Pendant</h3>
                    <div className="card-content303">
                        <h3>Rs 52745</h3>
                 
                    </div>
                </div>

                <div className="card-man">
                <img src={cardimg11} alt="" />
                
                    <h3>Sweetie Sparkle Bracelet</h3>
                    <div className="card-content303">
                        <h3>Rs 83054</h3>
                  
                    </div>
                </div>
            </div>
        </div>
      <div className='manContainer'>
            <div className='firstChild'>
                <div className='meninfo1'>
                <img src={cardimg13} alt="" />
                    <h2>Elite Embellish Gold and Diamond Ring</h2>
                    <p>Discover elegance redefined with EliteEmbellish. Elevate your style, embrace sophistication. Unlock refined masculinity with EliteEmbellish. Every piece tells a story of elegances</p>
                </div>

            </div>
            <div className='secondChild'>
                <div className='meninfo2'>
                <img src={cardimg14} alt="" />
                    <h2>Indulge In Opulent Allure With Vista</h2>
                    <p>Experience the allure of Velvet Vista , Where Every piece tells a story of timeless beauty. Where style is a plush as velvet , and beauty knows no boundary.</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Kidsection;
