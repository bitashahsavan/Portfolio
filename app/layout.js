import { Outfit, Ovo } from 'next/font/google';
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400" , "500" ,"600"]

});

const ovo = Ovo({
  subsets: ["latin"],
    weight: ["400"]
});

export const metadata = {
  title: "Bita.Sh.dev",
  description: "bita shahsavan developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth dark'>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darktheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
