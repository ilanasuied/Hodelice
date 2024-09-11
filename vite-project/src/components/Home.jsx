import React from 'react';
import styles from '../css/Home.module.css'

function Home() {
  return (
    <section id="home" className={styles.homePage}>
      <div className={styles.homeContainer}>
        <h1>HODELICE</h1>
        <p>קייטרינג בשרי וחלבי | קונדיטורית עוגות, קינוחים, ופטיסרי צרפתי | מגשים וסלסלאות פיקניק | אירועים בקונספטים יחודיים</p>
      </div>
    </section>
  );
}

export default Home;
