import React from "react";
import { Link } from "react-router-dom";
import images from "../../../assets/img/image";
import {
    DominoIconNoText,
    FacebookIcon,
    InstagramIcon,
    PhoneIcon,
} from "../../../icons/Icons";
import styles from "./Footer.module.scss";

function Footer() {
    return (
        <footer>
            <div className={styles.footerMobile}>
                <div className={styles.footerSocial}>
                    <div className={styles.footerConnect}>
                        <p>Kết nối Domino's Pizza Việt Nam:</p>
                        <div className={styles.footerConnectIcons}>
                            <a href="https://www.facebook.com/">
                                <FacebookIcon
                                    className={styles.connectIcon}
                                    height="24"
                                    width="24"
                                />
                            </a>
                            <a href="https://www.instagram.com/">
                                <InstagramIcon
                                    className={styles.connectIcon}
                                    height="24"
                                    width="24"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.footerMain}>
                    <Link to="/">
                        <DominoIconNoText
                            className={styles.dominoIconBig}
                            width="46"
                            height="46"
                        />
                    </Link>

                    <div className={styles.footerHotline}>
                        <div className={styles.hotlineWrapper}>
                            <PhoneIcon width="14" />
                            <p className={styles.hotlineText}>
                                Hotline Đặt Hàng
                            </p>
                        </div>
                        <div className={styles.hotlineNumber}>
                            <a href="tel:19006099">1900 6099</a>
                        </div>
                    </div>
                    <div className={styles.takeTheSpace}></div>
                    <div className={styles.groupNavForPC}>
                        <ul>
                            <Link to="/">
                                <li>Cam kết</li>
                            </Link>
                            <Link to="/">
                                <li>Lịch sử</li>
                            </Link>
                            <Link to="/">
                                <li>Tuyển dụng</li>
                            </Link>
                        </ul>
                        <ul>
                            <Link to="/menu">
                                <li>Thực đơn</li>
                            </Link>
                            <Link to="/voucher">
                                <li>Mã e-voucher</li>
                            </Link>
                            <Link to="/promotion">
                                <li>Khuyến mãi</li>
                            </Link>
                        </ul>
                        <ul>
                            <Link to="/tracking">
                                <li>Theo dõi đơn hàng</li>
                            </Link>
                            <Link to="/">
                                <li>Danh sách cửa hàng</li>
                            </Link>
                        </ul>
                    </div>

                    <div className={styles.paymentMethod}>
                        <div className={styles.credentials}>
                            <img
                                className={styles.credentialsImg}
                                alt="credentials"
                                src={images.credential}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.footerEnd}>
                    <div className={styles.footerEndText}>
                        <p>© 2020 Domino's Pizza Vietnam | </p>
                        <p className={styles.privacy}>Privacy polity </p>
                    </div>

                    <div className={styles.language}>
                        <img
                            className={styles.languageFlag}
                            alt="VietNam"
                            src={images.flagVn}
                        />
                        <img
                            className={styles.languageFlag}
                            alt="English"
                            src={images.flagEn}
                        />
                    </div>
                    <div className={styles.languageChange}>
                        Switch to English
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
