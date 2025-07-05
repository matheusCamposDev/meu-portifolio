import type { ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";
import logoCardBusiness from "../assets/logo_card_business2.png";
import iconGithub from "../assets/icons8-github-100.svg";
import iconGmail from "../assets/icons8-gmail-novo.svg";
import iconLinkedIn from "../assets/icons8-linkedin.svg";

const medias = [
  {
    name: "github.com/matheusCamposDev",
    icon: iconGithub,
  },
  {
    name: "theucamposdev@gmail.com",
    icon: iconGmail,
  },
  {
    name: "linkedin.com/in/matheuscamposdev/",
    icon: iconLinkedIn,
  },
];

export function FlipCardBusiness() {
  const [init, setInit] = useState(false);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="flex flex-1 items-center justify-center w-full">
      <div
        className="relative w-[12cm] h-[7cm] [perspective:1000px] cursor-pointer"
        onClick={() => setFlipped(true)}
      >
        {/* Cartão com flip */}
        <div
          className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Face da frente */}
          <div className="flex flex-col absolute w-full h-full bg-white rounded-lg shadow-xl p-4 [backface-visibility:hidden] flex items-center justify-center bg-linear-30 from-gray-500 from-10% via-gray-600 via-30% to-gray-900 to-90%">
            {init && (
              <Particles
                id="particles-front"
                options={particlesOptions as ISourceOptions}
              />
            )}
            <img
              src={logoCardBusiness}
              alt="foto de chat"
              className="w-26 h-19"
            />
            <p className="text-emerald-300 text-4xl font-bold transition-colors duration-300 hover:text-green-400">
              MatheusCamposDev
            </p>
            <p className="text-indigo-200">O melhor para o seu sistema!</p>
          </div>

          {/* Face de trás */}
          <div className="absolute w-full h-full bg-green-600 text-white rounded-lg shadow-xl p-4 [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center bg-linear-30 from-gray-500 from-10% via-gray-600 via-30% to-gray-900 to-90%">
            
            <div className="flex flex-col items-start">
              {medias.map((media) => (
                <div className="flex flex-row items-center">
                  <img src={media.icon} alt="" className="h-14" />
                  <p>{media.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
