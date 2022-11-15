import { ColourType } from "models/Navigation";

export interface Footer {
  text: string;
  color?: ColourType;
  email: string;
  phone: string;
  github: string;
  instagram: string;
}
