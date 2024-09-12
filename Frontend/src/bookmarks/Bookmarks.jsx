import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Bookmark from '../components/Bookmark'



function Carts() {
  return (
    <>
     <Navbar />
      <div className="container mx-auto px-4">
        <Bookmark />
      </div>
      <Footer />
    </>
  )
}

export default Carts