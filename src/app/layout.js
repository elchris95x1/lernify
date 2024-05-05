import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lernify",
  description: "AI Generated earnig Materials From Video",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gradient-to-b from-bg-gradient-from to-bg-gradient-to min-h-screen text-white"}>
        {children}
      </body>
    </html>
  );
}
