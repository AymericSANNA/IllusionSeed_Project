
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: "IllusionSeed",
  description:
    "IllusionSeed's website, drawing, portrait, pointillism art, art.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Header />

        {children}

        <Footer />

        
      </body>
    </html>
  );
}
