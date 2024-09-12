import React, { useEffect, useState } from "react";
import axios from "axios";
import BookmarkCards from "./BookmarkCards";
import useAuth  from "../context/AuthProvider";

function Bookmark() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 min-h-screen dark:bg-white dark:text-black">
        <div className="mt-16 text-center font-bold text-2xl dark:text-black ">
          Your added Books !!
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* {bookmarks.map((bookmark) => (
            <BookmarkCards key={bookmark._id} item={bookmark} onDelete={handleDelete} />
          ))} */}
        </div>
      </div>
    </>
  );
}

export default Bookmark;
