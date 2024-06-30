import React from 'react';
import cardimg1 from '../assets/img/k1.webp'
import cardimg2 from '../assets/img/k2.webp'
import cardimg3 from '../assets/img/k3.webp'
import cardimg4 from '../assets/img/k4.webp'
import cardimg5 from '../assets/img/k5.webp'
import cardimg6 from '../assets/img/k6.webp'
import cardimg7 from '../assets/img/k7.jpg'
import cardimg8 from '../assets/img/k8.jpg'
import cardimg9 from '../assets/img/k9.jpg'
import cardimg10 from '../assets/img/k71.png'
// import cardimg11 from '../assets/img/l12.jpg'
// import cardimg12 from '../assets/img/l13.webp'
import cardimg13 from '../assets/img/output.png'
import cardimg14 from '../assets/img/output1.png'


function Womensection() {
  return (
    <div>
        <div className='headingsection'><h2>Collections for Womeans</h2></div>
          <div className="container230">
            
            <div className="card-grid">
                {/* Repeating card structure 10 times */}
                <div className="card-man">
                    <img src={cardimg1} alt="" />
               
                    <h3>Blossom Brio Earing</h3>
                    <div className="card-content303">
                        <h3>Rs 58976</h3>
                    </div>
                </div>

                <div className="card-man">
                           <img src={cardimg2} alt="" />
                       <h3>Regal Radiance Gold Pendant</h3>
                    <div className="card-content303">
                        <h3>Rs 49807</h3>
                 
                    </div>
                </div>

                <div className="card-man">
                <img src={cardimg3} alt="" />
                    
                    <h3>Luminous Loom Pendant</h3>
                    <div className="card-content303">
                        <h3>Rs 52745</h3>
                  
                    </div>
                </div>

                <div className="card-man">
                <img src={cardimg4} alt="" />
                 
                    <h3>Fleur Finesse Gold Ring</h3>
                    <div className="card-content303">
                        <h3>Rs 65000</h3>
                      
                    </div>
                </div>

                <div className="card-man">
                <img src={cardimg5} alt="" />
                 
                    <h3>Gem Grace Orchid Ring</h3>
                    <div className="card-content303">
                        <h3>Rs 78680</h3>
                    
                    </div>
                </div>

                <div className="card-man">
                <img src={cardimg6} alt="" />
              
                    <h3>Elegance Enclave Bracelet</h3>
                    <div className="card-content303">
                        <h3>Rs 89056</h3>
                     
                    </div>
                </div>

                <div className="card-man">
                <img src={cardimg7} alt="" />
                 
                    <h3>Diva Dazzle Stone Earing</h3>
                    <div className="card-content303">
                        <h3>Rs 55234</h3>
                     
                    </div>
                </div>

                <div className="card-man">
                <img src={cardimg8} alt="" />
                
                    <h3>Sparkle Spare Gold Earing</h3>
                    <div className="card-content303">
                        <h3>Rs 63751</h3>
                      
                    </div>
                </div>

                <div className="card-man">
                <img src={cardimg9} alt="" />
                    
                    <h3>Rs 63751</h3>
                    <div className="card-content303">
                        <h3>Rs 78905</h3>
                       
                    </div>
                </div>

                <div className="card-man">
                <img src={cardimg10} alt="" />
                    <h3>Regal Radiance Bracelet</h3>
                    <div className="card-content303">
                        <h3>Rs 95879</h3>
                    </div>
                </div>

                <div className="card-man">
                <img src={cardimg1} alt="" />
                    
                    <h3>Regal Radiance Bracelet</h3>
                    <div className="card-content303">
                        <h3>Rs 75000</h3>
                 
                    </div>
                </div>

                <div className="card-man">
                <img src={cardimg1} alt="" />
                
                    <h3>Regal Radiance Bracelet</h3>
                    <div className="card-content303">
                        <h3>Rs 72000</h3>
                  
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

export default Womensection;
