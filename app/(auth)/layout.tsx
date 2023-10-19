import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from 'next/font/google'
import '../globals.css'

export const metadata = {
    title : 'Notesy',
    description : 'A next js Application'
}
const interFont = Inter({subsets : ["latin"]})

export default function RootLayout(
    { children } : 
    { children : React.ReactNode} 
){
    return( 
        <ClerkProvider>
            <html lang='en'>
                <body className={`${interFont.className} bg-dark-1`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}