import SubDivisao from './subDivisao'
import styles from '../styles/linha.module.css'
const Linha = (props) =>{
    return (
<div className={styles.linha}>
   <SubDivisao preta={props.preta}/> 
   <SubDivisao preta={!props.preta}/> 
   <SubDivisao preta={props.preta}/> 
   <SubDivisao preta={!props.preta}/> 
   <SubDivisao preta={props.preta}/> 
   <SubDivisao preta={!props.preta}/> 
   <SubDivisao preta={props.preta}/> 
   <SubDivisao preta={!props.preta}/> 
</div>
    )
}

export default Linha