import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "../src/pages/homepage/HomePage";
import GalleryPage from "../src/pages/gallerypage/GalleryPage";
import Signup from "../src/pages/signup/Signup";
import Login from "../src/pages/login/Login";
import PhotographerDetails from "../src/pages/photographerDetails/PhotographerDetails";
import JoinUsForm from "../src/pages/joinUsForm/JoinUsForm";
import Photographalogin from "../src/pages/joinUsForm/Phoyographalogin";
import Profile from "../src/pages/profile/Newprofile";
import  JoinUsFormLayout from "../src/pages/joinusformLayout/joinLayout"
import Register from "../src/pages/joinUsForm/register";
import PhotographerForm from "../src/components/PhotographerForm/photographerForm";
const AllRouters = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/user-profile" element={<GalleryPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/photographerDetails/:id" element={<PhotographerDetails />} />
        <Route path="profile/:userId" element={<Profile />} />
        <Route path="/add-photographer" element={<PhotographerForm />} />
        

        {/* Nested Routes for JoinUsForm */}
        <Route path="/joinUsForm" element={<JoinUsFormLayout />}>
          <Route index element={<JoinUsForm />} /> {/* Default JoinUsForm */}
          <Route path="login" element={<Photographalogin />} />
          <Route path="register" element={<Register />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default AllRouters;
