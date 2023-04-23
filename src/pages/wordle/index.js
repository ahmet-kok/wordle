import WordleBox from "../../../components/wordle/wordlebox";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import WordleKeyboard from "../../../components/keyboard/WordleKeyboard";

function Wordle() {
  const router = useRouter();
  function playAgainHandler() {
    router.reload("/wordle");
  }
  function StructuredWord(setWord, setColor) {
    this.text = setWord;
    this.color = setColor;
  }
  function Keyboard(setKey, setColor, setValue) {
    (this.key = setKey), (this.color = setColor), (this.value = setValue);
  }
  let defaultKeyboard = [
    new Keyboard("A", "#808384", "A"),
    new Keyboard("B", "#808384", "B"),
    new Keyboard("C", "#808384", "C"),
    new Keyboard("Ç", "#808384", "Ç"),
    new Keyboard("D", "#808384", "D"),
    new Keyboard("E", "#808384", "E"),
    new Keyboard("F", "#808384", "F"),
    new Keyboard("G", "#808384", "G"),
    new Keyboard("Ğ", "#808384", "Ğ"),
    new Keyboard("H", "#808384", "H"),
    new Keyboard("I", "#808384", "I"),
    new Keyboard("İ", "#808384", "İ"),
    new Keyboard("J", "#808384", "J"),
    new Keyboard("K", "#808384", "K"),
    new Keyboard("L", "#808384", "L"),
    new Keyboard("M", "#808384", "M"),
    new Keyboard("N", "#808384", "N"),
    new Keyboard("O", "#808384", "O"),
    new Keyboard("Ö", "#808384", "Ö"),
    new Keyboard("P", "#808384", "P"),
    new Keyboard("R", "#808384", "R"),
    new Keyboard("S", "#808384", "S"),
    new Keyboard("Ş", "#808384", "Ş"),
    new Keyboard("T", "#808384", "T"),
    new Keyboard("U", "#808384", "U"),
    new Keyboard("Ü", "#808384", "Ü"),
    new Keyboard("V", "#808384", "V"),
    new Keyboard("Y", "#808384", "Y"),
    new Keyboard("Z", "#808384", "Z"),
  ];
  const [keyboard, setKeyboard] = useState(defaultKeyboard);
  
  const [gameRound, setGameRound] = useState(0);
  const DICTIONARY = [
    "RADYO",
    "SEHPA",
    "DOLAP",
    "KALEM",
    "KAVUN",
    "KÖPEK",
    "MERAK",
    "GAZAP",
    "SEHPA",
    "ROMAN",
    "CEVİZ",
  ];
  const WORDS = [
    "RADYO",
    "SEHPA",
    "DOLAP",
    "KALEM",
    "KAVUN",
    "KÖPEK",
    "MERAK",
    "GAZAP",
    "SEHPA",
    "ROMAN",
    "CEVİZ",
  ];

  const [SELECTEDWORD, SETSELECTEDWORD] = useState(WORDS[Math.floor(Math.random() * WORDS.length)]);
  
  const SELECTEDWORDCHARS = SELECTEDWORD.split("");
  let foundGreens = [];
  let foundGreys = [];
  let foundOranges = [];

  function checkWordExist(word) {
    // DICTIONARY.find(text => text === word) // alt tarafa eklenecek
    if (true) {
      checkWord(word);
    } else {
      return false;
    }
  }
  function checkWord(word) {
    if (word === SELECTEDWORD) {
      setWin(1);
    }
    word.split("").map((char, index) => {
      checkChar(char, index);
    });
    /* filter((char, index) => {
      if (char === SELECTEDWORDCHARS[index]) {
        foundGreens.push(index);
        console.log(foundGreens);
      } else if (SELECTEDWORDCHARS.includes(char)) {
        foundOranges.push(index);
        console.log(foundOranges);
      } else {
        foundGreys.push(index);
        console.log(foundGreys);
      }
    }
    ); */
  }
  function checkChar(char, index) {
    if (char === SELECTEDWORDCHARS[index]) {
      if (!foundGreens.includes(char)) {
        foundGreens.push(char);
        newKeyboard
          .filter((key) => key.value === char)
          .map((key) => {
            key.color = "green";
          });

      }
      newArr[gameRound].color[index] = "green";
    } else if (SELECTEDWORDCHARS.includes(char)) {
      foundOranges.push(char);
      newArr[gameRound].color[index] = "orange";

      newKeyboard. filter((key) => key.value === char && key.color != "green").map((key) => {
        key.color = "orange";
      });
      

    } else {
      if (!foundGreys.includes(char)) {

        foundGreys.push(char);
        newKeyboard
          .filter((key) => key.value === char)
          .map((key) => {
            key.color = "#3A3A3C";
          });
      }
      newArr[gameRound].color[index] = "grey";
    }
  }
  const [win, setWin] = useState(0);
  const sixWords = ["*****", "*****", "*****", "*****", "*****", "*****"];
  //const sixWords = ["nazlı", "ahmet", "melak", "hafsa", "yağız", "kalem"];
  const [words, setWords] = useState(sixWords);
  const [color, setColor] = useState([
    ["unset", "unset", "unset", "unset", "unset"],
    ["unset", "unset", "unset", "unset", "unset"],
    ["unset", "unset", "unset", "unset", "unset"],
    ["unset", "unset", "unset", "unset", "unset"],
    ["unset", "unset", "unset", "unset", "unset"],
    ["unset", "unset", "unset", "unset", "unset"],
  ]);
  let structuredWords = [];
  words.map((word, index) => {
    structuredWords.push(new StructuredWord(word, color[index]));
  });
  const [structuredWord, setStructuredWord] = useState(structuredWords);
  let newArr = [...structuredWord];
  let newKeyboard = [...keyboard];
  const textInput = useRef();
  function onSubmitHandler(event) {
    event.preventDefault();
    if (textInput.current.value.length == 5) {
      newArr[gameRound].text = textInput.current.value;
      newArr[gameRound].color = ["white", "white", "white", "white", "white"];
      setGameRound(gameRound + 1);
      setStructuredWord(newArr);
      checkWordExist(textInput.current.value);
      if (textInput.current.value === SELECTEDWORD) {
        setWin(1);
      } else if (gameRound == 5) {
        setWin(2);
      }
      textInput.current.value = "";
    }
  }
  const [godMode, setGodMode] = useState(0);
  function godModeHandler() {
    setGodMode(godMode + 1);
  }
  const [textColor, setTextColor] = useState("orange");
  return (
    <>
      <div className="body">
        {godMode < 20 ? (
          <h1 className="title">Wordle</h1>
        ) : (
          <h1 className="title">Wordle God Mode</h1>
        )}
        <div className="input">
          {win == 1 ? (
            <div className="again-box">
              <p>Kazandın 🥳</p>
              <button
                className="play-again happy"
                type="button"
                onClick={playAgainHandler}
              >
                Tekrar Oyna
              </button>
            </div>
          ) : win == 0 ? (
            <form onSubmit={onSubmitHandler}>
              <input
                onChange={(event) => {
                  if (godMode > 20) {
                    textInput.current.value = SELECTEDWORD;
                  } else {
                    let result = event.target.value
                      .replace(/[^A-ZğüşöçıİĞÜŞÖÇ]/gi, "")
                      .toUpperCase();
                    textInput.current.value = result;
                    textInput.current.value.length < 5
                      ? setTextColor("orange")
                      : setTextColor("green");
                  }
                }}
                className={textColor}
                maxLength="5"
                required
                name="word"
                type="text"
                placeholder="Enter a word"
                ref={textInput}
              />
              <button className="submit" type="submit" onClick={godModeHandler}>
                Kontrol Et
              </button>
            </form>
          ) : (
            <div className="again-box">
              <p>kaybettin 😔</p>
              <button
                className="play-again sad"
                type="button"
                onClick={playAgainHandler}
              >
                Tekrar Oyna
              </button>
            </div>
          )}
        </div>

        <WordleBox word={structuredWord} />
        <WordleKeyboard keys={keyboard} />
      </div>
    </>
  );
}

export default Wordle;
