import '@/styles/index.scss'
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Crypto Consulting | Blockchain Consulting",
    description: 'ABDK offers blockchain consulting and crypto consulting services, providing expert advice on security-critical decisions, architecture, and protocols. We offer hourly rates and 24/7 Telegram support for quick crypto research and consultancy.',
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
