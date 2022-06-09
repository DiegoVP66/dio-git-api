import React from "react";
import RoutesComponent from "Routes";
import "react-toastify/dist/ReactToastify.css"; // import first
import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RoutesComponent />
      <ToastContainer />
    </div>
  );
}

export default App;
