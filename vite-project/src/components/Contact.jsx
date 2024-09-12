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
          <a href="https://wa.me/message/KGSWIPLNDF7TD1" target="_blank"><span>+972 585525129</span></a>
        </div>
        <div className={styles.contactItem}>
          <FaInstagram className={styles.icon} />
          <a href="https://www.instagram.com/hodelice_?igsh=NThtc2F0cjJibjhn&utm_source=qr" target="_blank"><span>@hodelice_</span></a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
