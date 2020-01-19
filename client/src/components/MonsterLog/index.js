import React from 'react';
import styles from './monster-log.module.css';

function MonsterLog(props) {
  return (
    <div className={styles.logBookDiv}>
      <img
        className={styles.book}
        onClick={props.buttonClicked}
        src={require('../../images/old-books-brown-and-beige-hardbound-book.jpg')}
        alt='a scary old book'
      />
    </div>
  );
}

export default MonsterLog;
