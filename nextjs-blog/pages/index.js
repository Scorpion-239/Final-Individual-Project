import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

<html>
  <head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-WXKCHWYY29"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag()dataLayer.push(arguments);
  gtag('js', new Date());

  gtag('config', 'G-WXKCHWYY29');
</script>

<script id="Cookiebot" 
src="https://consent.cookiebot.com/uc.js" 
data-cbid="7f1dc297-8ecb-4261-a702-5e4b6cf126dc" 
data-blockingmode="auto" type="text/javascript"></script>

  </head>
</html>

const HomePage = () => {
  const [email, setEmail] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('../pages/api/subscribe.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert('Thank you for subscribing! Check your email for the resume.');
        setEmail(''); // Clear the email input after successful submission
      } else {
        alert('Failed to subscribe. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <header className={`${styles.hero}`}>
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
          <h3>Bio:</h3>
          <p>
            Ahmer Mustafa is a passionate and innovative web designer with a strong flair for creativity and a keen eye for detail. Born and raised in a tech-savvy environment, he developed an early fascination with the digital world, sparking his interest in web design. After pursuing a degree in Information Systems, he dove headfirst into the captivating world of web development.
          </p>
          <a href="https://form.jotform.com/232144779939168">
        <button class="button">Get Resume</button>
    </a>
          
        </div>
      </header>

      <section id="projects" class="section">
        <h2 class="red-heading">Projects</h2>
        <a href="https://scorpion-239.github.io/Review/" class="red-link">Movies &amp; TV series review website - 2023</a>
      </section>

      <section id="articles" class="section">
        <h2 class="red-heading">Articles</h2>
        <a href="https://scorpion-239.github.io/A.13/" class="red-link">Paper on oil spill - 2023</a>
      </section>

      <section id="contact" class="section">
        <h2 class="red-heading">Contact</h2>
        <p>Email: ahmermustafa08@gmail.com</p>
      </section>

      <footer className="footer">
        <ul>
          <li><a href="https://github.com/Scorpion-239">Github</a></li>
          <li><a href="https://www.linkedin.com/in/ahmer-mustafa-5a110a218/">Linkedin</a></li>
          <li><a href="https://scorpion-239.github.io/A14/">Privacy Policy</a></li>
        </ul>
        <p>&copy; {new Date().getFullYear()} Ahmer Mustafa. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
