/** @format */
import { useState } from "react";
import BodyBase from "../components/BodyBase";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar.jsx";
import Contact from "../components/Contact.jsx";
import ProductList from "../components/Product/ProductList";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <BodyBase isOpen={isSidebarOpen}>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
      <Carousel />
      <ProductList />
      <Contact />
    </BodyBase>
  );
};

export default Home;
