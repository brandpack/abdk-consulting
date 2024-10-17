import '@/styles/index.scss'
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Smart Contract Audits and Cryptography",
    description: 'ABDK Consulting provides smart contract audit and cryptography security services for blockchain and crypto projects, with over 100 successful audits completed.',
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
