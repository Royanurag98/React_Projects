import React,{useState} from 'react';
import './HomPges.css'
import './Bridelsection.css'

import BridelCollections from './BridelCollections';





const images = [
  'https://s3-alpha-sig.figma.com/img/fd75/c974/48e5499592e91a27cb78abd5363a8a3d?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mnCb5bFcOa2wdD3sZHC-7v7eGtl0tLuZuQfWyY5SCnbucDFeflkpoFB3Hse~ELamh~mxNxP6dAvXBkNOrsUfp8znKXi9u4XE9brafpMs86ZuWRg0ucOpfVewLMJpYSTm88TqjiHmol5xf7c97JY~C2BI8M97NnRVSHx8vcnyoxAc0mt16V2mTbQdnzuqdrceW6DCkoZe5~FMhO~YG9go4Rcse-D8zpLYNba~jQ-Yb8JZxi52SoGr03bVFCCGLKzUCnsV30GnixEFxLeuhf-MS79KsTK7FpViL87hy~fZF8D1Lu7KL706RZXPCaoto7aFP4RDVilDV0Ai9eddqusOTQ__',
  'https://s3-alpha-sig.figma.com/img/507e/aa54/1428f01e767cab74cdffb42837e417f0?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nypMahpXobKBn4Qjkf~fOpm2nRwrI-8RV6bO7gGh60CzaIyj2UG5Ksd041qRWvym9Z3KaTZvhbAPOHKHTU4Ed~tCmF45zK0ONYfQpTf-UPePdhfVcoAA1cj-BHve-RYy6mrX3r6E5mjeeNHSw6WTbKhRSNcaI5dkHJQxzWGnEVJCYOzLBjRCt0RsuWzXW3qgOdoZEF99UoyHge4JRFB-j-8eGrvaoDJ2G~Mj3sPFrWRHP6o2uWuLd-4lXP6AlNCnCYJ9qIgYnB2d263RT9Gbg5cBQziwkWj7NQMKN~9viDZ95QG-cGAJMe9IcLpc-Sol18mMehcB-EAHYkM2qYbM4w__',
  'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwb6824f9b/homepage/HeroBanner/rivaah-desktop.jpg',
  'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw8d40a0ea/homepage/posters/gifting-banner-desktop-wb.jpg',
];
function BridelCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showProCards, setShowProCards] = useState(false);
  const [lastClicked, setLastClicked] = useState(null);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
    const product1 = [
        // ...your existing product array...
    
        // Golds Coins.....////////////////////////////////////////////////////////////////////////////
        {
          "id": 1,
         
          "thumbnail": "https://s3-alpha-sig.figma.com/img/3735/a1e3/b79ae8cbd7d4518b15d65c6c7300c8ed?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gFwiKB9RG0DVIMCt-AC8UfBZDOescFZpLu1BgiQZ6TMybdj3WgUQQu~oJuMRyimPZdow4hVjCD~gA47ccHQhNpNKC2cPHfVf~EJIH7-Ma-ZS3QK1cmDl~s-QvzOwsbfxceRax0XX3JdaVyCv95p-Z1IQL9pzJ946iSRyeVSS-oTWa6RJ5VqG9VFjz7FlIbj0UfPn9kKkt0NWbk2sN9u8WrgomqPVUx5CwZyNLuQw8Xcy8GuTA2mkbiNlFrvQsdPpgRhjRpOfVnXNBYIr~ZI76MVPCBS5mUAn~h-7OGScdDMIx8u09BiN57UHjojtjmHK7x~sR11LGIjGftbnlxm14g__",
        },
        {
          "id": 2,
         
          "thumbnail": "https://s3-alpha-sig.figma.com/img/7895/5b48/aea6c331519275910551c83ee86d986e?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n27tGVjngZHRYZrYU364H7-wH6o3kwI2fRxmkqf~272DQHvHztTnvMQK~1WvnoLyZhjfdkjTtTuPDxQCgjM~nYH1iKdGdkCUAO06DuCd6xnC0ODp0ivba-jIbkuAYzXx6~AXIYp1DUJ5R~GbCGNuxJb2UZuz0xefBYEC9NDbI6yfIJVAxkzyCtQBN4amm0ghfEI5QFGKMFDdbP1TLuZ4ro6SQfiHUNhZnON0urqTVdXltwkMyVhDCvXNZHeQVGhDAu-3ztVPU9tjY1CueXzuCHwh5CRA4GxAefzZwG0gt6ima1JiyLE3lplhqtHSBRuSyYUXER9-wD7AU5r-B6w18w__",
        },
        {
          "id": 3,
       
          "thumbnail": "https://s3-alpha-sig.figma.com/img/20b8/b964/a25d127ca8d96fc636ef377a7378d6ce?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cAeI2w7nmE6W2ulaWvqBBVsBtrQtq6-e8QUEnarf6ln-Acm97KSm5qe0VyNLjMKQk21xSWRkMwU5hHndwOO4QY3UBWgxV9CcRnt5hKmLMP27L~LorCi7d-VkfZF7PEUWm2U07vnTqPvyBG-eh8755NR3GUGmXsEgWUCIhSZQZVEWGT9a~e89e4JHNee9K7bGE2mRtAadt8CVVmLjDj9vnS8FsMwaKQKaYnzJztthiTFdOfZUd1NiEbHLVVpuexHzxc3IRWuWX9pxUoWICQIGypGvScg8V7Djod0~BHuhEQq~2ilhAw1aJbgX5Vge9N6ZfXxQ2YzAPhN-1IgSrDgrkg__",
        },
        {
          "id": 4,
        
          "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVM26A-OtfSrZCV1Gx2y3xwT_JYnppDAKdKw&s",
        },
        {
          "id": 5,
         
          "thumbnail": "https://i.pinimg.com/originals/6f/a0/b7/6fa0b79e25c923b29f57ea4c2ed9785d.jpg",
        },
        {
          "id": 6,
        
          "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOwnuPK-BFz9__VLaM1nsVJghQoqHc1nAG1w&s",
        },
        {
          "id": 7,
       
          "thumbnail": "https://s3-alpha-sig.figma.com/img/20b8/b964/a25d127ca8d96fc636ef377a7378d6ce?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cAeI2w7nmE6W2ulaWvqBBVsBtrQtq6-e8QUEnarf6ln-Acm97KSm5qe0VyNLjMKQk21xSWRkMwU5hHndwOO4QY3UBWgxV9CcRnt5hKmLMP27L~LorCi7d-VkfZF7PEUWm2U07vnTqPvyBG-eh8755NR3GUGmXsEgWUCIhSZQZVEWGT9a~e89e4JHNee9K7bGE2mRtAadt8CVVmLjDj9vnS8FsMwaKQKaYnzJztthiTFdOfZUd1NiEbHLVVpuexHzxc3IRWuWX9pxUoWICQIGypGvScg8V7Djod0~BHuhEQq~2ilhAw1aJbgX5Vge9N6ZfXxQ2YzAPhN-1IgSrDgrkg__",
        },
        {
          "id": 8,
     
          "thumbnail": "https://s3-alpha-sig.figma.com/img/7895/5b48/aea6c331519275910551c83ee86d986e?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n27tGVjngZHRYZrYU364H7-wH6o3kwI2fRxmkqf~272DQHvHztTnvMQK~1WvnoLyZhjfdkjTtTuPDxQCgjM~nYH1iKdGdkCUAO06DuCd6xnC0ODp0ivba-jIbkuAYzXx6~AXIYp1DUJ5R~GbCGNuxJb2UZuz0xefBYEC9NDbI6yfIJVAxkzyCtQBN4amm0ghfEI5QFGKMFDdbP1TLuZ4ro6SQfiHUNhZnON0urqTVdXltwkMyVhDCvXNZHeQVGhDAu-3ztVPU9tjY1CueXzuCHwh5CRA4GxAefzZwG0gt6ima1JiyLE3lplhqtHSBRuSyYUXER9-wD7AU5r-B6w18w__",
        },
        {
          "id": 9,
          "thumbnail": "https://s3-alpha-sig.figma.com/img/3735/a1e3/b79ae8cbd7d4518b15d65c6c7300c8ed?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gFwiKB9RG0DVIMCt-AC8UfBZDOescFZpLu1BgiQZ6TMybdj3WgUQQu~oJuMRyimPZdow4hVjCD~gA47ccHQhNpNKC2cPHfVf~EJIH7-Ma-ZS3QK1cmDl~s-QvzOwsbfxceRax0XX3JdaVyCv95p-Z1IQL9pzJ946iSRyeVSS-oTWa6RJ5VqG9VFjz7FlIbj0UfPn9kKkt0NWbk2sN9u8WrgomqPVUx5CwZyNLuQw8Xcy8GuTA2mkbiNlFrvQsdPpgRhjRpOfVnXNBYIr~ZI76MVPCBS5mUAn~h-7OGScdDMIx8u09BiN57UHjojtjmHK7x~sR11LGIjGftbnlxm14g__"
        },
        {
          "id": 10,
       
          "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcYZoGrJyGk3-6h1OfOya5UkmXLELm6-hcA&s"
        },
        {
          "id": 11,
       
        
          "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2X6udT3UUp7M4iwtiQBKWYA2zbJU-5QX7GA&s"
        },
        {
          "id": 12,
       
      
          "thumbnail": "https://d1f34ajap1v5tm.cloudfront.net/image/Indian-Brides-Who-Dazzled-In-Red-Ethnic-Wear-9-1%20-.jpg"
        },
        {
          "id": 13,
       
          "thumbnail": "https://s3-alpha-sig.figma.com/img/30e0/e92d/cf210c2ff250a6429c9001a7e670e0a7?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZOXDA0-hRVYcx3MDVimyewXnC4V0dWAPKdbvcbP0IIul~UdZ6WQvBYpD4e1nf6BUBwwLZZr48J4Jha-zxyRj-ZkMx9DbAiw8QQe7rR3zc2SozlnF8Jk~JAjpa4FccvPH3nfHDeLOXCF7zS06M3UL-eGMiB7b7K7rmv6wmxFskIORme2n4t7SJh0L0zgjuLzk7kUQSeos803MTXNLbzDdvHhfmnrlpz8YsO6QI0ZAu5W7-1GwHdzcSUtbrbq0SKhHy3C4AciRVfyJaip~XcQC-VSUH4q6L5hx~72LHqA2pBepJcP4vRPn8JPW1AGD7mbcN~qeexfwe1PslNpuZzuaYA__"
        },
        {
          "id": 14,
        
        
          "thumbnail": "https://s3-alpha-sig.figma.com/img/f754/e083/a586a9a8a1593db82da3efb7d5008d37?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f3IWGl3jN7eAcsod4eto3bfLxocm9va8rrLoVTgri36eESb4CQd7rvj0hsRhAeyN3Wjz8BJSzOW5g0rHod1Kmn4cPzcgJwkNtWZkWoZHqpPYfOcPiZBqjzlD0UwtpP9OsdskruBQU~b77v6j8NejBG0PGMrqUEt7xjhrbPVth9xiad7EPa6gzKEz~c-M06TEmG3xTiBZ4HvtFSVLZPjSAw2gW8wD8bF4EdYcq9tnIREHQ2sDNH2T6bayRBJ~rAHsokdc2~~L2lXzQMQm1yfm3leB9Xqb6Vnusznq26Pb5S5-emhc6y7Qd-niHe2BpyY3JOPJ6hJxovmehplUBYZv4w__"
        },
        {
          "id": 15,
      
          "thumbnail": "https://s3-alpha-sig.figma.com/img/bcef/c182/1e202833bf5843aca34299c6bafc1771?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XuN9jqvI~tckIyq51r3l2E-2d~xTTbH~~XvdTzHM5fDRgD0ksiQIosDP2vjHsZahE9WbDnZ6UxVBUfjA7Y6l0r92uZtf0Wzd122nO1KsFAQTSdjN3Ls0UYVH68pcn51KUzhEVjVsOjq0AO7tAp7fynq88bi6Lnqp22OZ4iSC2BWRvI0m8LGHri8zHB9OPTGqMMQm0C2~zJD4rjpSDhCdB1VHIlshkMUMkRnskJgld-JASfSMo8RxU2yAxEWKWRo51QhArNQtUAslxZN9nYZV-dV48awpNvebhOR8Eg5iE1dgRDdNJofCu0E7zAKOyh573Wu1PINW0ERUfGG938h9Wg__"
        },
        {
          "id": 16,
       
       
          "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcAtKv6qY2BiTVBEk-xD1Qc2FL1skPnymSZg&s"
        },
        {
          "id": 17,
        
         
          "thumbnail": "https://image.wedmegood.com/resized-nw/700X/wp-content/uploads/2022/09/376832555_636379631952880_8487649127353925902_n.jpg"
        },
        {
          "id": 18,
       
        
          "thumbnail": "https://i.pinimg.com/originals/33/f5/a3/33f5a3db643ea7c4511aae1f07054cb9.jpg"
        },
        {
          "id": 19,
       
       
          "thumbnail": "https://s3-alpha-sig.figma.com/img/122e/9ff1/15fcd891cf7142f95f058a817ee8d1ab?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Llm4YaMMee7cy~ClY~-PRCRKX2hrEsj1ZqD-qvS96Ir50XBlzCH1mxT0iPPnAJsEZqUcXg9UGby48G2ZAPEp8JticaKLMvMDhJP366-uP9y8~~KXuC8Lx53l2sGK2w0qgAH-YUeOUzViwG6tra1bSTjPr5PeMCHkZ6122OLSNdYXcbx59n6WcKRJZ9Yqt3ytzFmzCOSDpiGPEzJxFo2o4DeuVf-t0tm~qXU40jVxe~F6nE1f5zdK51GATDefSMbWSG1U0SO1gpjIeN1~Xjoh1tHj862JNNn801eJG7Owc5y32vgv9oXsLzTf9wRPUKO3O95kwoy2TC6dvdwYJxxU2Q__"
        },
        {
          "id": 20,
       
          "thumbnail": "https://s3-alpha-sig.figma.com/img/b932/e8c3/6dedbe44e26b3f71edfd61a748580e93?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gWs6yEOkVqxkH1qKdAqO2En78uDvnCyg8wrYt4C1e-phJD-B0ns8FEElENjTEJpu8dStbXU2v5HCTsNpX2BtvmxG7AdhAwAYQyRy1ZGnIannDAT-vn3PfczyQcNF87kJg08lDJV1XY1AhL8JKXDsRMVLB3f3JgrZDWrShxZ437eUF8-9gAk0mZ5YeCg9XDVCEfKEdrGJ0PKvNpkslLkFxXcsz0k-KBYb8wx6GCHEo6URUeT~-6G49qUvtHvX70Paz4YbDIFA8njwBHtUEAZIPL7oy6LDWdt0vbEITu5CvbDsKrMBp3cNUr664iJ3NeMDPcntdSk2p4wwzhRTspn8QQ__"
        },
        {
          "id": 21,

          "thumbnail": "https://s3-alpha-sig.figma.com/img/6e16/f2da/17c9494ffe2d79aebf3aceac88ae942b?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lQlj7uAmxJyoUlajGeCoHViJshlmTOctKH3zYqkZrs1LaEXfzWVWCJHgUUmXB2sBm0hs2srrGdlj7DDZ2q8HjAvC1ed9le4QYvklBjbDtmZ0HYTuuATfCXLltxnV4Mc6uvQci4bLYIKXDOR6dsAh3dNVjYLqKffY4sqXMFQcAEd-jG-Xy1Sy24GRi7tKu7UXayZ-h2cXwyDxsH4t846CwSJ-w5UafeXPSMoBsYHG8cq6JCPsoC~Bug4h5SjIx-S-2G6~7x2FStdLAK1qHuAO-ouRM35ZErvOx6NVE~efjqx4T4UGDpE30E8-iUsvzHhhwUgpUulyHa8EMCLFOlnPOQ__"
        },
        {
          "id": 22,
    
          "thumbnail": "https://i.pinimg.com/originals/33/f5/a3/33f5a3db643ea7c4511aae1f07054cb9.jpg"
        },
        {
          "id": 23,
      
       
          "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcAtKv6qY2BiTVBEk-xD1Qc2FL1skPnymSZg&s"
        },
        {
          "id": 24,
       
          "thumbnail": "https://d1f34ajap1v5tm.cloudfront.net/image/Indian-Brides-Who-Dazzled-In-Red-Ethnic-Wear-9-1%20-.jpg"
        },
    
      
        
        
      ]
   
    let proToShow = product1.filter((product, index) => {

      switch (lastClicked) {
        case 'Enchanting':
          return index < 6;
        case 'Trendsetter':
          return index >= 6 && index < 12;
          case 'Dazzling':
            return index >= 12 && index <18;
          case 'Elegant':
            return index >=18 && index <24;
      
    }
  });

    // 
      const changeCards1 = () => {
        setLastClicked('Enchanting');
        setShowProCards(true);
    
        document.querySelector('.item9').style.color = 'orange'
        document.querySelector('.shop1').innerText=" Bridal Special > Enchanting"
        document.querySelector('.shop1').style.backgroundColor = "gray";
        document.querySelector('.shop1').style.color='white'
        document.querySelector('.shop1').style.textShadow=' 2px 2px 4px #000000;'
        document.querySelector('.container240').style.display="none"
        // document.querySelector('.card-shop').style.display="block"
      };
      const changeCards2 = () => {
        setLastClicked('Trendsetter');
        setShowProCards(true);
        document.querySelector('.item9').style.color = ''
        document.querySelector('.item10').style.color = 'orange'
        document.querySelector('.shop1').innerText="Bridal Special > Trendsetter"
        document.querySelector('.shop1').style.backgroundColor = "gray";
        document.querySelector('.shop1').style.color='white'
        document.querySelector('.shop1').style.textShadow=' 2px 2px 4px #000000;'
        // document.querySelector('.card-shop').style.display="block"
      };
      const changeCards3 = () => {
        setLastClicked('Dazzling');
        setShowProCards(true);
        document.querySelector('.item10').style.color = ''
        document.querySelector('.item11').style.color = 'orange'
        document.querySelector('.shop1').innerText="Bridal Special > Dazzling"
        document.querySelector('.shop1').style.backgroundColor = "gray";
        document.querySelector('.shop1').style.color='white'
        document.querySelector('.shop1').style.textShadow=' 2px 2px 4px #000000;'
      };
      const changeCards4 = () => {
        setLastClicked('Elegant');
        setShowProCards(true);
        document.querySelector('.item11').style.color = ''
        document.querySelector('.item12').style.color = 'orange'
        document.querySelector('.shop1').innerText="Bridal Special > Elegant"
        document.querySelector('.shop1').style.backgroundColor = "gray";
        document.querySelector('.shop1').style.color='white'
        document.querySelector('.shop1').style.textShadow=' 2px 2px 4px #000000;'
      };
    
  return (
    <>
    <div className='btns'>

    <div className="slider200">
      <div className="slider-content">
        <button className="left-arrow" onClick={goToPrevious}>❮</button>
        <div className="image">
          <img src={images[currentIndex]} alt="slider" />
        </div>
        <button className="right-arrow" onClick={goToNext}>❯</button>
      </div>
    </div>
  </div>

  <div className='container-Shop'>
    <div className='left_con'>
      <h1>Categories</h1>
      <div>
        <h3>Crystals</h3>
        <ul>
          <li className='itme9' >Gemstone</li>
          <li className='itme10'>Diamond</li>

        </ul>
      </div>
      <div>
        <h3>Carats</h3>
        <ul>
          <li className='itme11' >Gold</li>
          <li className='itme12'>Platinum</li>
        </ul>
      </div>
      <div>
        <h3>Products</h3>
        <ul>

          <li className='item1' > Coin </li>
          <li className='item2'> Biscuit </li>
          <li className='item3' >Necklace</li>
          <li className='item4' >Bracelet</li>
          <li className='item5' > Bangles</li>
          <li className='item6' > Earrings</li>
          <li className='item7' >Pendant</li>
          <li className='item8' >Ring</li>
          <li>Mangalsutra</li>
          <li> Nosepin</li>
        </ul>
      </div>

      <div>
      <h3 > Bridal Special </h3> 
        <ul>
          <li className='item9' onClick={changeCards1}>Enchanting</li>
          <li className='item10' onClick={changeCards2}>Trendsetter</li>
          <li  className='item11' onClick={changeCards3}>Dazzling</li>
          <li  className='item12' onClick={changeCards4}>Elegant</li>
        </ul>
      </div>
      <div>
        <h3>Occasional</h3>
        <ul>
          <li>Birthday</li>
          <li>Anniversary</li>
          <li>Baby Birth </li>
          <li> Festive Gifts </li>
        </ul>
      </div>
      <div style={{ padding: "5px" }}>
        <h3>Personalised </h3>
        <h3 style={{ paddingTop: "5px" }}>Jewellery Box</h3>
      </div>
    </div>
    
    <div className='right_con'>
          <div className='shop1'>Welcome to Bridal Jewellery Special</div>
          <div className="container240">
            
            <div className="card-grid1">
                {/* Repeating card structure 10 times */}
                <div className="card-man1">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/027f/d81f/998e718a5a0043e25fef6215ec14e6b5?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oR99NbWgMNMxFNK-DIB9wcFFawBNA5Q~4J8Y9zXnwmw3QSKQlz6uZDErKSLVn86zmGQW7cwAaoe-cth41EKC6~6Pm0KGJYwZ5fO5t-8eQk9vqN0Z1PQdhhJlrDD46G43HQJkgjnwHJhS-hwoeYW4hJTdF9lq8RPlkKEeKXR-kiaIQlbBHlFSgV8apLtUic-R85UsH9dkqqjgnV0WbntTmwgMR4DDnNTUWfnfJIYUxEF0nELAhWhSxvhH1Sh120QJ3S4nSY4C1LA~Q1OV~SHdcqLYbkwUIULQ25hvpi~Q4mrlD811wCGCwX7VBxUy7~ke~shVULXVzLBOo-3kwG6MBg__"
                        alt="Card Image"
                    />
                 
                    <div className="card-content304">
                        <h3>Explore Collection</h3>
                    </div>
                </div>

                <div className="card-man1">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/66a0/c06e/3830984ecb1f9cfbb08950b61b5fcd7e?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TnSYYVnYGhP4PUt2llWeJCM85bh7YV5fXxKEOzYVj5VEU7ZA3xgJ70MazuASAPIEegwYqefy4GlUr~uC5pBLkcYA6LQLE0VdOeeeVKfHmwVng2ez9yvH5fRuu5kgJGfdyywJNvH4u5HnylVL9YRXtR50TU9OOG4zmgChYJ6DLZIJaB9FxJQutSNKSbvgq1iRg-vyy1Krj3DAHlkO69Q5vzMjtpL~sR8E96HRbIM~jqQOlG99fB4xw516ZpIW4BQAJ92awFsvnUMI9MRGZ~bKR5dZFlWar6g27D4NhiwfEf1nwD7PoKciBWh8pXMfhINR9nR8IR8Eehkh0wAnfxLdSw__"
                        alt="Card Image"
                    />
                       
                     
                    <div className="card-content304">
                        <h3>Explore Collection</h3>
                 
                    </div>
                </div>

                <div className="card-man1">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/c0c9/6287/a1988d3b05a0f54be8a58f6f88fc3888?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LuomUZvU7hdREDsM63iS8zrk3OQSqh4ZXYAHCF1uGe5M9ayW7j5w~D0q2RiHG2IW9Gcm0YODu-lPv7lbQNbozK4xszskQ7A4nWmKNnNLfEMo7ocp~XPSEqdwnF8ALUQFgX-E3kFHo7JjNfMFUJZnNY1q6223de75LKAyrtngDAaAV80MpWRwP7QoxzoG8fnzsduVO9qX2Krpu5o-b8JZa9uDME3JAjSp2eKmYn2U89P2GJ~~F6bbH1iFVyrBht27wSFKzc~ajpsRLb-Vrz9u5Oo2UXhAWgnxK2jR5tTZZhZXVjR-6JLYWAltfojaiUx9ub-Gv8xE4CVnky0mHtn9Ug__"
                        alt="Card Image"
                    />
                    
                    
                    <div className="card-content304">
                        <h3>Explore Collection</h3>
                  
                    </div>
                </div>

                <div className="card-man1">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/e792/f8fb/cc59b9b63c2655747746a453e50b7057?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jgMHhObjVgih0l2qkmdQRNUWOrYej8AXMQOH-gztOsG4bp6aj-fZaa79XHPMQ0Lcw~m409-DFuieTFy7V~GM796IBzePifMjtu8wCc~AezyYJO9pxq0xsRJ9oyHFy5kc3sYNmOyc13IqG27IjnQLqeZOPZtm2gvuYCup5XLonxgpv9StbbwQUL0EqGgknhoa7cd1VIrCialCLogSxfKBDrr-g5JEQBLt2gO4a7KYLavs5p0U0JSsjOmbGA3FNcVTmTOl566b~4MRpeiaQ2Vi1L0tpnV094r~Q4L60ueVHMyMB21D3tUDu6BX7To8f7ketXOxgM-Q6zEIT6Ky9ALBCQ__"
                        alt="Card Image"
                    />
                 
                  
                    <div className="card-content304">
                        <h3>Explore Collection</h3>
                      
                    </div>
                </div>
              </div>
              </div>
              {showProCards&& (
            <div className="card-shop1">
              { proToShow.map((product) => (
                <BridelCollections key={product.id} product={product}  />
              ))}
            </div>
          )}

    </div>
   
    </div>
    <style>
      
    </style>

    </>
    
  );
}

export default BridelCards;
