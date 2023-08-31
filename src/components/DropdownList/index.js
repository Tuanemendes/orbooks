import React from 'react'
import styles from './style.module.css'

const DropdownList = ({label,items, valueField ,must=false, changedField}) => {
  return (
    <div className={styles.container}>
       <label>{label}</label>
       <select onChange={event => changedField(event.target.value)} required={must} value={valueField}>
          <option value="">Selecione</option>
            {items.map(item => <option key={item}>{item}</option>)}
       </select>
    </div>
  )
}

export default DropdownList
