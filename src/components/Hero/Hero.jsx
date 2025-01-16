import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Shreya</h1>
            <p className={styles.description}>  
  A passionate B.Tech CSE student with expertise in C, C++, Python, and Java. Full-stack web developer (MERN), AI/ML enthusiast, and blockchain explorer. Experienced in leading technical projects, integrating hardware and software solutions. Space enthusiast, always eager to innovate and learn.   
</p>
     <a href="mailto:shreysamal101@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero Image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomblur}/>
        </section>
  )
}
