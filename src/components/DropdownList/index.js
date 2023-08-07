import React from 'react'
import styles from './style.module.css'

const DropdownList = (props) => {
  return (
    <div className={styles.container}>
       <label>{props.label}</label>
       <select>
            {props.itens.map(item => <option key={item}>{item}</option>)}
       </select>
    </div>
  )
}

export default DropdownList
