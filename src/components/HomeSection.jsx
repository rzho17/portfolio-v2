import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import IconScroll from "../utils/IconScroll";
import { useMediaQuery } from "react-responsive";

// displays home content using ACF data
const HomeSection = ({ homeData }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  //   sets timeline for home page animations
  // plays each animation sequentially
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".main-title", {
      yPercent: 100,
      opacity: 0,
      duration: 0.5,
    })
      .from(".brand-title", {
        opacity: 0,
        duration: 0.5,
      })
      .from(
        ".slogan",
        {
          opacity: 0,
          duration: 0.5,
        },
        "+=.05"
      )
      .from(".main-title .blob", { x: 100, opacity: 0 })
      .from(
        "svg",
        { yPercent: -100, autoAlpha: 0, ease: "back", duration: 1 },
        "+=.5"
      );

    gsap.to("g", {
      rotate: 360,
      repeat: -1,
      transformOrigin: "50% 50%",
      duration: 15,
      ease: "none",
    });
  });
  return (
    <section id="home">
      <div className="main-title">
        <h1>
          {homeData.main_title_top}
          <span>
            {homeData.main_title_bot}
            <span className="blob"></span>
          </span>
        </h1>
      </div>

      {isDesktop && <IconScroll />}

      <p className="brand-title">{homeData.specialty_title}</p>
      <p className="slogan">{homeData.intro_description}</p>
    </section>
  );
};

export default HomeSection;
