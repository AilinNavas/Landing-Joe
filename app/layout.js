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
      <head>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async> </script>
      </head>
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
