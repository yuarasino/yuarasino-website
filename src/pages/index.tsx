import Head from "next/head"

import Live from "@/components/Live"
import News from "@/components/News"

import styles from "./Home.module.scss"

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Yu Arasino / Virtual Bishojo Programmer</title>
        <meta
          name="description"
          content="バーチャル美少女プログラマーの新篠ゆうです！"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>
        <span className={styles.name}>Yu Arasino</span>
        <span className={styles.role}>{"Virtual Bishojo\nProgrammer"}</span>
      </h1>
      <News />
      <Live />
    </main>
  )
}
