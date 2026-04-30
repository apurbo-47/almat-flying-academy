import { StaticImageData } from "next/image";

export interface LearnCardData {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
}
