import { ChatAnimation } from "../components/ChatAnimation";
import { TechStack } from "../components/TechStacks";

export function Home() {
  return (
    <>
      <h1 className="text-center text-2xl text-green-400 font-mono pt-10">
        Bem-vindo ao meu Portfólio
      </h1>

      <ChatAnimation />
      <TechStack />
    </>
  );
}
