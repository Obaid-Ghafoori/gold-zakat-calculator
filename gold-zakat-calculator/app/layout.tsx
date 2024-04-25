import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zakat Calculator - Easily Calculate Zakat on Gold | Islamic Shariah Compliant",
  description: "The Zakat Calculator app simplifies the process of calculating Zakat on gold, ensuring Islamic Shariah compliance with ease. Millions of Muslims worldwide struggle with the complexities of determining Zakat payments, often resulting in inaccuracies. Developed under the supervision of Shaikh Dr. Mahmoud Safi, this app provides a user-friendly solution to accurately calculate Zakat on gold. With the Zakat Calculator app, users can effortlessly input the weight (in grams) and purity (in karats) of their gold holdings. The app then computes the Zakat payable based on these values, following the Islamic guidelines that dictate a Zakat rate of 2.5% on the total pure gold amount. By offering a seamless and intuitive interface, the Zakat Calculator app empowers users to fulfill their religious obligation accurately. Whether you're an individual or a family managing gold assets, this app ensures precision and peace of mind in Zakat calculations. Use the Zakat Calculator app now and streamline your Zakat payments while adhering to Islamic principles. With its robust functionality and user-centric design, this app is the ultimate tool for accurate and Shariah-compliant Zakat calculations on gold.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="corporate">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
