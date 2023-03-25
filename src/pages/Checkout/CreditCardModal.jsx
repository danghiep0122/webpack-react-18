import { ErrorMessage, Field } from 'formik'
import styles from './styles.module.scss'

function CreditCardModal({ offModal }) {
  const years = []
  for (
    let i = new Date().getFullYear() - 4;
    i <= new Date().getFullYear() + 8;
    i++
  ) {
    years.push(i)
  }
  const months = []
  for (let i = 1; i <= 12; i++) {
    months.push(i)
  }

  const handleOffCardMOdal = () => {
    setTimeout(() => {
      offModal(false)
    }, 200)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.modalBody}>
        <div onClick={handleOffCardMOdal} className={styles.modalBlurOutside} />
        <div className={styles.modal}>
          <div className={styles.fieldItem}>
            <label htmlFor="cardHolderName">Cardholder's Name</label>
            <Field name="cardHolderName" type="text" />
            <ErrorMessage name="cardHolderName" />
          </div>
          <div className={styles.fieldItem}>
            <label htmlFor="cardNumber">Card Number</label>
            <Field name="cardNumber" type="text" />
            <ErrorMessage name="cardNumber" />
          </div>
          <div className={styles.fieldItem}>
            <label htmlFor="expiryDate">Expiry Date (MM/YYYY)</label>
            <div className={styles.cardExpDate}>
              <Field as="select" name="expiryMonth">
                <option value="">- Select one -</option>
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month <= 9 ? `0${month}` : `${month}`}
                  </option>
                ))}
              </Field>
              <span>/</span>
              <Field as="select" name="expiryYear">
                <option value="">- Select one -</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </Field>
            </div>
          </div>
          <div className={styles.fieldItemShort}>
            <label htmlFor="cvc">CVC</label>
            <Field name="cvc" type="text" />
            <ErrorMessage name="cvc" />
          </div>
          <div className={styles.offModalBtn}>
            <button type="button" onClick={handleOffCardMOdal}>
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditCardModal
