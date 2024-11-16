import React, { useState } from 'react'
import styles from './Workplace.module.css'
import { menu } from './Object'

const WorkplaceMenu = () => {
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
    <div className={styles.workplaceMenu} style={{backgroundImage:"url(/office.png)"}}>
        <div className={styles.workplaceSearch}>
        <input 
        style={{width:"200px", height:"46px", fontSize:"18px",}}
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

export default WorkplaceMenu
