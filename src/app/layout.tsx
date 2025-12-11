import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Collings Property - Find Your Dream Home",
    description: "Premium property search platform powered by AI",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={inter.className}
                suppressHydrationWarning
                style={{
                    background: '#ffffff',
                    minHeight: '100vh',
                    margin: 0,
                    padding: 0
                }}
            >
                {children}
            </body>
        </html>
    );
}
