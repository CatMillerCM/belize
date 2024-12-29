import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata = {
  title: "",
  description: "",
  icons: {
    icon: '/favicon.ico'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
      <GoogleAnalytics gaId="G-W72S4DM98G" />
    </html>
  );
};