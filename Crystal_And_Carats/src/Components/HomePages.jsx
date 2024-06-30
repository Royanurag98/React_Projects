import React, { useState } from 'react';
import './HomPges.css'
import Cards from './Cards';
import { Link, NavLink } from 'react-router-dom'


const images = [
  '../assets/img/2X.jpg',
  'https://s3-alpha-sig.figma.com/img/507e/aa54/1428f01e767cab74cdffb42837e417f0?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nypMahpXobKBn4Qjkf~fOpm2nRwrI-8RV6bO7gGh60CzaIyj2UG5Ksd041qRWvym9Z3KaTZvhbAPOHKHTU4Ed~tCmF45zK0ONYfQpTf-UPePdhfVcoAA1cj-BHve-RYy6mrX3r6E5mjeeNHSw6WTbKhRSNcaI5dkHJQxzWGnEVJCYOzLBjRCt0RsuWzXW3qgOdoZEF99UoyHge4JRFB-j-8eGrvaoDJ2G~Mj3sPFrWRHP6o2uWuLd-4lXP6AlNCnCYJ9qIgYnB2d263RT9Gbg5cBQziwkWj7NQMKN~9viDZ95QG-cGAJMe9IcLpc-Sol18mMehcB-EAHYkM2qYbM4w__',
  'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwb6824f9b/homepage/HeroBanner/rivaah-desktop.jpg',
  'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw8d40a0ea/homepage/posters/gifting-banner-desktop-wb.jpg',
];
function HomePages() {
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


  const handleToggle1 = () => {
    setShowProCards(true);
    setLastClicked(' Gemstone');
    document.querySelector('.item8').style.color = ''
    document.querySelector('.item9').style.color = 'orange'
    document.querySelector('.price').innerText=" Gemstone Best Sellers"
  };

  const handleToggle2 = () => {
    setShowProCards(true);
    setLastClicked('Diamond');
    document.querySelector('.item9').style.color = ''
    document.querySelector('.item10').style.color = 'orange'
    document.querySelector('.shop').innerText=" Diamond Best Sellers"
  };

  const handleToggle3 = () => {

    setShowProCards(true);
    setLastClicked('Gold');
    document.querySelector('.item10').style.color = ''
    document.querySelector('.item11').style.color = 'orange'
    document.querySelector('.shop').innerText=" Gold Best Sellers"
    


  };

  const handleToggle4 = () => {
    setShowProCards(true);
    setLastClicked('Platinum');
    document.querySelector('.item11').style.color = ''
    document.querySelector('.item12').style.color = 'orange'
    document.querySelector('.shop').innerText=" Platinum Best Sellers"
  };

  const handleToggle = () => {

    setShowProCards(true);
    setLastClicked('Coin');
    document.querySelector('.item1').style.color = 'orange'
    document.querySelector('.shop').innerText=" Gold Coins Best Sellers"
    document.querySelector('.shop').style.backgroundColor = "gray";
    document.querySelector('.shop').style.color='white'
    document.querySelector('.shop').style.textShadow=' 2px 2px 4px #000000;'
 


  };

  const handleChange = () => {
    setShowProCards(true);
    setLastClicked('biscuit');
    document.querySelector('.item1').style.color = ''
    document.querySelector('.item2').style.color = 'orange'
    document.querySelector('.shop').innerText=" Gold Biscuit Best Sellers"


  };

  const handleChange1 = () => {
    setShowProCards(true);
    setLastClicked('necklace');
    document.querySelector('.item2').style.color = ''
    document.querySelector('.item3').style.color = 'orange'
    document.querySelector('.shop').innerText=" Necklace Best Sellers"

  };

  const handleChange2 = () => {
    setShowProCards(true);
    setLastClicked('Bracelet');
    document.querySelector('.item3').style.color = ''
    document.querySelector('.item4').style.color = 'orange'
    document.querySelector('.shop').innerText=" Bracelet Best Sellers"

  };
  const handleChange3 = () => {
    setShowProCards(true);
    setLastClicked('Bangles');
    document.querySelector('.item4').style.color = ''
    document.querySelector('.item5').style.color = 'orange'
    document.querySelector('.shop').innerText=" Bangles Best Sellers"

  };
  const handleChange4 = () => {
    setShowProCards(true);
    setLastClicked('Earrings');
    document.querySelector('.item5').style.color = ''
    document.querySelector('.item6').style.color = 'orange'
    document.querySelector('.shop').innerText=" Earrings Best Sellers"

  };
  const handleChange5 = () => {
    setShowProCards(true);
    setLastClicked('Pendant');
    document.querySelector('.item6').style.color = ''
    document.querySelector('.item7').style.color = 'orange'
    document.querySelector('.shop').innerText=" Pendant Best Sellers"

  };
  const handleChange6 = () => {
    setShowProCards(true);
    setLastClicked('Ring');
    document.querySelector('.item7').style.color = ''
    document.querySelector('.item8').style.color = 'orange'
    document.querySelector('.shop').innerText=" Ring Best Sellers"

  };

  const products = [
    // ...your existing product array...

    // Golds Coins.....////////////////////////////////////////////////////////////////////////////
    {
      "id": 1,
      "description": "An apple mobile which is nothing like apple",
      "price": '1569',
      "discountPercentage": 10,
      "thumbnail": "https://media.istockphoto.com/id/168268416/photo/american-eagle-gold-coin-bullion-investment-obverse.jpg?s=1024x1024&w=is&k=20&c=1AnBVyCJ1MI7exMtrhhjxSZ64c9hfYdj7ks0MK0FezA=",
    },
    {
      "id": 2,
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 1122,
      "discountPercentage": 10.30,
      "thumbnail": "https://media.istockphoto.com/id/508105588/vector/golden-token.jpg?s=612x612&w=0&k=20&c=i0aEYhNZ1roW7wKDXLwk0os7FyxwX4zZvuElWSNbs5Q=",
    },
    {
      "id": 3,
 
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 11.46,
      "thumbnail": "https://media.istockphoto.com/id/178909251/vector/coin-with-dollar-sign.jpg?s=612x612&w=0&k=20&c=_RZ0G6sn-uphmgPyjkfY2Wu01XorWAwEGrs0Fe_eYpY=",
    },
    {
      "id": 4,
   
      "description": "OPPO F19 is officially announced on April 2021.",
      "price": 2800,
      "discountPercentage": 9,
      "thumbnail": "https://media.istockphoto.com/id/843909414/vector/gold-pound-coin-cartoon-style-isolated.jpg?s=612x612&w=0&k=20&c=m-WKpVYiSKU0gOUgS-depkHIrqnsuYstY05IDq2D68s=",
    },
    {
      "id": 5,
    
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": 1990,
      "discountPercentage": 10.58,
      "thumbnail": "https://media.istockphoto.com/id/1070095258/vector/golden-coin-with-yuan-symbol-isolated-on-white-background-vector-finance-icon.jpg?s=1024x1024&w=is&k=20&c=YwV1gduuU0Eb-0-KjPaYsKgCxgP8F3JSrmhyOH-Hq-w="
    },
    {
      "id": 6,
   
      "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
      "price": 1749,
      "discountPercentage": 11.02,
      "thumbnail": "https://media.istockphoto.com/id/1344645419/photo/front-view-a-blank-gold-coin-with-a-silver-center-3d-render.jpg?s=612x612&w=0&k=20&c=jVHF3gReZ_4u3C0sjd68RnZe-84q1x3IQASJIc8GIQw=",
    },
    {
      "id": 7,
   
      "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      "price": 1499,
      "discountPercentage": 8.15,
      "thumbnail": "https://media.istockphoto.com/id/1190369461/vector/golden-coin-with-star-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=8yD3YcR14IZvOCWhPgkdHoTc_PcFJ7DEXR43odUQTo4=",
    },
    {
      "id": 8,
     
      "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      "price": 1599,
      "discountPercentage": 10.23,
      "thumbnail": "https://media.istockphoto.com/id/165921096/vector/dollar.jpg?s=612x612&w=0&k=20&c=Ihfg4-X3ebeacPIFKgIkFp3KQOERGPi7B8U0YQqZcMI=",
    },
    {
      "id": 9,
    
      "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey  1 Year Warranty",
      "price": 1099,
      "discountPercentage": 11.83,
      "thumbnail": "https://media.istockphoto.com/id/1090995736/photo/antique-gold-skull-coin.jpg?s=612x612&w=0&k=20&c=IGGQvzgEZR2WNsY5vDj8v7sZd1wErBsfAalN_PjCxUo=",
    },
    {
      "id": 10,
    
      "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey  1 Year Warranty",
      "price": 1199,
      "discountPercentage": 9.83,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKqDpL37WVqVG2g3zqRCoNs3bVePSXwZVfGVYiCEQ3g&s",
    },
    {
      "id": 11,
    
      "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey  1 Year Warranty",
      "price": 1599,
      "discountPercentage": 11,
      "thumbnail": "https://media.istockphoto.com/id/509417840/vector/indian-rupee-currency-sign-gold-coin-vector-icon.jpg?s=1024x1024&w=is&k=20&c=rWP2PsMzSEDn-lW121vXuRo8SQGPseh6o-M0XHWA8ZQ=",
    },
    {
      "id": 12,
    
      "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey  1 Year Warranty",
      "price": 2099,
      "discountPercentage": 7.29,
      "thumbnail": "https://media.istockphoto.com/id/512176749/vector/one-euro-coin.jpg?s=1024x1024&w=is&k=20&c=hple2QwtgzlYJtJOw3HY23zMDlH5vmlzHn8eoJRW3Os=",
    },

    // Gold Biscuit...//////////////////////////////////////////////////////////////////////////////
    {
      "id": 13,
   
      "price": 20000,
      "quantity": 3,
      "total": 60,
      "discountPercentage": 8.71,
      "discountedPrice": 55,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFKrJzEzAq9Ig-fR6bgx18eEyQsVEBWvEBxw&s"
    },
    {
      "id": 14,
    
      "price": 35000,
      "quantity": 2,
      "total": 58,
      "discountPercentage": 3.19,
      "discountedPrice": 56,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCvLFv45h5vW4S5c7eZo7jk1CX_QgJ6B2Fw&s"
    },
    {
      "id": 15,
   
      "price": 15000,
      "quantity": 2,
      "total": 80,
      "discountPercentage": 13.1,
      "discountedPrice": 70,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-hl_uSIIq6z0enHjGJJXPmBlpCkOB2VbCcw&s"
    },
    {
      "id": 16,
   
      "price": 5000,
      "quantity": 1,
      "total": 930,
      "discountPercentage": 17.67,
      "discountedPrice": 766,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfKk4cx7rOhXrWzSomWEJuYk5T4kYvBBdJLw&s"
    },
    {
      "id": 17,
    
      "price": 25000,
      "quantity": 2,
      "total": 1200,
      "discountPercentage": 17.2,
      "discountedPrice": 994,
      "thumbnail": "https://5.imimg.com/data5/SELLER/Default/2023/11/359140888/CQ/BX/ML/199984749/go3-500x500.webp"
    },
    {
      "id": 18,
   
      "price": 65000,
      "quantity": 3,
      "total": 1707,
      "discountPercentage": 13.63,
      "discountedPrice": 1474,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUcbKm1Ua1gETP-CgQTEwVUw-4lFI2VXXUXA&s"
    },
    {
      "id": 19,
   
      "price": 235000,
      "quantity": 1,
      "total": 1099,
      "discountPercentage": 11.83,
      "discountedPrice": 969,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1dgbBkUwrapCrYbMgCQhVlQUrXyx9YvkLZg&s"
    },
    {
      "id": 20,
   
      "price": 255000,
      "quantity": 1,
      "total": 19,
      "discountPercentage": 13.31,
      "discountedPrice": 16,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV4EmMfFEbuYkloWownC9jUQyPRCZK9xOZFw&s"
    },
    {
      "id": 21,
    
      "price": 345000,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlNkjwMUvPjGob9EG9Iv0uYrS9W0nAUNq4qw&s"
    },
    {
      "id": 22,
   
      "price": 385000,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXaiybYYcug7ssVnR2c1OoYlcub9kajaFt1A&s"
    },
    {
      "id": 23,
  
      "price": 455000,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9fEYW_eAjMQEpgVmuXR04Z7JKPXu8-y7HdQ&s"
    },
    {
      "id": 24,
   
      "price": 876000,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbRJztGcziaHwoU0wm4HB8t-FfMcizLUBWUw&s"
    },

    //Necklace................////////////////////////////////////////////////////////
    {
      "id": 25,
  
      "price": 25000,
      "quantity": 3,
      "total": 60,
      "discountPercentage": 8.71,
      "discountedPrice": 55,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/8a33/3636/35357c55699d6487abf82cb8309d3a7d?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mN6OSuGy6MBS6JuB-ZVtmtjsrB9ZB~WppPx70PY48HXM3wPfoF-rUkiMUmieoQX8ztpkcbxxcQSM9yQXJuJsL36XlD6PQLQorkqPe7swCN-xSAezKEx05cniAGKIPR4fj8TwZRBaVfisE7BDl4-M1P0Me5Tl2cEYvRcs-H~VBTk6U8PijsWH0AXlfNMXJ4KfSCTPOw3HUsLwpwdL2CccMjWuGTbQQE2Td1b5h8Rk9zlLgF3ZAF-bWX4nXIYlhGo6hsQIv2Q-Xm9r866nVQyLQ3K6kaccVNsbvKFsQ7b8qfC0Hrxa4rK1V6BDH2KAchinbFNYB7gHj7~l5~i2ZIRW2g__"
    },
    {
      "id": 26,
    
      "price": 35000,
      "quantity": 2,
      "total": 58,
      "discountPercentage": 3.19,
      "discountedPrice": 56,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjWPj6f0iLox4RU0ZiOTQ7EuIyoOReC-n0A&s"
    },
    {
      "id": 27,
     
      "price": 15000,
      "quantity": 2,
      "total": 80,
      "discountPercentage": 13.1,
      "discountedPrice": 70,
      "thumbnail": "data:image/jpeg;base64,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"
    },
    {
      "id": 28,
   
      "price": 50000,
      "quantity": 1,
      "total": 930,
      "discountPercentage": 17.67,
      "discountedPrice": 766,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/2ab8/a8b3/d885e01abfd25da8be68e1f228594315?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JTG4rwmSIJqltTVPtRI4T0kygTkZ2JSEvpvaECU-ZE-3XnQAguCFdvA9MY2djEUk312-GKdFZRyelgCBFUlyYpK5YvHbU~sEf7S7Z9xOKWmsJWXPgklMUP13wvnYS8SX32mHuFa5rico~yzPviZH99fBNZxuv69ovsBfqatCjTbo~VF5HaNKQ0vXwUu~W2gNaMMGg8a4rclpMZPY8Vwg69jf9sT7hs3n-4eO4Sw5eJOfCZO-48et1ziWMM-GbYJKENyavdiGdZ4o8ZUm2hqDjhgAFYa7N4GWhS25uXeXEO~wrRHsYlad57DuSO0fr7g5XvHNxzsw-mxA9siBK67dcQ__"
    },
    {
      "id": 29,

      "price": 25000,
      "quantity": 2,
      "total": 1200,
      "discountPercentage": 17.2,
      "discountedPrice": 994,
      "thumbnail": "data:image/jpeg;base64,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"
    },
    {
      "id": 30,
   
      "price": 65000,
      "quantity": 3,
      "total": 1707,
      "discountPercentage": 13.63,
      "discountedPrice": 1474,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREf-BAfYEb9DpXk7-80QLJ7CXrcNRpRFMMCg&s"
    },
    {
      "id": 31,
  
      "price": 235000,
      "quantity": 1,
      "total": 1099,
      "discountPercentage": 11.83,
      "discountedPrice": 969,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjaNrdtN-doGrwy0xPQJVxENIIqM0Ysmze4Q&s"
    },
    {
      "id": 32,
  
      "price": 255000,
      "quantity": 1,
      "total": 19,
      "discountPercentage": 13.31,
      "discountedPrice": 16,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1FHuiWw4I6BeqgOsHjWiIB3zqw9Dr-XwiJQ&s"
    },
    {
      "id": 33,
    
      "price": 345000,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_so0oyjl0jCvHlDqt_zqq-EuqCPDV3YAHJw&s"
    },
    {
      "id": 34,
      "title": "Necklace",
      "price": 385000,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPyE7Izew9YPpjYokKApu_-gfnNJ3OCoiMmw&s"
    },


    // Default
    {
      "id": 35,
      "title": "Bangles",
      "price": 455000,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/b589/080d/40613923c60a3f086d0ed77f6d049c3b?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=elow3yLzFbrCXzx~KKRMdIejM4QviypT17mkty2rde7IlMafrXqCGmRhoSy9iEPqrVMtHkl62yy0Nzhof10yKONj4EDaMe0JFu5bOCxtYmZpAJm5ZQ0DagbJJuJ0KMtlE5dz-tQgGPiBth~SduEHrHJR~kOVADxxQ0~rTi7iMqaKhc5VSWkK0aF0EeUrMAwQ06xrDGIeAtoTpoLJ~s6df3iSbmwNyQbpqa4KheRz51TKvEy1AfgyGXYy7i9~hiIaPAovfbcs33ZTKEvFZdZRJapARpkEXsj0UMesLPOq-8tdH7O1dTJdKCBy1i6OxfdzXdsk-rnYm5CJrdboGJ8s0Q__"
    },
    {
      "id": 36,
      "title": "Necklace",
      "price": 876000,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/0917/0635/da93f40833ec7e2320b2b4749ea601ec?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BKcXhAaJV6fZzKHARSrKLFTqiFg7xcvoJZYUvzHiIpAtkOF-zOOiKH2lHjGdkuCIv94hIRzOgy4XFl83BAAcOWH~rw5iTjxKFhZ5w4fh~yISOZ5-oWBNCIbv~4kmiH26pIlfHTwMrPbQYWAcZW87d9b23gtg5x12Q9lPne8PZkcovp6DQeJugi2UPaq4I8etdZV4Y2k~T5e8uah8DJCmczVX9X2ui3NzFw9qjcoIf-AnRS2QV4L8mkiUJqquxIm3DKika3nvlc4GbF3NPyl7Xg5oaXnUtW6OUHfMneGq5JShipNfx7g8rsVuSViJaa5Iw75jMrwDL1dD7aK2fYacfg__"
    },
    {
      "id": 37,
      "title": "Bracelet",
      "price": 345000,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/8eea/4f32/e757344d05868d45448f5acdfb5ba9ce?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DCxJ8yRHajomCTGXP66raTNFGVzVBWRypryIXOvhbbgASIntM6pKNIIWN08bd4c2hhz-JYlWAo3HF3qxxoltTn2SHVlT6KH284ANDC1DaiC6rukjfes-GBXitfGaN2Hv23gA7nAzG-3y7CTLmo~~ZXSMdZQa2tsQFRSuhh1b~~AV9LvMUAdbK6u6pci0ljFsJ7T8RdHHsR-Kha6ModHLtCdgrKPh-nGyAcCSV41tyutzhzaFPYu7PD5kVxi6eIbpqHEYtUhno21bXCX7Gp0lWTxtesiil3g3Igc3wQ5~tS8PSppn6kOx3D9AHbo2pNPL5L8uSyoVQSVF0fhfrsfnLA__"
    },
    {
      "id": 38,
      "title": "Pendant",
      "price": 385000,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/7150/345b/6df5695b0888aaa39155749527755f2e?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VXXzhPAyRmibPA5W0-eNwoSEUlzDlM5xL~3G1Rl3P2YIgGlV5rWY5xq~K85gcNpy1bdx2rzWJ2L7x0g12lUVU0relu5nNrJo9fRKNZCwR4euTY6ZfD0V3g5W7EADHMK9SRbMApbLxqrfNCyql5H8nF91BI-UAHHSPik1iblHziiThIgmgS5sPw71cXl681vqlR~JSpKY9mFNey65cocsdrAKG-kRqtoME0ucUGv~gvKmXdN-BkZLVvJbCK2VCqb6aSwiUgYd0PisI4AHLA53LIcVhuujeqpnmIn8DC5Cjt9z3bkEtO2YSa~taSCfFcoq21lykbHEloqw-ZNdvvFDAQ__"
    },
    {
      "id": 39,
      "title": "Bangles",
      "price": 455000,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/421e/a65b/02c96fbfad0d3b7a3168afc454e65dfd?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WbM-68O7UZsoBF8DFjpY5YH4XYFdIhCpOv9fa-8dh2KAUEzDiU7gtP3H4tye9LRUgvrCUCzYBKVV6rEez7Rwup-g-eS4YiqploYG48gYcvB8ORDfGBnqCygI1mo9I7yp9ckKF9~oPg8yVXDY3xB6xbtwT4FZWQ~tq-9kKzhbf1YLx2TFFfN0lZsdwtXQLhKKOTyUAVDKg~hIJASYG-TJ6VpKo1GRLeGlR9Hirj6dyfFMISCIhjBdnAg3qNCW8uSTImYw7dve33CIqeHs50FEytv77ygdFcypMQkxGCswa8Bi4xI6N5jyo0ldIj4jwrbsOzLiVH4jh3lmuw6T-KCvEg__"
    },
    {
      "id": 40,
      "title": "Necklace",
      "price": 876000,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/b73f/bc5c/a303b94130627baa6a1f127201923c30?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iIeT~S8KqXRyiz6EGIv~jUxg~iYMkDLTxXCWKszWXyFbrCxvKsAKpS8SnNcWXQHij-zdEDngu7tdOms2jO5r12AQumrANWzVR2w6146JtNAZMtcasiu6MT5hj0lRHhl-jBPXqDiwIgxkrvp8osEp05Wl-BsTjiX7msp3o6aKWcIz9PuvBojwmD8ih7wizy5mJZbPrITUkd-fn1H8BatuCaiNnlceB2wXDC11MVC6rs460abSqHZaL2tKhHPZYQLGGUM35xmtbeA1OfSQSXK5tUxtDgXZaX6tD2dBN-qjU5xi8d~97tEnz9nPpXcEOFJtEGNQkg7R9XRqy0ENiszbww__"
    },
    {
      "id": 41,
      "title": "Ring",
      "price": 2500,
      "quantity": 3,
      "total": 60,
      "discountPercentage": 8.71,
      "discountedPrice": 55,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/b73f/bc5c/a303b94130627baa6a1f127201923c30?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iIeT~S8KqXRyiz6EGIv~jUxg~iYMkDLTxXCWKszWXyFbrCxvKsAKpS8SnNcWXQHij-zdEDngu7tdOms2jO5r12AQumrANWzVR2w6146JtNAZMtcasiu6MT5hj0lRHhl-jBPXqDiwIgxkrvp8osEp05Wl-BsTjiX7msp3o6aKWcIz9PuvBojwmD8ih7wizy5mJZbPrITUkd-fn1H8BatuCaiNnlceB2wXDC11MVC6rs460abSqHZaL2tKhHPZYQLGGUM35xmtbeA1OfSQSXK5tUxtDgXZaX6tD2dBN-qjU5xi8d~97tEnz9nPpXcEOFJtEGNQkg7R9XRqy0ENiszbww__"
    },
    {
      "id": 42,
      "title": "Earrings",
      "price": 3500,
      "quantity": 2,
      "total": 58,
      "discountPercentage": 3.19,
      "discountedPrice": 56,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/5a5f/98e3/27e09e0379e5c36436c1ea3f8665d1ac?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H2xIAlF6ECG4IfVmMPW2fWlUwb4COdkCcqKqcCvdR0QmXp9-jLCmiX~zhvaEyLRghpNuAN2vKwTwkxlPMts02gXKEZXmrIzq~4hYzIAXyKsZjZg9M18JGWwfVJ78y9-axGf9t7zqnIrhexVnhAChNeJ-53vECmRQA7udqzLXeUZ444KyD-K87tzwT-IEl50GeyvDdHe9-YeWsD9AM4SrKZcRwzCIIBP2i-7Im~f5t0inbHh~49GVblWS6yc5lN4bszbN~kSkGG~npBEyswuUg-W54WVirsqzDif4bbJRnK618mtnzf512DlYN5fx~~hqmfOR51MwumQaF1UzQEQZ3A__"
    },
    {
      "id": 43,
      "title": "Bracelet",
      "price": 1500,
      "quantity": 2,
      "total": 80,
      "discountPercentage": 13.1,
      "discountedPrice": 70,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/d7a0/c6af/f5c38cfb428b172f2ce31455a6f027c9?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L0hgQSDP3heDrLFzJbiHztHttGqu2wuy80FQ3yP8~jX0QY7WxNvctsTl5QeiVmivKzfN6alWbNW~hYE-2p3nD25yvvucNJmGJBXbPPd5q6ZH1ztfj8zOUbjjmJuN2a5u6yiTLB-1LXMtXrvqmL5WdOVLQCF8q8tWaAPg8wx5~LSKYC9iprJ5PyqeSZloO-OOmvlyBO4DGnbeI~Dcb0~xdsPqmQFdVX0fkxRNK6Ta9FCB~EdoKv8UkSoW47H4HLh9jt4rOtFTAuYehLweQZJ1lt6uRQdV9lD-R2cWq9ejb3OL8zmhi7OzYFmhsJ~C0S9Za-HujLot~u2fsFoEGMQ38Q__"
    },
    {
      "id": 44,
      "title": "Pendant",
      "price": 5000,
      "quantity": 1,
      "total": 930,
      "discountPercentage": 17.67,
      "discountedPrice": 766,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/e7b2/6fb2/99e338dbd616a4115e95acff05bea9dd?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LlDsYhIJp3GAxFTrdEm3GZ~KrmmbXAr6R0uOTOGYn7f-Oo3p08k3PGZ6z2GwZmfW3aNWKGOli4LDopOGdPz5pNbQPMB-jkuvA6Gbb~bG90VHrP3C11a0oTmCuxRuRWOsMdxzUQBhADgzXUu3RUFlBz4jCjpooonzAZCqgsQReQhsY4BnJ17-lNTIlhMRa2sorzEmHg688k3uV5QR0qeW7Y841d74RE343CVyHWi5Yc~MBXSkLLC5ROKD4typqpsz8hBFzgFLMxNKwtKraQP-f56UM5nfD96DlIk3XFDhcvKMXs9DASgbjj-3J1D4-R94sOBwpxT9~-t354xgcGp4Zg__"
    },
    {
      "id": 45,
      "title": "Bangles",
      "price": 2500,
      "quantity": 2,
      "total": 1200,
      "discountPercentage": 17.2,
      "discountedPrice": 994,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/9383/befa/d5035169dc17f958c7b7de86310f08d0?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CiCDw0tmkn33tFgfXbMKk6HVVWdXp9GVBsTM0TC7INTfzKJTo~q4LZzGoVJlU9gi1ZYSaGZRdC0I0Rzy7Q-fIxmwwJIiZ0w1uOTHJrXVuFui4wyk1JDzQtomDqC-gI1XenXBICbQPqcsZRzQJE7k2KwVc3-K0FaVQscDVpmhvFqtFZPQngssgbHP7vEsf3rtBbwpeIEX31k0PFK8UYCT-mHcT4oGiND0kbqjMCS~3G9rOyFBj3p1FxH7ZRM8G2DnZcu1qx9grC9ATMvvmX4tSt~CQUkjBfdTiw7TSUa-kdjklXBIlW82GUd3AvlhLpS1ox4klyFr7g9DYae8BaNchg__"
    },
    {
      "id": 46,
      "title": "Necklace",
      "price": 6500,
      "quantity": 3,
      "total": 1707,
      "discountPercentage": 13.63,
      "discountedPrice": 1474,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/61e9/d7a5/f7a4c7c05ecba5ead87817b143144e26?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lcBQZZ2350wcfYesz42qtsz7mMFnztq8JSHel1j4zfwY-DJsKyz4ce655Am0tIcdTUsmReM-5JTuKamS6UJQ4PsnGiGt5PmudZZtp-OdaEYRV3Ka-0d8a3d-u8Qi1d2cGMbi9OuUu9VsY-cwfGSI-SZM6n2HTNn2zbuKPGXgUmNPTxz55Gpf987VkQe5K2e6YJcPDI74PQCyRRom3Jo1FRcdbDtxfNw5MEDmS9R5o4-lq7OLyAw7pHbcSrjFW5d6o3eYVWc4I22CkR2duumIOanZ8ObaGkcGfrAoBtdIAku8YKG6Cacg4v8x5ooy4855QsKKUPbC-xHSRt4D2I3vaA__"
    },
    {
      "id": 47,
      "title": "Ring",
      "price": 235000,
      "quantity": 1,
      "total": 1099,
      "discountPercentage": 11.83,
      "discountedPrice": 969,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/efe6/449d/8bd826342ee23c4f12a9b73a4e721e25?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pwoXNx1owhaw6q9XT9YeQmLuasP5yLg-6b-SmAJYoKV4~J86mgHaZyZcbeR2FBwxjaqdlmXchNr-YNExqx9GWCAfMiL29sBoLppjAL8KtYQo1sLa64i~k40T73MT0iy2Qu1uzCT6r04XxRmelhqNQ-fOXI343vJ-997VPo0j0c72Gnb2qyhKEKwRRkqIQfXLXv~t-wjOFzOdYlDjits03~7uDmWPZ9AORwIVAyIIFP-AuMP6ICXHpeytcy1MDVZft81WOhyx~Lvc9bOZus1Q8KdJcJpdI0nGSs~Wl9-semA0slnTqcsLNwX89OixLK1uSMSAS3QAWVOJxaH0aTsugw__"
    },
    {
      "id": 48,
      "title": "Earrings",
      "price": 255000,
      "quantity": 1,
      "total": 19,
      "discountPercentage": 13.31,
      "discountedPrice": 16,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/8a33/3636/35357c55699d6487abf82cb8309d3a7d?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mN6OSuGy6MBS6JuB-ZVtmtjsrB9ZB~WppPx70PY48HXM3wPfoF-rUkiMUmieoQX8ztpkcbxxcQSM9yQXJuJsL36XlD6PQLQorkqPe7swCN-xSAezKEx05cniAGKIPR4fj8TwZRBaVfisE7BDl4-M1P0Me5Tl2cEYvRcs-H~VBTk6U8PijsWH0AXlfNMXJ4KfSCTPOw3HUsLwpwdL2CccMjWuGTbQQE2Td1b5h8Rk9zlLgF3ZAF-bWX4nXIYlhGo6hsQIv2Q-Xm9r866nVQyLQ3K6kaccVNsbvKFsQ7b8qfC0Hrxa4rK1V6BDH2KAchinbFNYB7gHj7~l5~i2ZIRW2g__"
    },
    {
      "id": 49,
      "title": "Bracelet",
      "price": 345000,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/2f4a/deaf/ab0bc774b3d6983056ef1efff8b113bc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=afWu3XK23LctxgGloBLWKlevl1uVxBa8gCs9gAyV0~6G1wLgvP0rrGKBBB~Rem5wjPJOsli-0SsbAy7U1O0641NH0QuwDzxUO7sIsqVZWYlHFWPmPor6BnfgkPGdGQB~RQiL-IhOVfide8ovzbh1wCuOJceOOYQh9m-xB7uyRVdhkEEr7s3oHnsm6BEC3Ulb0IOl4sjevHPYXJnVRtIttjwE4vcJTrIo6Pw4Itpuw8-Fo2z2stFw-ma0mgHIyqkrZagV95W2KtdwyUD-ZXR-2dwFsjobDi5gfalj7osCaP6r3~FXHZSN~pPxhUQbXpVyTxU3khyrTX7z2KCDc9cjXQ__"
    },
    {
      "id": 50,
      "title": "Pendant",
      "price": 385000,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/62fb/8189/e4a98ee996d28ab08d02ed5e72f5c3ef?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=muH6setwYqLrZrCEPJEcsRsAIIoREnY1AS-VWhezGldd0vU3yVpZfeyixGNngMaXe7SE2hkt9KvTpsiuvQEz3oVkuUU2rKygBvOBuKcF1YGMoVr3B1ZxNIFWi6A3ZL8Xe45zI3kT1UstNbA6MTWbtAxtMIpa~ErDdM~N3GfmJH5Y5rhoSF~~~D3R0VpNVaQgTbER~fRlNbMxm3XR6TzhU966-VD4668nHnGs9q6cPELBZhdJjB~SJySYfRAiry5ERTGh~pEYIoGhT2r5O6LkEjH5ul0O1ohthN9xW70NPNkNRId9DYbCMefjvY-tVkacdbHe9qr7JJJpPg327NgLRg__"
    },
    {
      "id": 51,
      "title": "Pendant",
      "price": 385000,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/62fb/8189/e4a98ee996d28ab08d02ed5e72f5c3ef?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=muH6setwYqLrZrCEPJEcsRsAIIoREnY1AS-VWhezGldd0vU3yVpZfeyixGNngMaXe7SE2hkt9KvTpsiuvQEz3oVkuUU2rKygBvOBuKcF1YGMoVr3B1ZxNIFWi6A3ZL8Xe45zI3kT1UstNbA6MTWbtAxtMIpa~ErDdM~N3GfmJH5Y5rhoSF~~~D3R0VpNVaQgTbER~fRlNbMxm3XR6TzhU966-VD4668nHnGs9q6cPELBZhdJjB~SJySYfRAiry5ERTGh~pEYIoGhT2r5O6LkEjH5ul0O1ohthN9xW70NPNkNRId9DYbCMefjvY-tVkacdbHe9qr7JJJpPg327NgLRg__"
    },


    ///Bracelet.........////////////////////////////////////////
    {
      "id": 52,
    
      "price": 2500,
      "quantity": 3,
      "total": 60,
      "discountPercentage": 8.71,
      "discountedPrice": 55,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWDLdH3UnXTR4yCMzfEX-wPIga9-p5hOfRg&s"
    },
    {
      "id": 53,
   
      "price": 3500,
      "quantity": 2,
      "total": 58,
      "discountPercentage": 3.19,
      "discountedPrice": 56,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQ08raErjyuh93dLxWLaPzNPdwqnIZGTEZw&s"
    },
    {
      "id": 54,
    
      "price": 5000,
      "quantity": 2,
      "total": 80,
      "discountPercentage": 13.1,
      "discountedPrice": 70,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4S9C6D-kBa_pgfNIDAWSQlmb0JELVVSJFeQ&s"
    },
    {
      "id": 55,
    
      "price": 5000,
      "quantity": 1,
      "total": 930,
      "discountPercentage": 17.67,
      "discountedPrice": 766,
      "thumbnail": "https://silverlinings.in/cdn/shop/products/Silver_Bracelets_BG073_1_1024x.jpg?v=1564840234"
    },
    {
      "id": 56,
  
      "price": 2500,
      "quantity": 2,
      "total": 1200,
      "discountPercentage": 17.2,
      "discountedPrice": 994,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjeR7Z3-SnkYVDuimVo2nA7waTBw166EvMQ&s"
    },
    {
      "id": 57,
    
      "price": 6500,
      "quantity": 3,
      "total": 1707,
      "discountPercentage": 13.63,
      "discountedPrice": 1474,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrc8Uud4Bxr-C0-nSOB5erALCCZpX1C44Prg&s"
    },
    {
      "id": 58,
   
      "price": 2350,
      "quantity": 1,
      "total": 1099,
      "discountPercentage": 11.83,
      "discountedPrice": 969,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStaCLWhstp29jBVHy-7XXhccqMJLlO3xm1ew&s"
    },
    {
      "id": 59,
   
      "price": 2550,
      "quantity": 1,
      "total": 19,
      "discountPercentage": 13.31,
      "discountedPrice": 16,
      "thumbnail": "https://5.imimg.com/data5/ECOM/Default/2022/7/JV/PS/KB/11885699/img-5165-500x500.jpg"
    },
    {
      "id": 60,
  
      "price": 3450,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://www.jiomart.com/images/product/original/rvf9dvi12c/vipunj-silver-gold-plated-lord-shiva-shivling-with-nandi-embossed-lockable-kada-bracelet-for-men-women-shiv-fashion-bracelets-gold-bracelets-silver-bracelets-pack-of-2-product-images-rvf9dvi12c-2-202309291804.jpg?im=Resize=(500,630)"
    },
    {
      "id": 61,
  
      "price": 3850,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://images.meesho.com/images/products/301612631/7wivx_512.webp"
    },

    // Bangles...........................//////////////////////////////////////////////////

    {
      "id": 62,

      "price": 2500,
      "quantity": 3,
      "total": 60,
      "discountPercentage": 8.71,
      "discountedPrice": 55,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7otvjrYkQsk9K0jqd7e7uwYH3nqzR4c-UYg&s"
    },
    {
      "id": 63,
   
      "price": 3500,
      "quantity": 2,
      "total": 58,
      "discountPercentage": 3.19,
      "discountedPrice": 56,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvCuyg-eeTXrW0k8MCXT4YbBHGySJ7tjpNzQ&s"
    },
    {
      "id": 64,
    
      "price": 1500,
      "quantity": 2,
      "total": 80,
      "discountPercentage": 13.1,
      "discountedPrice": 70,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyi6i8myiNL2LMsMJWoXbCbXzAzIuxVLptw&s"
    },
    {
      "id": 65,
  
      "price": 5000,
      "quantity": 1,
      "total": 930,
      "discountPercentage": 17.67,
      "discountedPrice": 766,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNqTiA4TW46MnbDq0_A_O_0goE5UAhiO5lTA&s"
    },
    {
      "id": 66,
   
      "price": 2500,
      "quantity": 2,
      "total": 1200,
      "discountPercentage": 17.2,
      "discountedPrice": 994,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCnhUYzJqzPoKI0CLxYEpzEN-XlN-6vZ2xEQ&s"
    },
    {
      "id": 67,
    
      "price": 6500,
      "quantity": 3,
      "total": 1707,
      "discountPercentage": 13.63,
      "discountedPrice": 1474,
      "thumbnail": "https://cdn.dollsofindia.com/images/p/bracelets/metal-bracelets-EH30_l.jpg"
    },
    {
      "id": 68,
  
      "price": 2350,
      "quantity": 1,
      "total": 1099,
      "discountPercentage": 11.83,
      "discountedPrice": 969,
      "thumbnail": "https://i.pinimg.com/736x/38/6f/d5/386fd5927679e5a5d7e99cc867fcd030.jpg"
    },
    {
      "id": 69,
   
      "price": 2550,
      "quantity": 1,
      "total": 19,
      "discountPercentage": 13.31,
      "discountedPrice": 16,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAjNirUzHCCrR3P7ZZDKVBlRPdqpYoQRvJ7g&s"
    },
    {
      "id": 70,
   
      "price": 3450,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrkCyfKpLytJpIkmY813gWgIEm93m7bHS1BA&s"
    },
    {
      "id": 71,
   
      "price": 3850,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://img0.junaroad.com/uiproducts/18182543/zoom_1-1640170173.jpg"
    },


    ///Earrings.........///////////////////////////////////////////////

    {
      "id": 72,
 
      "price": 2500,
      "quantity": 3,
      "total": 60,
      "discountPercentage": 8.71,
      "discountedPrice": 55,
      "thumbnail": "https://i.pinimg.com/736x/89/58/2f/89582f301f290ffc0391eb64b56df761.jpg"
    },
    {
      "id": 73,
   
      "price": 3500,
      "quantity": 2,
      "total": 58,
      "discountPercentage": 3.19,
      "discountedPrice": 56,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHqDDW3zteWq8mG17-pzDXzcautVtFKZ8wVg&s"
    },
    {
      "id": 74,
      "title": "Bracelet",
      "price": 1500,
      "quantity": 2,
      "total": 80,
      "discountPercentage": 13.1,
      "discountedPrice": 70,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOQFJ2KqrvIV5UcWrkoHNQNwTQLQt-LVv-_Q&s"
    },
    {
      "id": 75,
      "title": "Pendant",
      "price": 5000,
      "quantity": 1,
      "total": 930,
      "discountPercentage": 17.67,
      "discountedPrice": 766,
      "thumbnail": "https://i.pinimg.com/736x/68/ae/4d/68ae4ddbbbb21081f59e68d98455b6b8.jpg"
    },
    {
      "id": 76,
      "title": "Bangles",
      "price": 2500,
      "quantity": 2,
      "total": 1200,
      "discountPercentage": 17.2,
      "discountedPrice": 994,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSPIJ55s8cc1rJvquFETH9uE9fCkFvFGtGAA&s"
    },
    {
      "id": 77,
      "title": "Necklace",
      "price": 6500,
      "quantity": 3,
      "total": 1707,
      "discountPercentage": 13.63,
      "discountedPrice": 1474,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCStzyGOL9fDoDUvo-s0J8H3i_QZHy_00tlw&s"
    },
    {
      "id": 78,
      "title": "Ring",
      "price": 235000,
      "quantity": 1,
      "total": 1099,
      "discountPercentage": 11.83,
      "discountedPrice": 969,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7PnbMfwUiZ9L65sHnV9sZbBV_DsUECn2eFg&s"
    },
    {
      "id": 79,
      "title": "Earrings",
      "price": 255000,
      "quantity": 1,
      "total": 19,
      "discountPercentage": 13.31,
      "discountedPrice": 16,
      "thumbnail": "https://i.pinimg.com/736x/9a/5f/b9/9a5fb93712a75c7f4b25a7692c3f7a8d.jpg"
    },
    {
      "id": 80,
      "title": "Bracelet",
      "price": 345000,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7p866kU8v1oHoAVhCghI_dK636iOqihVVA&s"
    },
    {
      "id": 81,
      "title": "Pendant",
      "price": 385000,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXRpqtvynqdqxfYSpcvEzJRe8OPVu021GzxQ&s"
    },

    // Pendant................////////////////////////////////////////////

    {
      "id": 82,
      "title": "Ring",
      "price": 2500,
      "quantity": 3,
      "total": 60,
      "discountPercentage": 8.71,
      "discountedPrice": 55,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00aVn2ctRQvtnNqC2wU_sbeD7iGLF4PYHlg&s"
    },
    {
      "id": 83,
      "title": "Earrings",
      "price": 3500,
      "quantity": 2,
      "total": 58,
      "discountPercentage": 3.19,
      "discountedPrice": 56,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrejuCatM45BGpqRbrqVSGWCUAWo9xT9hiIg&s"
    },
    {
      "id": 84,
      "title": "Bracelet",
      "price": 1500,
      "quantity": 2,
      "total": 80,
      "discountPercentage": 13.1,
      "discountedPrice": 70,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3O0G_fTB8HzFincSLyLRQlHDvxbQbcOiuQw&s"
    },
    {
      "id": 85,
      "title": "Pendant",
      "price": 5000,
      "quantity": 1,
      "total": 930,
      "discountPercentage": 17.67,
      "discountedPrice": 766,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5-xFfKOcA9evlrcDiBn-oOQcvhhm2Rra7g&s"
    },
    {
      "id": 86,
      "title": "Bangles",
      "price": 2500,
      "quantity": 2,
      "total": 1200,
      "discountPercentage": 17.2,
      "discountedPrice": 994,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgBT4cg0ukSvF1OKNVEa29D_RSSn40jcw3QA&s"
    },
    {
      "id": 87,
      "title": "Necklace",
      "price": 6500,
      "quantity": 3,
      "total": 1707,
      "discountPercentage": 13.63,
      "discountedPrice": 1474,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKOyxrORO98DXp-U_kPhi60qyvzBZlWZKf7g&s"
    },
    {
      "id": 88,
      "title": "Ring",
      "price": 235000,
      "quantity": 1,
      "total": 1099,
      "discountPercentage": 11.83,
      "discountedPrice": 969,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6QYxv2fj2q6sbckdY8AEDSLWwgtq2-uNurw&s"
    },
    {
      "id": 89,
      "title": "Earrings",
      "price": 255000,
      "quantity": 1,
      "total": 19,
      "discountPercentage": 13.31,
      "discountedPrice": 16,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-lfX--iwQQdOYIRGqzK6KYEsl09V8JIS4s6XMUP5AJNW9526HfCfsHhqMY_xUByde8Wg&usqp=CAU"
    },
    {
      "id": 90,
      "title": "Bracelet",
      "price": 345000,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDCbvzKTY760XR1ekg9FvwVxuOPpwsJ3aBWw&s"
    },
    {
      "id": 91,
      "title": "Pendant",
      "price": 385000,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2bLr5njFPFTn4iCtROdTn7wntIgqp1KIQPw&s"
    },

    // Ring..................////////////////////////////////////////////////
    {
      "id": 92,
      "title": "Ring",
      "price": 2500,
      "quantity": 3,
      "total": 60,
      "discountPercentage": 8.71,
      "discountedPrice": 55,
      "thumbnail": "https://5.imimg.com/data5/SELLER/Default/2022/8/EN/ZV/SY/30133339/16-500x500.jpg"
    },
    {
      "id": 93,
      "title": "Earrings",
      "price": 3500,
      "quantity": 2,
      "total": 58,
      "discountPercentage": 3.19,
      "discountedPrice": 56,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfYFyle27ujI7w0dFEMpjS_dGpv7MVdpglkQ&s"
    },
    {
      "id": 94,
      "title": "Bracelet",
      "price": 1500,
      "quantity": 2,
      "total": 80,
      "discountPercentage": 13.1,
      "discountedPrice": 70,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfYFyle27ujI7w0dFEMpjS_dGpv7MVdpglkQ&s"
    },
    {
      "id": 95,
      "title": "Pendant",
      "price": 5000,
      "quantity": 1,
      "total": 930,
      "discountPercentage": 17.67,
      "discountedPrice": 766,
      "thumbnail": "https://zevaramaze.com/cdn/shop/files/t-y_e21fa0c5-b33e-47fe-86e5-b93fbf464d4d_1024x1024.jpg?v=1683286728"
    },
    {
      "id": 96,
      "title": "Bangles",
      "price": 2500,
      "quantity": 2,
      "total": 1200,
      "discountPercentage": 17.2,
      "discountedPrice": 994,
      "thumbnail": "https://cdn.webshopapp.com/shops/348519/files/457020980/300x300x2/gold-ring-with-amethyst-and-diamonds-14-krt.jpg"
    },
    {
      "id": 97,
      "title": "Necklace",
      "price": 6500,
      "quantity": 3,
      "total": 1707,
      "discountPercentage": 13.63,
      "discountedPrice": 1474,
      "thumbnail": "https://5.imimg.com/data5/SELLER/Default/2022/8/OU/NP/JN/30133339/18-500x500.jpg"
    },
    {
      "id": 98,
      "title": "Ring",
      "price": 235000,
      "quantity": 1,
      "total": 1099,
      "discountPercentage": 11.83,
      "discountedPrice": 969,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUpiG_UmqzOP-03QU2vgxiReVebqbiokLysw&s"
    },
    {
      "id": 99,
      "title": "Earrings",
      "price": 255000,
      "quantity": 1,
      "total": 19,
      "discountPercentage": 13.31,
      "discountedPrice": 16,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShPxAiwQh_mZs1q2rzdBJ3KSeWllW7mE8N-Q&s"
    },
    {
      "id": 101,
      "title": "Bracelet",
      "price": 345000,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7xWVJXRJqgikBKyzhqgFlCS2juCi_XJWkA&s"
    },
    {
      "id": 102,
      "title": "Pendant",
      "price": 385000,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://aurajewels.s3.amazonaws.com/images/AuraJewels/hpb_mens_gold_ring.webp"
    },

    /// Gemstone..........///////////////////////////////////////////
    {
      "id": 103,
      "title": "Ring",
      "price": 2500,
      "quantity": 3,
      "total": 60,
      "discountPercentage": 8.71,
      "discountedPrice": 55,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/8a33/3636/35357c55699d6487abf82cb8309d3a7d?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mN6OSuGy6MBS6JuB-ZVtmtjsrB9ZB~WppPx70PY48HXM3wPfoF-rUkiMUmieoQX8ztpkcbxxcQSM9yQXJuJsL36XlD6PQLQorkqPe7swCN-xSAezKEx05cniAGKIPR4fj8TwZRBaVfisE7BDl4-M1P0Me5Tl2cEYvRcs-H~VBTk6U8PijsWH0AXlfNMXJ4KfSCTPOw3HUsLwpwdL2CccMjWuGTbQQE2Td1b5h8Rk9zlLgF3ZAF-bWX4nXIYlhGo6hsQIv2Q-Xm9r866nVQyLQ3K6kaccVNsbvKFsQ7b8qfC0Hrxa4rK1V6BDH2KAchinbFNYB7gHj7~l5~i2ZIRW2g__"
    },
    {
      "id": 104,
      "title": "Earrings",
      "price": 3500,
      "quantity": 2,
      "total": 58,
      "discountPercentage": 3.19,
      "discountedPrice": 56,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjWPj6f0iLox4RU0ZiOTQ7EuIyoOReC-n0A&s"
    },
    {
      "id": 105,
      "title": "Bracelet",
      "price": 1500,
      "quantity": 2,
      "total": 80,
      "discountPercentage": 13.1,
      "discountedPrice": 70,
      "thumbnail": "data:image/jpeg;base64,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"
    },
    {
      "id": 106,
      "title": "Pendant",
      "price": 5000,
      "quantity": 1,
      "total": 930,
      "discountPercentage": 17.67,
      "discountedPrice": 766,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/2ab8/a8b3/d885e01abfd25da8be68e1f228594315?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JTG4rwmSIJqltTVPtRI4T0kygTkZ2JSEvpvaECU-ZE-3XnQAguCFdvA9MY2djEUk312-GKdFZRyelgCBFUlyYpK5YvHbU~sEf7S7Z9xOKWmsJWXPgklMUP13wvnYS8SX32mHuFa5rico~yzPviZH99fBNZxuv69ovsBfqatCjTbo~VF5HaNKQ0vXwUu~W2gNaMMGg8a4rclpMZPY8Vwg69jf9sT7hs3n-4eO4Sw5eJOfCZO-48et1ziWMM-GbYJKENyavdiGdZ4o8ZUm2hqDjhgAFYa7N4GWhS25uXeXEO~wrRHsYlad57DuSO0fr7g5XvHNxzsw-mxA9siBK67dcQ__"
    },
    {
      "id": 107,
      "title": "Bangles",
      "price": 2500,
      "quantity": 2,
      "total": 1200,
      "discountPercentage": 17.2,
      "discountedPrice": 994,
      "thumbnail": "data:image/jpeg;base64,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"
    },
    {
      "id": 108,
      "title": "Necklace",
      "price": 6500,
      "quantity": 3,
      "total": 1707,
      "discountPercentage": 13.63,
      "discountedPrice": 1474,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREf-BAfYEb9DpXk7-80QLJ7CXrcNRpRFMMCg&s"
    },
    {
      "id": 109,
      "title": "Ring",
      "price": 235000,
      "quantity": 1,
      "total": 1099,
      "discountPercentage": 11.83,
      "discountedPrice": 969,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjaNrdtN-doGrwy0xPQJVxENIIqM0Ysmze4Q&s"
    },
    {
      "id": 110,
      "title": "Earrings",
      "price": 255000,
      "quantity": 1,
      "total": 19,
      "discountPercentage": 13.31,
      "discountedPrice": 16,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1FHuiWw4I6BeqgOsHjWiIB3zqw9Dr-XwiJQ&s"
    },
    {
      "id": 111,
      "title": "Bracelet",
      "price": 345000,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_so0oyjl0jCvHlDqt_zqq-EuqCPDV3YAHJw&s"
    },

    // / Diamond................////////////////////////////////////////////////////
    {
      "id": 112,
      "title": "Ring",
      "price": 2500,
      "quantity": 3,
      "total": 60,
      "discountPercentage": 8.71,
      "discountedPrice": 55,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/8a33/3636/35357c55699d6487abf82cb8309d3a7d?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mN6OSuGy6MBS6JuB-ZVtmtjsrB9ZB~WppPx70PY48HXM3wPfoF-rUkiMUmieoQX8ztpkcbxxcQSM9yQXJuJsL36XlD6PQLQorkqPe7swCN-xSAezKEx05cniAGKIPR4fj8TwZRBaVfisE7BDl4-M1P0Me5Tl2cEYvRcs-H~VBTk6U8PijsWH0AXlfNMXJ4KfSCTPOw3HUsLwpwdL2CccMjWuGTbQQE2Td1b5h8Rk9zlLgF3ZAF-bWX4nXIYlhGo6hsQIv2Q-Xm9r866nVQyLQ3K6kaccVNsbvKFsQ7b8qfC0Hrxa4rK1V6BDH2KAchinbFNYB7gHj7~l5~i2ZIRW2g__"
    },
    {
      "id": 113,
      "title": "Earrings",
      "price": 3500,
      "quantity": 2,
      "total": 58,
      "discountPercentage": 3.19,
      "discountedPrice": 56,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjWPj6f0iLox4RU0ZiOTQ7EuIyoOReC-n0A&s"
    },
    {
      "id": 114,
      "title": "Bracelet",
      "price": 1500,
      "quantity": 2,
      "total": 80,
      "discountPercentage": 13.1,
      "discountedPrice": 70,
      "thumbnail": "data:image/jpeg;base64,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"
    },
    {
      "id": 115,
      "title": "Pendant",
      "price": 5000,
      "quantity": 1,
      "total": 930,
      "discountPercentage": 17.67,
      "discountedPrice": 766,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/2ab8/a8b3/d885e01abfd25da8be68e1f228594315?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JTG4rwmSIJqltTVPtRI4T0kygTkZ2JSEvpvaECU-ZE-3XnQAguCFdvA9MY2djEUk312-GKdFZRyelgCBFUlyYpK5YvHbU~sEf7S7Z9xOKWmsJWXPgklMUP13wvnYS8SX32mHuFa5rico~yzPviZH99fBNZxuv69ovsBfqatCjTbo~VF5HaNKQ0vXwUu~W2gNaMMGg8a4rclpMZPY8Vwg69jf9sT7hs3n-4eO4Sw5eJOfCZO-48et1ziWMM-GbYJKENyavdiGdZ4o8ZUm2hqDjhgAFYa7N4GWhS25uXeXEO~wrRHsYlad57DuSO0fr7g5XvHNxzsw-mxA9siBK67dcQ__"
    },
    {
      "id": 116,
      "title": "Bangles",
      "price": 2500,
      "quantity": 2,
      "total": 1200,
      "discountPercentage": 17.2,
      "discountedPrice": 994,
      "thumbnail": "data:image/jpeg;base64,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"
    },
    {
      "id": 117,
      "title": "Necklace",
      "price": 6500,
      "quantity": 3,
      "total": 1707,
      "discountPercentage": 13.63,
      "discountedPrice": 1474,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREf-BAfYEb9DpXk7-80QLJ7CXrcNRpRFMMCg&s"
    },
    {
      "id": 118,
      "title": "Ring",
      "price": 235000,
      "quantity": 1,
      "total": 1099,
      "discountPercentage": 11.83,
      "discountedPrice": 969,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjaNrdtN-doGrwy0xPQJVxENIIqM0Ysmze4Q&s"
    },
    {
      "id": 119,
      "title": "Earrings",
      "price": 255000,
      "quantity": 1,
      "total": 19,
      "discountPercentage": 13.31,
      "discountedPrice": 16,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1FHuiWw4I6BeqgOsHjWiIB3zqw9Dr-XwiJQ&s"
    },
    {
      "id": 120,
      "title": "Bracelet",
      "price": 345000,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_so0oyjl0jCvHlDqt_zqq-EuqCPDV3YAHJw&s"
    },

    /// Gold.............../////////////////////////////////////////////
    {
      "id": 121,
      "title": "Ring",
      "price": 2500,
      "quantity": 3,
      "total": 60,
      "discountPercentage": 8.71,
      "discountedPrice": 55,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/8a33/3636/35357c55699d6487abf82cb8309d3a7d?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mN6OSuGy6MBS6JuB-ZVtmtjsrB9ZB~WppPx70PY48HXM3wPfoF-rUkiMUmieoQX8ztpkcbxxcQSM9yQXJuJsL36XlD6PQLQorkqPe7swCN-xSAezKEx05cniAGKIPR4fj8TwZRBaVfisE7BDl4-M1P0Me5Tl2cEYvRcs-H~VBTk6U8PijsWH0AXlfNMXJ4KfSCTPOw3HUsLwpwdL2CccMjWuGTbQQE2Td1b5h8Rk9zlLgF3ZAF-bWX4nXIYlhGo6hsQIv2Q-Xm9r866nVQyLQ3K6kaccVNsbvKFsQ7b8qfC0Hrxa4rK1V6BDH2KAchinbFNYB7gHj7~l5~i2ZIRW2g__"
    },
    {
      "id": 122,
      "title": "Earrings",
      "price": 3500,
      "quantity": 2,
      "total": 58,
      "discountPercentage": 3.19,
      "discountedPrice": 56,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjWPj6f0iLox4RU0ZiOTQ7EuIyoOReC-n0A&s"
    },
    {
      "id": 123,
      "title": "Bracelet",
      "price": 1500,
      "quantity": 2,
      "total": 80,
      "discountPercentage": 13.1,
      "discountedPrice": 70,
      "thumbnail": "data:image/jpeg;base64,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"
    },
    {
      "id": 124,
      "title": "Pendant",
      "price": 5000,
      "quantity": 1,
      "total": 930,
      "discountPercentage": 17.67,
      "discountedPrice": 766,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/2ab8/a8b3/d885e01abfd25da8be68e1f228594315?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JTG4rwmSIJqltTVPtRI4T0kygTkZ2JSEvpvaECU-ZE-3XnQAguCFdvA9MY2djEUk312-GKdFZRyelgCBFUlyYpK5YvHbU~sEf7S7Z9xOKWmsJWXPgklMUP13wvnYS8SX32mHuFa5rico~yzPviZH99fBNZxuv69ovsBfqatCjTbo~VF5HaNKQ0vXwUu~W2gNaMMGg8a4rclpMZPY8Vwg69jf9sT7hs3n-4eO4Sw5eJOfCZO-48et1ziWMM-GbYJKENyavdiGdZ4o8ZUm2hqDjhgAFYa7N4GWhS25uXeXEO~wrRHsYlad57DuSO0fr7g5XvHNxzsw-mxA9siBK67dcQ__"
    },
    {
      "id": 125,
      "title": "Bangles",
      "price": 2500,
      "quantity": 2,
      "total": 1200,
      "discountPercentage": 17.2,
      "discountedPrice": 994,
      "thumbnail": "data:image/jpeg;base64,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"
    },
    {
      "id": 126,
      "title": "Necklace",
      "price": 6500,
      "quantity": 3,
      "total": 1707,
      "discountPercentage": 13.63,
      "discountedPrice": 1474,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREf-BAfYEb9DpXk7-80QLJ7CXrcNRpRFMMCg&s"
    },
    {
      "id": 127,
      "title": "Ring",
      "price": 235000,
      "quantity": 1,
      "total": 1099,
      "discountPercentage": 11.83,
      "discountedPrice": 969,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjaNrdtN-doGrwy0xPQJVxENIIqM0Ysmze4Q&s"
    },
    {
      "id": 127,
      "title": "Earrings",
      "price": 255000,
      "quantity": 1,
      "total": 19,
      "discountPercentage": 13.31,
      "discountedPrice": 16,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1FHuiWw4I6BeqgOsHjWiIB3zqw9Dr-XwiJQ&s"
    },
    {
      "id": 128,
      "title": "Bracelet",
      "price": 345000,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_so0oyjl0jCvHlDqt_zqq-EuqCPDV3YAHJw&s"
    },

    ///Platinum..........//////////////////////////////////////
    {
      "id": 129,
      "title": "Ring",
      "price": 2500,
      "quantity": 3,
      "total": 60,
      "discountPercentage": 8.71,
      "discountedPrice": 55,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/8a33/3636/35357c55699d6487abf82cb8309d3a7d?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mN6OSuGy6MBS6JuB-ZVtmtjsrB9ZB~WppPx70PY48HXM3wPfoF-rUkiMUmieoQX8ztpkcbxxcQSM9yQXJuJsL36XlD6PQLQorkqPe7swCN-xSAezKEx05cniAGKIPR4fj8TwZRBaVfisE7BDl4-M1P0Me5Tl2cEYvRcs-H~VBTk6U8PijsWH0AXlfNMXJ4KfSCTPOw3HUsLwpwdL2CccMjWuGTbQQE2Td1b5h8Rk9zlLgF3ZAF-bWX4nXIYlhGo6hsQIv2Q-Xm9r866nVQyLQ3K6kaccVNsbvKFsQ7b8qfC0Hrxa4rK1V6BDH2KAchinbFNYB7gHj7~l5~i2ZIRW2g__"
    },
    {
      "id": 130,
      "title": "Earrings",
      "price": 3500,
      "quantity": 2,
      "total": 58,
      "discountPercentage": 3.19,
      "discountedPrice": 56,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjWPj6f0iLox4RU0ZiOTQ7EuIyoOReC-n0A&s"
    },
    {
      "id": 131,
      "title": "Bracelet",
      "price": 1500,
      "quantity": 2,
      "total": 80,
      "discountPercentage": 13.1,
      "discountedPrice": 70,
      "thumbnail": "data:image/jpeg;base64,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"
    },
    {
      "id": 132,
      "title": "Pendant",
      "price": 5000,
      "quantity": 1,
      "total": 930,
      "discountPercentage": 17.67,
      "discountedPrice": 766,
      "thumbnail": "https://s3-alpha-sig.figma.com/img/2ab8/a8b3/d885e01abfd25da8be68e1f228594315?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JTG4rwmSIJqltTVPtRI4T0kygTkZ2JSEvpvaECU-ZE-3XnQAguCFdvA9MY2djEUk312-GKdFZRyelgCBFUlyYpK5YvHbU~sEf7S7Z9xOKWmsJWXPgklMUP13wvnYS8SX32mHuFa5rico~yzPviZH99fBNZxuv69ovsBfqatCjTbo~VF5HaNKQ0vXwUu~W2gNaMMGg8a4rclpMZPY8Vwg69jf9sT7hs3n-4eO4Sw5eJOfCZO-48et1ziWMM-GbYJKENyavdiGdZ4o8ZUm2hqDjhgAFYa7N4GWhS25uXeXEO~wrRHsYlad57DuSO0fr7g5XvHNxzsw-mxA9siBK67dcQ__"
    },
    {
      "id": 133,
      "title": "Bangles",
      "price": 2500,
      "quantity": 2,
      "total": 1200,
      "discountPercentage": 17.2,
      "discountedPrice": 994,
      "thumbnail": "data:image/jpeg;base64,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"
    },
    {
      "id": 134,
      "title": "Necklace",
      "price": 6500,
      "quantity": 3,
      "total": 1707,
      "discountPercentage": 13.63,
      "discountedPrice": 1474,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREf-BAfYEb9DpXk7-80QLJ7CXrcNRpRFMMCg&s"
    },
    {
      "id": 135,
      "title": "Ring",
      "price": 235000,
      "quantity": 1,
      "total": 1099,
      "discountPercentage": 11.83,
      "discountedPrice": 969,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjaNrdtN-doGrwy0xPQJVxENIIqM0Ysmze4Q&s"
    },
    {
      "id": 136,
      "title": "Earrings",
      "price": 255000,
      "quantity": 1,
      "total": 19,
      "discountPercentage": 13.31,
      "discountedPrice": 16,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1FHuiWw4I6BeqgOsHjWiIB3zqw9Dr-XwiJQ&s"
    },
    {
      "id": 137,
      "title": "Bracelet",
      "price": 345000,
      "quantity": 3,
      "total": 138,
      "discountPercentage": 16.44,
      "discountedPrice": 115,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_so0oyjl0jCvHlDqt_zqq-EuqCPDV3YAHJw&s"
    },

  ];


  console.log(products)

  let proToShow = products.filter((product, index) => {

    switch (lastClicked) {
      case 'Coin':
        return index < 11;
      case 'biscuit':
        return index >= 12 && index < 24;
      case 'necklace':
        return index >= 24 && index < 33;
      case 'Bracelet':
        return index >= 52 && index < 61;
      case 'Bangles':
        return index >= 61 && index < 70;
      case 'Earrings':
        return index >= 71 && index < 80;
      case 'Pendant':
        return index >= 81 && index < 90;
      case 'Ring':
        return index >= 91 && index < 101;
      case 'Gemstone':
        return index >= 101 && index < 110;
      case 'Diamond':
        return index >= 110 && index < 119;
      case 'Gold':
        return index >= 119 && index < 128;
      case 'Platinum':
        return index >= 128 && index < 137;
      default:
        return 0;
    }
  });
 




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
              <li className='itme9' onClick={handleToggle1}>Gemstone</li>
              <li className='itme10'onClick={handleToggle2}>Diamond</li>

            </ul>
          </div>
          <div>
            <h3>Carats</h3>
            <ul>
              <li className='itme11' onClick={handleToggle3}>Gold</li>
              <li className='itme12'onClick={handleToggle4}>Platinum</li>
            </ul>
          </div>
          <div>
            <h3>Products</h3>
            <ul>
              <li className='item1' onClick={handleToggle} > Coin </li>
              <li className='item2' onClick={handleChange}> Biscuit </li>
              <li className='item3' onClick={handleChange1}>Necklace</li>
              <li className='item4' onClick={handleChange2}>Bracelet</li>
              <li className='item5' onClick={handleChange3}> Bangles</li>
              <li className='item6' onClick={handleChange4}> Earrings</li>
              <li className='item7' onClick={handleChange5}>Pendant</li>
              <li className='item8' onClick={handleChange6}>Ring</li>
              <li>Mangalsutra</li>
              <li> Nosepin</li>
            </ul>
          </div>

          <div>
          <h3 >
            <NavLink
              to='/BridelCards'
              style={{ textDecoration: "none", color: "black" }}>
              Bridal Special
            </NavLink>
           </h3>
            <ul>
              <li>Enchanting</li>
              <li>Trendsetter</li>
              <li>Dazzling</li>
              <li>Elegant</li>
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
        <div className='right_con'  >
          <div className='shop'>SHOP</div>
          {!showProCards && (
            <div className="card-shop">
              {products.slice(33, 51).map((product) => (
                <Cards key={product.id} product={product}  />
              ))}
            </div>
          )}
          {/* Render the selected element's cards if an element is clicked */}
          {showProCards && (
            <div className="card-shop"  >
              {proToShow.map((product) => (
                <Cards key={product.id} product={product}  />
              ))}
            </div>
          )}




        </div>
      </div>





    </>
  );
}

export default HomePages;
