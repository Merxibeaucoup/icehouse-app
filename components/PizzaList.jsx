import React from 'react'
import styles from "../styles/PizzaList.module.css"
import PizzaCard from "./PizzaCard"

const PizzaList = () => {
  return (
    <div className={styles.container}>
       <h1 className={styles.title}> Join Us </h1>
       
        <h1 className={styles.title}> For An ExtraOrdinary Experience </h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
      </div>




        
    </div>
  )
}

export default PizzaList