import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    DominoIcon,
    CartIcon,
    AccountIcon,
    DominoIconNoText,
    DeliveryIcon,
    PromotionIcon,
    MenuIcon,
} from "../../../icons/Icons";
import styles from "./Header.module.scss";
import images from "../../../assets/img/image";
import LogModal from "../LogModal";
import { onModal } from "../../../feature/modal/Modal";
import React from "react";

function Header() {
    const toggleModal = useSelector((state) => state.IS_MODAL_OPEN.value);
    const dispatch = useDispatch();

    const openLoginModal = () => {
        dispatch(onModal());
    };

    const cartItems = useSelector((state) => state.CART_ITEM.value);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoAndLanguage}>
                <Link to={"/"}>
                    <DominoIcon
                        className={styles.dominoLogo}
                        width="156"
                        height="24"
                    />
                    <DominoIconNoText
                        className={styles.dominoLogoNoText}
                        width="24"
                        height="24"
                    />
                </Link>
                <Link to={"/"}>
                    <DominoIcon
                        className={styles.dominoLogoPc}
                        width="200"
                        height="24"
                    />
                </Link>
            </div>
            {toggleModal && <LogModal />}

            <ul className={styles.navbarMobile}>
                <li>
                    <Link to={"/tracking"}>
                        <DeliveryIcon width="40px" height="24px" />
                    </Link>
                </li>
                <li>
                    <Link to={"/promotion"}>
                        <PromotionIcon width="40px" height="24px" />
                    </Link>
                </li>
                <li>
                    <Link to={"/menu"}>
                        <MenuIcon width="40px" height="24px" />
                    </Link>
                </li>
                <li>
                    <div onClick={openLoginModal}>
                        <AccountIcon width="40px" height="24px" />
                    </div>
                </li>
                <li>
                    <Link to={"/cart"}>
                        <CartIcon width="40px" height="24px" />
                    </Link>
                </li>
            </ul>

            <div className={styles.navbarPC}>
                <ul className={styles.navList}>
                    <li>
                        <Link to={"/voucher"}>Mã E-voucher</Link>
                    </li>
                    <li>
                        <Link to={"/promotion"}>Khuyến mãi</Link>
                    </li>
                    <li>
                        <Link to={"/menu"}>Thực đơn</Link>
                    </li>
                    <li>
                        <Link to={"/tracking"}>Theo dõi đơn hàng</Link>
                    </li>
                </ul>
                <div className={styles.languageSwitch}>
                    <img
                        className={styles.languageFlag}
                        alt="VietNam"
                        src={images.flagVn}
                        onClick={() => alert("developing")}
                    />
                    <img
                        className={styles.languageFlag}
                        alt="English"
                        src={images.flagEn}
                        onClick={() => alert("developing")}
                    />
                </div>
                <div className={styles.navbarButtonPC}>
                    <div className={styles.buttonPC} onClick={openLoginModal}>
                        <AccountIcon width="28px" height="28px" />
                    </div>
                    <div className={styles.buttonPC}>
                        <Link to={"/cart"}>
                            <div className={styles.cartNoti}>
                                {cartItems.length}
                            </div>
                            <CartIcon width="28px" height="28px" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
