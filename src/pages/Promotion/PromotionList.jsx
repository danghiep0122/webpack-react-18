import { useEffect, useState } from 'react'

import fetch from '../../apiServices/fetchService'
import styles from './styles.module.scss'
import PromotionItem from './PromotionItem'

function PromotionList() {
  const [promnotionData, setPromotionData] = useState([])

  useEffect(() => {
    fetch('promotionData').then((dataFetched) => {
      setPromotionData(dataFetched)
    })
  }, [])
  return (
    <section className={styles.promotionListWrapper}>
      {promnotionData.map(({ id, title, description, imgUrl, button }) => (
        <div key={id}>
          <PromotionItem
            title={title}
            contentList={description}
            imgUrl={imgUrl}
            buttonList={button}
          />
        </div>
      ))}
    </section>
  )
}

export default PromotionList
