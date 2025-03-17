import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ruler, Home, Calendar, PercentSquare } from "lucide-react";

const MetricsSection = () => {
  const metrics = [
    {
      icon: Home,
      title: "Unidades",
      value:
        "6 Departamentos: 2 ambientes (3 al frente y 3 al contrafrente) Hay unidades flexibles con posibilidad de agregar un ambiente más. Tiene 9 cocheras a disposición.",
    },
    {
      icon: PercentSquare,
      title: "Avance del proyecto",
      value: "20%",
    },
    {
      icon: Calendar,
      title: "Fecha de finalización",
      value: "Fines del 2025",
    },
    {
      icon: Ruler,
      title: "Metros cuadrados",
      value: "2200",
    },
  ];

  return (
    <section
      className="py-12 xl:py-24 bg-white  border-[#bdbf0b] border-t-[25px]"
      id="metricas"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/4 mb-8 lg:mb-0">
            <h2 className="text-2xl xl:text-4xl font-light mb-4 ">
              Jacinto Díaz: un proyecto inmobiliario rodeado de verde.
            </h2>
            <p className="text-sm xl:text-lg text-gray-600">
              Algunos datos para conocer mejor el desarrollo.
            </p>
          </div>
          <div className="lg:w-3/4 lg:pl-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {metrics.map((metric, index) => (
                <Card
                  key={index}
                  className="bg-gray-100 hover:-translate-y-1 transform transition-all ease-in-out duration-300 shadow-lg hover:shadow-2xl cursor-pointer "
                >
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-xl xl:text-2xl font-light">
                      {metric.title}
                    </CardTitle>
                    <metric.icon className="h-6 w-6 xl:h-8 xl:w-8 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    {Array.isArray(metric.value) ? (
                      <div>
                        {metric.value.map((tipologia, i) => (
                          <div key={i} className="mb-4">
                            <h4 className="text-lg font-semibold">
                              {tipologia.name}
                            </h4>
                            <p className="text-sm italic">
                              {tipologia.description}
                            </p>
                            <ul className="list-disc list-inside">
                              {tipologia.characteristics.map((char, j) => (
                                <li key={j} className="text-base">
                                  {char}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-lg xl:text-xl font-bold text-[#bdbf0b]">
                        {metric.value}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
