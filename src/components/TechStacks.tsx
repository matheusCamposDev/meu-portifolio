const techs = [
  {
    name: "C#",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
  },
  {
    name: "React",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "Angular",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angular/angular-original.svg",
  },
  {
    name: "Docker",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
  },
  {
    name: "HTML5",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  },
  {
    name: "MySQL",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
  },
  {
    name: "Python",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  },
];

export function TechStack() {
  return (
      <div className="bg-gray-900 text-green-400 font-mono p-6 rounded-lg shadow-lg mt-5 max-w-xl w-full text-start border border-green-600">
        <h2 className="text-3xl text-center mb-4">Principais Tecnologias</h2>

        <div className="flex flex-col md:flex-col justify-center gap-12">
          <div className="grid grid-cols-3 gap-4">
            {techs.map((tech, index) => (
              <div className="flex flex-col items-center">
                <img
                  src= {tech.img}
                  alt={`${tech.name} logo`}
                  className="w-16 h-16 mx-auto animate-pulse"
                  style={{ animationDelay: `${index * 200}ms` }}
                />
                <p className="text-sm text-center mt-2 text-white">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}
