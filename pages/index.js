import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
     
     
      <Head>
        <title>Ice House Restaurant</title>
        <meta name="description" content="At Kingsbury club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
   <Featured/>
   <PizzaList/>
    </div>
  )
}
