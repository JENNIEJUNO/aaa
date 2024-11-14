import React from 'react'
import styles from './Home.module.css'
import { menu } from './Object'

const HomeMenu = () => {
  const a = Object.keys(menu)
  console.log(a)
  return (
    <div className={styles.homeMenu}>
      <div className={styles.homeSearch}>
        <input type="text" />
        <button>click</button>
      </div>
        <ul>
          {a.map((item) => (
            <li>
              <div><img src={menu[item].img} /></div>
              <div>{menu[item].name}</div>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default HomeMenu
