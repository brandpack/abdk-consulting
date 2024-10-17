import '@/styles/index.scss'
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        absolute: "ABDK Consulting: About Us"
    },
    description: 'Founded in 2016, ABDK Consulting has completed over 100 blockchain projects, including smart contract audits and cryptography security assessments, for crypto clients. Explore our portfolio to learn more.',
    icons: {
        icon: [
            '/favicon.ico',
        ],
        apple: [
            '/apple-touch-icon.png',
        ],
        shortcut: [
            '/apple-touch-icon.png',
        ]
    }
}

export const viewport = {
    width: 'device-width',
    initialScale: 1,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
            {children}
            </body>
            <GoogleTagManager gtmId="GTM-THFVMFDW" />
            <GoogleAnalytics gaId="AW-16482539669" />
        </html>
    )
}
