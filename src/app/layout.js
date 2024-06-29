'user client'
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Shared/Navbar";
import PageTransition from "@/Components/PageTransition";
import StairTransition from "@/Components/StairTransition";
import Footer from "@/Components/Footer";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"],weight:['100',"200","300","400","500","600","700","800"] });

export const metadata = {
  title: "mydul",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  >
      <body className={jetbrainsMono.className} >
      <Navbar/>
      <StairTransition></StairTransition>
      <PageTransition>
      {children}
      </PageTransition>
      <Footer></Footer>
      </body>
    </html>
  );
}
