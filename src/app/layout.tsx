// "use client";

import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Header } from "@/widgets/Header/Header";
import { Footer } from "@/widgets/Footer/Footer";
import Script from "next/script";
import YandexMetrika from "@/features/YandexMetrika/YandexMetrika";
import { Popups } from "@/widgets/Popups/Popups";

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
                <Script id="metrika-counter" strategy="afterInteractive">
                    {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
              ym(95786496, "init", {
                    defer: true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });`}
                </Script>
                <YandexMetrika />
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
