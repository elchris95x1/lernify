import { Inter } from "next/font/google";
import "./globals.css";
import SparklesIcon from "../components/SparklesIcon";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lernify",
  description: "AI Generated earnig Materials From Video",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gradient-to-b from-bg-gradient-from to-bg-gradient-to min-h-screen text-white"}>
        <main className="p-4 max-w-2x1 mx-auto">
        <header className="flex justify-between mb-8">
        <a href="" className="flex gap-1">
          <SparklesIcon/>
          <span>Lernify</span>
        </a>
        <nav className="flex items-center gap-2 sm:gap-6 text-white/80 text-sm sm:text-bas">
              <Link href="/">Home</Link>
              <Link href="/pricing">Pricing</Link>
              <a href="mailto:christian.lara@ibm.com">Contact</a>
            </nav>
      </header>
          {children}
        </main>
      </body>
    </html>
  );
}
