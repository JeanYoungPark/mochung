"use client";

import Link from "next/link";
import React from "react";
import styles from "@/components/layout/Header.module.css";
import { AlignJustify, CircleUserRound, ShoppingBasket } from "lucide-react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function Header() {
    const [sliderRef] = useKeenSlider<HTMLElement>({
        breakpoints: {
            "(min-width: 1280px)": {
                disabled: true,
            },
        },
        loop: false,
        mode: "snap",
        rtl: false,
        slides: { perView: "auto" },
    });

    return (
        <div className={styles.header}>
            <div className='container'>
                {/*auth*/}
                <div className={styles.authWrapper}>
                    <h1 className={styles.logo}>logo</h1>
                    <ul className={styles.authList}>
                        <li>장바구니</li>
                        <li>마이페이지</li>
                        <li>회원가입</li>
                        <li>로그인</li>
                    </ul>
                    <div className={styles.iconWrapper}>
                        <AlignJustify className={styles.menuIcon} />
                        <div className='flex gap-3'>
                            <ShoppingBasket className={styles.menuIcon} />
                            <CircleUserRound className={styles.menuIcon} />
                        </div>
                    </div>
                </div>
                {/* 메뉴 */}
                <div className={styles.menuWrapper}>
                    <ul ref={sliderRef} className={`keen-slider ${styles.mainMenu}`}>
                        <li className={`keen-slider__slide ${styles.mainMenuItem}`}>
                            <Link href='/list/mCard/wedding'>청첩장</Link>
                        </li>
                        <li className={`keen-slider__slide ${styles.mainMenuItem}`}>
                            <Link href='/list/mCard/thanks'>감사장</Link>
                        </li>
                        <li className={`keen-slider__slide ${styles.mainMenuItem}`}>
                            <Link href='/list/mCard/thanks'>감사장</Link>
                        </li>
                        <li className={`keen-slider__slide ${styles.mainMenuItem}`}>
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
            {/* 드로어 */}
            <div className={styles.drawer}></div>
        </div>
    );
}
