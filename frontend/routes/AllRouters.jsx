import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "../src/pages/homepage/HomePage";
import GalleryPage from "../src/pages/gallerypage/GalleryPage";
import Signup from "../src/pages/signup/Signup";
import Login from "../src/pages/login/Login";
import PhotographerDetails from "../src/pages/photographerDetails/PhotographerDetails";
import JoinUsForm from "../src/pages/joinUsForm/JoinUsForm";
import Photographalogin from "../src/pages/joinUsForm/Phoyographalogin";

const AllRouters = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user-profile" element={<GalleryPage />} />

          {/* other routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/joinUsForm" element={<JoinUsForm />} >
             <Route path="/joinUsForm/login" element={< Photographalogin/>}/>
          </Route>
          <Route
            path="/photographerDetails"
            element={<PhotographerDetails />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AllRouters;
