"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { ContextProvider } from "@/contextApi";

const inter = Inter({ subsets: ["latin"] });
const getLibrary = async (provider) => {
  return new Web3Provider(provider);
};
export default function RootLayout({ children }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ContextProvider>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </ContextProvider>
    </Web3ReactProvider>
  );
}
