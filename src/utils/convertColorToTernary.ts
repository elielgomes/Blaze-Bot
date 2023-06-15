import { TRoulletColors, TRoulletColorsTernary } from "@/interfaces";

export const convertColorsToTernary = (colorsData: Array<TRoulletColors>): Array<TRoulletColorsTernary> => {
  const convertColorsToTernary: Array<TRoulletColorsTernary> = colorsData.map((item): TRoulletColorsTernary => {
    switch (item) {
      case "white":
        return 0;
      case "red":
        return 1;
      case "black":
        return 2;
    }
  })
  return convertColorsToTernary;
};

