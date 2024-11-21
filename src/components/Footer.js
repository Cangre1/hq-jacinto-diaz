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
              <a href="https://maps.app.goo.gl/R5Fpv9ffm9RKKv5N7" target="">
                <li className="flex items-start hover:text-[#bdbf0b] font-light transition-all ease-in-out duration-300">
                  <MapPin className="mr-2 h-5 w-5" />
                  Jacinto Díaz 323, San Isidro,
                  <br /> Provincia de Buenos Aires
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
                <Link href="#metricas">Jacinto Díaz</Link>
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
