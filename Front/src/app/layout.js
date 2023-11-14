import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IllusionSeed',
  description: 'IllusionSeed\'s website, drawing, portrait, pointillism art, art.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <nav>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About IllusionSeed</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

      {children}
      
      <footer>
        <p>IllusionSeed</p>
        <ul>
          <li><image src="" alt="Tik-tok logo"><a href=""></a></image></li>
          <li><image src="" alt="Instagram logo"><a href=""></a></image></li>
        </ul>
        <nav>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About IllusionSeed</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/sitemap">Sitemap</a></li>
          </ul>
        </nav>
      </footer>
      
      </body>
    </html>
  )
}
