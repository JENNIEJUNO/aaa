import React, { useState } from 'react'
import styles from './Home.module.css'
import { menu } from './Object'

const HomeMenu = () => {
  const [keyword, setKeyword] = useState('')
  const [filterMenu, setFilterMenu] = useState(menu)
  const handleChange = (event) => {
    setKeyword(event.target.value)
  }
  const findToKeyword = () => {
    if(keyword){
      setFilterMenu(menu.filter(item => item.keyword.includes(keyword)))
    }
    else{
      setFilterMenu(menu)
    }
    setKeyword('')
  }
  return (
    <div className={styles.homeMenu}>
      <div className={styles.homeSearch}>
        <input style={{width:"135px"}} type="text" placeholder='지역, 월세, 평수 ' value={keyword} onChange={(event) => handleChange(event)}/>
        <button onClick={findToKeyword}>click</button>
      </div>
        <ul>
          {filterMenu.map((item) => (
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
