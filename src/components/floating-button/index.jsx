"use client";

import { useState, useEffect } from "react";

export default function FloatingButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight;
        if (window.scrollY > homeSectionBottom) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      className="uppercase z-50 fixed bottom-10 right-10 bg-background border border-that-green text-that-green rounded-lg p-2"
    >
      voltar ao início
    </button>
  );
}