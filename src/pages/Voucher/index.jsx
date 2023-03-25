import React from "react";
import CommonLayout from "../../layouts/commonLayout/CommonLayout";
import styles from "./styles.module.scss";
import images from "../../assets/img/image";
import { useState } from "react";
import { XtimesIcon } from "../../icons/Icons";

function Voucher() {
    const [voucherInput, setvoucherInput] = useState("");
    const [voucherMessage, setVoucherMessage] = useState("");

    return (
        <CommonLayout>
            <div className={styles.backgroundImage}>
                <img alt="background" src={images.blackZone} />
                <div className={styles.boxBorder}>
                    <div className={styles.contentWrapper}>
                        <h4>
                            Do you have an E-voucher code at Domino's Pizza?
                        </h4>
                        <h4>
                            Enter your E-voucher code in the box below to
                            receive the offer
                        </h4>
                        <div className={styles.inputWrapper}>
                            <div className={styles.inputWithDeleteBtn}>
                                <input
                                    value={voucherInput}
                                    onChange={(e) => {
                                        setvoucherInput(e.target.value);
                                    }}
                                    type="text"
                                    placeholder="Enter your Voucher here"
                                />
                                <div
                                    onClick={() => {
                                        setvoucherInput("");
                                        setVoucherMessage("");
                                    }}
                                    className={styles.deleteButton}
                                >
                                    <XtimesIcon width="1rem" height="1rem" />
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    if (voucherInput) {
                                        setVoucherMessage(
                                            '"Voucher code does not exist"'
                                        );
                                    } else setVoucherMessage("");
                                }}
                            >
                                Apply
                            </button>
                        </div>
                        {voucherMessage && (
                            <span className={styles.voucherMessage}>
                                {voucherMessage}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </CommonLayout>
    );
}

export default Voucher;
