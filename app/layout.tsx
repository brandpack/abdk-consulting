import '@/styles/index.scss'
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: 'ABDK Consulting - Your Guide in the World of Crypto',
  description: 'ABDK Consulting - Your Guide in the World of Crypto',
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
  },
  mainfest: '/site.webmainfest'
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
