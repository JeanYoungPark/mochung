import React from "react";

export default function MCardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div>mCard layout {children}</div>;
}
