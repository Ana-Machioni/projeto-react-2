import { useState } from "react"
import styles from "./Contador.module.css"

function Contador() {

    const [numero, setNumero] = useState(0)
    const [numero2, setNumero2] = useState(0)

    const atualizarNumero = () => {

        setNumero(numero + 1)
    }


    return(
        <div className={styles.contador}>
            <h1>Contador</h1>
            <span className={styles.span}>{numero}</span>
        <div className={styles.buttonContainer}>
            <button className={styles.button}>-</button>
            <button className={styles.button}>+</button>
            <button className={styles.button}>reiniciar</button>
            </div>
        </div>
        
    )
}

export default Contador