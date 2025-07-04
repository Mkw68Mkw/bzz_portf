import Link from "next/link";
import { Geist, Geist_Mono, Gluten } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gluten = Gluten({
  variable: "--font-gluten",
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
      <body className={`${geistSans.variable} ${geistMono.variable} ${gluten.variable} antialiased flex flex-col min-h-screen`}>
        <header className="sticky top-0 bg-background/80 backdrop-blur-md z-50 border-b">
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/" className="relative group">
              <span className="text-xl font-bold">Kevin Kaize Wu</span>
              <div className="absolute -bottom-1 h-[2px] w-0 group-hover:w-full bg-foreground transition-all duration-300" />
            </Link>
            
            <div className="flex gap-8 items-center">
              {['Projekte', 'Über mich', 'Kontakt'].map((item) => (
                <Link 
                  key={item}
                  href={item === 'Kontakt' ? 'mailto:kevinkaizewu@gmail.com' : `/#${item.toLowerCase().replace(' ', '-')}`}
                  className="hover:underline underline-offset-4 decoration-1"
                >
                  {item}
                </Link>
              ))}
              
              {/* GitHub Icon mit Animation */}
              <a
                href="https://github.com/Mkw68Mkw"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 hover: rounded-full transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="group-hover:scale-110 transition-transform duration-300 group-active:scale-95"
                >
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                  />
                </svg>
              </a>
            </div>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-[var(--background)] border-t border-gray-100 mt-20 py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-[var(--foreground)] text-opacity-80">
            <div className="flex justify-center gap-6 mb-4">
              <Link href="/impressum" className="hover:text-opacity-100 transition-[text-opacity]">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-opacity-100 transition-[text-opacity]">
                Datenschutz
              </Link>
            </div>
            <p className="text-[var(--foreground)] text-opacity-60">
              &copy; {new Date().getFullYear()} Kevin Kaize Wu. Alle Rechte vorbehalten.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
