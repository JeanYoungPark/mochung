import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { poppins, pretendard } from "../fonts";

export const metadata: Metadata = {
    title: {
        template: "%s | 모창",
        default: "모청",
    },
    description: "모청 사이트 설명",
    viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${pretendard.variable} ${poppins.variable} antialiased w-full text-base`}>
                <header>
                    <Header />
                </header>
                <main>{children}</main>
                <footer>
                    <Footer />
                </footer>
            </body>
        </html>
    );
}
