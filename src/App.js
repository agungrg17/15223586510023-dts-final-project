import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import Login from "./containers/Login";
import Register from "./containers/Register";
//import DetailSeries from "./containers/DetailSeries";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Page404 from "./containers/Page404";
import SearchPage from "./containers/SearchPage";
import React from "react";
import TvSeriesPage from "./containers/TvSeriesPage";
import MoviesPage from "./containers/MoviesPage";
import DetailPage from "./containers/DetailPage";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mt-20"></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tvseries" element={<TvSeriesPage />} />
        <Route path="/movies" element={<MoviesPage />} />
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
          path="/details/:media_type/:id"
          element={
            <ProtectedRoute>
              <DetailPage />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/series/:id"
          element={
            <ProtectedRoute>
              <DetailSeries />
            </ProtectedRoute>
          }
        /> */}
        <Route path="/search/:query/:page" element={<SearchPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
