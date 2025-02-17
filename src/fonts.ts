import localFont from "next/font/local";
import { Poppins } from "next/font/google";

export const pretendard = localFont({
    src: [
        {
            path: "../public/fonts/Pretendard-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/Pretendard-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-pretendard",
});

export const poppins = Poppins({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});
