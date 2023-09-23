import '@/styles/globals.css'


export const metadata = {
  title: 'getLinked',
  description: 'the getLinked hackathon challenge',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className=''>
        {children}
      </body>
    </html>
  )
}
