// "use client";

import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Header } from "@/widgets/Header/Header";
import { Footer } from "@/widgets/Footer/Footer";
import { NavPopup } from "@/widgets/NavPopup/NavPopup";
import { NewsPopup } from "@/widgets/NewsPopup/NewsPopup";

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
                    <NewsPopup />
                </Providers>
            </body>
        </html>
    );
}
