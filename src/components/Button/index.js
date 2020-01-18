import React from 'react';
import styles from './button.module.css';

function Button(props) {
  return (
    <button onClick={props.buttonClickHandler} className={styles.button}>
      Click to Find Your Destiny
    </button>
  );
}

export default Button;
