import React from "react";
import styles from "@/components/layout/Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className='container'>
                <div className={styles.etcInfoWrapper}>
                    <h5 className={styles.logo}>로고</h5>
                    <ul className={styles.etcList}>
                        <li>서비스 소개</li>
                        <li>고객 센터</li>
                        <li>이용약관</li>
                        <li>개인정보처리방침</li>
                    </ul>
                </div>
            </div>
            <div className={styles.companyInfoWrapper}>
                <div className='container'>
                    <div className={styles.companyInfoList}>
                        <p>(주)바른컴퍼니 대표이사: 박정식</p>
                        <p>본사: 경기도 파주시 회동길 219 | 서울사옥: 서울 서초구 사임당로 142-4</p>
                        <p>문의전화: 1644-0708 | 팩스: 02-2275-3108</p>
                        <p>개인정보관리책임자: 이근한</p>
                        <p>통신판매업신고번호: 2007-00940 | 사업자등록번호: 221-81-03108</p>
                        <p>Copyright &copy; barunsoncard all rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
