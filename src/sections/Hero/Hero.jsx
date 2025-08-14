import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Athit-hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import facebookLight from "../../assets/facebook-light.svg";
import facebookDark from "../../assets/facebook-dark.svg";
import newCV from "../../assets/Athit-CV.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const facebookIcon = theme === 'light' ? facebookLight : facebookDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of AthitDragon"
        />
      <img 
      className={styles.colorMode} 
      src={themeIcon} 
      alt="Color mode icon"
      onClick={toggleTheme} />
      </div>
      <div className={styles.info}>
        <h1>
          Athit <br /> Dragon
        </h1>
        <h2>Software Developer</h2>
        <span>
          <a href="https://www.facebook.com/gkorn.tkd/" target="_blank">
            <img src={facebookIcon} alt="facebook icon" />
          </a>
          <a href="https://x.com/athitdragon" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/Dragon-D023" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
        </span>
        <p className={styles.description}>With a passion for developing modern React web apps for commercial 
            business.
        </p>
        <a href={newCV} download>
            <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
