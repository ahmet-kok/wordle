import styles from './WordleLetterBox.module.css';

function WordleLetterBox(props) {
  //props.value ? props.value : 
  return (
      <p key={props} style={{ "backgroundColor":props.color }} className={styles.box}>
        {props.value == "*" ? "" : props.value}
      </p>
  );
}

export default WordleLetterBox;
