import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { faComments } from "@fortawesome/free-regular-svg-icons";
import { faShuffle, faHandshake } from "@fortawesome/free-solid-svg-icons";

export type softSkill = {
  name: string;
  icon: IconDefinition;
  description: string;
};

export const softSkills: softSkill[] = [
  {
    name: "Communicativity",
    description:
      "Being honest with the team is crucial. I believe that constructive criticism just like fiendly advices can help to improve as a programmer. I am also always opened to discussions about the code and different even most unconventional ideas that could be implemented in projects.",
    icon: faComments,
  },
  {
    name: "Flexibility",
    description:
      "Adaptation is key in a long way to success. Being able to shift mindset or switch approach to the task is one of the most important developer skills.",
    icon: faShuffle,
  },
  {
    name: "Commitment",
    description:
      "I always give the best of me when working on the project. I remember to never give up. This attitude helps to solve many problems which can seem scary at first look. I'm sure that full commitment usually guarantees fast project's growth.",
    icon: faHandshake,
  },
];
