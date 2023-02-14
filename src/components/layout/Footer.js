import React from 'react';
import Container from '../ui/Container';
import GitHubIcon from '../../assets/icons/GitHubIcon';
import styles from './Footer.module.scss';

function Footer() {
  const currentYear = new Date().getUTCFullYear();

  return (
    <footer className={styles['footer']}>
      <Container className={styles['footer__content']}>
        <p className={styles['footer__copyright']}>
          &copy; <span>{currentYear}</span> Muhammad Alasadi, All rights
          reserved.
        </p>
        <a
          href="https://github.com/mdalasadi/react-movies-app"
          target="_blank"
          rel="noreferrer noopener"
          className={styles['footer__github-link']}
        >
          <GitHubIcon className={styles['footer__icon']} /> Repository
        </a>
      </Container>
    </footer>
  );
}

export default Footer;
