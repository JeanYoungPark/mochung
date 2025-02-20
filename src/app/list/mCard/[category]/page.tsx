"use client";

import { formatNumber } from "@/app/utils/utils";
import Image from "next/image";
import React, { use, useState } from "react";

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
                    <div
                        key={i}
                        className='flex items-center justify-center overflow-hidden bg-black h-80 rounded-lg transition duration-500 hover:bg-slate-300'>
                        {!imageLoadError[i] && (
                            <Image
                                src={`/images/list/mCard/${category}/thumbnail_${formatNumber(i + 1)}.png`}
                                alt='thumbnail'
                                width={300}
                                height={300}
                                className='w-full h-full object-contain'
                                onError={() => setImageLoadError((prev) => ({ ...prev, [i]: true }))}
                            />
                        )}
                    </div>
                );
            })}
        </>
    );
}
