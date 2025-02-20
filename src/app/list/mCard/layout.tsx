import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "모바일청첩장",
        description: "모바일 청첩장을 제작하세요!",
    };
}

export default function MCardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className='grid grid-cols-4 gap-3'>{children}</div>;
}
