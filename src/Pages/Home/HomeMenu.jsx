import React, { useState } from 'react'
import styles from './Home.module.css'
import { menu } from './Object'

const HomeMenu = () => {
  const [keyword, setKeyword] = useState('')
  const [filterMenu, setFilterMenu] = useState(menu)
  const handleChange = (event) => {
    setKeyword(event.target.value)
  }
  const hendleKeyDown = (event) => {
    if(event.key === 'Enter'){
      if(keyword){
        setFilterMenu(menu.filter(item => item.keyword.includes(keyword)))
      }
      else{
        setFilterMenu(menu)
      }
      setKeyword('')
    }
  }
  return (
    <div className={styles.homeMenu} style={{backgroundImage:"url(/room.png)"}}>
      <div className={styles.homeSearch}>
        <input 
        style={{width:"170px", height:"46px", fontSize:"18px"}}
        type="text"
        placeholder='지역, 월세, 평수 '
        value={keyword}
        onChange={handleChange}
        onKeyDown={hendleKeyDown}
        />
      </div>
        <ul>
          {filterMenu.map((item) => (
            <li>
              <img src={item.img} />
              <div>
                <div style={{fontWeight:"700"}}>{item.price}</div>
                <div style={{fontSize:"13px"}}>{item.floorSpace}</div>
                <div style={{fontSize:"10px"}}>{item.address}</div>
              </div>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default HomeMenu
