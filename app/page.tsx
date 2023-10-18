"use client";
import Navbar from "@components/Navbar";
import Hero from "@components/Hero";
import Searchbar from "@components/Searchbar";
import { fetchExercices } from "@utils";
import { HomeProps } from "@types";
import { Text } from "@chakra-ui/react";
import ExercisesList from "@components/ExercisesList";

export default async function Home({ searchParams }: HomeProps) {
  const allExercices = await fetchExercices({
    difficulty: searchParams.difficulty || "",
    muscle: searchParams.muscle || "",
  });
  const isDataEmpty =
    !Array.isArray(allExercices) || allExercices.length < 1 || !allExercices;

  return (
    <>
      <Navbar />
      <Hero />
      <Searchbar />
      <ExercisesList isDataEmpty={isDataEmpty} allExercises={allExercices} />
    </>
  );
}
