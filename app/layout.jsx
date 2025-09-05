import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackgroud";
import Navbar from "@/components/main/Navbar";
import SuccessModal from "@/components/main/SuccessModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>Kumthon Portfolio</title>
        <meta name="description" content="This is my custom page" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
