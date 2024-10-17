import '@/styles/index.scss'
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'ABDK: Crypto Security',
    template: 'ABDK: %s',
  },
  description: 'ABDK Consulting offers crypto security solutions through smart contract audits, blockchain research, and consultancy services that help our clients protect billion-value assets.',
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
