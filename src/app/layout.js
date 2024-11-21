import { Open_Sans, Poppins } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'], // Añadimos el peso 300 (light)
  variable: '--font-open-sans',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '700'], // Añadimos el peso 300 (light)
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: "HQ+ Arquitectos",
  description: "El Vivero",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${poppins.variable} font-poppins font-light`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
