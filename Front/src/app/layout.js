import SocialButton from "../../components/Buttons/SocialButton"
import NavMobileButton from "../../components/Buttons/NavMobileButton"
import Home from "./Images/logo_home.png"
import Gallery from "./Images/logo_gallery.png"
import Contact from "./Images/logo_contact.png"
import IllusionSeedLogo from "./Images/Logo.png"
import TikTok from "./Images/logo_tiktok.png"
import Instagram from "./Images/logo_instagram.png"
import Threads from "./Images/logo_threads.png"
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
      
        <header className="menu-container">
          <nav className="menu-nav">
            <ul className="menu-nav-container">
              {NavMobileButton(Home,"/Home")}
              {NavMobileButton(IllusionSeedLogo,"/About")}
              {NavMobileButton(Gallery,"/Gallery")}
              {NavMobileButton(Contact,"/Contact")}
            </ul>
          </nav>
        </header>

      {children}
      
      <footer>
        <p className="footer-IllusionSeed-title">IllusionSeed</p>
        <ul className="footer-social-button-list">
          {SocialButton(TikTok,"https://www.tiktok.com/@illusionseed","Tiktok logo")}
          {SocialButton(Instagram,"https://www.instagram.com/illusion__seed/?hl=fr")}
          {SocialButton(Threads,"https://www.threads.net/@illusion__seed")}
        </ul>
        <nav className="footer-nav">
          <ul className="footer-nav-sitemap">
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
