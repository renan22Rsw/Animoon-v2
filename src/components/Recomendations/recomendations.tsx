"use client";

import { useMediaQuery } from "../../../hooks/useMediaQuery";
import RecomendationsMobile from "./recomendations-mobile";
import RecomendationsDesktop from "./recomendationsDesktop";

const Recomendations = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return isMobile ? <RecomendationsMobile /> : <RecomendationsDesktop />;
};

export default Recomendations;
