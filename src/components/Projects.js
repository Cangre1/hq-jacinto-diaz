import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const texts = [
  "Benavidez",
  "Roma",
  "Jacinto Diaz",
  "Garibaldi",
  "Avellaneda",
  "Sta.Catalina",
  "Benavidez",
  "Roma",
  "Jacinto Diaz",
  "Garibaldi",
  "Avellaneda",
  "Sta.Catalina",
  "Benavidez",
  "Roma",
  "Jacinto Diaz",
  "Garibaldi",
  "Avellaneda",
  "Sta.Catalina",
  "Benavidez",
  "Roma",
  "Jacinto Diaz",
  "Garibaldi",
  "Avellaneda",
  "Sta.Catalina",
]; // Lista de textos

const Projects = () => {
  return (
    <section className="py-12 text-black relative overflow-hidden">
      <h2 className="text-2xl xl:text-4xl font-light text-[#2f2e2e] text-center top-0 left-0 bg-white p-4 z-10 xl:mb-10">
        Conocé nuestros proyectos
      </h2>
      <div className="relative h-[120px] xl:h-[200px]">
        <div className="absolute top-[30%] left-0 right-0 bg-gray-100 py-2 md:py-4 transform rotate-2 origin-right">
          <div className="overflow-hidden whitespace-nowrap">
            <div className="animate-scroll-custom-reverse inline-block uppercase">
              {texts.map((text, index) => (
                <span key={index} className="inline-flex items-center">
                  <a href={`https://ejemplo.com/${text}`} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="mx-2 md:mx-4 text-sm md:text-xl text-[#bdbf0b] hover:underline underline-offset-4 font-light decoration-1"
                  >
                    {text}
                  </a>
                  {index < texts.length - 1 && (
                    <span className="text-[#bdbf0b] mx-2 md:mx-5 text-base md:text-lg font-bold">
                      &bull;
                    </span>
                  )}
                </span>
              ))}
            </div>
            <div className="animate-scroll-custom-reverse inline-block uppercase">
              {texts.map((text, index) => (
                <span key={index} className="inline-flex items-center">
                  <a href={`https://ejemplo.com/${text}`} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="mx-2 md:mx-4 text-sm md:text-xl text-[#bdbf0b] hover:underline underline-offset-4 font-light decoration-1"
                  >
                    {text}
                  </a>
                  {index < texts.length - 1 && (
                    <span className="text-[#bdbf0b] mx-2 md:mx-5 text-base md:text-lg font-bold">
                      &bull;
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute top-[4rem] left-0 right-0 bg-[#bdbf0b] py-2 md:py-4 transform -rotate-2 origin-left">
          <div className="overflow-hidden whitespace-nowrap">
            <div className="animate-scroll-custom inline-block uppercase">
              {texts.map((text, index) => (
                <span key={index} className="inline-flex items-center">
                  <a href={`https://ejemplo.com/${text}`} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="mx-2 md:mx-4 text-sm md:text-xl hover:underline underline-offset-4 font-light decoration-1"
                  >
                    {text}
                  </a>
                  {index < texts.length - 1 && (
                    <span className="text-black mx-2 md:mx-5 text-base md:text-lg font-bold">
                      &bull;
                    </span>
                  )}
                </span>
              ))}
            </div>
            <div className="animate-scroll-custom inline-block uppercase">
              {texts.map((text, index) => (
                <span key={index} className="inline-flex items-center">
                  <a href={`https://ejemplo.com/${text}`} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="mx-2 md:mx-4 text-sm md:text-xl hover:underline underline-offset-4 font-light decoration-1"
                  >
                    {text}
                  </a>
                  {index < texts.length - 1 && (
                    <span className="text-black mx-2 md:mx-5 text-base md:text-lg font-bold">
                      &bull;
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
