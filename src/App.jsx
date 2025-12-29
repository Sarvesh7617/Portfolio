import { useState,useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Particle from "./components/particle/Particle";
import GototopBtn from "./components/GototopBtn";
import { ToastContainer } from "react-toastify";

function App() {
  const [activeSec,setSection]=useState('home');

   useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <Particle />
      <Header activeSec={activeSec} setSection={setSection} />
      <Home />
      <GototopBtn setSection={setSection}/>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;