import React from "react";

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div>list layout {children}</div>;
}
