import Navbar from "./components/Navbar";
import theme from './themes/themes'
import Login from "./containers/Login";
import Register from "./containers/Register";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import DetailRecipe from "./containers/DetailRecipe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import Page404 from "./containers/Page404";
import About from "./containers/About";
import SearchRecipe from "./containers/SearchRecipe";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}>
          </Route>
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
          path="/recipes/:recipeId"
          element={
            <ProtectedRoute>
              <DetailRecipe />
            </ProtectedRoute>
          }
          />
          <Route
            path="/about"
            element={<About />}>
          </Route>
          <Route 
              path='/search' 
              element={
              <ProtectedRoute>
                <SearchRecipe /> 
              </ProtectedRoute>
              } 
            />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer/>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;