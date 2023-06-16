import "./styles/styles.css";
import Signin from "./pages/Signin/Signin";
import SignUp from "./pages/Siginup/SignUp";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Browse from "./pages/Browse/Browse";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/movies" element={<Browse />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
