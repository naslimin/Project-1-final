import React from 'react';
import firebase from 'firebase';
import { useState } from 'react';
import styles from '../styles/mainpage.module.css';

function App() {
  // Current state
  const [curr, setCurr] = useState('');

  // Function to get time and date
  const getDate = () => {
    const a = firebase.firestore
      .Timestamp.now().toDate().toString();
    setCurr(a);
  }

  return (
    <div className={styles.text}>
      <br /><br /><br />
      <h1>บันทึกการมาโรงเรียนประจำวัน</h1>
      <button className={styles.addButton} onClick={getDate}>Show Date</button>
      <div className={styles.inputDisplay}>
        <center>
          <div>{curr}</div>
        </center>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default App;