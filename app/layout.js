import { Nunito_Sans } from "next/font/google";
import "./globals.css";


const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Dental marketing for revenue not vanity",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
