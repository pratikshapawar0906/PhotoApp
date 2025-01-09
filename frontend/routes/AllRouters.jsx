import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "../src/pages/homepage/HomePage";
import GalleryPage from "../src/pages/gallerypage/GalleryPage";
import Signup from "../src/pages/signup/Signup";
import Login from "../src/pages/login/Login";
import JoinUs from "../src/components/joinUs/JoinUs";
import PhotographerDetails from "../src/pages/photographerDetails/PhotographerDetails";

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
          <Route path="/joinUs" element={<JoinUs />} />
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
