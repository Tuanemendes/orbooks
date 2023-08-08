import styles from './style.module.css'

const Field = (props) => {

  // let valueField = 'Tuane'


  const fillingField = (event) => {

   props.changedField(event.target.value)

  }

  return (
    <div className={styles.container}>
        <label>{props.label}</label>
        <input value={props.valueField} onChange={fillingField} required={props.must} placeholder={props.placeholder} type="text" name="name" id="name-input"/>
    </div>
  )
}

export default Field
