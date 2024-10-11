import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const bodoniAntiqua = localFont({
    src: "./fonts/OPTIBodoni-Antiqua.otf",
    variable: "--font-bodoni",
    weight: "500",
});

export const metadata: Metadata = {
    title: "Bruna Brum",
    description: "Cantora",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} ${bodoniAntiqua.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
