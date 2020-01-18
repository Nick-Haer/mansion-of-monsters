import React from 'react';
import MonsterLog from '../../components/MonsterLog';
import Button from '../../components/Button';
import styles from '../Foyer/foyer.module.css';

class Foyer extends React.Component {
  buttonClickHandler = event => {
    console.log('clickemall');
  };
  render() {
    return (
      <div className={styles.background}>
        <MonsterLog className={styles.log} />
        <Button
          buttonClickHandler={event => this.buttonClickHandler(event)}
          className={styles.button}
        />
      </div>
    );
  }
}

export default Foyer;
