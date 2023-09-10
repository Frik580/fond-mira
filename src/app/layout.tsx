import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Header } from "@/entities/Header/Header";
import { Footer } from "@/entities/Footer/Footer";
import NavPopup from "@/entities/NavPopup/NavPopup";
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
                <Providers>
                    <Header />
                    {children}
                    <Footer />
                    <NavPopup />
                </Providers>
            </body>
        </html>
    );
}
