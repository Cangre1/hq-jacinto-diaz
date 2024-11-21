import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Render1 from "../../public/assets/renders/1.jpg";
import Render2 from "../../public/assets/renders/2.jpg";
import Render3 from "../../public/assets/renders/3.jpg";
import Render4 from "../../public/assets/renders/4.jpg";

const PhotosVideosSection = () => {
  const media = [
    {
      type: "image",
      src: Render1,
      alt: "Render del Proyecto 1",
    },
    {
      type: "image",
      src: Render2, 
      alt: "Progreso de la Construcción",
    },
    {
      type: "image",
      src: Render3, 
      alt: "Progreso de la Construcción",
    },
    {
      type: "image",
      src: Render4, 
      alt: "Progreso de la Construcción",
    },
    {
      type: "video",
      src: "/assets/video-test.mp4",
      alt: "Recorrido del Proyecto",
    },
    {
      type: "video",
      src: "/assets/video-test2.mp4",
      alt: "Recorrido del Proyecto",
    },
  ];

  const renderMediaItems = (items) => (
    <>
      {items.map((item, index) => (
        <Card key={index} className="flex-shrink-0 w-64 mx-2">
          <CardContent className="p-0">
            <div className="aspect-w-16 aspect-h-9">
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              ) : (
                <video
                  src={item.src}
                  controls
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );

  return (
    <section id="detalles" className="py-12 xl:py-24 bg-gray-100 overflow-hidden">
      <div className="space-y-14">
        <div className="container mx-auto px-4 xl:w-1/2 2xl:w-1/3 mx-auto">
          <h2 className="text-2xl xl:text-4xl font-light text-center mb-4">Cuidamos cada detalle</h2>
          <p className="text-sm xl:text-lg text-gray-600 text-center">Nuestros procesos aseguran que cada detalle esté a la vista, desde la compra del terreno hasta la entrega final. </p>
        </div>
        <div className="flex flex-col space-y-8">
          <div className="scroll-container">
            <div className="scroll-content animate-scroll-left">
              {renderMediaItems(media)}
              {renderMediaItems(media)}
            </div>
          </div>
          <div className="scroll-container">
            <div className="scroll-content animate-scroll-right">
              {renderMediaItems(media)}
              {renderMediaItems(media)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotosVideosSection;
