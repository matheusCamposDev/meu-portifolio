import { ChatAnimation } from "../components/ChatAnimation";

export function AboutMe() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-8 w-full">
      <ChatAnimation sequence={[`> Está página ainda está em desenvolvimento e ainda não possui conteúdo.`, 1000]} />
    </div>
  );
}