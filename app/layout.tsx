import StaticHeader from '@/components/common/StaticHeader/StaticHeader';
import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';
import '@/styles/index.scss';

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
    </html>
  )
}
