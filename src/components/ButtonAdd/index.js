import React from 'react'
import styles from './style.module.css'

const ButtonAdd = (props) => {
  return (
    <div className={styles.container}>
      <button >{props.children}</button>
    </div>
  )
}

export default ButtonAdd

