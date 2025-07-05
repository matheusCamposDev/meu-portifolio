import { TypeAnimation } from "react-type-animation";
import devIcon from "../assets/icons8-desenvolvedor-64.png";

type GranularSpeed = {
  type: "keyStrokeDelayInMs";
  value: number;
};

type Speed = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99;
type SequenceElement = string | number | ((element: HTMLElement | null) => void | Promise<void>);

type Props = {
  speed?: Speed | GranularSpeed | undefined;
  repeat?: number;
  cursor?: boolean;
  sequence: Array<SequenceElement>;
};

export function ChatAnimation({ speed = 50, repeat = 0, cursor = true, sequence }: Props) {
  return (
    <div className="w-full flex flex-col items-center gap-6">
      <img src={devIcon} alt="foto de chat" className=""/>
      <div className="bg-gray-900 text-green-400 font-mono text-base p-5 rounded-lg shadow-lg max-w-xl w-full text-start border border-green-600 min-h-48 sm:min-h-32 md:min-h-32 lg:min-h-32">
        <TypeAnimation
          style={{ whiteSpace: "pre-line", display: "block" }}
          sequence={sequence}
          wrapper="span"
          speed={speed}
          repeat={repeat}
          cursor={cursor}
        />
      </div>
    </div>
  );
}
