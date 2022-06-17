import React from 'react'
import styles from "../styles/Navbar.module.css"
import {AiOutlinePhone} from 'react-icons/Ai'
import {BsCart2} from 'react-icons/Bs'
import Image from 'next/image'





const Navbar = () => {
  return (
    <div className = {styles.container}>
         <div className = {styles.item}>
             <div className = {styles.callButton}>
              <AiOutlinePhone size={40}/>
             </div>




             <div className = {styles.texts}>
                  <div className = {styles.text}>Call to Order !</div>
                  <div className = {styles.text}> 012 345 6797</div>
             </div>
             </div>

             <div  className = {styles.logo}>

<Image src="/img/ihr.png" alt="" width="120px" height="80px" />

</div>

             <div className = {styles.item}>
              <ul className ={styles.list}>
                    <li className={styles.listItem}>HomePage</li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>

              </ul>
             </div>

             





             <div className = {styles.item}>
              <div className = {styles.cart}>
                <BsCart2 size={30}/>
              </div>

              <div className = {styles.counter}>
                2
              </div>


             </div>
             



          </div>
         
           
         

  )
}

export default Navbar