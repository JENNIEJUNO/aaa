import React, { useState } from 'react'
import styles from './Home.module.css'
import { useNavigate } from 'react-router-dom'
import { country } from './Object'

const Home = () => {
    const [text, setText] = useState('집을 소개하는 문장')
    const [goToMenu, setGoToMenu] = useState('메뉴로 이동 ->')
    const navigate = useNavigate()
    const goToHomeMenu = () => {
        navigate("/HomeMenu")
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
                setText('집을 소개하는 문장')
                setGoToMenu('메뉴로 이동 ->')
                break;
        }
    }
  return (
    <div className={styles.home} style={{backgroundImage:"url(/room.png)"}}>
        <div className={styles.translation}>
            <img onClick={() => translatingMachine("Korea")} src="https://img.freepik.com/premium-vector/south-korea-flag_786274-375.jpg?semt=ais_hybrid"/>
            <img onClick={() => translatingMachine(country.Thailand.name)} src={country.Thailand.img}/>
            <img onClick={() => translatingMachine(country.Vietnam.name)} src={country.Vietnam.img}/>
            <img onClick={() => translatingMachine(country.Philippines.name)} src={country.Philippines.img}/>
        </div>
        <div className={styles.textBox}>
            <p>{text}</p>
            <div className={styles.menu} onClick={goToHomeMenu}>{goToMenu}</div>
        </div>
    </div>
  )
}

export default Home
