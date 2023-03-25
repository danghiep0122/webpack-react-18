import { useSelector } from 'react-redux'
import CommonLayout from '../../layouts/commonLayout/CommonLayout'
import styles from './styles.module.scss'
import CartList from './CartList'
import FormManagement from './FormManagement'

function Checkout() {
  const deliveryData = useSelector((value) => value.DELIVERY.value)
  const pickUpData = useSelector((value) => value.CARRY_OUT.value)
  const cartData = useSelector((value) => value.CART_ITEM.value)
  return (
    <CommonLayout>
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.addressHomeOrStore}>
            <div className={styles.yourSelection}>
              <h5>Your select: </h5>
              <p>{deliveryData ? 'Delivery' : 'Pickup At Store'}</p>
            </div>
            <div className={styles.displayAddress}>
              {deliveryData || pickUpData}
            </div>
          </div>
          <FormManagement cartData={cartData} />
        </div>
        <CartList cartData={cartData} />
      </div>
    </CommonLayout>
  )
}

export default Checkout
