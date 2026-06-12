import { useState } from "react"
import styles from "./Contador.module.css"

function Contador() {

    const [numero, setNumero] = useState(0)

    const aumentarnumero = () => {
        setNumero(numero + 1)
    }

    const subtrairnumero = () => {
        setNumero(numero - 1)
    }

    const reiniciarnumero = () => {
        setNumero(0)
    }

    const sortearnumero = () => {
        Math.floor(Math.random() * 100);
    }

    return (
        <div className={styles.contador}>
            <h1>Esse é o contador!</h1>
            <span className={styles.span}>{numero}</span>
            <div className={styles.botoesContainer}>
                <button className={styles.button} onClick={aumentarnumero}>+</button>
                <button className={styles.button} onClick={subtrairnumero}>-</button>
                <button className={styles.button} onClick={reiniciarnumero}>Reiniciar</button>
                <button className={styles.button} onClick={sortearnumero}>Sortear</button>
            </div>
        </div>
    )
}

export default Contador