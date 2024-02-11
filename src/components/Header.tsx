


import React from 'react'
import {Link}    from 'react-router-dom';
const Header = () => {
  return (
    <div  className='bg-yellow-600 py-6'>
        <div className='container mx-auto flex justify-between'>

<span  className='text-white text-3xl font-bold tracking-tight'>
    <Link  to="/">Kafhollidays.com</Link>
</span>
<span  className='flex space-x-2'>
    <Link to="/signin"  className='flex text-orange-600 
    items-center px-3 font-bold  hover:bg-gray-100'>Sign In</Link>
</span>

        </div>
      
    </div>
  )
}

export default Header
