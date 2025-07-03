import { TypeAnimation } from "react-type-animation";
import devIcon from '../assets/icons8-desenvolvedor-64.png';

export function ChatAnimation() {
  return (
    <>
    <img
            src={devIcon}
            alt="foto de chat"
          />
    <div className="bg-gray-900 text-green-400 font-mono text-base md:text-base p-6 h-30 rounded-lg shadow-lg max-w-xl w-full text-start border border-green-600">
      <TypeAnimation
        style={{ whiteSpace: "pre-line", display: "block" }}
        sequence={[
          `> Olá, sou o Matheus e sou Desenvolvedor FullStack\n> com 3 anos de experiência em desenvolvimento web \n > e alguns projetos em meu portfólio.`,
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={0}
        cursor={true}
      />
    </div>
    </>
  );
}
