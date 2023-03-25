import React from "react";
import CommonLayout from "../../layouts/commonLayout/CommonLayout";
import PromotionList from "./PromotionList";
import styles from "./styles.module.scss";

function Promotion() {
    return (
        <CommonLayout>
            <div className={styles.promotionBody}>
                <span className={styles.promotionMobile}>Khuyến mãi</span>
                <PromotionList />
            </div>
        </CommonLayout>
    );
}

export default Promotion;
