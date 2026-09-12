import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Navbar from "./components/common/Navbar";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminDashBoard from "./components/AdminDashBoard";
import UserDashBoard from "./components/UserDashBoard";
import About from "./components/About";
function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/blogs" element={<Blogs/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/adminDash" element={<AdminDashBoard/>}></Route>
      <Route path="/userDash" element={<UserDashBoard/>}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes>

    </BrowserRouter>
   </div>
  );
}

export default App;
