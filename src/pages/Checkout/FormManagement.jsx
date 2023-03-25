import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

import styles from './styles.module.scss'
import CreditCardModal from './CreditCardModal'
import { onCheckOut } from '../../feature/cartItem/cartItemSlice'

function FormManagement({ cartData }) {
  const dispatch = useDispatch()
  const [cardModalOn, setCartModalOn] = useState(false)

  const phoneRegex =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  return (
    <div>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          phone: '',
          note: '',
          delivery: 'now',
          payment: 'cash',
          cardHolderName: '',
          cardNumber: '',
          expiryMonth: '',
          expiriYear: '',
          cvc: '',
        }}
        validationSchema={Yup.object({
          fullName: Yup.string().required('Please input your Name'),
          email: Yup.string().email('Invalid email'),
          phone: Yup.string()
            .required('Please input your Phone')
            .matches(phoneRegex, 'Please input valid Phone Number'),
          cardHolderName: Yup.string().required(
            'Please input your Name on Card'
          ),
          cardNumber: Yup.string()
            .required('Please input your Card Number')
            .max(16),
          cvc: Yup.string().required('Please input your CVC').max(3),
        })}
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2))
          dispatch(onCheckOut(cartData))
          resetForm()
        }}
      >
        <Form>
          <div className={styles.custommerAndOrder}>
            <div className={styles.customerInfo}>
              <h3>Customer information</h3>
              <div className={styles.fieldItem}>
                <label htmlFor="fullName">Your Name *</label>
                <Field
                  name="fullName"
                  type="text"
                  placeholder="Enter your Name"
                />
                <ErrorMessage name="fullName" />
              </div>
              <div className={styles.fieldItem}>
                <label htmlFor="email">Your Email</label>
                <Field
                  name="email"
                  type="text"
                  placeholder="Enter your Email"
                />
                <ErrorMessage name="email" />
                <span>Check your order at Spam or Inbox</span>
              </div>
              <div className={styles.fieldItem}>
                <label htmlFor="phone">Your Phone Number *</label>
                <Field
                  name="phone"
                  type="number"
                  placeholder="Enter your Phone"
                />
                <ErrorMessage name="phone" />
              </div>
            </div>
            <div className={styles.orderInfo}>
              <h3>Order Information</h3>
              <div className={styles.fieldItem}>
                <label htmlFor="note">Note</label>
                <Field
                  name="note"
                  type="text"
                  placeholder="Enter your note for this order"
                />
                <div
                  className={styles.deliveryOption}
                  role="group"
                  aria-labelledby="my-radio-group"
                >
                  <div className={styles.deliveryOption}>
                    <label>
                      <Field type="radio" name="delivery" value="now" />
                      Delivery now
                    </label>
                  </div>
                  <hr
                    style={{
                      width: '100%',
                      backgroundColor: '#959697',
                      height: 1,
                    }}
                  />
                  <div className={styles.deliveryOption}>
                    <label>
                      <Field type="radio" name="delivery" value="later" />
                      Delivery later
                    </label>
                  </div>
                  <hr
                    style={{
                      width: '100%',
                      backgroundColor: '#959697',
                      height: 1,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.paymentMethod}>
            <h3>Payment Method</h3>
            <div className={styles.fieldItem}>
              <div
                className={styles.deliveryOption}
                role="group"
                aria-labelledby="my-radio-group"
              >
                <div className={styles.paymentMethodOption}>
                  <label>
                    <Field
                      onClick={() => {
                        setCartModalOn(true)
                      }}
                      type="radio"
                      name="payment"
                      value="card"
                    />
                    💳 Credit / Debit Card
                  </label>
                </div>
                <hr
                  style={{
                    width: '100%',
                    backgroundColor: '#959697',
                    height: 1,
                  }}
                />
                <div className={styles.paymentMethodOption}>
                  <label>
                    <Field
                      onClick={() => setCartModalOn(false)}
                      type="radio"
                      name="payment"
                      value="cash"
                    />
                    💵 Cash
                  </label>
                </div>
                <hr
                  style={{
                    width: '100%',
                    backgroundColor: '#959697',
                    height: 1,
                  }}
                />
              </div>
            </div>
            {cardModalOn && <CreditCardModal offModal={setCartModalOn} />}
          </div>

          <div className={styles.submitButton}>
            <button type="submit">Complete</button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default FormManagement
