/** @format */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailProduct from "./pages/DetailProduct";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:productid" element={<DetailProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
