import React, { useState } from 'react'
import styles from './Workplace.module.css'
import { useNavigate } from 'react-router-dom'
import { country } from './Object'

const Workplace = () => {
    const [text, setText] = useState('직장을 소개하는 문장')
    const [goToMenu, setGoToMenu] = useState('메뉴로 이동 ->')
    const navigate = useNavigate()
    const goToWorkplaceMenu = () => {
        navigate("/WorkplaceMenu")
    }
    const translatingMachine = (event) => {
        switch(event){
            case "thailand":
                setText(country.Thailand.text)
                setGoToMenu(country.Thailand.menuText)
                break;
            case "vietnam":
                setText(country.Vietnam.text)
                setGoToMenu(country.Vietnam.menuText)
                break;
            case "philippines":
                setText(country.Philippines.text)
                setGoToMenu(country.Philippines.menuText)
                break;
            default:
                setText('직장을 소개하는 문장')
                setGoToMenu('메뉴로 이동 ->')
                break;
        }
    }
  return (
    <div className={styles.workplace} style={{backgroundImage:"url(/office.png)"}}>
        <div className={styles.translation}>
            <img onClick={() => translatingMachine("Korea")} src="https://img.freepik.com/premium-vector/south-korea-flag_786274-375.jpg?semt=ais_hybrid"/>
            <img onClick={() => translatingMachine(country.Thailand.name)} src={country.Thailand.img}/>
            <img onClick={() => translatingMachine(country.Vietnam.name)} src={country.Vietnam.img}/>
            <img onClick={() => translatingMachine(country.Philippines.name)} src={country.Philippines.img}/>
        </div>
        <div className={styles.textBox}>
            <p>{text}</p>
            <div className={styles.menu} onClick={goToWorkplaceMenu}>{goToMenu}</div>
        </div>
    </div>
  )
}

export default Workplace
