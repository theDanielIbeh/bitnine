import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import { Toolbar } from "@mui/material";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Toolbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
