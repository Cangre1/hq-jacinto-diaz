import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#2f2e2e] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-md xl:text-xl font-light">Contactános</h3>
            <ul className="flex flex-col gap-y-3 text-xs xl:text-base">
              <a
                href="https://www.google.com/maps/place/Avenida+del+Libertador+%26+J.+F.+Kennedy,+B1644+Victoria,+Provincia+de+Buenos+Aires/@-34.4517232,-58.5362417,15z/data=!4m6!3m5!1s0x95bcafdcfc7f9347:0x46f05e9e5a11c66f!8m2!3d-34.4519338!4d-58.528361!16s%2Fg%2F11h9t8n_hl?entry=ttu&g_ep=EgoyMDI0MTAxNS4wIKXMDSoASAFQAw%3D%3D"
                target=""
              >
                <li className="flex items-start hover:text-[#bdbf0b] font-light transition-all ease-in-out duration-300">
                  <MapPin className="mr-2 h-5 w-5" />
                  Avenida del Libertador & J. F. Kennedy,
                  <br /> Buenos Aires, Argentina
                </li>
              </a>
              <a href="#" target="_blank">
                <li className="flex items-center hover:text-[#bdbf0b] font-light transition-all ease-in-out duration-300">
                  <Phone className="mr-2 h-5 w-5" />
                  +1 (123) 456-7890
                </li>
              </a>
              <a href="mailto: info@nombredelproyecto.com" target="_blank">
                <li className="flex items-center hover:text-[#bdbf0b] font-light transition-all ease-in-out duration-300">
                  <Mail className="mr-2 h-5 w-5" />
                  info@nombredelproyecto.com
                </li>
              </a>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-md xl:text-xl font-light"></h3>
            <ul className="space-y-2 text-xs xl:text-base">
              <li className="hover:text-[#bdbf0b] font-light transition-all ease-in-out duration-300">
                <Link href="#metricas">El Vivero</Link>
              </li>
              <li className="hover:text-[#bdbf0b] font-light transition-all ease-in-out duration-300">
                <Link href="#ubicacion">Ubicación</Link>
              </li>
              <li className="hover:text-[#bdbf0b] font-light transition-all ease-in-out duration-300">
                <Link href="#unidades">Unidades</Link>
              </li>
              <li className="hover:text-[#bdbf0b] font-light transition-all ease-in-out duration-300">
                <Link href="#terminaciones">Terminaciones</Link>
              </li>
              <li className="hover:text-[#bdbf0b] font-light transition-all ease-in-out duration-300">
                <Link href="#">Financiamiento</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-md xl:text-xl font-light mb-4">Contactanos</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/estudioquirogahq"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-[#bdbf0b] text-black hover:text-[#bdbf0b] hover:bg-black transition-all ease-in-out duration-300"
                >
                  <Facebook className="w-4 xl:w-5" />
                </Button>
              </a>
              <a
                href="https://www.instagram.com/hqarquitectos/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-[#bdbf0b] text-black hover:text-[#bdbf0b] hover:bg-black transition-all ease-in-out duration-300"
                >
                  <Instagram className="w-4 xl:w-5" />
                </Button>
              </a>
              <a
                href="https://www.facebook.com/estudioquirogahq"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-[#bdbf0b] text-black hover:text-[#bdbf0b] hover:bg-black transition-all ease-in-out duration-300"
                >
                  <Linkedin className="w-4 xl:w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-xs xl:text-base text-left xl:text-center">
            &copy; 2024 HQ Estudio Quiroga by Fellow. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
