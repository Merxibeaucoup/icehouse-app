import Image from 'next/image'
import React from 'react'
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/ihr.png" layout="fill" alt="" />

      
</div>
<div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
           Best in Town
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND US AT</h1>
          <p className={styles.text}>
             2 ice House Road
            <br /> Medfiled, MA.
            <br /> (123) 456-7891
          </p>
         
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>HOURS OF OPERATION</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 3:00pm – 9:30pm
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 3:00pm – 8:30pm
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer