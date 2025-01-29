import { Orbitron } from 'next/font/google';
import "./globals.css";

const orbitron = Orbitron({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap'
});

export const metadata = {
  title: "Faça Digital",
  description: "Sua marca no mundo digital começa aqui!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${orbitron.variable} antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
