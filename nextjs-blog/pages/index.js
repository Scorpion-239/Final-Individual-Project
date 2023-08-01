// nextjs-blog/pages/index.js
import React from 'react';
import styles from '../styles/Home.module.css';
import classNames from 'classnames';

const HomePage = () => {
  return (
    <div>
      <header className={classNames(styles.hero)}>
        <nav>
          <ul className={styles.navbar}>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#articles">Articles</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className={styles['hero-content']}>
          <h1>Ahmer Mustafa</h1>
          <h2>Web Developer &amp; Designer</h2>
          <form className={styles['email-form']} action="send_resume.php" method="post">
            <input type="email" name="email" placeholder="Enter your email" required />
            <input type="submit" value="Get Resume" />
          </form>
        </div>
      </header>

      <section id="projects" className={styles.section}>
        <h2 className={classNames(styles['red-heading'])}>Projects</h2>
        <a href="https://scorpion-239.github.io/Review/" className={classNames(styles['red-link'])}>Movies &amp; TV series review website - 2023</a>
      </section>

      <section id="articles" className={styles.section}>
        <h2 className={classNames(styles['red-heading'])}>Articles</h2>
        <a href="https://scorpion-239.github.io/A.13/" className={classNames(styles['red-link'])}>Paper on oil spill - 2023</a>
      </section>

      <section id="contact" className={styles.section}>
        <h2 className={classNames(styles['red-heading'])}>Contact</h2>
        <p>Email: ahmermustafa08@gmail.com</p>
      </section>

      <footer className={classNames(styles.footer)}>
        <ul>
          <li><a href="https://github.com/Scorpion-239">Github</a></li>
          <li><a href="https://www.linkedin.com/in/ahmer-mustafa-5a110a218/">Linkedin</a></li>
        </ul>
        <p>&copy; {new Date().getFullYear()} Ahmer Mustafa. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
