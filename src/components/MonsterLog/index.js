import React from 'react';
import styles from './monster-log.module.css';

function MonsterLog(props) {
  return (
    <div>
      <img
        className={styles.book}
        src={require('../../images/old-books-brown-and-beige-hardbound-book.jpg')}
      />
    </div>
  );
}

export default MonsterLog;
