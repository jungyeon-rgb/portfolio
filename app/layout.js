// pages/_app.js
import { SessionProvider } from "next-auth/react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "김정연",
    description: "Generated by jungyeon",
}

export default function RootLayout({ children, pageProps: { session, ...pageProps } }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <SessionProvider session={session}>{children}</SessionProvider>
            </body>
        </html>
    )
}
