import { TRoulletColors, TRoulletColorsTernary } from "@/interfaces";

export const convertColorToTernary = (ternaryData: Array<TRoulletColorsTernary>): Array<TRoulletColors> => {
  const convertTernaryToColor: Array<TRoulletColors> = ternaryData.map((item): TRoulletColors => {
    switch (item) {
      case 0:
        return "white";
      case 1:
        return "red";
      case 2:
        return "black";
    }
  })
  return convertTernaryToColor;
};

