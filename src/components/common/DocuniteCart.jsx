import React from 'react'

const DocuniteCart = ({image , heading , pera}) => {
  return (
    <div className='text-center bg-white  p-[50px] '>
        <img src={image} alt="image" className='mx-auto' />
        <h3 className='py-7 text-[24px] font-black    '>{heading}</h3>
        <p className='text-base  text-pera  '>{pera}</p>
        <a href="#">read more +</a>
    </div>
  )
}

export default DocuniteCart