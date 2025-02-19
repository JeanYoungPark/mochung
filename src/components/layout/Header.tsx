import Link from "next/link";
import React from "react";
import styles from "@/components/layout/Header.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                {/*auth*/}
                <div className={styles.authWrapper}>
                    <h1>logo</h1>
                    <ul className={styles.authList}>
                        <li>장바구니</li>
                        <li>마이페이지</li>
                        <li>회원가입</li>
                        <li>로그인</li>
                    </ul>
                </div>
                {/* 메뉴 */}
                <div className={styles.menuWrapper}>
                    <ul className={styles.mainMenu}>
                        <li>
                            <Link href='/list/mCard/wedding'>청첩장</Link>
                        </li>
                        <li>
                            <Link href='/list/mCard/thanks'>감사장</Link>
                        </li>
                    </ul>
                    <ul className={styles.etcMenu}>
                        <li>후기</li>
                        <li>이벤트</li>
                        <li>고객센터</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
