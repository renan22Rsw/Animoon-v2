"use client";

import { useMediaQuery } from "../../hooks/useMediaQuery";
import RecomendationsMobile from "./recomendations-mobile";
import RecomendationsDesktop from "./recomendationsDesktop";

export interface Recomendation {
  id: number;
  title: string;
  image: string;
}
interface RecomendationProps {
  recomendation: Recomendation[];
}

const Recomendations = ({ recomendation }: RecomendationProps) => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return isMobile ? (
    <RecomendationsMobile recomendation={recomendation} />
  ) : (
    <RecomendationsDesktop recomendations={recomendation} />
  );
};

export default Recomendations;
