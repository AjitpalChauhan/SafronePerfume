import React from 'react'
import leaf from '../assets/LEAF.png'
import { Link } from 'react-router-dom'


function Content() {
  return (
    <>
     <div className=' bg-logobg flex items-center justify-center flex-col h-auto'>
     <div className="flex justify-start w-full px-4 mt-4">
        <Link to="/" className='text-left underline font-semibold'>Back</Link>
      </div>
      <div className="flex justify-center items-center">
        <img src={leaf} alt="Leaf" className="h-auto max-h-36 sm:h-36" />
      </div>
    <h1 className='font-bold text-5xl text-safronetext'>Safrone Perfumes</h1>
    <h2 className='text-lg font-bold mt-7 mb-3'>About us</h2>
    <p className='w-2/3 text-center text-lg  mb-10'>Safrone is more than just a perfume brand, it's a journey of luxury and self-expression. Founded by Devendra Lad, Safrone aims to redefine the way we experience fragrance in our everyday lives.<br/><br/>

At Safrone, we believe that scent is a powerful tool for personal expression and confidence. Our meticulously crafted fragrances are designed to evoke emotions, inspire confidence, and leave a lasting impression. Each scent tells a story, celebrating individuality and empowering our customers to embrace their unique identity with sophistication.<br/><br/>

With a commitment to quality, innovation, and customer satisfaction, Safrone is dedicated to providing accessible yet luxurious fragrances that become an essential part of our customers' daily routines. Our customer-centric approach ensures that every fragrance is meticulously crafted to meet the needs and preferences of our valued customers.<br/><br/>

Welcome to Safrone, where luxury meets individuality, and every scent is a celebration of you.</p>
  </div>
    </>
   
  )
}

export default Content

