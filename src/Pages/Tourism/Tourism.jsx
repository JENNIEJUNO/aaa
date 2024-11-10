import React, { useState } from 'react'
import styles from './Tourism.module.css'
import { useNavigate } from 'react-router-dom'

const Tourism = () => {
    const [text, setText] = useState('관관을 소개하는 문장')
    const [goToMenu, setGoToMenu] = useState('메뉴로 이동 ->')
    const country = {
        Thailand:{
            name:"thailand",
            img:"https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=13270987&filePath=L2Rpc2sxL25ld2RhdGEvMjAyMC8yMS9DTFMxMDAwNC8xMzI3MDk4N19XUlRfMjFfQ0xTMTAwMDRfMjAyMDEyMThfMQ==&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004",
            text:"ประโยคแนะนำบ้าน",
            menuText:"ไปที่เมนู ->",
        },
        Vietnam:{
            name:"vietnam",
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/255px-Flag_of_Vietnam.svg.png",
            text:"Câu giới thiệu ngôi nhà",
            menuText:"Đi tới thực đơn ->",
        },
        Philippines:{
            name:"philippines",
            img:"https://i.namu.wiki/i/iHFjVQ4YlFtJtSJTmjiwH-8U7FNF75Ee_TUSfKDKxc-0mAkEIvBucY6WpxYZ2BQRhZwQOZZ1X2tUviGgVfuv0Q.webp",
            text:"Pangungusap na nagpapakilala sa bahay",
            menuText:"Pumunta sa menu ->",
        }
    }
    const navigate = useNavigate()
    const goToHomeMenu = () => {
        navigate("/TourismMenu")
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
                setText('관광을 소개하는 문장')
                setGoToMenu('메뉴로 이동 ->')
                break;
        }
    }
  return (
    <div className={styles.tourism}>
        <div className={styles.translation}>
            <img onClick={() => translatingMachine("Korea")} src="https://img.freepik.com/premium-vector/south-korea-flag_786274-375.jpg?semt=ais_hybrid"/>
            <img onClick={() => translatingMachine(country.Thailand.name)} src={country.Thailand.img}/>
            <img onClick={() => translatingMachine(country.Vietnam.name)} src={country.Vietnam.img}/>
            <img onClick={() => translatingMachine(country.Philippines.name)} src={country.Philippines.img}/>
        </div>
        <p>{text}</p>
        <div className={styles.menu} onClick={goToHomeMenu}>{goToMenu}</div>
    </div>
  )
}

export default Tourism
