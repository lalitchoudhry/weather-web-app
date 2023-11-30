import React from 'react';

// import styles
import styles from './WeatherCard.module.css'

function WeatherCard() {
  return (
    <div className={styles.container}>
      <h3>date</h3>
      <div className={styles.card}>
        <div className={styles.head}>head</div>
        <ul className={styles.body}>
          <li>a</li>
          <li>b</li>
          <li>c</li>
          <li>d</li>
          <li>e</li>
        </ul>
      </div>
    </div>
  )
}

export default WeatherCard;