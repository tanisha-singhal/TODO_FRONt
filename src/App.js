import "./App.css";
import Login from "./Components/User/Login";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router";
import Navbar from "./Components/UI/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/todo" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
