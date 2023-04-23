import WordleLetterBox from "./WordleLetterBox";
import styles from "./WordleTextBox.module.css";
function WordleTextBox(props) {
  /* const [text, setText] = useState("ahmet");
  const [colors, setColors] = useState(["red", "red", "red", "red", "red"]);
  console.log(props.value);
  const arr = [0,1,2,3,4];
  useEffect(() => {
    setColors(props.color);
    setText(props.value);
      }, [props.value]); */
  return (
    <>
      <div className={styles.box}>
        {props.value.split("").map((letter, index) => {
          return (
            <WordleLetterBox
              key={index}
              value={letter ? letter : ""}
              color={props.color[index]}
            />
          );
        })}
      </div>
    </>
  );
}

export default WordleTextBox;
