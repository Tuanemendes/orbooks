import React from 'react'
import styles from './style.module.css'

const Field = (props) => {
  return (
    <div className={styles.container}>
        <label for="">{props.label}</label>
        <input placeholder={props.placeholder} type="text" name="name" id="name-input"/>
    </div>
  )
}

export default Field
