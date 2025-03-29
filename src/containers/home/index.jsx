"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logo2.png";
import {
  FaSquareInstagram,
  FaSquareFacebook,
  FaSquareWhatsapp,
} from "react-icons/fa6";
import Link from "next/link";
import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  const [index, setIndex] = useState(0);
  const words = [
    "digital",
    "identidade visual",
    "redes sociais",
    "consultoria",
    "sites",
  ];

  const scrollToSection = () => {
    let element = document.getElementById("contact");
    if (!element) return;
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <main
      id="home"
      className="min-h-screen flex flex-col items-center justify-between p-4 lg:p-6 xl:p-10 mx-auto"
    >
      <div className="w-full flex-grow flex flex-col-reverse lg:flex-row items-center justify-around gap-8 lg:gap-16 mx-auto">
        <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-[34rem]">
          <h2 className="uppercase font-bold text-3xl lg:text-4xl xl:text-5xl">
            voce destacado
          </h2>
          <h2 className="uppercase font-bold text-3xl lg:text-4xl xl:text-5xl text-that-green mt-2">
            no mundo digital
          </h2>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-4 md:mt-6 lg:mt-8">
            Fazemos a sua marca ou produto se sobressair, atraindo ainda mais
            cliente para o seu negócio.
          </p>
          <button
            className="uppercase bg-that-green text-base md:text-lg lg:text-xl xl:text-2xl p-2 md:p-3 text-black font-bold rounded-lg mt-4 md:mt-6 lg:mt-8 hover:bg-opacity-90 transition duration-300 hover:bg-[#a8d103]"
            onClick={scrollToSection}
          >
            entre em contato
          </button>
        </div>

        <div className="flex items-center mx-auto gap-4 w-full xl:w-fit relative">
          <Image
            src={Logo}
            alt="Faça Digital"
            className="w-44 lg:w-56 xl:w-72 mt-4 lg:mt-0"
          />
          <div>
            <h1 className="font-bold text-4xl lg:text-6xl absolute top-10 ">
              faça
            </h1>
            <FlipWords
              words={words}
              className="font-bold text-4xl lg:text-6xl text-foreground -ml-2 absolute top-28"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4 sm:gap-6 md:gap-8">
        <Link
          href={"#"}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-that-green transition duration-200"
        >
          <FaSquareInstagram className="text-2xl sm:text-3xl md:text-4xl" />
        </Link>
        <Link
          href={"#"}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-that-green transition duration-200"
        >
          <FaSquareFacebook className="text-2xl sm:text-3xl md:text-4xl" />
        </Link>
        <Link
          href={"#"}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-that-green transition duration-200"
        >
          <FaSquareWhatsapp className="text-2xl sm:text-3xl md:text-4xl" />
        </Link>
      </div>
    </main>
  );
}
