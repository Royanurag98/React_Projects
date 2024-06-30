import React from 'react';
import cardimg1 from '../assets/img/l2.jpg'
import cardimg2 from '../assets/img/l3.jpg'
import cardimg3 from '../assets/img/l4.jpg'
import cardimg4 from '../assets/img/l5.jpg'
import cardimg5 from '../assets/img/l6.png'
import cardimg6 from '../assets/img/l7.jpg'
import cardimg7 from '../assets/img/l8.jpg'
import cardimg8 from '../assets/img/l9.jpg'
import cardimg9 from '../assets/img/l10.webp'
import cardimg10 from '../assets/img/l11.webp'
import cardimg11 from '../assets/img/l12.jpg'
import cardimg12 from '../assets/img/l13.webp'
import cardimg13 from '../assets/img/output.png'
import cardimg14 from '../assets/img/output1.png'

// const img=[
//     {},
//     '../assets/img/l1.jpg',
//     '../assets/img/l1.jpg',
//  ]


function Mansection() {
    return (
        <div>
             <div className='headingsection'><h2>Collections for Means</h2></div>
            <div className="container230">
            
                <div className="card-grid">
                    {/* Repeating card structure 10 times */}
                    <div className="card-man">
                        <img
                            src={cardimg1}
                            alt="Card Image"
                        />
                        <h3>Gold GentsGleam Ring</h3>
                        <div className="card-content303">
                            <h3>Rs 67800</h3>
                        </div>
                    </div>

                    <div className="card-man">
                        <img
                         src={cardimg2}
                            alt="Card Image"
                        />
                           
                           <h3>BoldCraftsman geometric Ring</h3>
                        <div className="card-content303">
                            <h3>Rs 72867</h3>
                     
                        </div>
                    </div>

                    <div className="card-man">
                        <img
                         src={cardimg3}
                            alt="Card Image"
                        />
                        
                        <h3>TitanTrove Stylish Bracelet</h3>
                        <div className="card-content303">
                            <h3>Rs 89000</h3>
                      
                        </div>
                    </div>

                    <div className="card-man">
                        <img
                           src={cardimg4}
                            alt="Card Image"
                        />
                     
                        <h3>Asethic ManlyGemForge Chain</h3>
                        <div className="card-content303">
                            <h3>Rs 97450</h3>
                          
                        </div>
                    </div>

                    <div className="card-man">
                        <img
                            src={cardimg5}
                            alt="Card Image"
                        />
                     
                        <h3>ForgeFiness Gold Chain</h3>
                        <div className="card-content303">
                            <h3>Rs 78905</h3>
                        
                        </div>
                    </div>

                    <div className="card-man">
                        <img
                              src={cardimg6}
                        />
                  
                        <h3>PinnaclePendant Gold Chain</h3>
                        <div className="card-content303">
                            <h3>Rs 89056</h3>
                         
                        </div>
                    </div>

                    <div className="card-man">
                        <img
                               src={cardimg7}
                            alt="Card Image"
                        />
                     
                        <h3>ApexArtisan Gold Pendant</h3>
                        <div className="card-content303">
                            <h3>Rs 65460</h3>
                         
                        </div>
                    </div>

                    <div className="card-man">
                        <img
                               src={cardimg8}
                            alt="Card Image"
                        />
                    
                        <h3>ManlyGem Forge Gold Ring</h3>
                        <div className="card-content303">
                            <h3>Rs 90000</h3>
                          
                        </div>
                    </div>

                    <div className="card-man">
                        <img
                                src={cardimg9}
                            alt="Card Image"
                        />
                        
                        <h3>Masculin Metal Gold Ring</h3>
                        <div className="card-content303">
                            <h3>Rs 78905</h3>
                           
                        </div>
                    </div>

                    <div className="card-man">
                        <img
                               src={cardimg10}
                            alt="Card Image"
                        />
                        <h3>StarlwartStyles Gold Chain</h3>
                        <div className="card-content303">
                            <h3>Rs 95879</h3>
                        </div>
                    </div>

                    <div className="card-man">
                        <img
                                src={cardimg11}
                            alt="Card Image"
                        />
                        
                        <h3>Elemental Elegance Pendant</h3>
                        <div className="card-content303">
                            <h3>Rs 84563</h3>
                     
                        </div>
                    </div>

                    <div className="card-man">
                        <img
                                   src={cardimg12}
                            alt="Card Image"
                        />
                    
                        <h3>Sovereign Stone Ring</h3>
                        <div className="card-content303">
                            <h3>Rs 96900</h3>
                      
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

                export default Mansection;
