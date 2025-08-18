import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aaditech Solution - Transforming Ideas into Digital Reality",
  description:
    "Innovative tech solutions and learning programs. Web development, data analysis, mobile apps, and more.",
  generator: "",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'><circle cx='25' cy='25' r='23' fill='%2300b67a' fillOpacity='0.1'/><rect x='18' y='18' width='14' height='14' rx='2' stroke='%2300b67a' strokeWidth='2' fill='none'/><circle cx='25' cy='25' r='2' fill='%2300b67a'/></svg>",
        type: "image/svg+xml",
      },
    ],
    shortcut: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'><circle cx='25' cy='25' r='23' fill='%2300b67a'/><rect x='18' y='18' width='14' height='14' rx='2' stroke='white' strokeWidth='2' fill='none'/><circle cx='25' cy='25' r='2' fill='white'/></svg>",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XH1BXE2Y8C" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XH1BXE2Y8C');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
