import React from 'react';

import styles from './Card.module.css';

interface CardProps {
  color: 'green' | 'blue' | 'yellow' | 'red';
  title: string;
  description: string;
  icon: React.FC;
}

const Card = (props: CardProps) => {
  return (
    <div className={`${styles.card} ${styles[props.color]}`}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      {<props.icon/>}
    </div>
  );
}

export default Card;