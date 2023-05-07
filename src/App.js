import "./App.css";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import FlashcardOption from "./components/FlashcardOption";
import CreateNew from "./components/CreateNew";
import MyFlashCards from "./components/MyFlashCards";


import { useFormik } from "formik";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container m-2 bg-gray-100">
        <Router>
          <Navbar />
          <Heading />
          <FlashcardOption />
          <h1 className="text-base font-semibold mx-24 ">
            Click on Above Option's
          </h1>
          {/* <CreateNew />
      <MyFlashCards /> */}

          <Routes>
            <Route path="/CreateNew" element={<CreateNew />} />

            <Route path="/MyFlashCards" element={<MyFlashCards />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
