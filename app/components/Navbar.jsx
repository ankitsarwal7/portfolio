import { assets } from '@/assests/assets'
import React from 'react'

const Navbar = () => {
  return (
     <>
     <nav>
        <a href=''>
         <Image src={assets.logo} className= 'w-28 cursor-pointer mr-14' />
        </a>
     </nav>
     
     </>
  )
}

export default Navbar