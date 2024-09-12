import axios from 'axios';
import React from 'react'

function BookmarkCards({item, onDelete}) {
    
  return (
    
    <>
      <div className="mt-4 my-3">
        <div className="card bg-base-100 w-64 h-[600px] shadow-2xl hover:scale-105 duration-200 dark:bg-white dark:text-black dark:border">
          <figure className="h-[360px] overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-60 h-full object-contain"
            />
          </figure>
          <div className="card-body p-4 flex flex-col justify-between">
            <h2 className="card-title text-base font-semibold">{item.name}</h2>
            <div className="badge badge-secondary bg-pink-500 text-white px-2 py-1 rounded-md w-full text-center">
              {item.category}
            </div>
            <p className="text-sm  dark:text-black mt-2">
              {item.title}
            </p>
            <div className="card-actions items-center flex  justify-center mt-4">
              <button
                className="px-4 py-1 rounded-full border border-white hover:bg-pink-500 hover:text-white duration-200 cursor-pointer dark:border dark:border-black"
              >
                Delete
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookmarkCards