import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function AboutMe() {
  return (
    <Layout>

    <Head>
        <title>About me</title>
    </Head>

    
        <h3 className={styles.title} >About me</h3>
        <p>Lucia Albornoz</p>
        <p>A teeny tiny baby Junior Developer.</p>
        <h2 className={styles.card}>
            <Link href="/">
            <a>Back to home</a>
            </Link>
        </h2>
        
    </Layout>
  )
}