import Link from 'next/link'
import React from 'react'
import Navbar from './components/Navbar'
import Fetch from './components/Fetch'

const page = () => {
  return (
    <><div className='main-page'>
       <Navbar/>
        <Fetch/>
    </div>
    </>
  )
}

export default page
