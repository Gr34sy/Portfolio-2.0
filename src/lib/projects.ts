export type project = {
  title: string;
  description: string;
  repo: string;
  preview: string;
  stack: string[];
};

export const projects: project[] = [
  {
    title: "Memory Game",
    description: "Simple memory game created using React.",
    repo: "https://github.com/Gr34sy/memory-game",
    preview: "https://greasy-memory-game.netlify.app/",
    stack: ["React", "JavaScript", "CSS"],
  },
];
