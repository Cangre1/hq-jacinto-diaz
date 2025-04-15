"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Whatsapp from "../../public/assets/whatsapp.png";
import WhatsappAnimated from "../../public/assets/whatsapp-anim.gif";
import { ArrowBigDownDash, SendHorizontal } from "lucide-react";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 xl:pt-16"
    >
      <a
        href="https://api.whatsapp.com/send?phone=541124685346"
        className="fixed bottom-5 xl:bottom-10 right-5 xl:right-10 z-50 hover:scale-110 transition-all ease-in-out duration-300"
      >
        <Image className="w-12" src={Whatsapp} />
      </a>
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/bg-hero.png"
          alt="Hero Image"
          className="w-full h-full object-cover"
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black opacity-60 z-10" />
      </div>
      <div className="relative z-20 container mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center">
        <div className="md:w-1/2 2xl:w-[40%] text-white mb-8 md:mb-0">
          <h1 className="text-4xl xl:text-7xl font-light mb-4">
            Viví <br /> HQ+ Jacinto Díaz
          </h1>
          <p className="text-xl xl:text-3xl mb-8 font-light">
            Vení a conocer los 6 departamentos ubicados en San Isidro.
            <br />
          </p>

          <a
            href="#metricas"
            className="text-[#bdbf0b] hover:text-[#bdbf0b] hover:font-semibold text-base xl:text-lg font-medium transition-all ease-in-out duration-300 flex items-center gap-2 uppercase hover:-translate-y-1"
          >
            Conocé más
            <ArrowBigDownDash className="w-6 h-6" />
          </a>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 bg-white/20 backdrop-blur-md p-8 rounded-lg shadow-lg space-y-8 hover:shadow-2xl hover:-translate-y-1 transform transition-all ease-in-out duration-300">
          <h2 className="text-xl xl:text-3xl font-light text-white">
            Contactate con un asesor
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              <Input
                type="text"
                name="fullName"
                className="text-lg placeholder:text-lg font-light bg-white/90 placeholder-gray-500 focus:ring-white focus:ring-offset-0"
                placeholder="Nombre Completo"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <Input
                type="tel"
                name="phoneNumber"
                className="text-lg placeholder:text-lg font-light bg-white/90 placeholder-gray-500 focus:ring-white focus:ring-offset-0"
                placeholder="Número de Teléfono"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                className="text-lg placeholder:text-lg font-light bg-white/90 placeholder-gray-500 focus:ring-white focus:ring-offset-0"
                placeholder="Correo Electrónico"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Textarea
                name="message"
                className="text-lg placeholder:text-lg font-light bg-white/90 placeholder-gray-500 focus:ring-white focus:ring-offset-0"
                placeholder="Tu Mensaje"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button
                type="submit"
                className="bg-[#bdbf0b] hover:bg-black hover:text-[#bdbf0b] text-black transition-all ease-in-out duration-300 w-fit text-lg font-medium uppercase flex items-center gap-2 w-full"
              >
                Enviar
                <SendHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
