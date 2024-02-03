import styles from "./Button.module.css"

function Button(){
    return <button className={`${styles.class1} ${styles.class2}`}>click me</button>
}
export default Button;