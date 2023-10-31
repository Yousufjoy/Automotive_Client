import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Brands from "../../components/Brands/Brands";
import Ceo from "../../components/CEO/Ceo";
import News from "../../components/News/News";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/footer/Footer";

import { MdLightMode } from "react-icons/md";

const Home = () => {
  const [mode, setMode] = useState("light");

  const changeTheme = () => {
    const html = document.documentElement;
    if (mode == "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      setMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setMode("light");
      localStorage.setItem("mode", "light");
    }
  };

  useEffect(() => {
    const currentMode = localStorage.getItem("mode") || "light";
    setMode(currentMode);
    const html = document.documentElement;
    html.classList.add(currentMode);
  }, []);

  return (
    <div className="dark:bg-zinc-800">
      <Navbar></Navbar>
      <div className="  pl-[1690px]">
        <button
          className=" dark:bg-white text-2xl rounded-3xl "
          onClick={changeTheme}
        >
          <MdLightMode></MdLightMode>
        </button>
      </div>
      <Banner></Banner>
      <Brands></Brands>
      <News></News>
      <Ceo></Ceo>
      <Footer></Footer>
    </div>
  );
};

export default Home;
