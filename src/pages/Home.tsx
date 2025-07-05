import { ChatAnimation } from "../components/ChatAnimation";
import { TechStack } from "../components/TechStacks";

export function Home() {
  return (
    <>
      <h1 className="text-center text-2xl text-green-400 font-mono pt-10">
        Bem-vindo ao meu Portfólio
      </h1>

      <ChatAnimation sequence={[`> Olá, sou o Matheus e sou Desenvolvedor FullStack\n> com 3 anos de experiência em desenvolvimento web\n> e alguns projetos em meu portfólio.`, 1000]} />
      <TechStack />
    </>
  );
}
