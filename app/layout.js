import HeadComp from './head';
import Head from 'next/head';
import './globals.css'
 
export default function RootLayout({ children }) {
 return (
    <html>
        <Head>
            <HeadComp />
        </Head>
        <body className='bg-magnolia'>
            {children}
        </body>
    </html>
  )
}
