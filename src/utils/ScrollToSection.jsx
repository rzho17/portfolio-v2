import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// taken from mindset demo
const ScrollToSection = () => {
  // Extracts hash and key
  const { hash, key } = useLocation();

  // checks if the has is clicked, then scroll to it
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [hash, key]);

  return null;
};

export default ScrollToSection;
