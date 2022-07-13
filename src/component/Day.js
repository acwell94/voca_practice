import { useParams } from "react-router-dom";
import Words from "./Word";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Day() {
  const a = useParams();
  // const a = useParams().day
  // const {day} = useParams()
  const day = a.day;
  // const wordList = dummy.words.filter((word) => word.day === Number(day));

  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  // const [words, setWords] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/words?day=${day}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setWords(data);
  //     });
  // }, [day]);

  return (
    <>
      <h1>Day {day}</h1>
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
