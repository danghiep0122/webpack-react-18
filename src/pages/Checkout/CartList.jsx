import styles from './styles.module.scss'
import { formatVND } from '../../ultilities/format'

function CartList({ cartData }) {
  return (
    <div className={styles.cartInfo}>
      <ul>
        {cartData.map(
          ({
            idOnCart,
            id,
            qty,
            title,
            priceSelected,
            baseTitle,
            sizeTitle,
            imgUrl,
          }) => (
            <li key={idOnCart || id}>
              <div className={styles.productItem}>
                <p>{qty}</p>
                <p>x</p>
                <div className={styles.itemDesc}>
                  <div className={styles.itemDescUpper}>
                    <h5>{title}</h5>
                    <h5>{formatVND(priceSelected)}</h5>
                  </div>
                  <div className={styles.itemDescLower}>
                    <div>
                      <p>{baseTitle}</p>
                      <p>{sizeTitle}</p>
                    </div>
                    <div className={styles.productImg}>
                      <img src={imgUrl} alt={title} />
                    </div>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  width: '100%',
                  backgroundColor: '#959697',
                  height: 1,
                }}
              />
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default CartList
