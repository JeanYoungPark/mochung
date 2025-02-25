"use client";

import { ZoomIn } from "lucide-react";
import Image from "next/image";
import React, { use, useState } from "react";
import styles from "../layout.module.css";
import { Modal } from "@/components/common/Modal";
import { useModal } from "@/hooks/useModal";
import { categoryData, data, img, typeData } from "@/data/mockupData";
import formatNumberWithCommas from "@/utils/formatNumber";

type Props = {
    params: Promise<{ category: string }>;
};

export default function CategoryPage({ params }: Props) {
    // const { category } = use(params);
    const [imageLoadError, setImageLoadError] = useState<boolean[]>([]);
    const { isOpen, openModal, closeModal } = useModal();
    const [prevUrl, setPrevUrl] = useState<string | null>(null);

    const showModal = ({ url }: { url: string }) => {
        setPrevUrl(url);
        openModal();
    };

    return (
        <>
            {data.map((item, i) => {
                const imgUrl = `/images/list/${typeData[item.type - 1].code}/${categoryData[item.category - 1].title}/${img[item.thumbnail - 1].img}`;
                const prevUrl = `/iframes/${typeData[item.type - 1].code}/${categoryData[item.category - 1].title}/${item.previewName}`;

                return (
                    <div key={i} className={`group ${styles.wrapper}`}>
                        <div className={styles.cardWrapper}>
                            {!imageLoadError[i] && (
                                <Image
                                    // src={`/images/list/mCard/${category}/thumbnail_${formatNumber(i + 1)}.png`}
                                    src={imgUrl}
                                    alt={img[item.thumbnail - 1].alt}
                                    width={300}
                                    height={300}
                                    className={styles.cardImage}
                                    onError={() => setImageLoadError((prev) => ({ ...prev, [i]: true }))}
                                />
                            )}
                        </div>
                        <div className={styles.infoWrapper}>
                            <p>
                                <strong className='text-xl'>{item.title}</strong>
                                {/* <span className='relative pl-3 ml-3 text-gray-400 text-base before:block before:w-px before:h-3 before:bg-gray-400 before:absolute before:left-0 before:top-[3px]'>
                                    MC1606
                                </span> */}
                            </p>
                            <p className='text-base'>{formatNumberWithCommas(item.price)}원</p>
                        </div>
                        <ZoomIn
                            className={`${styles.modalIcon} group-hover:opacity-100 group-hover:visible`}
                            onTouchStart={() =>
                                showModal({
                                    url: prevUrl,
                                })
                            }
                            onClick={() =>
                                showModal({
                                    url: prevUrl,
                                })
                            }
                        />
                    </div>
                );
            })}

            <Modal isOpen={isOpen} closeModal={closeModal} width='w-[600px]' height='h-[800px]' prevUrl={prevUrl} />
        </>
    );
}
