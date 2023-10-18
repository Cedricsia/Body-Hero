import { FilterProps } from "@types";

export async function fetchExercices(filters: FilterProps) {
  let { muscle, difficulty } = filters;

  const headers: HeadersInit = {
    "X-RapidAPI-Key": "e0f12b2445msh6ad45269d30fdaep12ac09jsnf8375bc5f10f",
    "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?difficulty=${difficulty}&muscle=${muscle}`,
    { headers: headers }
  );
  const result = await response.json();
  return result;
}
