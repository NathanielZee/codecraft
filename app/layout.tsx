import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CodeCraft – Build Modern Apps & Businesses',
  description: 'CodeCraft helps you master modern web development, AI-powered coding, and business building. Learn Next.js, React, Stripe, and launch profitable projects. Join 10,000+ developers transforming their careers.',
  generator: 'CodeCraft',
  keywords: [
    'CodeCraft',
    'web development',
    'Next.js',
    'React',
    'Stripe',
    'AI coding',
    'business',
    'SaaS',
    'developer course',
    'learn to code',
    'financial freedom',
    'modern apps',
    'vibe coding',
    'Efezino',
    'online business',
    'software',
    'startup',
    'entrepreneur',
    'ebook',
    'digital product',
    'success stories',
  ],
  openGraph: {
    title: 'CodeCraft – Build Modern Apps & Businesses',
    description: 'Master modern web development, AI-powered coding, and business building. Learn Next.js, React, Stripe, and launch profitable projects.',
    url: 'https://codecraft.com',
    siteName: 'CodeCraft',
    images: [
      {
        url: '/placeholder-logo.png',
        width: 1200,
        height: 630,
        alt: 'CodeCraft Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeCraft – Build Modern Apps & Businesses',
    description: 'Master modern web development, AI-powered coding, and business building. Learn Next.js, React, Stripe, and launch profitable projects.',
    site: '@codecraft',
    creator: '@codecraft',
    images: ['/placeholder-logo.png'],
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
        <link rel="icon" type="image/x-icon" href="/favicon_io (1)/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io (1)/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io (1)/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io (1)/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon_io (1)/site.webmanifest" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon_io (1)/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon_io (1)/android-chrome-512x512.png" />
        <meta name="theme-color" content="#18181b" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
