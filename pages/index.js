import { useEffect } from 'react';
import styles from '../styles/Home.module.css'

import KUTE from 'kute.js'

export default function Home() {
  useEffect(() => {

    KUTE.fromTo('.blob1',
      { path: '.blob1' },
      { path: '.blob2' },
      { repeat: Infinity, duration: 3000, yoyo: true }
    ).start();
  })

  return (
    <div className={styles.container}>
      <svg id="visual" viewBox="0 0 900 300" width="900" height="300">
        <g transform="translate(457.4081195516301 152.23703530390733)">
          <path className="blob1" d="M101.8 -117.3C129.1 -98.5 146.3 -63.6 141.2 -33.6C136.1 -3.6 108.6 21.6 90.4 51.4C72.3 81.1 63.3 115.2 42.9 126.2C22.6 137.2 -9.2 125 -38.8 111.9C-68.4 98.8 -95.7 84.9 -119.6 60.7C-143.5 36.5 -164.1 2 -154.5 -22.9C-145 -47.8 -105.3 -62.9 -74.5 -81.2C-43.7 -99.4 -21.9 -120.7 7.7 -129.9C37.3 -139.1 74.6 -136.2 101.8 -117.3" fill="#FF0066"></path>
        </g>
        <g transform="translate(492.60768069165874 126.13948163694141)" style={{visibility: "hidden"}}>
          <path className="blob2" d="M90.1 -94.2C118.5 -83.6 144.4 -56.8 144.2 -29.7C143.9 -2.5 117.4 25 98.4 55.8C79.4 86.7 67.9 120.9 42.3 140.9C16.6 161 -23.1 167 -58.1 155.9C-93 144.8 -123.2 116.6 -143.5 82.4C-163.7 48.1 -174.2 7.8 -167.3 -29.2C-160.4 -66.1 -136.1 -99.7 -105.3 -109.9C-74.6 -120.1 -37.3 -106.9 -3.2 -103.1C30.9 -99.3 61.7 -104.8 90.1 -94.2" fill="#FF0066"></path>
        </g>
      </svg>
    </div>
  )
}
