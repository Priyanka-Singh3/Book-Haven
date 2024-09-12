import React from "react";
import Home from "./home/Home.jsx"
import Courses from "./courses/Courses.jsx"
import Signup from "./components/Signup"
import { Navigate, Route, Routes } from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import { useAuth } from "./context/AuthProvider.jsx";
// import Cart from "./components/Cart.jsx";
import Bookmarks from "./bookmarks/Bookmarks.jsx";

function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)
  return (
    <>
      <div className="dark:bg-white dark:text-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup"></Navigate>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/bookmark" element={<Bookmarks />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
