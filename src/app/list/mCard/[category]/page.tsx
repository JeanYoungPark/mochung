"use client";

import { ZoomIn } from "lucide-react";
import Image from "next/image";
import React, { use, useState } from "react";
import styles from "../layout.module.css";

type Props = {
    params: Promise<{ category: string }>;
};

export default function CategoryPage({ params }: Props) {
    const { category } = use(params);
    const [imageLoadError, setImageLoadError] = useState<boolean[]>([]);

    return (
        <>
            {Array.from({ length: 15 }, (_, i) => {
                return (
                    <div key={i} className={`group ${styles.wrapper}`}>
                        <div className={styles.cardWrapper}>
                            {!imageLoadError[i] && (
                                <Image
                                    // src={`/images/list/mCard/${category}/thumbnail_${formatNumber(i + 1)}.png`}
                                    src={`/images/list/mCard/${category}/thumbnail_01.png`}
                                    alt='thumbnail'
                                    width={300}
                                    height={300}
                                    className={styles.cardImage}
                                    onError={() => setImageLoadError((prev) => ({ ...prev, [i]: true }))}
                                />
                            )}
                        </div>
                        <div className={styles.infoWrapper}>
                            <p>
                                <strong className='text-xl'>sincere moment</strong>
                                {/* <span className='relative pl-3 ml-3 text-gray-400 text-base before:block before:w-px before:h-3 before:bg-gray-400 before:absolute before:left-0 before:top-[3px]'>
                                    MC1606
                                </span> */}
                            </p>
                            <p className='text-base'>50,000원</p>
                        </div>
                        <ZoomIn className={`${styles.modalIcon} group-hover:opacity-100 group-hover:visible`} />
                    </div>
                );
            })}
        </>
    );
}
