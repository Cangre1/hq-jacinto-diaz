import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle, Navigation } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="ubicacion" className="py-12 xl:py-24 bg-gray-100">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row md:items-stretch">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-2xl xl:text-4xl font-light mb-8">
              Jacinto Díaz
              <br /> Un complejo rodeado de verde
            </h2>
            <p className="text-sm xl:text-lg mb-4 xl:w-3/4">
              En un barrio de casas y edificios bajos, rodeado de verde, el
              proyecto está a media cuadra de la plaza Castiglia y a sólo 3
              cuadras de Avenida Centenario, por la que pasan varias líneas de
              colectivos. El centro de san Isidro también cerca, a tan sólo 10
              minutos de caminata.
            </p>

            <div className="flex justify-start gap-4 pt-6">
              <Button
                size="lg"
                variant="secondary"
                className="text-sm xl:text-lg items-center bg-[#2f2e2e] text-[#bdbf0b] border border-black hover:bg-transparent hover:text-black transition-all ease-in-out duration-300 py-6"
              >
                Coordiná una visita
                <MessageCircle className="ml-2 h-5 w-5" />
              </Button>
              <a
                href="https://maps.app.goo.gl/R5Fpv9ffm9RKKv5N7"
                target="_blank"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-sm xl:text-lg items-center bg-[#bdbf0b] text-[#2f2e2e] border border-[#bdbf0b] hover:bg-[#2f2e2e] hover:text-[#bdbf0b] transition-all ease-in-out duration-300 py-6"
                >
                  Ver en Google Maps
                  <Navigation className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 h-[500px] md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.304326031916!2d-58.52232790000001!3d-34.469803299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb03ae5e86591%3A0x40c11a4da01c0ff9!2sFAG%2C%20Jacinto%20D%C3%ADaz%20323%2C%20B1642%20San%20Isidro%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1732211718708!5m2!1ses!2sar"
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
