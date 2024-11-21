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
              Punta Chica<br /> Un Refugio Verde junto al Río
            </h2>
            <p className="text-sm xl:text-lg mb-4 xl:w-3/4">
              Ubicado en una zona privilegiada, Punta Chica se distingue por sus
              amplias avenidas arboladas y su cercanía al majestuoso Río de la
              Plata. Este encantador barrio combina la tranquilidad de un
              entorno natural con la seguridad que buscas para tu hogar,
              convirtiéndolo en un lugar ideal para familias y quienes desean
              una vida serena.
            </p>
            <p className="text-sm hidden">
              En la intersección de Avenida Libertador y la calle J. F. Kennedy,
              encontrarás un rincón perfecto para disfrutar de un estilo de vida
              activo y relajado. Este entorno ofrece una variedad de actividades
              al aire libre, desde caminatas por senderos rodeados de vegetación
              hasta paseos en bicicleta por rutas diseñadas para ello. Las
              plazas y espacios verdes invitan a los vecinos a socializar,
              practicar deportes o simplemente disfrutar de la calma que
              proporciona la naturaleza.
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
              <a href="https://www.google.com/maps/place/Avenida+del+Libertador+%26+J.+F.+Kennedy,+B1644+Victoria,+Provincia+de+Buenos+Aires/@-34.4517232,-58.5362417,15z/data=!4m6!3m5!1s0x95bcafdcfc7f9347:0x46f05e9e5a11c66f!8m2!3d-34.4519338!4d-58.528361!16s%2Fg%2F11h9t8n_hl?entry=ttu&g_ep=EgoyMDI0MTAxNS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13160.066919739145!2d-58.5362417!3d-34.4517232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcafdcfc7f9347%3A0x46f05e9e5a11c66f!2sAvenida%20del%20Libertador%20%26%20J.%20F.%20Kennedy%2C%20B1644%20Victoria%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1729172210042!5m2!1ses!2sar"
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
