import '@/styles/index.scss'
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Economic and Security Evaluation on Blockchain",
    description: 'ABDK analyzes your technology from economic, performance, and security perspectives to ensure its success. We provide blockchain security audits, including smart contract audits and crypto-economic security evaluations, for new blockchain projects and DeFi protocols.',
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
