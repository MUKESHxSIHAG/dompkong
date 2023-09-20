import React, { useEffect } from "react";
import './App.css';
import HeaderSection from './Components/HeaderSection';
import NavbarSection from './Components/NavbarSection';
import AboutSection from './Components/AboutSection';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Utilities from './Components/Utilities';
import Thekongs from './Components/Thekongs';
import Mintnft from './Components/Mintnft';
import Partners from './Components/Partners';
import MeetTheTeam from './Components/MeetTheTeam';
import Faqs from './Components/Faqs';
import Roadmap from './Components/Roadmap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackToTop from "./Components/BackToTop";
import Preloader from "./Components/Preloader";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className="overflow-hidden">
        <Preloader />
        <NavbarSection />
        <HeaderSection />
        <AboutSection />
        <Utilities />
        <Thekongs />
        <Mintnft />
        <Roadmap />
        <Partners />
        <MeetTheTeam />
        <Faqs />
        <BackToTop />

      </div>
    </>
  );
}

export default App;
