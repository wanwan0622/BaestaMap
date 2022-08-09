import React from "react";

import type { NextPage } from 'next'
import Header from "../components/Header"

import { Navigator } from "../components/Navigator"
import { Search } from "../components/Search";
import { Hint } from "../components/Hint";

import styles from '../styles/Home.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsIcon from '@mui/icons-material/Directions';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    draggable: false,
    speed: 500,
  };

  const Home: NextPage = () => {
    return (
      <div className={styles.container}>
        <Navigator />
        <Header title="Baesta Map" description='簡単に近くの映えるデートスポットが探せる' />
        <main className={styles.main}>
          <span>どこでデートする？</span>
          <Hint />

          <Search />
          <p>地図入れる</p>
          <div>
          <Slider {...settings} style={{width: "80%"}}>
          <div>
            <h3>{`${"a".repeat(1000)}`}</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        </div>
          
        </main>
      </div>
    )
  }

  export default Home
