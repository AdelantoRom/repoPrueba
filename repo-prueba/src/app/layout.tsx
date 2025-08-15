import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import NavbarPrueba from "@/components/Navbar/Navbar";
import "./globals.css";

const albertSans = Albert_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-albert-sans',
})

export const metadata: Metadata = {
  title: "Soluciones Digitales de Negocios para Empresas.",
  description: "Impulsamos tu empresa en el universo digital con estrategias de Marketing, Data e IA, 100% personalizadas.",
  icons: {
    icon: "/isotipo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${albertSans.variable} antialiased`}
      >
        <NavbarPrueba />
        {children}

      </body>
    </html>
  );
}
