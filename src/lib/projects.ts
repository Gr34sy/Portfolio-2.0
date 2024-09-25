import bestShop from "../assets/bestShop.png";
import memoryGame from "../assets/memoryGame.png";
import meteorWeather from "../assets/meteorWeather.png";
import passwordGenerator from "../assets/passwordGenerator.png";
import devfinder from "../assets/devfinder.png";
import restCountries from "../assets/restCountries.png";
import musicMania from "../assets/musicMania.png";

export type project = {
  title: string;
  description: string;
  repo: string;
  preview: string;
  stack: string[];
  image: string;
};

export const projects: project[] = [
  {
    title: "Memory Game",
    description: "Simple memory game created using React.",
    repo: "https://github.com/Gr34sy/memory-game",
    preview: "https://greasy-memory-game.netlify.app/",
    stack: ["React", "JavaScript", "CSS"],
    image: memoryGame,
  },
  {
    title: "Metheor Weather",
    description:
      "The app utilizes the OpenWeather API and displays weather stats in a nice visual form.",
    repo: "The app utilizes the OpenWeather API and displays weather stats in a nice visual form.",
    preview: "https://greasymeteorweather.netlify.app",
    stack: ["Next", "React", "Tailwind", "Mongo"],
    image: meteorWeather,
  },
  {
    title: "Password Generator",
    description:
      "App with the functionalities to generate password. Users can set password length and which characters can be contained in the generated password.",
    repo: "https://github.com/Gr34sy/frontendmentor-password-generator/tree/main",
    preview: "https://grpasswordgenerator.netlify.app",
    stack: ["React", "JavaScript", "CSS"],
    image: passwordGenerator,
  },
  {
    title: "Devfinder",
    description:
      "The app enables to search for Github user and then display information about him. Users can also switch between dark and light mode.",
    repo: "https://github.com/Gr34sy/frontendmentor-devfinder",
    preview: "https://greasydevfinder.netlify.app",
    stack: ["React", "Tailwind"],
    image: devfinder,
  },
  {
    title: "Music Mania",
    description:
      "Page which connects with last.fm API. It enables filtering music artists, adding them to favorites and searching for the similar.",
    repo: "https://github.com/Gr34sy/MusicManiaProject",
    preview: "https://mellifluous-faun-63ea4b.netlify.app",
    stack: ["HTML", "SASS", "React", "JavaScript"],
    image: musicMania,
  },
  {
    title: "Rest Countries",
    description:
      "Web application created with Rest Countries API. You can search there info of all countries around the world! You can also turn on darkmode.",
    repo: "https://github.com/Gr34sy/react-countries-api",
    preview: "https://guileless-semifreddo-6d7e9b.netlify.app",
    stack: ["React", "JavaScript", "SASS", "HTML", "CSS"],
    image: restCountries,
  },
  {
    title: "Best Shop",
    description:
      "My first frontend project. Just a landing page with simple calculator, which is written in vanilla JS.",
    repo: "https://github.com/Gr34sy/BestShop-project",
    preview: "https://inspiring-sorbet-4f9b9d.netlify.app",
    stack: ["HTML", "CSS", "JavaScript", "SASS"],
    image: bestShop,
  },
];
