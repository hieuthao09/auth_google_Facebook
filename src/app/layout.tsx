"use client";

import 'tailwindcss/tailwind.css'
import Appbar from "../app/component/Appbar";
import Providers from "../app/component/Providers";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Providers>
          <Appbar />
          {children}
        </Providers>
      </body>
      
    </html>
    
  );
}