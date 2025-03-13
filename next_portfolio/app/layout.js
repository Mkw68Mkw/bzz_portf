import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kevin Kaize Wu Portfolio",
  description: "Schülerportfolio - Full-Stack Entwicklung & Webdesign",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <header className="border-b">
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold hover:text-gray-600 transition">
              Kevin Kaize Wu
            </Link>
            <div className="flex gap-6">
              <Link href="/#projects" className="hover:text-gray-600 transition">
                Projekte
              </Link>
              <Link href="/#about" className="hover:text-gray-600 transition">
                Über mich
              </Link>
              <Link href="/#contact" className="hover:text-gray-600 transition">
                Kontakt
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t mt-20 py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
            <div className="flex justify-center gap-6 mb-4">
              <Link href="/impressum" className="hover:text-gray-800 transition">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-gray-800 transition">
                Datenschutz
              </Link>
            </div>
            <p>&copy; {new Date().getFullYear()} Kevin Kaize Wu. Alle Rechte vorbehalten.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
