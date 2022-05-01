import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const publisherValidate = ["DC Comics", "Marvel Comics"];

  if (!publisherValidate.includes(publisher)) {
    throw new Error(`Publisher: ${publisher} no valido`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
