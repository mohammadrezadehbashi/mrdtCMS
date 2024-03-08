import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

const Routeres = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Auth />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Routeres;
