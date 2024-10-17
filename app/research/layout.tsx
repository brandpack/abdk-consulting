import '@/styles/index.scss'
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Crypto Research",
    description: 'ABDK Consulting offers crypto research and development services, including DeFi protocols, cryptography security, and security management, to enhance blockchain technologies.',
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
