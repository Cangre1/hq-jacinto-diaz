"use client";

import { useState, useEffect } from "react";
import {
  Building2,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import Logo from "../../public/assets/logo-estudio-quiroga-arquitectos.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 200) {
        setIsVisible(true);
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
    ${isVisible ? "translate-y-0" : "-translate-y-full"}
    ${isAtTop ? "bg-white shadow-md" : "bg-white/30 backdrop-blur-md shadow-lg"}`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image className="w-20 xl:w-28" src={Logo} />
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>

          {/* Navegación y botones sociales */}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } lg:flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 absolute lg:relative top-full left-0 right-0 bg-white lg:bg-transparent shadow-md lg:shadow-none lg:top-auto p-4 lg:p-0 mt-0 lg:mt-0`}
          >
            <nav className="w-full lg:w-auto">
              <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 xl:space-x-4 2xl:space-x-14 text-lg xl:text-xl 2xl:text-xl">
                <li>
                  <Link
                    href="#metricas"
                    className="hover:text-[#bdbf0b] border-b border-transparent hover:border-[#bdbf0b] block py-2 lg:py-0 transition-all ease-in-out duration-300 "
                  >
                    El Vivero
                  </Link>
                </li>
                <li>
                  <Link
                    href="#ubicacion"
                    className="hover:text-[#bdbf0b] border-b border-transparent hover:border-[#bdbf0b] block py-2 lg:py-0 transition-all ease-in-out duration-300"
                  >
                    Ubicación
                  </Link>
                </li>
                <li>
                  <Link
                    href="#unidades"
                    className="hover:text-[#bdbf0b] border-b border-transparent hover:border-[#bdbf0b] block py-2 lg:py-0 transition-all ease-in-out duration-300"
                  >
                    Unidades
                  </Link>
                </li>
                <li>
                  <Link
                    href="#terminaciones"
                    className="hover:text-[#bdbf0b] border-b border-transparent hover:border-[#bdbf0b] block py-2 lg:py-0 transition-all ease-in-out duration-300"
                  >
                    Terminaciones
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#bdbf0b] border-b border-transparent hover:border-[#bdbf0b] block py-2 lg:py-0 transition-all ease-in-out duration-300"
                  >
                    Financiamiento
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex space-x-4  lg:hidden">
              <a
                href="https://www.facebook.com/estudioquirogahq"
                target="_blank"
              >
                <Button variant="ghost" size="icon">
                  <Facebook className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://www.instagram.com/hqarquitectos/"
                target="_blank"
              >
                <Button variant="ghost" size="icon">
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://www.facebook.com/estudioquirogahq"
                target="_blank"
              >
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          <div className="space-x-4  hidden lg:flex ">
            <a href="https://www.facebook.com/estudioquirogahq" target="_blank">
              <Button
                variant="ghost"
                size="icon"
                className="bg-[#bdbf0b] text-black hover:text-[#bdbf0b] hover:bg-black transition-all ease-in-out duration-300"
              >
                <Facebook className="w-5" />
              </Button>{" "}
            </a>
            <a href="https://www.instagram.com/hqarquitectos/" target="_blank">
              <Button
                variant="ghost"
                size="icon"
                className="bg-[#bdbf0b] text-black hover:text-[#bdbf0b] hover:bg-black transition-all ease-in-out duration-300"
              >
                <Instagram className="w-5" />
              </Button>
            </a>
            <a href="https://www.instagram.com/hqarquitectos/" target="_blank">
              <Button
                variant="ghost"
                size="icon"
                className="bg-[#bdbf0b] text-black hover:text-[#bdbf0b] hover:bg-black transition-all ease-in-out duration-300"
              >
                <Linkedin className="w-5" />
              </Button>{" "}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
