import WordleTextBox from "./WordleTextBox";
import styles from "./WordleBox.module.css";

function WordleBox(props) {
  return (
    <>
      <div className={styles.box}>
      {props.word.map((word, index) => {
          return (
            <WordleTextBox key={index} value={ word.text} color={word.color}/>
          );
        }
      )}
      </div>
    </>
  );
}

export default WordleBox;
