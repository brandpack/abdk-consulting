import '@/styles/index.scss'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
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
      <GoogleAnalytics gaId="AW-16482539669" />
    </html>
  )
}
