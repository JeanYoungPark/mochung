import "../globals.css";
import { poppins, pretendard } from "../../fonts";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${pretendard.variable} ${poppins.variable} antialiased w-screen min-w-sm text-lg`}>
                <main>{children}</main>
            </body>
        </html>
    );
}
