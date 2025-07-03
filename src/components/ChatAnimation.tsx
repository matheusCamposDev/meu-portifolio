import { TypeAnimation } from "react-type-animation";
import devIcon from "../assets/icons8-desenvolvedor-64.png";

export function ChatAnimation() {
  return (
    <div className="w-full flex flex-col items-center gap-6">
      <img src={devIcon} alt="foto de chat" className=""/>
      <div className="bg-gray-900 text-green-400 font-mono text-base p-5 rounded-lg shadow-lg max-w-xl w-full text-start border border-green-600 min-h-48 sm:min-h-32 md:min-h-32 lg:min-h-32">
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
    </div>
  );
}
