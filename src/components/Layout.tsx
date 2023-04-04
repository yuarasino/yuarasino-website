import { Klee_One } from "next/font/google"

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
    <div className={`${primaryFont.variable} ${styles.layout}`}>{children}</div>
  )
}

export default Layout
