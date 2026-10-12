import logo from '../logo512.png'
import styles from '../style.module.css'

export default function Header() {
    let logor= require('../logo512.png')
    return(
        <div>
            <img src ={logor} alt="" srcset=""
            className={styles.logoImg}/>
            <img src ={logor} alt="" srcset=""
            className={styles.logoImg}/>           
            Welcome to react Basics</div>
    )
}