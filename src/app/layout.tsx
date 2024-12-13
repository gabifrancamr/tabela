import './globals.css'

import type { Metadata } from 'next'

import { ColorModeButton } from '@/components/ui/color-mode'
import { Provider } from '@/components/ui/provider'

export const metadata: Metadata = {
  title: 'Tabela',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="pt-br">
      <body className="layout">
        <Provider>
          <ColorModeButton />
          {children}
        </Provider>
      </body>
    </html>
  )
}
