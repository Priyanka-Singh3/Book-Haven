import React, { useEffect, useState } from 'react'
// import list from '../../public/list.json'
import Cards from './Cards.jsx'
import ExploreCards from './ExploreCards.jsx'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Course() {
  const [book, setBook] = useState([])
  useEffect(()=>{
    const getBook = async() => {
      try {
      const res =  await axios.get('http://localhost:4001/book')
      const data = res.data.filter((data) => data.availability === "Paid")
      console.log(data)
      setBook(data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  }, [])
  // const handleDelete = (id) => {
  //   setBook(book.filter((item) => item._id !== id)); // Remove the book from state
  // };
  
  // const filterData = list.filter((data) => data.availability === "Paid");
  return (
    <>
      <div className='max-w-screen-2xl container mx-autoƒ md:px-20 px-4'>
        <div className='mt-16 items-center justify-center text-center'>
          <h1 className='md:text-4xl text-2xl pt-11 animate-fade-in-up'>We are delighted to have you <span className='text-pink-600'>Here :)</span></h1>
          <p className='mt-12'>Welcome to our literary haven! We're excited to have you join our community of book lovers. Whether you're diving into a new adventure or searching for your next favorite novel, we're here to make your journey through the world of books unforgettable. Enjoy your time exploring our shelves! </p>
          <Link to='/'>
          <button className='mt-6 bg-pink-600 px-4 py-2 text-white rounded-xl hover:bg-pink-800 duration-300'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            book.map((item) => (
              <ExploreCards key={item._id} item={item} />
            ))
          }
        </div>

      </div>
    </>
  )
}

export default Course