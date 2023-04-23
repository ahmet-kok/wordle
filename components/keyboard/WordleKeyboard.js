import styles from "./WordleKeyboard.module.css";

function WordleKeyboard(props) {
  return (
    <>
      <div className="keyboard">
        {props.keys.map((key) => {
          return (
            <p
              key={key.key}
              style={{ backgroundColor: key.color }}
              className={styles.box}
            >
              {key.value}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default WordleKeyboard;
