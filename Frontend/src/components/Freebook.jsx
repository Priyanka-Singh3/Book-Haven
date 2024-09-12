
import React, { useEffect, useState } from 'react';
// import list from "../../public/list.json";
import Cards from "./Cards.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import axios from 'axios'

// Custom Arrow Components
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgba(0, 0, 0, 0.5)", // Blue background for better visibility
        color: "#fff",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        padding: "5px",
        right: "-25px",
        zIndex: 1,
        opacity: 0.8,
        cursor: "pointer",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)", // Add shadow for depth
        transform: "translate(0, -50%)", // Center vertically
      }}
      onClick={onClick}
      onMouseOver={(e) => (e.currentTarget.style.opacity = 1)}
      onMouseOut={(e) => (e.currentTarget.style.opacity = 0.8)}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgba(0, 0, 0, 0.5)", // Blue background for better visibility
        color: "#fff",
        borderRadius: "80%",
        width: "30px",
        height: "30px",
        padding: "5px",
        left: "-25px",
        zIndex: 1,
        opacity: 0.8,
        cursor: "pointer",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)", // Add shadow for depth
        transform: "translate(0, -50%)", // Center vertically
      }}
      onClick={onClick}
      onMouseOver={(e) => (e.currentTarget.style.opacity = 1)}
      onMouseOut={(e) => (e.currentTarget.style.opacity = 0.8)}
    />
  );
}

function Freebook() {
  const [book, setBook] = useState([])
  useEffect(()=>{
    const getBook = async() => {
      try {
      const res =   await axios.get('http://localhost:4001/freebook')
      const data = res.data.filter((data) => data.availability === "Free");
      console.log(data)
      setBook(data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  }, [])
  // const filterData = list.filter((data) => data.availability === "Free");
  // console.log(filterData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 700, // Increase speed for smoother transition
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    easing: "ease-in-out",
    draggable: true,
    swipe: true,
    touchThreshold: 10, // Increase sensitivity to make touch sliding smoother
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 py-10 dark:bg-white dark:text-black'>
        <div>
          <h1 className='font-semibold text-xl'>Free Books</h1>
          <p className='mt-3'>
          Discover a selection of free books available for you to enjoy without spending a dime!
          </p>
        </div>

        <div className='mt-10 relative'>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
