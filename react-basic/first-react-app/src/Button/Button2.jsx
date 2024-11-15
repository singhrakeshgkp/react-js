// apply module css, here className will be generated automatically
import styles from './Btn.module.css'

function Button2(){
    return (
        <button className={styles.btn}>Click here 2</button>
    );
}

export default Button2