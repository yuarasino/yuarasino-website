import Image from "next/image"

import news from "@/contents/news/news.json"
import variables from "@/styles/variables.module.scss"

import styles from "./news.module.scss"

const News = () => {
  return (
    <div id="news" className={styles.news}>
      <h2 className={styles.title}>
        <span className={styles.en}>NEWS</span>
        <span className={styles.ja}>/ニュース</span>
      </h2>
      <ul className={styles.content}>
        {news.map(({ text, date, image }) => (
          <li className={styles.item} key={text}>
            <div className={styles.thumb}>
              <Image
                className={styles.image}
                src={image}
                alt={text.replace(/<wbr \/>/, "")}
                width={256}
                height={144}
              />
            </div>
            <div className={styles.desc}>
              <div className={styles.date}>{date}</div>
              <div
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default News
