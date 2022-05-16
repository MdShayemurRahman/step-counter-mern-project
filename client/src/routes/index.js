import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login"
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";

import Navbar from "../layouts/Navbar";
import Profile from "../pages/Profile";
import Protected from "./Protected";

const Index = () => {
  const [signIn, setSignIn] = useState(true);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/profile"
          element={
            <Protected signIn={signIn}>
              <Profile />
            </Protected>
          }
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
