import React from 'react';
import styles from './Container.module.scss';

function Container(props) {
  const classes = `${styles['container']} ${props.className ?? ''}`;
  return <div className={classes}>{props.children}</div>;
}

export default Container;
