import { Klee_One } from "next/font/google"
import Image from "next/image"

import variables from "@/styles/variables.module.scss"

import styles from "./Layout.module.scss"

const primaryFont = Klee_One({
  weight: ["600"],
  subsets: [],
  variable: "--primaryFont",
})

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className={`${primaryFont.variable} ${styles.layout}`}>
      <div className={styles.hero}>
        <Image
          className={styles.illust}
          src="/images/illust.png"
          alt="yuarasino illust"
          sizes={`${variables.middleQuery} 50vw, 100vw`}
          fill
          priority
        />
        <Image
          className={styles.logo}
          src="/images/logo.png"
          alt="yuarasino logo"
          sizes={`
            ${variables.middleQuery} 25vw,
            50vw
          `}
          width={569}
          height={344}
          priority
        />
      </div>
      <div className={styles.page}>{children}</div>
    </div>
  )
}

export default Layout
