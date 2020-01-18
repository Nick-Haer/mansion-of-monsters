import React from 'react';
import MonsterLog from '../../components/MonsterLog';
import Button from '../../components/Button';
import styles from '../Foyer/foyer.module.css';

class Foyer extends React.Component {
  buttonClickHandler = event => {
    console.log('clickemall');
  };

  logBookClickHandler = event => {
    console.log('clicked book');
  };

  render() {
    return (
      <div className={styles.background}>
        <MonsterLog
          className={styles.logbook}
          buttonClicked={event => this.logBookClickHandler(event)}
        />
        <Button
          buttonClickHandler={event => this.buttonClickHandler(event)}
          className={styles.button}
        />
      </div>
    );
  }
}

export default Foyer;
