import React from 'react'
import styles from './Home.module.css'
import { menu } from './Object'

const HomeMenu = () => {
  return (
    <div className={styles.homeMenu}>
      <div className={styles.homeSearch}>
        <input type="text" />
        <button>click</button>
      </div>
        <ul>
          {menu.map((item) => (
            <li>
              <img src={item.img} />
              <div>
                <div style={{fontWeight:"700"}}>{item.price}</div>
                <div>{item.floorSpace}</div>
                <div style={{fontSize:"12px"}}>{item.address}</div>
              </div>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default HomeMenu
