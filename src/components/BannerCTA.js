import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const BannerCTA = () => {
  return (
    <section className="py-16 bg-[#bdbf0b] text-black">
      <div className="container mx-auto px-10 xl:px-4 text-center">
        <h2 className="text-2xl xl:text-4xl font-light mb-4 xl:w-1/2 2xl:w-1/3 mx-auto">
          Jacinto Díaz te espera, coordiná una visita con cita previa
        </h2>
        <p className="text-sm xl:text-lg mb-8 xl:w-1/2 2xl:w-1/3 mx-auto">
          Contáctanos ahora para saber más sobre esta excepcional oportunidad de
          vida.
        </p>
        <a href="https://api.whatsapp.com/send?phone=541124685346">
          <Button
            size="lg"
            variant="secondary"
            className="text-sm xl:text-lg items-center bg-[#2f2e2e] text-[#bdbf0b] border border-black hover:bg-transparent hover:text-black transition-all ease-in-out duration-300"
          >
            Contáctanos por WhatsApp
            <MessageCircle className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default BannerCTA;
