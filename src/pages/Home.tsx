import { ChatAnimation } from "../components/ChatAnimation";
import { TechStack } from "../components/TechStacks";

export function Home() {
  return (
    <section
      id="home"
      className="h-screen bg-black gap-8 flex flex-col items-center justify-center px-4 w-200"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-green-400 font-bold mb-4">
          Bem-vindo ao meu Portfólio
        </h1>

      </div>
      
        <ChatAnimation />
        <TechStack />
    </section>
  );
}
