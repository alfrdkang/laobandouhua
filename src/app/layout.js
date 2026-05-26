import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOSInit";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "正宗老伴 Authentic Lao Ban | Premium Soybean Desserts Singapore",
  description:
    "Since 1978, Lao Ban has been dedicated to crafting traditional Chinese desserts with silky smooth texture. Find your nearest outlet across our islandwide locations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className="flex flex-col min-h-screen antialiased overflow-x-hidden w-full font-montserrat">
        <AOSInit />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
