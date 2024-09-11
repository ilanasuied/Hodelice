import React from 'react';
import styles from '../css/Menu.module.css';
import { GoChevronRight } from 'react-icons/go'; // Import de l'icône

function Menu() {
  return (
    <section id="menu" className={styles.menuPage}>
      <h2>תפריטים</h2>
      <div className={styles.menuContainer}>
        <div>
          <img src="./src/image/entrees.webp" alt="Entrees" />
          ראשונות
          <GoChevronRight className={styles.icon} />
        </div>
        <div>
          <img src="./src/image/principal.webp" alt="Principals" />
          עקריות
          <GoChevronRight className={styles.icon} />
        </div>
        <div>
          <img src="./src/image/desserts.webp" alt="Desserts" />
          קינוחים
          <GoChevronRight className={styles.icon} />
        </div>
        <div>
          <img src="./src/image/pizza.webp" alt="Desserts" />
          פיצות
          <GoChevronRight className={styles.icon} />
        </div>
        <div>
          <img src="./src/image/picknick.webp" alt="Desserts" />
          סלסלאות פיקניק
          <GoChevronRight className={styles.icon} />
        </div>
      </div>
    </section>
  );
}

export default Menu;
