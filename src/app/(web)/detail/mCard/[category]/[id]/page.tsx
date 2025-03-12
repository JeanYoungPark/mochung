"use client";

import { data, img } from "@/data/mockupData";
import { dataType } from "@/types/dataType";
import formatNumberWithCommas from "@/utils/formatNumber";
import { permanentRedirect } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

type Props = {
    params: Promise<{ category: string; id: number }>;
};

export default function CategoryDetailPage({ params }: Props) {
    const { category, id } = use(params);
    const [itemData, setItemData] = useState<NonNullable<dataType>>();

    useEffect(() => {
        const findData = data.find((item) => item.id === Number(id));

        if (findData) setItemData(findData);
        else permanentRedirect(`/list/mCard/${category}`);

        console.log(`/images/detail/mCard/${category}/${img[findData.qr - 1].img}`);
    }, [id]);

    return (
        <div>
            {itemData && (
                <>
                    <div className='lg:flex mb-14'>
                        <div className={styles.leftWrapper}>
                            <div className={styles.innerWrapper}>
                                <iframe src={`/iframes/mCard/${category}/${itemData.previewName}`} className='w-full h-full'></iframe>
                            </div>
                        </div>
                        <div className={styles.rightWrapper}>
                            <div className={styles.title}>{itemData.title}</div>
                            <ul className={styles.infoWrapper}>
                                <li className='flex'>
                                    <p className={styles.infoTitle}>소비자가</p>
                                    <p>
                                        <span>{formatNumberWithCommas(itemData.price)}원</span>
                                    </p>
                                </li>
                                <li className='flex'>
                                    <p className={styles.infoTitle}>제작기간</p>
                                    <p>즉시</p>
                                </li>
                                <li className='flex'>
                                    <p className={styles.infoTitle}>배송기간</p>
                                    <p className='text-wrap'>주문 완료되면 문자 메세지로 URL을 보내드립니다.</p>
                                </li>
                                <li className='flex'>
                                    <p className={styles.infoTitle}>미리보기</p>
                                    <p>
                                        <Image
                                            src={`/images/detail/mCard/${category}/${img[itemData.qr - 1].img}`}
                                            alt={img[itemData.thumbnail - 1].alt}
                                            width={200}
                                            height={200}
                                        />
                                    </p>
                                </li>
                            </ul>
                            <button className='w-full p-3 bg-orange-400 text-white font-bold'>주문하기</button>
                        </div>
                    </div>
                    <div>1</div>
                </>
            )}
        </div>
    );
}
