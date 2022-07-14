import { useParams } from "react-router-dom";
import Words, { IWord } from "./Word";
import useFetch from "../hooks/useFetch";
import React from "react";

export default function Day() {
  const { day } = useParams<{ day: string }>();

  const words: IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h1>Day {day}</h1>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map((word) => (
            <Words word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
