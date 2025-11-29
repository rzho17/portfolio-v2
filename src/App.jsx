import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToSection from "./utils/ScrollToSection";
import "./styles/main.scss";

import { basePath } from "../globals";
import { Outlet } from "react-router";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import LoadingScreen from "./utils/LoadingScreen";
import { useMediaQuery } from "react-responsive";

// creates routes and renders each major component section
// Header, MainContent, Footer
function App() {
  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState();
  const restPath = basePath + "pages/8" + "?acf_format=standard";
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  // fetches data and sets it once retrieved
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data.acf);
        setIsLoaded(true);
      } else {
        setIsLoaded(false);
      }
    };
    fetchData();
  }, [restPath]);

  // checks if display is desktop friendly
  // check if the cursor is available
  // displays cursor animation
  useGSAP(() => {
    if (!isDesktop) return;

    const cursorEl = document.querySelector(".cursor");
    if (!cursorEl) return;

    gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

    let xTo = gsap.quickTo(".cursor", "x", { duration: 0.2, ease: "expo" }),
      yTo = gsap.quickTo(".cursor", "y", { duration: 0.2, ease: "expo" });

    window.addEventListener("mousemove", (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
  }, [isLoaded, isDesktop]);

  return (
    <>
      {isLoaded ? (
        <>
          <ScrollToSection />
          <Header content={data.name} />

          <main>
            {isDesktop && <div className="cursor"></div>}
            <Outlet context={{ data }} />
          </main>

          <Footer data={data} />
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
