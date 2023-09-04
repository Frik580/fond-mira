import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Фонд Мира Пермский край",
    description: "Сайт Фонд Мира Пермский край",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <body>
                <Providers>{children}</Providers>
            </body>
            {/* <body className={inter.className}>{children}</body> */}
        </html>
    );
}
