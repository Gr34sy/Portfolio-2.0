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
    description: "Lorem ipsum dolor sit amet, consectetur adipis",
    icon: faComments,
  },
  {
    name: "Flexibility",
    description: "Lorem ipsum dolor sit amet, consectetur adipis",
    icon: faShuffle,
  },
  {
    name: "Commitment",
    description: "Lorem ipsum dolor sit amet, consectetur adipis",
    icon: faHandshake,
  },
];
