import React, { useEffect, useRef, useState } from 'react';
import styles from '../css/About.module.css';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true); // L'élément est visible, déclenche l'animation
        } else {
          setIsVisible(false); // L'élément sort du viewport, réinitialise l'animation
        }
      },
      { threshold: 0.1 } // Déclenche quand 10% de la section est visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current); // Nettoyage de l'observation
      }
    };
  }, []);

  return (
    <section id="about" className={styles.aboutPage} ref={aboutRef}>
      <h1>קצת עלינו</h1>
      <p className={isVisible ? styles.show : ''}>
        כבוגרת מצטיינת של קורס הקונדיטוריה 'בישולים', אני מתמחה ביצירת חוויות קולינריות מוקפדות שמשלבות טעם ואסתטיקה ברמה הגבוהה ביותר. התשוקה שלנו למצוינות קולינרית מניעה אותנו לספק לא רק מנות גורמה, אלא גם חוויות בלתי נשכחות שמגרות את כל החושים. כל מנה מעוצבת בקפידה ומשקפת מחויבות לאיכות, דיוק וחדשנות, ומבטיחה שכל אירוע יהפוך לזיכרון ייחודי. אנו מזמינים אתכם ליהנות מהשילוב המושלם בין טעמים מעודנים לאומנות קולינרית.
      </p>
    </section>
  );
}

export default About;
