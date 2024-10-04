// "use client";

import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Header } from "@/widgets/Header/Header";
import { Footer } from "@/widgets/Footer/Footer";
import { Popups } from "@/widgets/Popups/Popups";
import { Suspense } from "react";

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
                    <Popups />
                </Providers>
            </body>
        </html>
    );
}
