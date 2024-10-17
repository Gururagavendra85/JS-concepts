import { useEffect, useRef, useState } from "react";
import "./App.css";

export default function App() {
  let [date, setState] = useState(new Date().toLocaleTimeString());
  let id = useRef(null);
  useEffect(() => {
    id.current = setInterval(() => {
      setState(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(id.current);
    };
    // return clearInterval(id.current);
  }, [date]);
  function stopwatch() {
    if (id.current) {
      clearInterval(id.current);
    }
  }
  return (
    <>
      <p>{date}</p>
      <button onClick={stopwatch}>stop watch</button>
    </>
  );
}
