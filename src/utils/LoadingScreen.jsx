import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// displays loading screen animation when waiting for api
const LoadingScreen = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".blob", {
      y: -25,
      opacity: 0,
      repeat: -1,
      delay: 0.01,
      ease: "back.inOut",
      stagger: {
        each: 0.1,
        yoyo: true,
        repeat: 1,
      },
    });
  });
  return (
    <div className="loading-screen">
      <div className="blob-container">
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
