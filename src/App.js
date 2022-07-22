import React, { useState, useRef, useEffect } from "react"

import { AboutUs } from "./components/AboutUs/AboutUs";
import { Gallery } from "./components/Gallery/Gallery";
import { HomePage } from "./components/HomePage/HomePage";
import { Menu } from "./components/Menu/Menu";
import { Service } from "./components/Service/Service";
import { Location } from "./components/Location/Location";
import { Footer } from "./components/Footer/Footer";
import { Preloader } from "./commons/Preloader/Preloader";







const App = () => {
  const homeSection = useRef(null)
  const aboutSection = useRef(null);
  const serviceSection = useRef(null);
  const gallerySection = useRef(null);
  const locationSection = useRef(null);
  const footerSection = useRef(null)
  const [menuVisible, setMenuVisible] = useState(false);
  const [appVisible, setAppVisible] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setAppVisible(true)
    }, 3000)
  }, [])

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    })
  }


  if (!appVisible) {
    return <Preloader />
  }
  return (
    <div className="App">

      <div className="content">
        {menuVisible &&
          <Menu reference={[aboutSection, serviceSection, gallerySection, locationSection, footerSection]} onScrollDown={scrollDown} />
        }
        <HomePage toggleMenu={setMenuVisible} onScrollDown={scrollDown} refs={[aboutSection, homeSection]} />
        <AboutUs refs={aboutSection} />
        <Service refs={serviceSection} />
        <Gallery refs={gallerySection} />
        <Location refs={locationSection} />
        <Footer refs={footerSection} onScrollDown={scrollDown} reference={[aboutSection, serviceSection, gallerySection, homeSection]} />

      </div>




    </div>


  );
}

export default App;
