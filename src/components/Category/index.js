import React from 'react'
import styles from './style.module.css'

const Category = (props) => {
    const bgSecondaryColor = {backgroundColor: props.secondaryColor}

    const dPrimaryColor = {borderColor: props.primaryColor}

  return (
    <section className={styles.container} style={bgSecondaryColor}>
        <h3 style={dPrimaryColor}>{props.name}</h3>
    </section>
  )
}

export default Category
