import styles from "./Button.module.css"

function Button(){
    return <button classNameName={`${styles.className1} ${styles.className2}`}>click me</button>
}
export default Button;