import { useState } from "react";
import Globe from "react-globe.gl";

import Button from "../components/Button.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(" landergarro7@gmail.com");
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
      <section className="c-space my-20" id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
          <div className="col-span-1 xl:row-span-3">
            <div className="grid-container">
              <img
                src="assets/grid1.png"
                alt="grid-1"
                className="w-full sm:h-[276px] h-fit object-contain"
              />

              <div>
                <p className="grid-headtext">Hola, soy Leo García </p>
                <p className="grid-subtext">
                  Como principiante en desarrollo full stack, actualmente estoy construyendo mis bases tanto en desarrollo frontend como backend, trabajando para crear sitios web dinámicos y adaptativos.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1 xl:row-span-3">
            <div className="grid-container">
              <img
                src="assets/grid2.png"
                alt="grid-2"
                className="w-full sm:h-[276px] h-fit object-contain"
              />

              <div>
                <p className="grid-headtext">Tecnologías</p>
                <p className="grid-subtext">
                  Actualmente estoy aprendiendo una variedad de lenguajes, frameworks y herramientas que me ayudarán a construir aplicaciones robustas y escalables a medida que continúo desarrollando mis habilidades.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1 xl:row-span-4">
            <div className="grid-container">
              <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                <Globe
                  height={326}
                  width={326}
                  backgroundColor="rgba(0, 0, 0, 0)"
                  backgroundImageOpacity={0.5}
                  showAtmosphere
                  showGraticules
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  labelsData={[
                    {
                      lat: 40,
                      lng: -100,
                      text: "Rjieka, Croatia",
                      color: "white",
                      size: 15,
                    },
                  ]}
                />
              </div>
              <div>
                <p className="grid-headtext">
                  Zona horaria y disponibilidad
                </p>
                <p className="grid-subtext">
                  Tengo mucha flexibilidad con los horarios y las comunicaciones. Vivo en Piura, Perú, y estoy abierto a trabajar de forma remota para cualquier parte del mundo.
                </p>
                <a
                  href="https://www.linkedin.com/in/jesus-leandro-g-21263a383/"
                  target="_blank"
                >
                  <Button
                    name="Contáctame"
                    isBeam
                    containerClass="w-full mt-10"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="xl:col-span-2 xl:row-span-3">
            <div className="grid-container">
              <img
                src="assets/grid3.png"
                alt="grid-3"
                className="w-full sm:h-[266px] h-fit object-contain"
              />

              <div>
                <p className="grid-headtext">Mi pasión por la programación</p>
                <p className="grid-subtext">
                  Me encanta resolver problemas y dar vida a ideas mediante el código. Con cada nueva tecnología que exploro y cada habilidad que mejoro, la programación se vuelve más mi pasión.
                </p>
              </div>
            </div>
          </div>

          <div className="xl:col-span-1 xl:row-span-2">
            <div className="grid-container">
              <img
                src="assets/grid4.png"
                alt="grid-4"
                className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
              />

              <div className="space-y-2">
                <p className="grid-subtext text-center">Contáctame</p>
                <div className="copy-container" onClick={handleCopy}>
                  <img
                    src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                    alt="copy"
                  />
                  <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                    landergarro7@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;
