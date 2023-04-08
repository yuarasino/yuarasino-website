import Image from "next/image"
import { FaRegPlayCircle } from "react-icons/fa"

import live from "@/contents/live/live.json"

import styles from "./live.module.scss"

const Live = () => {
  return (
    <div id="live" className={styles.live}>
      <h2 className={styles.title}>
        <span className={styles.en}>LIVE</span>
        <span className={styles.ja}>/おすすめ配信</span>
      </h2>
      <div className={styles.content}>
        {live.map(({ text, date, image, url }) => (
          <a className={styles.item} href={url} target="_blank" key={text}>
            <div className={styles.overlay}>
              <FaRegPlayCircle className={styles.play} />
            </div>
            <div className={styles.thumb}>
              <Image
                className={styles.image}
                src={image}
                alt={text}
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
          </a>
        ))}
      </div>
    </div>
  )
}

export default Live
