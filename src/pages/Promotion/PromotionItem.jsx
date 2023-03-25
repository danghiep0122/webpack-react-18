import styles from './styles.module.scss'

function PromotionItem({ title, imgUrl, contentList, buttonList }) {
  return (
    <div className={styles.promotionItemWrapper}>
      <div className={styles.promotionImageWrapper}>
        <img src={imgUrl} alt={title} />
      </div>
      <div className={styles.promotionDetailBorder}>
        <div className={styles.promotionDetailWrapper}>
          <div className={styles.promotionTitleImage}>
            <img
              alt="best-choice"
              src="https://dominos.vn/img/bg/banner-best-choice.png"
            />
          </div>
          <div className={styles.promotionDetailTitle}>
            <h2 onClick={() => alert('Developing')}>{title}</h2>
          </div>
          <div className={styles.separateLine} />
          <div className={styles.promotionDetail}>
            <ul>
              {Array.isArray(contentList)
                ? contentList.map((item, index) => <li key={index}> {item}</li>)
                : ''}
            </ul>
            <div>
              {buttonList.map((item, index) => (
                <button
                  onClick={() => alert('developing')}
                  key={index}
                  className={styles.promotionButton}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromotionItem
