"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TipologiaA from "../../public/assets/tipologias/1.png";
import TipologiaB from "../../public/assets/tipologias/2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Square, Home, PercentSquare } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const UnitsSection = () => {
  const units = [
    {
      type: "Tipología A",
      description: "2 ambientes",
      characteristics: [
        "Living - Comedor - Cocina",
        "1 Dormitorio en suite con vestidor y baño completo",
        "1 Toilette",
        "Balcón - Terraza con parrilla",
        "Lugar para poner lavarropas en el balcón.",
        "Superficie total de 56,70 m2 cubiertos + 10,40 m2 de balcón/terraza/parrilla",
      ],
      image: TipologiaA,
    },
    {
      type: "Tipología B",
      description: "2 ambientes flexibles",
      characteristics: [
        "Living - Comedor - Cocina",
        "1 Dormitorio en suite con vestidor y baño completo",
        "1 Toilette con ducha",
        "Balcón - Terraza con parrilla",
        "Lugar para poner lavarropas en el balcón.",
        "Es flexible ya que se podría armar un 2do dormitorio o escritorio donde se encuentra el comedor",
        "Superficie total de 60,05 m2 cubiertos + 10,40 m2 de balcón/terraza/parrilla.",
      ],
      image: TipologiaB,
    },
  ];

  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(1, 0);
    }
  }, [swiper]);

  return (
    <section id="unidades" className="pb-12 xl:pb-24 bg-white">
      <div className="container mx-auto px-4 space-y-14">
        <div className="container mx-auto px-4 space-y-4 text-center w-full xl:w-1/2">
          <h2 className="text-2xl xl:text-4xl font-light">
            ¡Descubrí las diferentes unidades que tenemos para vos!
          </h2>
          <p className="text-sm xl:text-lg text-gray-600 px-5 lg:px-10 xl:px-20 2xl:px-40">
            Explorá las distintas tipologías, mirá los detalles de cada una para
            elegir cuál se adapta mejor a vos.
          </p>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              pagination: false,
              navigation: true,
            },
          }}
          pagination={{
            clickable: true,
            type: "bullets",
            enabled: true,
          }}
          navigation={{
            enabled: false,
          }}
          modules={[EffectCoverflow, Navigation, Pagination]}
          className="mySwiper mobile-pagination"
          onSwiper={setSwiper}
        >
          {units.map((unit, index) => (
            <SwiperSlide key={index}>
              <Card
                className={`xl:mx-4 w-full ${
                  index === 1 ? "max-w-2xl" : "max-w-xl scale-90"
                } bg-gray-100`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">
                    {unit.type}
                  </CardTitle>
                  <CardDescription>{unit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square w-full relative overflow-hidden rounded-md h-80">
                    <Image
                      src={unit.image}
                      alt={unit.type}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <p className="mt-4 flex flex-col gap-2">
                    {unit.characteristics ? (
                      unit.characteristics.map((characteristic, index) => (
                        <span
                          key={index}
                          className={`text-sm ${
                            index === unit.characteristics.length - 1
                              ? "font-semibold"
                              : ""
                          }`}
                        >
                          {characteristic}
                        </span>
                      ))
                    ) : (
                      <span className="text-sm">
                        Información detallada no disponible
                      </span>
                    )}
                  </p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default UnitsSection;
