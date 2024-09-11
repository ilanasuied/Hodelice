import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa'; // Import des icônes
import styles from '../css/Contact.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.contactPage}>
      <h2>צרו קשר</h2>
      <div className={styles.contactMethods}>
        <div className={styles.contactItem}>
          <FaPhoneAlt className={styles.icon} />
          <span>+972 585525129</span>
        </div>
        <div className={styles.contactItem}>
          <FaEnvelope className={styles.icon} />
          <span>hodayasuied@gmail.com</span>
        </div>
        <div className={styles.contactItem}>
          <FaWhatsapp className={styles.icon} />
          <span>+972 585525129</span>
        </div>
        <div className={styles.contactItem}>
          <FaInstagram className={styles.icon} />
          <span>@hodelice_</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
