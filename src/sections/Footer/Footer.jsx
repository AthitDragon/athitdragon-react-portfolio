import React from 'react'
import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id='footer' className={styles.container}>
        <p> &copy; 2024 Athit Dragon, <br />
        All rights reserved.</p>
    </section>
  )
}

export default Footer