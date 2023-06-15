import { TRoulletColorsTernary, IOccurrencesHistoryColors } from "@/interfaces";

export const countTernaryOccurrences = (numbers: TRoulletColorsTernary[]): [number, number, number ] => {
  const counts = { 
    0: 0, // Branco
    1: 0, // Vermelho
    2: 0, // Preto
  };

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    if (counts[number] === undefined) {
      counts[number] = 1;
    } else {
      counts[number]++;
    }
  }

  return [counts[0], counts[1], counts[2]];
}
