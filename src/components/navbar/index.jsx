"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    let element = document.getElementById(id);
    if (!element) return;
    if (menuOpen) toggleMenu();
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <nav>
      <div className={`${show ? 'h-fit opacity-100' : 'opacity-0'} fixed top-0 left-0 z-50 w-full font-bold lg:flex items-center justify-between pt-3 px-20 backdrop-blur-sm transition-all duration-200 hidden lg:block`}>
        <button className="hover:text-that-green transition duration-100 uppercase text-start" onClick={() => scrollToSection('services')}>
          nossos<br></br>serviços
        </button>
        <button className="hover:text-that-green transition duration-100 uppercase text-start" onClick={() => scrollToSection('works')}>
          trabalhos<br></br>realizados
        </button>
        <button className="hover:text-that-green transition duration-100 uppercase text-start" onClick={() => scrollToSection('about')}>
          sobre<br></br>nós
        </button>
        <button className="hover:text-that-green transition duration-100 uppercase text-start" onClick={() => scrollToSection('contact')}>
          entre em<br></br>contato
        </button>
      </div>
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu}>
          {menuOpen ? <X className="fixed top-8 right-8 w-8 h-8 z-50" /> : <Menu className="fixed top-8 right-8 w-8 h-8 z-10" />}
        </button>
      </div>
      {menuOpen && (
        <div className="fixed top-0 left-0 w-[100dvw] h-[100dvh] bg-background bg-opacity-90 flex flex-col items-center justify-center text-center text-xl gap-6 z-50">
          <button className="uppercase hover:text-that-green" onClick={() => scrollToSection('services')}>nossos<br></br>serviços</button>
          <button className="uppercase hover:text-that-green" onClick={() => scrollToSection('works')}>trabalhos<br></br>realizados</button>
          <button className="uppercase hover:text-that-green" onClick={() => scrollToSection('about')}>sobre<br></br>nós</button>
          <button className="uppercase hover:text-that-green" onClick={() => scrollToSection('contact')}>entre em<br></br>contato</button>
        </div>
      )}
    </nav>
  );
}
