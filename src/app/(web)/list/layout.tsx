import React from "react";

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='container'>
            <div className='py-10'>{children}</div>
        </div>
    );
}
