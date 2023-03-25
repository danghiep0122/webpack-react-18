import { useState } from 'react'

import CommonLayout from '../../layouts/commonLayout/CommonLayout'
import images from '../../assets/img/image'
import styles from './styles.module.scss'
import { XtimesIcon, SearchIcon } from '../../icons/Icons'

function Voucher() {
  const [inputNumber, setInputNumber] = useState('')
  const [errormessage, setErrorMessage] = useState('')
  return (
    <CommonLayout>
      <div className={styles.trackingPage}>
        <div className={styles.contentContainer}>
          <div className={styles.trackingImgWrapper}>
            <img src={images.tracking} alt="stock-tracking" />
          </div>
          <div className={styles.trackingDetail}>
            <div className={styles.trackingDetailWrapper}>
              <h5>Tracking your Order - Domino's Viet Nam</h5>
              <div className={styles.inputAndButton}>
                <input
                  value={inputNumber}
                  onChange={(e) => {
                    setInputNumber(e.target.value)
                    setErrorMessage('')
                  }}
                  onBlur={() => {
                    if (inputNumber.trim() === '') {
                      setErrorMessage('Please input your Phone Number 👆')
                    }
                  }}
                  type="number"
                  placeholder="Enter your Phone Number"
                />
                <div
                  className={styles.deleteBtn}
                  onClick={() => setInputNumber('')}
                >
                  <XtimesIcon height="1.4rem" width="1.4rem" />
                </div>
                <button
                  onClick={() => {
                    if (inputNumber) {
                      setInputNumber('')
                      alert(
                        `Finding Order with this Phone Number: ${inputNumber}`
                      )
                    }
                  }}
                >
                  <SearchIcon width="1.6rem" height=".9rem" />
                </button>
              </div>
              <span>{errormessage}</span>
            </div>
          </div>
        </div>
      </div>
    </CommonLayout>
  )
}

export default Voucher
