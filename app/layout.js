import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "./ParticlesBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Team TOXY",
  description: "Team TOXY Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>

        {/* Background */}
        <ParticlesBackground />

        {/* Navbar */}
        <nav className="flex justify-between items-center px-10 py-5 border-b border-gray-800">

          <div className="flex items-center gap-3">
            <img src="/logo.png" className="w-10"/>
            <h1 className="text-xl font-bold text-orange-500">
              TEAM TOXY
            </h1>
          </div>

          <div className="flex gap-8 text-gray-300">
            <a href="/" className="hover:text-orange-500">Home</a>
            <a href="/about" className="hover:text-orange-500">About</a>
            <a href="/owners" className="hover:text-orange-500">Owners</a>
            <a href="/links" className="hover:text-orange-500">Links</a>
          </div>

        </nav>

        {children}

      </body>
    </html>
  );
}