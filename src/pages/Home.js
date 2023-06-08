import { useState } from "react";
import Footer from "../components/Footer";
import Global from "../components/Global";
import Hello from "../components/Hello";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Provinces from "../components/Provinces";
import data from "../utils/constants/provinces"
import CovidForm from "../components/CovidForm";

function Main() {
  const [provinces, setProvinces] = useState(data.provinces);
  return (
    <main>
     <Hero/>
     <Global/>
     <Provinces provinces={provinces} setProvinces={setProvinces}/>
     <CovidForm provinces={provinces} setProvinces={setProvinces}/>
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
