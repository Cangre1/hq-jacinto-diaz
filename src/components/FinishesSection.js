"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DoorClosed,
  ChevronDown,
  ChevronUp,
  Microwave,
  SunSnow,
  Dam,
  DoorOpen,
  Bath,
  CarFront,
  BrickWall,
  Blocks,
} from "lucide-react";

const FinishesSection = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (index) => {
    setExpandedCards(prev => ({...prev, [index]: !prev[index]}));
  };

  const isTextLong = (text) => {
    return text.split(' ').length > 30; // Asumimos que 30 palabras es el límite
  };

  const finishes = [
    {
      Icon: Blocks,
      title: "Terminaciones",
      description:
        "Estructura de hormigón armado independiente. Tabiques exteriores de ladrillo hueco cerámico de 18x19x33 cm con terminación de revestimiento plástico texturado tipo Tarquini. Ventanas aluminio prepintado color negro línea Módena Aluar o similar con vidrios DVH (cámara de aire). Barandas y pasamanos de tubos metálicos. Herrería general terminada con esmalte sintético.Tabiques interiores de ladrillos huecos de 8x19x33cm y 12x19x33 cm, enlucidos y cielorrasos de yeso y pintura látex acrílico blanco de obra.",
    },
    {
      Icon: Microwave,
      title: "Muebles de cocina",
      description:
        "Muebles de cocina fabricados a medida en melamina blanca con cantos de abs y manijas de aluminio tipo J. Mesadas de cocina de quarzo con pileta de acero inoxidable Luxor. Grifería de diseño monocomando Ramón Soler o similar. Anafe y horno a gas de cuatro hornallas con tapa de acero inoxidable marca Domec o similar. ",
    },
    {
      Icon: SunSnow,
      title: "Calefacción + Aire acondicionado",
      description:
        "Calefacción por piso radiante con caldera dual para agua caliente. Preinstalación para equipos de aire acondicionado. Instalación Eléctrica cañerías y conductores según normas vigentes. Cada unidad con disyuntores, tableros, tomas y bocas según E.N.R.E. Televisión cañería preparada para recibir cableado a realizar por empresa de cable.Telefonía cableado de montante con alambre guía en cada caja de pase.",
    },
    {
      Icon: DoorClosed,
      title: "Puertas Interiores",
      description:
        "Puertas interiores con marco de chapa y hoja mdf con terminación de pintura sintética blanca semimate, con herrajes bronce platil.",
    },
    {
      Icon: DoorOpen,
      title: "Placards",
      description:
        "Puertas de placard corredizas de piso a techo en melamina color con cantos de aluminio. Interiores de placard en melanina blanca con estantes, una cajonera y barral para colgar, hechos a medida. ",
    },
    {
      Icon: Dam,
      title: "Instalación de agua",
      description:
        "Instalación sanitaria, distribución de agua fría y caliente con cañería plástica con uniones de termofusión, desde tanque cisterna enterrado y bomba presurizadora. Desagües cloacales con cañerías de PVC Awaduct o similar.",
    },
    {
      Icon: BrickWall,
      title: "Revestimientos",
      description:
        "Revestimiento piso pared en baños con porcelanatos y cerámicos de primera calidad. Pisos de living-comedor, pasillos y dormitorios listones cerámicos simil madera. Zócalos de madera de 5 cm terminados con pintura sintética blanca.",
    },
    {
      Icon: Bath,
      title: "Muebles de baño",
      description:
        "Mueble de baño con mesadas de mármol o cuarzo y pileta blanca. Artefactos sanitarios blancos línea Monaco de Roca o similar. Grifería de diseño monocomando Ramon Soler o similar.",
    },
    {
      Icon: CarFront,
      title: "Cocheras",
      description:
        "Cocheras calles vehiculares con garden block y boques intertrabados. Espacios para estacionamiento con cemento alisado. Paredes y cielorrasos en hormigón visto y revestimieto plástico tipo Tarquini.",
    },
  ];

  return (
    <section id="terminaciones" className="py-12 xl:py-24 bg-white">
      <div className="container mx-auto px-4 space-y-14">
        <div className="space-y-4 xl:w-1/2 2xl:w-1/3 mx-auto">
          <h2 className="text-2xl xl:text-4xl font-light text-center">
            Mirá las terminaciones que elegimos para vos
          </h2>
          <p className="text-sm xl:text-lg text-gray-600 text-center">Sabemos lo que estás buscando… En HQ+, elegimos las terminaciones que se adaptan a tu estilo de vida.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {finishes.map((finish, index) => (
            <Card
              key={index}
              className="bg-gray-100 backdrop-blur-md hover:-translate-y-1 transform transition-all ease-in-out duration-300 shadow-lg hover:shadow-2xl"
            >
              <CardHeader>
                <CardTitle className="flex items-center text-xl xl:text-2xl font-medium">
                  {finish.Icon && <finish.Icon className="mr-2 h-6 w-6" />}
                  {finish.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`${expandedCards[index] ? '' : 'line-clamp-4'} text-sm md:text-base`}>
                  {finish.description}
                </p>
                {isTextLong(finish.description) && (
                  <button 
                    onClick={() => toggleCard(index)}
                    className="mt-2 text-[#bdbf0b] hover:text-[#bdbf0b] flex items-center font-bold text-sm md:text-base"
                  >
                    {expandedCards[index] ? (
                      <>Ver menos <ChevronUp className="ml-1 h-4 w-4" /></>
                    ) : (
                      <>Ver más <ChevronDown className="ml-1 h-4 w-4" /></>
                    )}
                  </button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinishesSection;
