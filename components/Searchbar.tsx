"use client";
import styles from "./Searchbar.module.css";
import { Flex, Select, Button } from "@chakra-ui/react";
import { useState } from "react";
import { difficulties, muscles } from "@constants";
import { useRouter } from "next/navigation";

const Searchbar = () => {
  function formatDifficulty(input: string) {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }
  function formatMusclesName(input: string) {
    const words = input.split("_");
    const formatedWords = words.map((word) => {
      const firstLetter = word.charAt(0).toLocaleUpperCase();
      const restOfWord = word.slice(1);
      return firstLetter + restOfWord;
    });
    return formatedWords.join(" ");
  }
  return (
    <div className={styles.searchbar} id="SearchBar">
      <Flex
        justifyContent="center"
        alignItems="center"
        flexWrap={["wrap", "wrap", "wrap", "nowrap"]}
      >
        <Select
          placeholder="Difficulty"
          width={["100%", "100%", "100%", "20%"]}
          mx=".5rem"
          mb={[".5rem", ".5rem", ".5rem", "0"]}
          bg="white"
        >
          <option value="">None</option>
          {difficulties.map((difficulty) => (
            <option value={difficulty}>{formatDifficulty(difficulty)}</option>
          ))}
        </Select>
        <Select
          placeholder="Muscles"
          width={["100%", "100%", "100%", "20%"]}
          mx=".5rem"
          mb={[".5rem", ".5rem", ".5rem", "0"]}
          bg="white"
        >
          <option value="">None</option>
          {muscles.map((muscle) => (
            <option value={muscle}>{formatMusclesName(muscle)}</option>
          ))}
        </Select>
        <Button
          mx=".5rem"
          width={["100%", "100%", "100%", "20%"]}
          colorScheme="messenger"
        >
          Search
        </Button>
      </Flex>
    </div>
  );
};

export default Searchbar;
