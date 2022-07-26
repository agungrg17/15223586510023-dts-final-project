import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import Login from "./containers/Login";
import Register from "./containers/Register";
import DetailMovie from "./containers/DetailMovie";
import DetailSeries from "./containers/DetailSeries";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Page404 from "./containers/Page404";
import Search from "./containers/Search";
import React from "react";
import TvSeries from "./containers/TvSeries";
import Movies from "./containers/Movies";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mt-20"></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tvseries" element={<TvSeries />} />
        <Route path="/movies" element={<Movies />} />
        <Route
          path="/login"
          element={
            <ProtectedRoute loginOnlyPage={false}>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute loginOnlyPage={false}>
              <Register />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <ProtectedRoute>
              <DetailMovie />
            </ProtectedRoute>
          }
        />
        <Route
          path="/series/:id"
          element={
            <ProtectedRoute>
              <DetailSeries />
            </ProtectedRoute>
          }
        />
        <Route path="/search/:query/:page" element={<Search />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
