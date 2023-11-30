import React from 'react';

// import styles
import styles from './Home.module.css';

// import assets
import locatePointImg from '../../assets/images/material-symbols_share-location.png';
import searchImg from '../../assets/images/Search Icon.png';

// import components
import Header from '../../components/Header/Header';
import WeatherCard from '../../components/WeatherCard/WeatherCard';

function Home() {
  return (
    <div className={styles.container}>
        <Header />
        <div className={styles.weather_container}>
            <div className={styles.search_area}>
                <div>
                    <div className={styles.location_name_box}>
                        <img src={locatePointImg} alt='img' />
                        <p>location name</p>
                    </div>
                    <p className={styles.longAndLati_p}>longitude and latitude</p>
                </div>
                <div className={styles.search_box}>
                    <input type='text' placeholder='Search your city here....'/>
                    <img src={searchImg} alt='img' />
                </div>
            </div>
            <div className={styles.weather_report_container}>
                <ul className={styles.report_header}>
                    <li className={styles.date_box}>
                        <label htmlFor='date'>Select Date</label>
                        <input type='date' name='date' id='date' />
                    </li>
                    <li>High Temperature</li>
                    <li>Low Temperature</li>
                    <li>Humidity</li>
                    <li>Sunrise Time</li>
                    <li>Sunset Time</li>
                </ul>
                <div className={styles.weather_card_container}>
                    <WeatherCard />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;