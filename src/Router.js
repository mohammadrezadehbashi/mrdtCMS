import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ProductsManagment from "./pages/ProductsManagment";
import UserManagment from "./pages/UserManagment";
import CommentsManagment from "./pages/CommentsManagment";
import ArticlesManagment from "./pages/ArticlesManagment";

const Routeres = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/dashboard/" element={<Home />}>
          {/* <Route  /> */}
          <Route path="product_manage" element={<ProductsManagment />} />
          <Route path="user_manage" element={<UserManagment/>} />
          <Route path="comment_manage" element={<CommentsManagment/>} />
          <Route path="article_manage" element={<ArticlesManagment/>} />
        </Route>
        
      </Routes>
    </Router>
  );
};

export default Routeres;
