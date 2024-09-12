import React from 'react';
import styles from '../css/Menu.module.css';
import { GoChevronRight } from 'react-icons/go'; // Import de l'icône

function Menu() {
  return (
    <section id="menu" className={styles.menuPage}>
      <h2>תפריטים</h2>
      <div className={styles.menuContainer}>
        <table className={styles.menuTable}>
          <tbody>
            <tr>
              <td className={styles.menuItem}>ראשונות</td></tr>
            <tr>
              <td className={styles.menuItem}>עקריות</td>
            </tr>
            <tr>
              <td className={styles.menuItem}>קינוחים</td>
            </tr>
            <tr>
              <td className={styles.menuItem}>פיצות</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section >
  );
}

export default Menu;
