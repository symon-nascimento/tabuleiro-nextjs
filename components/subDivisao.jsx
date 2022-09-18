import styles from '../styles/SubDivisao.module.css'

const SubDivisao = (props) => {
    return (
        <div
        style={{backgroundColor: props.preta ? "#000" : "#fff" }}
        className={styles.subdivisao}>

        </div>       
    )
}

export default SubDivisao