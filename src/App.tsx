import { useEffect, useState } from "react";
import mole from "/mole.png";
import hole from "/hole.png";
import "./App.css";

export default function App() {
  const [score, setScore] = useState(0);
  const [randomMole, setRandomMole] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomMole(Math.floor(Math.random() * 10));
      setIsClicked(false);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [randomMole, isClicked]);

  const wackMole = (i: number) => {
    if (i === randomMole && !isClicked) {
      setScore(score + 1);
      setIsClicked(true);
    }
  };

  return (
    <>
      <h1>Score: {score}</h1>
      <div className="grid">
        {holes(9).map((h, i) => (
          <img
            key={i}
            src={i !== randomMole ? h : mole}
            draggable={false}
            onClick={() => wackMole(i)}
          />
        ))}
      </div>
    </>
  );
}

function holes(noOfHoles: number) {
  let holes = [];

  for (let i = 0; i < noOfHoles; i++) {
    holes.push(hole);
  }

  return holes;
}
