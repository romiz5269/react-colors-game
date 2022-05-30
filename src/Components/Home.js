import { useState, useEffect } from "react";
import Game from "./Game";
const cardColors = [
  { color: "green", colorId: 1, matched: false },
  { color: "red", colorId: 2, matched: false },
  { color: "black", colorId: 3, matched: false },
  { color: "blue", colorId: 4, matched: false },
];

function Home() {
  const [colorsList, setColorsList] = useState([]);
  const [Signin, setSignin] = useState(false);
  const [userName, setUserName] = useState("");

  const [UserColorsList, setUserColorsList] = useState([]);

  const [FirstColor, setFirstColor] = useState("");
  const [SecondColor, setSecondColor] = useState("");
  const [ThirdColor, setThirdColor] = useState("");
  const [FourthColor, setFourthColor] = useState("");
  const [startSearch, setStartSearch] = useState(false);
  const [userTurn, setUserTurn] = useState(0);
  const [userWin, setUserWin] = useState(false);
  const [numberOfCorrectColor, setNumberOfCorrectColor] = useState(0);
  const shuffleCards = () => {
    const shuffledCards = [...cardColors]
      .sort(() => Math.random() - 0.5)
      .map((colors) => ({ ...colors, id: Math.random() }));
    setUserTurn(0);
    setUserWin(false);
    setNumberOfCorrectColor(0);

    setColorsList(shuffledCards);
  };

  const handleSteps = (e) => {
    e.preventDefault();
    setSignin(true);
    shuffleCards();
  };

  useEffect(() => {
    if (
      startSearch &&
      FirstColor &&
      SecondColor &&
      ThirdColor &&
      FourthColor &&
      !userWin
    ) {
      console.log(colorsList);
      for (var i = 0; i < colorsList.length; i++) {
        if (colorsList[i].color === UserColorsList[i].color) {
          colorsList[i].matched = true;
          setNumberOfCorrectColor((number) => number + 1);
          if (i === 3) {
            alert("You Win");
            setUserWin(true);
            shuffleCards();
          }
        }
      }

      setUserTurn((prevTurns) => prevTurns + 1);
      setStartSearch(false);
    }
  }, [
    FirstColor,
    SecondColor,
    ThirdColor,
    FourthColor,
    startSearch,
    numberOfCorrectColor,
    userTurn,
    UserColorsList,
    colorsList,
    userWin,
  ]);
  const handleStopSubmit = (e) => {
    e.preventDefault();
    if (userTurn > 4) {
      alert("You Lose !");
      shuffleCards();
      return;
    }
    if (numberOfCorrectColor < 4) {
      setNumberOfCorrectColor(0);
      var color_selected = [];
      color_selected.splice(0, 0, { color: FirstColor, colorid: 1 });
      color_selected.splice(1, 0, { color: SecondColor, colorid: 2 });
      color_selected.splice(2, 0, { color: ThirdColor, colorid: 3 });
      color_selected.splice(3, 0, { color: FourthColor, colorid: 4 });
      setUserColorsList(color_selected);
      setStartSearch(true);
    }
  };
  return (
    <div className="section">
      {!Signin ? (
        <div className="form-control">
          <h1>Welcome to Colors Game ! </h1>
          <p>Enjoy the game and please dont refresh page on this game!</p>
          <form onSubmit={handleSteps}>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="Enter Your Name ... "
            />
            <button> Start Game </button>
          </form>
        </div>
      ) : (
        <div className="game-box">
          <div>
            <h1>Welcome {userName} to Colors Game !</h1>
            <button onClick={shuffleCards}>New Game</button>
            <div className="card-grid">
              {colorsList.map((color) => (
                <Game key={color.id} color={color} />
              ))}
            </div>
          </div>

          <div className="user-colors-box">
            <form className="colors-options-form">
              <select onChange={(e) => setFirstColor(e.target.value)}>
                <option>Choose Color</option>
                <option value="green">green</option>
                <option value="red">red</option>
                <option value="black">black</option>
                <option value="blue">blue</option>
              </select>
              <select onChange={(e) => setSecondColor(e.target.value)}>
                <option>Choose Color</option>
                <option value="green">green</option>
                <option value="red">red</option>
                <option value="black">black</option>
                <option value="blue">blue</option>
              </select>
              <select onChange={(e) => setThirdColor(e.target.value)}>
                <option>Choose Color</option>
                <option value="green">green</option>
                <option value="red">red</option>
                <option value="black">black</option>
                <option value="blue">blue</option>
              </select>
              <select onChange={(e) => setFourthColor(e.target.value)}>
                <option>Choose Color</option>
                <option value="green">green</option>
                <option value="red">red</option>
                <option value="black">black</option>
                <option value="blue">blue</option>
              </select>
              <button onClick={handleStopSubmit}>Lock In !</button>
            </form>
            <p>Number of correct colors : {numberOfCorrectColor}</p>
            <p>Your Turns : {userTurn}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
