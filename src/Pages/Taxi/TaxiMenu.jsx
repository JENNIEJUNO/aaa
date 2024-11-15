import React, { useState } from 'react'
import styles from './Taxi.module.css'
import { menu } from './Object'

const TaxiMenu = () => {
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
    <div className={styles.taxiMenu} style={{backgroundImage:"url(/taxi.png)"}}>
      <div className={styles.taxiSearch}>
        <input 
        style={{width:"200px", height:"46px", fontSize:"18px",}}
        type="text"
        placeholder='지역, 가격 '
        value={keyword}
        onChange={handleChange}
        onKeyDown={hendleKeyDown}
        />
      </div>
        <ul>
          {filterMenu.map((item) => (
            <li>
              <div>
                <div style={{fontWeight:"700"}}>{item.distance}</div>
                <div style={{fontWeight:"700"}}>{item.price}</div>
              </div>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default TaxiMenu
